const favouriteService = require("../services/favourite.service");

class FavouriteController {
    async getAll(req, res, next){
        try {
            const users = await favouriteService.getAll();
            return res.json(users)
        } catch (e) {
            next(e);
        }
    }
    async toggle(req, res, next){
        try {
            const url = req.query.url;
            const users = await favouriteService.toggle(url);
            return res.json(users)
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new FavouriteController();