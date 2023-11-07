const model = require('../models/model');

// get categories
// post http://localhost:8080/api/categories
async function create_categories(req, res) {
    const Create = new model.Categories({
        type:"Food",
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

    let filter = await data.map(v=> Object.assign({}, {type: v.type, color: v.color}));
    
    return res.json(filter);
}

async function create_transaction(req, res) {
    if(!req.body)
        return res.status(400).json("Post HTTP Data not Provided");

    let {name, type, amount} = req.body;

    const create = await new model.Transaction({
        name,
        type,
        amount,
        date:new Date()
    });

    res.send(create);

    create.save(function(err){
        if(!err)
            return res.json(create);

        return res.status(400).json({message: `Error while creating transaction ${err}`})
    })

}

module.exports = {
    create_categories,
    get_categories,
    create_transaction
}