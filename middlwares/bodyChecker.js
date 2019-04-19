module.exports = (req, res, next) => {
    if (!req.body) {
        return res.status(400).send("Request body is missing");
    }

    next();
};