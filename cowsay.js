const cowsay= require("cowsay");
const Quote = require("inspirational-quotes")
const TEXT=Quote.getQuote().text
console.log(
    cowsay.say({
        text:TEXT,
        e:"E",
        T:"U"
    })
);