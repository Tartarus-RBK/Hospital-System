var mongoose = require('mongoose');
//lab Result Schema 
var LabsResultSchema = mongoose.Schema({
  patientId:{
	type:mongoose.Schema.Types.ObjectId,
	ref:'Users'
  },
  labTechnicianId:{
	type:mongoose.Schema.Types.ObjectId,
	ref:'LabsTechncians'
  },
  medicalExaminationTime:{
	type:Date,
	default: Date.now
  },
  resultEntryTime:{
	type:Date,
	default: Date.now
  },
  imageOfResult:{
	type:String
  },
  description:{
	type:String
  }
});
var LabsResult = mongoose.model('LabsResult', LabsResultSchema);
module.exports = LabsResult;