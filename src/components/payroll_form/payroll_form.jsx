import React, { useState,useEffect } from 'react';
import profile1 from '../../assets/profile-images/Ellipse -3.png';
import profile2 from '../../assets/profile-images/Ellipse -1.png';
import profile3 from '../../assets/profile-images/Ellipse -4.png';
import profile4 from '../../assets/profile-images/Ellipse -7.png';

import './payroll_form.scss';

import logo from '../../assets/images/logo.png'
import { useParams,Link,withRouter } from 'react-router';

const PayrollForm = (props) => {
    let initialValue  = {
        name:'',
        profileArray :[
            {url:"../../assets/profile-images/Ellipse-3.png"},
            {url:"../../assets/profile-images/Ellipse-1.png"},
            {url:"../../assets/profile-images/Ellipse-4.png"},
            {url:"../../assets/profile-images/Ellipse-7.png"}

        ],
        allDepartment:[
            'Hr','Sales','Finance','Engineer','Others'
        ],
        departMentValue:[],
        gender:'',
        salary:'',
        day:'1',
        month:'jan',
        year:'2020',
        startDate:'',
        notes:'',
        id: '',
        profileUrl:'',
        isUpdate:false,
        error :{
            department:'',
            name:'',
            gender:'',
            salary:'',
            profileUrl:'',
            startDate:''

        }


    } 

    const [formValue,setForm] =useState(initialValue);
    const changeValue = (event) => {
        setForm({...formValue,[event.target.name]: event.target.value})
    }

    const onCheckChange = (name) =>{
        let index = formValue.departMentValue.indexOf(name);
        let checkArray = [...formValue.departMentValue]
        if (index>-1)
            checkArray.splice(index,1)
        else 
            checkArray.push(name);
        setForm({...formValue,departMentValue:checkArray});
        

    }

    const getChecked = (name) => {
        return formValue.departMentValue && formValue.departMentValue.include(name);
    }

    const validData = async () => {
        let isError = false;
        let error ={
            deapartment : '',
            name:'',
            gander:'',
            salary:'',
            profileUrl:'',
            startDate:''

        }

        if (formValue.name.length <1) {
            error.name = 'name is required filed'
            isError=true;
        }

        
        if (formValue.gender.length <1) {
            error.gender = 'gender is required filed'
            isError=true;
        }

        
        if (formValue.salary.length <1) {
            error.salary = 'salary is required filed'
            isError=true;
        }

        
        if (formValue.profileUrl.length <1) {
            error.profileUrl = 'profile is required filed'
            isError=true;
        }

        
        if (formValue.departMentValue.length <1) {
            error.deapartment = 'department is required filed'
            isError=true;
        }

        await setForm({...formValue,error:error})
        return isError


    }

    const save = async (event) => {
        event.preventDefault();
    }
    const reset= () => {
        setForm({...initialValue,id:formValue.id,isUpdate:formValue.isUpdate});
        console.log(formValue)
    }
    
    return (
        <div className="payroll-main">
            <header className="header row center">
                <div className="logo">
                    <img src={logo} alt="" />
                    <div>
                        <span className="emp-text"> EMPLOYEE</span> <br />
                        <span className="emp-text">PAYROLL</span>
                    </div>
                </div>
            </header>   
            <div className="content">
                <form className="form" action= "#" onSubmit="{save}" >
                    <div className="form-head">Employee Payroll Form</div>
                    <div className="row">
                        <label className="label-text" htmlFor="name" >Name</label>
                        <input className="input" type="text" id="name" name="name"  value= {formValue.name} onChange={changeValue} placeholder="Your name ..." />
                    </div>
                    <div  className="error">{formValue.error.name}</div>
                    <div className="row">
                        <label className="label text" htmlFor="profileUrl" >Profile image</label>
                        <div className="profile-radio-button">
                            <label >
                                <input type="radio" checked={formValue.profileUrl==='../../assets/profile-images/Ellipse-3.png'} name="profileUrl" value ="../../assets/profile-images/Ellipse-3.png" onChange={changeValue} />
                                <img className="profile" src="{profile1}" alt="" />
                            </label>
                            <label >
                                <input type="radio" checked={formValue.profileUrl==='../../assets/profile-images/Ellipse-1.png'} name="profileUrl" value ="../../assets/profile-images/Ellipse-1.png" onChange={changeValue} />
                                <img className="profile" src="{profile2}" alt="" />
                            </label>
                            <label >
                                <input type="radio" checked={formValue.profileUrl==='../../assets/profile-images/Ellipse-8.png'} name="profileUrl" value ="../../assets/profile-images/Ellipse-8.png" onChange={changeValue} />
                                <img className="profile" src="{profile3}" alt="" />
                            </label>
                            <label >
                                <input type="radio" checked={formValue.profileUrl==='../../assets/profile-images/Ellipse-3.png'} name="profileUrl" value ="../../assets/profile-images/Ellipse-3.png" onChange={changeValue} />
                                <img className="profile" src="{profile4}" alt="" />
                            </label>
                        </div>
                    </div>
                    <div className="error"> {formValue.error.profileUrl}</div>


                    <div className =" row">
                        <label className="label text" htmlFor="gender" >Gender</label>
                        <div>
                            <input type="radio" id="male" onChange={changeValue} name="gender" value= "male" />
                            <label htmlFor="male" className="text" >Male</label>
                            <input type="radio" id="female" onChange={changeValue} name="gender" value= "female" />
                            <label htmlFor="female" className="text" >Female</label>
                        </div>
                    </div>
                    <div className="error"> {formValue.error.gender}</div>


                    <div className="row">
                        <label htmlFor="department" className="label text">Department</label>
                        <div>
                            {formValue.allDepartment.map(item => (
                                <span key={item}>
                                    <input type="checkbox" className="checkbox" onChange={ () => onCheckChange(item)}  name={item}
                                    defaultChecked= {() => getChecked(item)} value={item} />
                                    <label htmlFor={item} className="text">{item}</label>
                                </span>
                            ))}

                        </div>
                    </div>
                    <div className="error">{formValue.error.department}</div>

                    <div className="row">
                        <label htmlFor="salary" className="label text">Salary</label>
                        <input type="number" className="input" onChange={changeValue} id = "salry" value = {formValue.salary} name="salary" placeholder="salary" />
                    </div>
                    <div className="error" >{formValue.error.salary}</div>


                    <div className="row">
                        <label htmlFor="startDate"  className="label-text" >Start Date</label>
                        <div>
                            <select name="day" id="day" onChange={changeValue} >
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                            <select name="month" id="month" onChange={changeValue}>
                                <option value="jan">January</option>
                                <option value="feb">Febuary</option>
                            </select>
                            <select name="yaer" id="year" onChange={changeValue}>
                                <option value="2020">2020</option>
                            </select>
                        </div>
                    </div>
                    <div className="error" >{formValue.error.startDate}</div>

                    <div className="row">
                        <label htmlFor="notex" className="label text">Notes</label>
                        <textarea onChange={changeValue} id="notes" value={formValue.notes} className="input" placeholder="" style={{height:'100%'}}></textarea>
                    </div>
                    <div className="buttonParent">
                        <a routerLink="" className="resetButton button cancelButton"> Cancel </a>
                        <div className="submit-reset">
                            <button type="submit" className="button submitButton" id="submitButton" >{formValue.isUpdate ? 'update' : 'submit'}</button>
                            <button type="button" onClick={reset} className= "resetButton  button">Reset</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    
        
    );


}

export default withRouter(PayrollForm);