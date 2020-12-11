'use strict'
 
const pool = require('../src/database');
 
var controller = {

    create_contact :async(req,res)=>{
        const  bodyname  = req.body.name;
        const  bodyemail  = req.body.email;
        const  bodyphone  = req.body.phone;
        const text = "INSERT INTO contacts (name,email,phone) VALUES ($1,$2,$3)";
        const values = [bodyname,bodyemail,bodyphone];
        const response = await pool.query(text,values);
        return res.status(200).send(
            {
                status: 'ok',
                body: response.rows[0]
            }
         )
    },

    delete_contact :async(req,res)=>{
        const  bodyid  = req.params.id; 
        const text = " DELETE FROM contacts WHERE idcontacts=$1";
        const values = [bodyid];
        const response = await pool.query(text,values);
        res.status(200).send(response.rows[0]);
    },
    
    update_contact :async(req,res)=>{
        const  bodyid  = req.body.id; 
        const  bodyname  = req.body.name;
        const  bodyemail  = req.body.email;
        const  bodyphone  = req.body.phone;
        const text = "UPDATE contacts SET name = $1, email = $2, phone = $3 WHERE idcontacts=$4 ";
        const values = [bodyname,bodyemail,bodyphone,bodyid];
        const response = await pool.query(text,values);
        res.status(200).send(response.rows[0]);
    },

    view_contact :async(req,res)=>{
        //const  bodyid  = req.body.id; 
        const bodyid = req.params.id; 
        const text = " SELECT * FROM contacts WHERE idcontacts=$1";
        const values = [bodyid];
        const response = await pool.query(text,values);
         
        return res.status(200).send({
            status: 'ok',
            body: response.rows[0]
        });
        
    },

    view_all_contact :async(req,res)=>{ 
        const text = "SELECT * FROM contacts"; 
        const response = await pool.query(text); 
        return res.status(200).send({
            status: 'ok',
            body: response.rows
        });
    }

}

module.exports = controller;