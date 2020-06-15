const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    full_name: String,
    email: String,
    subject: String,
    message: String
},
{collection: "contacts",
timestamps: {createdAt: "created_at", updatedAt: "updated_at"},
toObject: {virtuals: true},
toJson: {virtuals:true}
}
);




module.exports = mongoose.model("Contact", Schema);