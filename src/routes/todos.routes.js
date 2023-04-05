const express = require("express")
const { request } = require("http")
const todosRoutes = express.Router()
const alltodos = [{name: "todo01", status: false}]

todosRoutes.post("/todos", (request, response)=>{
    const {name} = request.body
    alltodos.push({name, status: false})
    return response.status(201).json(alltodos)
})

todosRoutes.get("/todos", (request, response)=>{
    return response.status(200).json(alltodos)
})

module.exports = todosRoutes