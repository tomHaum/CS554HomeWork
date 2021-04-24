const redisConnection = require("../shared/redis-connection");
const config = require('../configuration');
const fetch = require("node-fetch");
const people = require("./data");

async function pullData(){
    var resp = await fetch(config.dataUrl);
    var json = await resp.json();
    people.populatePeople(json);
    return true;
    // people.populatePeople(require("./data/local"));
    // return true;
}

pullData().then(() =>{
    redisConnection.on("worker:request:*", (message, channel) => {
        let requestId = message.requestId;
        let eventName = message.eventName;
        let requestType = message.data.request;
        
        let successEventName = `${eventName}:success:${requestId}`;
        let failedEventName = `${eventName}:failed:${requestId}`;
        
        let data, err = undefined;

        switch(requestType){
            case "get":
                try{
                    let resp = people.getPerson(+message.data.id);
                    data = resp;
                }catch(error){
                    err = error;
                }
                break;
            case "update":
                try{
                    if(message.data.id === undefined)
                        throw new Error("Invalid person update: No ID provided");
                    if(!message.data.person || (typeof message.data.person == "object" && Object.keys(message.data.person).length == 0))
                        throw new Error("Invalid person update: no person provided");
                    let resp = people.updatePerson(+message.data.id, message.data.person);
                    data = resp;
                }catch(error){
                    err = error;
                }
                break;
            case "delete":
                try{
                    let resp = people.deletePerson(+message.data.id);
                    data = resp;
                }catch(error){
                    err = error;
                }
                break;
            case "create":
                try{
                    let resp = people.createPerson(message.data.person);
                    data = resp;
                }catch(error){
                    err = error;
                }
                break;
            default:
                err = new Error("Unknown request type: " + requestType);
        }
        if(err !== undefined){
            redisConnection.emit(failedEventName, {
                requestId: requestId,
                data: {
                    message: err.message
                },
                eventName: eventName
            })
        }else{
            redisConnection.emit(successEventName, {
                requestId: requestId,
                data: data,
                eventName: eventName
            })
        }
      });
      console.log("Worker is waiting");
    });

