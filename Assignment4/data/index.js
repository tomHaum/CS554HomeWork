const config = require('../configuration');
const cache = require('redis').createClient(config.redisPort);
const people = require("./people")
const util = require('util');
const lpushAsync = util.promisify(cache.lpush).bind(cache);
const lrangeAsync = util.promisify(cache.lrange).bind(cache);
const setAsync = util.promisify(cache.set).bind(cache);
const getAsync = util.promisify(cache.get).bind(cache);


async function getRecentPeople(maxNumToReturn) {
    let history = await lrangeAsync('history', 0, maxNumToReturn - 1)
    history = history.map((x) => getAsync(+x));
    return await Promise.all(history);
}



async function getPerson(id) {
    let person = await getAsync(id);

    if (person === null) {
        person = await people.getPersonById(id)
       
        let historyPush =  lpushAsync('history', id);
        let cacheSet = setAsync(id, JSON.stringify(person));
        
        await historyPush;
        await cacheSet;

        return person;
    } else {
        await lpushAsync('history', id);
        return JSON.parse(person);
    }
}

module.exports = {
    getPerson, getRecentPeople
}