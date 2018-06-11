
const express = require("express");
const router = express.Router();
const products = require("../data");

router.get("/",(req,res)=>{
    res.locals.productLinks = products.map((x) => {
        return {id:x.id,name: x.name};
    });

    res.render("main", {products: products});
});

function configureRoutes(app){
    app.use("/",router);
}

module.exports = configureRoutes