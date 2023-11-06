const model = require('../models/model');

// get categories
// post http://localhost:8080/api/categories
async function create_categories(req, res) {
    const Create = new model.Categories({
        type:"Transportation",
        color:"#1F3B5C"
    })

    await Create.save(function(err){
        if(!err)
            return res.json(Create);

        return res.status(400).json({message: `Error while creating categories ${err}`});
    });
}

async function get_categories(req, res) {
    let data = await model.Categories.find({})

    let filter = await data.map(v=> Object.assign({}, {type: v.type, color:v.color}));
    return res.json(filter);
}

module.exports = {
    create_categories,
    get_categories
}