const {Model, DataTypes }= require ('sequilize');
const sequelize = require ('../config/connection');

class Traveller extends Model{}
Traveller.init (
    {

id: {
    type: DataTypes.INTEGER,
    allowNull:false,
    rimaryKey:true,
    autoIncrement: true
},

name: {
    type:DataTypes.STRING,
    allowNull:false
},
email:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
        isEmail:true
    }
}
 },
 {
    sequelize,
    timestamps:false,
    freezeTableName:true,
    underscored:true,
    modelName:'traveller'
 }

)