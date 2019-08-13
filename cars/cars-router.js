const express = require('express');
const knex = require('knex');
const db = require('./data');

const router = express.Router();

router.get('/',async(req,res) => {
    try {
        const cars = await db('cars');
        res.jon(cars);

    }catch (err) {
        res.status(500).json({messsage: 'Failed to retrieve cars' });
    }
});

router.get('/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const cars = await db ('cars').where({id});

        res.json(cars);
    }catch(err){
        res.status(500).json({message: 'failed to find car.'})
    }
})




