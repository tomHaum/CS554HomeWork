
var express = require('express');
var router = express.Router();
var data = require('../data');

const redisConnection = require("../../shared/redis-connection");
const nrpSender = require("../../shared/nrp-sender-shim");

router.get('/people/:id', async function (req, res, next) {
    try{
        let person = await nrpSender.sendMessage({
            redis: redisConnection,
            eventName: "worker",
            data: {
              id: req.params.id,
              request: "get"
            },
            expectsResponse: true
          });
        res.json(person);
    }catch (err){
        if(err.message.startsWith("Person with id")){
            res.status(404).json({error: err.message})
        }else{
            res.status(500).json({error: 'unknown internal server error', err: err.message});
        }
    }
});

router.post('/people/', async function (req, res, next) {
    try{
        let person = await nrpSender.sendMessage({
            redis: redisConnection,
            eventName: "worker",
            data: {
              person: req.body,
              request: "create"
            },
            expectsResponse: true
          });
        res.json(person);
    }catch (err){
        if(err.message.startsWith("Incomplete person")){
            res.status(400).json({error: err.message})
        }else{
            res.status(500).json({error: 'unknown internal server error', err: err.message});
        }
    }
});


router.delete('/people/:id', async function (req, res, next) {
    try{
        let person = await nrpSender.sendMessage({
            redis: redisConnection,
            eventName: "worker",
            data: {
              id: req.params.id,
              request: "delete"
            },
            expectsResponse: true
          });
        res.json({message: "successful delete", person: person});
    }catch (err){
        if(err.message.startsWith("Person with id")){
            res.status(404).json({error: err.message})
        }else{
            res.status(500).json({error: 'unknown internal server error', err: err.message});
        }
    }
});

router.put('/people/:id', async function (req, res, next) {
    try{
        let person = await nrpSender.sendMessage({
            redis: redisConnection,
            eventName: "worker",
            data: {
              id: req.params.id,
              person: req.body,
              request: "update"
            },
            expectsResponse: true
          });
        res.json(person);
    }catch (err){
        if(err.message.startsWith("Invalid person update")){
            res.status(400).json({error: err.message})
        }else if(err.message.startsWith("Person with id")){
            res.status(404).json({error: err.message})
        }else{
            res.status(500).json({error: 'unknown internal server error', err: err.message});
        }
    }
});


module.exports = router;
