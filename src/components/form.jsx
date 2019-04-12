import React, { Component } from 'react';
import '../css/form.css';
import {showInput} from '../util/submit.js';

class Form extends Component {
    render() {
        return (
        <form id ="form">
        <div className ='form_div'>
	   
            <label className= "name">Name:</label>
              <input className="input_name" type="text" name="name" placeholder="Please enter your full name" required/><br /> <br/>
            
            <label className= "age">Age: </label>
   	            <input className="input_age" type="text" name="age" placeholder="Please enter your age" required/><br /> <br/>
            
             <label className= "gender">Gender:</label> <br/>
	            <input className="input_gender" type="radio" name="gender" value="Male" required /> Male <br />
	            <input className="input_gender" type="radio" name="gender" value="Female" required /> Female <br /><br/>

            <input className= "submit" type="submit" value="Submit" onClick = {showInput}/>

         </div>

         <aside className="result"> 
         <h4><p id="title"> </p></h4>
            <p id="result_name"> </p>
    	    <p id="result_age"> </p>
    	    <p id="result_gender"></p>
	    </aside>
        
         </form>

            );
        }
    }

export default Form;