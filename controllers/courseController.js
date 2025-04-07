const {Course} = require('../models')

module.exports.viewAll = async function (req, res) {
    const courses = await Course.findAll();
    res.render('course/view_all', {courses});
}

//profile

//render add form

//add

//render edit form

//update

//delete