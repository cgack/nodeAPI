var router = require('express').Router();
var Definition = require('../models/definition');

// get all defintions by a user
router.get('/', (req, res, next) => {
    Definition.find({owner: req.user._id}).then((definitions) => {
        res.json(definitions);
        next();
    });
});
// delete a definition
router.delete('/:id', (req, res) => {
    res.json({
        message: 'Success!',
        id: req.params.id
    });

    // Definition.findOne({ _id: req.params.id, owner: req.user})
    // .then((definition) => {
    //     definition.remove().then((definition) => {
    //         res.json({
    //             message: 'deleted!',
    //             definition: definition
    //         });
    //     });
    // });
});

// create a new definition 
// Call With params: definition {logType, desc}
router.post('/', (req, res) => {
    var def = new Definition({
        owner: req.user._id,
        logType: req.body.definition.logtype,
        desc: req.body.definition.desc
    });

    def.save().then((definition) => {
        ref.json({
            message: 'saved!',
            definition: definition
        });
    
    });
});

// // update an existing definition
// router.put('/:id', (req, res) => {
//     Definition.findOne({ _id: req.params.id, owner: req.user})
//     .then((definition) => {
//         definition.logType = req.body.definition.logtype
//         definition.desc = request.body.definition.desc

//         definition.save().then((definition) => {
//            res.json({
//                message: 'updated!',
//                definition: definition
//            });
//         });
//     });
// });



module.exports = router;
