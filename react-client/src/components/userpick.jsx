import React from 'react';
import $ from 'jquery';
import {FormControl} from 'react-bootstrap'
import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
// var moment = require('moment');
class Appoinment extends React.Component{
	constructor(props){
		super(props);
		this.state={
			doctors:[],
			u:[],
			doct:'',
			monthes:["January","February","March","April","May","June","July","August","September","October","November","December"],
			month:'',
			day:'',
			d:'',
			hour:'',
		}
		this.handleChange=this.handleChange.bind(this);
		this.send=this.send.bind(this);
		this.handleTextChange=this.handleTextChange.bind(this);
		this.handleChange1=this.handleChange1.bind(this);
		//this.show=this.show.bind(this)
	}

	componentDidMount(){
		var that=this;
    	$.ajax({
    	type:'GET',
		dataType: "json",
 		url: '/doctor/retrieve',
 		success:function(data){
 			that.setState({
 				doctors:data
 			})
 		}
		});
	}

	handleChange1(e){
		this.setState({
			doct:e.target.value
		})
	}

	handleChange(e){
		this.setState({
			month:e.target.value
		});
		var that=this;
		var y;
		var x=[];
		$.ajax({
			type:'get',
			url:'Doctor/retrieve',
			dataType: "json",
			success:function(data){
				for(var i=0;i<data.length;i++){
					if(data[i]._id===that.state.u){
					y=data[i].hoursOfWork;
					}	
				}
				for(var i=y;i<y+8;i++){
					x.push(i);
				}
				
				console.log('new doct',that.state.doct)
			}
		})
	}

	handleTextChange(e){
		this.setState({
			[e.target.name]:e.target.value
		});
	}


	

	send(){
		console.log('doctors data 0000',this.state.doct)
		var m31=[1,3,5,8,10];
		console.log("this.state.hour ",this.state.hour)
		if(this.state.hour<0 || this.state.hour>35){
			alert('invalid hour ')
		}
		console.log("this.state.month",typeof(this.state.day))
		if( this.state.month===8){
			console.log('asdasdasdksjadklasdaskdj;aslkdj;')
			if(this.state.day<1 || this.state.day>30){
				alert('wrong date');
			}
		}
		var today=new Date;
		var new_appoint=new Date;
		new_appoint.setMonth(this.state.month);
		new_appoint.setDate(this.state.day);
		new_appoint.setHours(this.state.hour);

		var h = new_appoint.getHours()

		if(new_appoint-today>0){


		var	obj={
				day:new_appoint,
				from:this.state.hour,
				//to:this.state.to,
				doctorId:this.state.doct,
				userId:'5afda34d8cd8f1090c6c4e16'
			}
			console.log(obj)
		$.ajax({
			type:'POST',
			url:'/app',
			data:obj,
			success:function(data){
				console.log('data ',data)
				
			},
			error:function(err){
				console.log('error ',err)
			}

		})
		}else{
			alert('pick a valid date')
		}
	}

	render(){
		var i=-1;
		return(
			<div>
			<h1>pick</h1>
				<select name='selector' onChange={this.handleChange1}>
					{this.state.doctors.map(function(item){
						return(
								<option value={item._id}>{item.fullName}</option>
							)
					})}
				</select>



				<select name='month' onChange={this.handleChange}>
				{this.state.monthes.map(function(item){
					i++
					return(
					<option value={i}>{item}</option>
						)
				})}
			</select>
			<input type='text' name='day' value={this.state.day} onChange={this.handleTextChange} placeholder='day' width='10'/>
			<input type='text' name='hour' value={this.state.hour} onChange={this.handleTextChange} placeholder='hour'/>			
			{}
			<button onClick={this.send}> send </button>



			</div>
			)
	}

}

export default Appoinment;

				// <form>
				// {this.state.doct.map(function(item){
				// 	var that=this;
				// 	return(
				// 		<h4>
				// 		<input type="radio" name="s" value={item} />
				// 		{item}
				// 		</h4>
				// 		)
				// })}
				// <button name='send' onClick={this.handleOptionChange} >send</button>
				// </form>


				// <select name='selector' onChange={this.handleChange}>
				// 	{this.state.doctors.map(function(item){
				// 		return(
				// 				<option value={item._id}>{item.fullName}</option>
				// 			)
				// 	})}
				// </select>
				// <input type='text' name='from' value={this.state.from} placeholder='from' onChange={this.textHandleChange}/>
				// <input type='text' name='to' value={this.state.to} placeholder='to' onChange={this.textHandleChange}/>
				// <input type='text' name='day' value={this.state.day} placeholder='day' onChange={this.textHandleChange}/>
				// <button onClick={this.send}>save</button>


				// <h1>{this.state.u}</h1>