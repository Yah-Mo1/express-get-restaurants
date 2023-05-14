const express = require("express");
const Restaurant = require("../models");
const { post } = require("../src/app");
const router = express.Router();




router.get("/", async (req, res) => {
    try {
    const restaurants = await Restaurant.findAll();
    res.json(restaurants)
    }
    catch(err) {
        next(err)
    }

})


router.get("/:id",async(req, res) => {
    const id = req.params.id;
    const restaurant = await Restaurant.findByPk(id);
    res.json(restaurant)
})


router.post("/", async(req, res) => {
    const newRestaurant = await Restaurant.create(req.body);
    res.json(newRestaurant);


})

router.put("/:id", async(req, res) => {
    const updatedRestaurant = await Restaurant.update(req.body, {where: {id: req.params.id}})
    res.json(updatedRestaurant);


})

router.delete("/:id", async(req, res) => {
    const deletedRestaurant = await Restaurant.destroy({where: {id: req.params.id}});
    res.json(deletedRestaurant);


})



module.exports = router;