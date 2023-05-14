// const Restaurant = require("../../models");
const request = require("supertest");
const app = require("./src/app")
const db = require("./db/connection");

describe("testing for crud Method", () => {

    it("testing for GET /restaurants/:id",async() => {

        const response = await request(app).get(`/restaurants/1`)
        expect(response.body.id).toBe(1);

    })

    it("testing for put /restaurants/:id",async() => {
        await request(app).put(`/restaurants/1`).send({"name": "Dominos"});
        const getResponse = await request(app).get("/restaurants/1")
        expect(getResponse.body.name).toEqual("Dominos")




    })
})



describe("testing for post and delete",async () => {
    it("testing for post /restaurants/",async() => {
        await request(app).post(`/restaurants/`).send({"name": "kfc", "location": "london", "cuisine": "FastFood"});
        const response = await request(app).get("/restaurants")
        expect(response.body.length).toEqual(4);




    })

    it("testing for delete /restaurants/:id",async() => {
         await request(app).delete("/restaurants/2");
        const response = await request(app).get("/restaurants/2")
        expect(response.body).toBeNull();
    })



    it("testing for GET /restaurants", async() => {
        const response = await request(app).get("/restaurants")
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);    
        expect(response.body.length).toEqual(3);
        expect(response.body[0]).toHaveProperty("id");
        expect(response.body[0]).toHaveProperty("cuisine")
        expect(response.body[0]).toHaveProperty("location")
    })

})
    




