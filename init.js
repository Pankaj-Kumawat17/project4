const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(() => {
    console.log("connection succesful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
   
    {
        from:"neha",
        to:"priya",
        msg:"hi",
        created_at: new Date(),
    },
    {
        from:"suman",
        to:"meenakshi",
        msg:"come to library",
        created_at: new Date(),
    },
    {
        from:"ravindra",
        to:"pankaj",
        msg:"shaadi kab h?",
        created_at: new Date(),
    },
    {
        from:"vipin",
        to:"ganesh",
        msg:"or batao",
        created_at: new Date(),
    },
    {
        from:"vimal",
        to:"priyashu",
        msg:"or beta",
        created_at: new Date(),
    },
]

Chat.insertMany(allChats);

