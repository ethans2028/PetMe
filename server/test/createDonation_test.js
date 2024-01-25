//import the User model 
const Donation = require('../Models/donationModel');  
const assert = require('assert'); 

// test if it creates a new donation properly
// var mockDonation = ; 
describe('Creating Donation in MongoDB', () => { 
    it('Creates a New Donation', (done) => { 
        const newDonation = new Donation({ name: 'Shriyam' }); 
        newDonation.save() // returns a promise after some time 
            .then(() => { 
                //if the newDonation is saved in db and it is not new 
                assert(!newDonation.isNew); 
                done(); 
            }); 
    }); 
});