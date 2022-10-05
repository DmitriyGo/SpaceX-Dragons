const {Schema, model} = require('mongoose');

const FavouriteSchema = new Schema({
    url: {type: String, required: true},
})

module.exports = model('Favourite', FavouriteSchema);
