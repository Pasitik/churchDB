import React,  {useState, useContext} from 'react'
import { StepperContext } from '../../contexts/StepperContext';
import Employed from './profession/Employed';
import Student from './profession/Student';
import SelfEmployed from './profession/SelfEmployed';
import Unemployed from './profession/Unemployed';


const Profession = () => {
  const options =[" ", "Student" , "Employed" , "Self-Employed", "Unemployed"]
  const[SelectedValue, setSelectedValue]=useState(options[0]); 
  const {userData, setUserData}=useContext(StepperContext);


const handleChange=(e)=>{
  const{name, value}=e.target; 
  setUserData({...userData, [name]: value})
}

  return (
        <div className='flex flex-col'>
        <div className='flex'>
        <div className='w-full mx-2 flex-1'>
            <div className='font-bold h-6 mt-3  text-grey-500 text-xs leading-8 uppercase'>
                {' '}
                Employment Status 
            </div>
            <div className='bg-white my-2 p-1 flex boarder border-gray-200 rounded'> 
                <select
                    onChange={(e)=> setSelectedValue(e.target.value)}
                    defaultValue={SelectedValue}
                    name="fname"
                    id="1"
                    className='p-1 px-2 appearance-none outline-none border w-5/6 text-gray-800'
                    >
                      {options.map((option, idx)=>(
                        <option key={idx}>{option}</option>
                      ))}
                    </select>
            </div>
            <div>
              {" "}
              {SelectedValue==="Student"? <Student handleChange={handleChange} userData={userData}/> : SelectedValue=== "Employed" ? <Employed/> 
                 :SelectedValue==="Self-Employed" ? <SelfEmployed/> : SelectedValue==="Unemployed" ? <Unemployed/> : " "}
            </div>
        </div>
        </div>
        </div>
)}

export default Profession