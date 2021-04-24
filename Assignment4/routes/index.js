var express = require('express');
var router = express.Router();
var data = require('../data');


router.get('/people/history', async function (req, res, next) {
    let history = await data.getRecentPeople(20); 
    res.send(history.map((x) => JSON.parse(x)));
});

/* GET users listing. */
router.get('/people/:id', async function (req, res, next) {
    try{
        res.send(await data.getPerson(req.params.id));
    }catch(e){
        if(e.message === "Id not found"){
            res.status(404).send("person with id " + req.params.id + " not found")
        }else{
            res.send("error getting person's data with id " + req.params.id);
        }
    }
});


module.exports = router;
