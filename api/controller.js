const NewsModel = require("./newsModel")

class NewsController {
    async getAllNews(req, res) {
        const data = await NewsModel.find({})
        res.json(data)
    }
    async getSingleNews(req, res) {
        const data = await NewsModel.findOne({ _id: req.params.newsId })
        res.json(data)
    }
    async pushNews(req, res) {
        const news = await NewsModel.create(req.body)
        res.json(news)
    }
    async editNews(req, res) {
        await NewsModel.findByIdAndUpdate(
            req.params.newsId, 
            req.body
        )
        res.json({ success: true })
    }
    async deleteNews(req, res) {
        await NewsModel.findByIdAndRemove(req.params.newsId)
        res.json({ success: true })
    }
}

module.exports = new NewsController()

