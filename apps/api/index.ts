import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/plantoes_profisionais")

const User = mongoose.model("User", new mongoose.Schema({
    name: String,
    lastname: String,
    email: String,
    password: String
}));

const NewUser = new User({
    name: "Nicoly",
    lastname: "Dias",
    email: "nicolydias@yopmail.com",
    password: "123456"});

NewUser.save().then(() => console.log("User saved"));
