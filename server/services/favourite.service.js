const FavouriteModel = require('../models/favourite.model')

class FavouriteService {
    async getAll() {
        const fv = await FavouriteModel.find();
        return fv;
    }
    async toggle(url) {
        const fv = await FavouriteModel.findOne({url});
        if(!fv){
            await FavouriteModel.create({url});
            let res = await FavouriteModel.find();
            return res;
        } else{
            await FavouriteModel.deleteOne({url});
            let res = await FavouriteModel.find();
            return res;
        }

    }

}

module.exports = new FavouriteService();
