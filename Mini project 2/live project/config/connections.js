const Sequelize = require('sequelize');
require ('dotenv').config ();

let sequilize;
(process.env.JAWSDB_url) {
    sequelize = new Sequelize(process.env.JAWSDB_url);

}
else {

    sequelize =new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,

        {
            host:'localhost'
            dialect:'mysql',
            port: 3001

        }
    );
}
modelue.exports = sequelize;