var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    telegram_id: { type: Number, required: true, unique: true },
    username: { type: String },
    first_name: { type: String },
    last_name: { type: String },
    language_code: { type: String },
});

var User = mongoose.model("User", UserSchema);

module.exports = User;
