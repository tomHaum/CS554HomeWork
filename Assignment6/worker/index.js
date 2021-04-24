const redisConnection = require("../shared/redis-connection");
const config = require("../configuration");
const people = require("./data");
const request = require("request-promise");
const imageRequest = require("request-promise").defaults({ encoding: null });

function imageResponseHandler(body, response, resolveWithFullResponse) {
  if (response.statusCode == 200) {
    data =
      "data:" +
      response.headers["content-type"] +
      ";base64," +
      new Buffer(body).toString("base64");
    return data;
  }
}

redisConnection.on("worker:request:*", async (message, channel) => {
  let requestId = message.requestId;
  let eventName = message.eventName;
  let requestType = message.data.request;

  let successEventName = `${eventName}:success:${requestId}`;
  let failedEventName = `${eventName}:failed:${requestId}`;

  let data = {},
    err = undefined;

  switch (requestType) {
    case "get":
      try {
        var response = await request.get(
          `https://pixabay.com/api/?key=${
            config.pixaBayApiKey
          }&q=${encodeURIComponent(message.data.query)}&per_page=3`
        );

        var body = JSON.parse(response);
        if (body.hits.length == 0) {
          data.noResults = true;
          break;
        }
        response = await imageRequest.get({
          uri: body.hits[0].webformatURL,
          transform: imageResponseHandler
        });

        data.image = response;
      } catch (error) {
        err = error;
      }
      break;
    default:
      err = new Error("Unknown request type: " + requestType);
  }
  if (err !== undefined) {
    console.log("emiting " + failedEventName);
    console.log(err);
    redisConnection.emit(failedEventName, {
      requestId: requestId,
      data: {
        message: err.message
      },
      eventName: eventName
    });
  } else {
    console.log("emiting " + successEventName);
    redisConnection.emit(successEventName, {
      requestId: requestId,
      data: data,
      eventName: eventName
    });
  }
});
console.log("Worker is waiting");
