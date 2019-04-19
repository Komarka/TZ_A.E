let mongoose = require('mongoose');

//For locking concurrent writing
let updateIfCurrentPlugin = require('mongoose-update-if-current').updateIfCurrentPlugin;

module.exports = (URI) => {


    mongoose.connect(URI, {
        useNewUrlParser: true
    });

    mongoose.connection.on('connected', function (err) {
        mongoose.plugin(updateIfCurrentPlugin);
    });


    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            process.exit(0);
        });
    });


}