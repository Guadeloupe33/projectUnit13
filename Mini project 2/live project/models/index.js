const Traveller =require('./Traveller');
const Trip = require ('./Trip');
const Location = require ('/Location');

Traveller.belongsToMany(Location,  {
    through: {
        model: Trip,
        unique: false
    },
    as 'planned_trips'
});

Location.belongsToMany(Traveller, {
    through: {
        model:false,
        unique:false 
    },
    as:'location_travellers' 
});
module.exports= { Traveller,Location,Trip};

