'use strict'

const express = require('express'); 
const SmsController = require('../controllers/sms');
const UserController = require('../controllers/user');
const ContactsController = require('../controllers/contacts');

const router = express.Router();

router.get('/',SmsController.home); 
router.post('/send-sms',SmsController.sendtext);
router.get('/test-call/:phone',SmsController.testingCall);
router.post('/webhook',SmsController.webhook);


//  router.post('/signup',UserController.signup);
    router.post('/login',UserController.login);


router.post('/create-contact',ContactsController.create_contact);
router.delete('/delete-contact/:id',ContactsController.delete_contact);
router.put('/update-contact',ContactsController.update_contact);
router.get('/view-contact/:id',ContactsController.view_contact);
router.get('/view-all-contacts',ContactsController.view_all_contact);





module.exports = router;
