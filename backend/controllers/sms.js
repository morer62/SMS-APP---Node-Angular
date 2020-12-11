'use strict'
 
const pool = require('../src/database');
const twilio = require('twilio');

var controller = {

    home :(req,res)=>{
        res.send(` Welcome back!!`)
    },

    testingCall:(req,res)=>{
        require("dotenv").config(); 
        const  clientPhone  = req.params.phone; 
        const accountSid = process.env.TWILIO_ACCOUNT_SID;
        const authToken = process.env.TWILIO_AUTH_TOKEN;
        const client = new twilio(accountSid,authToken);

        const urlXml = "https://sms.jonnymoreno.com/public/xml/1.xml";
        client.calls.create({
            url: urlXml,
            from: '+17865046940',
            to: clientPhone 
        })
        .then(
            client.messages.create({
                body: 'Thanks!! Answer the phone please',
                from: '+17865046940',
                to: clientPhone 
                })
        );
    },
     
     
    webhook:(req,res)=>{

        require("dotenv").config();
        const  bodyMessage  = req.body.Body;
        const  clientPhone  = req.body.From;

        const accountSid = process.env.TWILIO_ACCOUNT_SID;
        const authToken = process.env.TWILIO_AUTH_TOKEN;
        const client = new twilio(accountSid,authToken);

        if (bodyMessage=="1" || bodyMessage=="2" || bodyMessage=="3" || bodyMessage=="4") {

                const urlXml = "https://sms.jonnymoreno.com/public/xml/"+bodyMessage+".xml";
                client.calls.create({
                    url: urlXml,
                    from: '+17865046940',
                    to: clientPhone 
                })
                .then(
                    client.messages.create({
                        body: 'Thanks!! Answer the phone please',
                        from: '+17865046940',
                        to: clientPhone 
                     })
                );
        }

        else if (bodyMessage=="STOP" || bodyMessage=="Stop" || bodyMessage=="stop" ) {
            const newMessage = "You have successfully been unsuscribed. You will not receive any more messages from this number. Reply START to resubscribe";
            client.messages.create({
                body: newMessage,
                from: '+17865046940',
                to: clientPhone 
             })
        }

        else if (bodyMessage=="START" || bodyMessage=="Start" || bodyMessage=="start" ) {
            const newMessage = "You have successfully been re-subscribe to messages from this number!";
            client.messages.create({
                body: newMessage,
                from: '+17865046940',
                to: clientPhone 
             })
        }

        else {
            const newMessage = "What course would you like to listen to? \n\n - Text 1 for 'What is Personal Protective Equipment or PPE?' \n\n - Text 2 for 'Proper Removal of PPE'\n\n - Text 3 for 'Personal Protective Equipment in the Workplace'\n\n - Text 4 for 'What If? Questions from the Front Line'\n\n Text STOP to unsuscribe";
            client.messages.create({
                body: newMessage,
                from: '+17865046940',
                to: clientPhone 
             })
        }  
    },


    sendtext: async(req, res)=>{

        require("dotenv").config();
        const twilio = require('twilio');

        const  bodyMessage  = req.body.bodyMessage;
        const  phoneNumber  = req.body.phoneNumber;

        const text = "INSERT INTO sms (message,phone) VALUES ($1, $2);";
        const values = [bodyMessage,phoneNumber];
        const response = await pool.query(text,values);
        
        try {
            const accountSid = process.env.TWILIO_ACCOUNT_SID;
            const authToken = process.env.TWILIO_AUTH_TOKEN;
            const client = new twilio(accountSid,authToken);
            
            client.messages
            .create({
                body: bodyMessage,
                from: '+17865046940',
                to: phoneNumber
                // to: '+13213328937'
            })
            .then((message) => res.send(req.body));   
        } 
        catch(e) {
            console.log('Error:', e);
        }  
    }
};

module.exports = controller;