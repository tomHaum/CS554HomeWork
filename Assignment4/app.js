const util = require('util');
const config = require('./configuration');

//------redist-----
async function startRedis() {
    const RedisServer = require('redis-server');

    // Simply pass the port that you want a Redis server to listen on.
    const server = new RedisServer(config.redisPort);
    return util.promisify(server.open).bind(server)
}

//-----end redis---


//------express-------
async function startExpress() {
    var express = require('express');
    var path = require('path');

    var indexRouter = require('./routes/index');

    var app = express();

    app.use('/api', indexRouter)

    return util.promisify(app.listen).bind(app)(3000);
    app.listen(3000, () => {

    });
}

if (config.startNewRedisServer) {
    startRedis()
        .then(() => {
            console.log("We've now got a redis server!");
            console.log("Your routes will be running on http://localhost:" + config.redisPort);
            startExpress()
                .then(() => {
                    console.log("We've now got an express server!");
                    console.log("Your routes will be running on http://localhost:3000");
                })
                .catch((err) => {
                    console.error(err);
                    console.error("Could not start express server");
                });
        })
} else {
    console.log("using already running local redis server http://localhost:"+ config.redisPort);

    startExpress()
        .then(() => {
            console.log("We've now got an express server!");
            console.log("Your routes will be running on http://localhost:3000");
        })
        .catch((err) => {
            console.error(err);
            console.error("Could not start express server");
        });
}