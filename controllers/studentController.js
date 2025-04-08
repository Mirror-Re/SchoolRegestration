const {Student} = require('../models');

//view all
module.exports.viewAll = async function (req, res) {
    const students = await Student.findAll();
    res.render('student/view_all', {students});
}

//profile
module.exports.viewProfile = async function (req, res) {
    const student = await Student.findByPk(req.params.id);
    res.render('student/profile', {student});
}

//render add

//add

//render edit
module.exports.renderEditForm = async function (req, res) {
    const student = await Student.findByPk(req.params.id);
    res.render('student/edit', {student});
}

//edit

//delete