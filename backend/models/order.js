const mongoose = require('mongoose');

const order = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "course",
    },
    status: {
        type: String,
        default: "Order Placed",
        enum: ["Order Placed", "Completed", "Cancelled"],
    },

}, 
{timestamps: true}
);
module.exports = mongoose.model("order", order);