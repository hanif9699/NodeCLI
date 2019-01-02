const mongoose = require('mongoose');
const config = require('./config');
const Customer = require('./models/user');

mongoose.connect(config.MongoDBURI, { useNewUrlParser: true });
const db = mongoose.connection;

const addcustomer = (customer) => {
    Customer.create(customer).then((customer) => {
        console.info('db is added');
        db.close();
    });
}

const findcustomer = (name) => {
    const search = new RegExp(name, 'i');
    Customer.find({ $or: [{ firstname: search }, { lastname: search }] }).then(customer => {
        console.info(customer);
        console.info(`${customer.length} matches`)
        db.close();
    });
}
const updatecustomer = (_id, customer) => {
    Customer.update({ _id }, customer).then(customer => {
        console.log('Customer Updated');
        db.close();
    });
}
const removecustomer = (_id) => {
    Customer.remove({ _id }).then(customer => {
        console.log('Customer removed');
        db.close();
    });
}
const listcustomer = () => {
    Customer.find().then(customer => {
        console.info(customer);
        console.info(`${customer.length} customers`);
        db.close();
    });
}

module.exports = {
    addcustomer,
    findcustomer,
    updatecustomer,
    removecustomer,
    listcustomer
};