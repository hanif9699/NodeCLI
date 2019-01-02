const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    }
});

const User = mongoose.model('cliuser', UserSchema);

module.exports = User;

