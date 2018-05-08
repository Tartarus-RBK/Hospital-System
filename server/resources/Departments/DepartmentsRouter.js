var DepartmentRouter=require('express').Router();
var DepartmentController=require('./DepartmentsController');

DepartmentRouter.route('/')
.get(function(req,res){
	DepartmentController.retriveDepts(req,res);
})
.post(function(req,res){
	DepartmentController.createDept(req,res)
})



module.exports=DepartmentRouter;