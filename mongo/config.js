const { mongoose } = require("mongoose");


const mongoConnection = () => {
  const url =
    "mongodb+srv://sandeepsokle12:vA1CASdKoN9itVue@cluster0.rnprn3m.mongodb.net/?retryWrites=true&w=majority"
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB connection established!!");
    })
    .catch((err) => {
      console.log("Connection to DB failed");
      console.log(err.message);
    });
  
};

module.exports = { mongoConnection };
