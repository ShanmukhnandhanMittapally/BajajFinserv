const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true
    },
    ddmmyyyy: {
        type: String,
        required: true
    },
    college_email_id: {
        type: String,
        required: true
    },
    college_roll_number: {
        type: String,
        required: true
    },
    numbers: {
        type: [Number],
        required: true
    },
    alphabets: {
        type: [String],
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);
