const { connect, Schema, model } = require('mongoose');

require('dotenv-flow').config({node_env: process.env.NODE_ENV});

connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const clientsSchema = new Schema({
    "NOM": { type: Schema.Types.Mixed, required: true },
    "LOCALITE": String,
});

const Clients = model("clients", clientsSchema);

Clients.findOne({ AA: "Namur" }).exec().then(items => {
    console.log(items);
});
Clients.findOne({ NOM: { $regex: /^M/, $options: 'i'} }, { LOCALITE: true}).exec().then(items => {
    console.log(items);
}); // MERCIER