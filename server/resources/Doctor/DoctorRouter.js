var doctorRouter =require('express').Router();
var DoctorController = require('./DoctorController.js');
//retrieve doctors data
doctorRouter.route('/retrieve')
.get(function(req,res){
	DoctorController.retrieve(req,res);
})
//save Doctor to a database
doctorRouter.route('/create')
.post(function(req,res){
	DoctorController.create(req,res);
})
//update doctor
doctorRouter.route('/update')
.put(function(req,res){
	DoctorController.update(req,res);
})
//login Doctor
doctorRouter.route('/login')
.post(function(req,res){
	DoctorController.login(req,res);
})
//logout 
doctorRouter.route('/logout')
.get(function (req, res) {
	DoctorController.logout(req, res);
})
//check if doctor login
doctorRouter.route('/isLogin')
.get(function (req, res) {
	DoctorController.isLogin(req, res);
})
//get login doctor data
doctorRouter.route('/getOne')
.get(function (req, res) {
	DoctorController.retrieveOne(req, res);
})
doctorRouter.route('/test')
.get(function (req, res) {
	res.json(req.session);
})	
//get patient info by the userName
doctorRouter.route('/:userNamePatient')
.get(function(req,res){
	DoctorController.retrievePatient(req,res);
})
//Delete Doctor based on his username 
doctorRouter.route('/:userNameDoctor')
.delete(function(req,res){
	DoctorController.deleteOne(req,res);
})
doctorRouter.route('/t/:doctorId')
.get(function(req,res){
	DoctorController.retrieveDoctor(req,res);
})

module.exports = doctorRouter;