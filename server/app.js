const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
app.use(cors());
const dbURI = "mongodb+srv://admin:admin@cluster0.pjdtk.mongodb.net/express-demo?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(8000))
    .catch(e => console.log(e))

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));