module.exports = {
    async upload(req, res) {
        res.json({files: req.files});
    }
}