import express from 'express';

const route = express.Router();

route.post('/todos', (request, respose) => {
    console.log(request.body);
})


export default route;
