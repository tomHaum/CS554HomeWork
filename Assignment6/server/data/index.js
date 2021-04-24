const redisConnection = require("../../shared/redis-connection");
const nrpSender = require("../../shared/nrp-sender-shim");

async function imageSearch(query) {
  let result = await nrpSender.sendMessage({
    redis: redisConnection,
    eventName: "worker",
    data: {
      query: query,
      request: "get"
    },
    expectsResponse: true,
    timeout: 20000
  });
  return result;
}

module.exports = {
  imageSearch
};
