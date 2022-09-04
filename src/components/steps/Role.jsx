import React,  {useState, useContext} from 'react'
import { StepperContext } from '../../contexts/StepperContext';

const Role = () => {
    const options =["None", "Baptism" , "Confirmation" , "Holy Matrimony", "Holy Ordinance"]
    const day =["Monday" , "Tuesday" , "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const group=["None", "PYC", "Laity Council","Pastoral Council", "Finance council","Knights of St John",
                  "Knights of Marshal", "Knights of the Alter", "Lectors", "Choir", "Ushers", "Legion of Mary", "Other"]

  const[DayBorn, setDayBorn]=useState(day[0]); 
  const[BaseGroup, setBaseGroup]=useState(group[0])
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
                Sacrament 
            </div>
            <div className='bg-white my-2 p-1 flex boarder border-gray-200 rounded'> 
                <select
                    onChange={(e)=> setSelectedValue(e.target.value)}
                    defaultValue={SelectedValue}
                    name="sacrament"
                    id="1"
                    className='p-1 px-2 appearance-none outline-none border w-5/6 text-gray-800'
                    >
                      {options.map((option, idx)=>(
                        <option key={idx}>{option}</option>
                      ))}
                    </select>
            </div>
        </div>
        </div>
        <div className='w-full mx-2 flex-1'>
            <div className='font-bold h-6 mt-3  text-grey-500 text-xs leading-8 uppercase'>
                {' '}
                Day Born 
            </div>
            <div className='bg-white my-2 p-1 flex boarder border-gray-200 rounded'> 
                <select
                    onChange={(e)=> setDayBorn(e.target.value)}
                    defaultValue={DayBorn}
                    name="dayBorn"
                    id="1"
                    className='p-1 px-2 appearance-none outline-none border w-5/6 text-gray-800'
                    >
                      {day.map((option, idx)=>(
                        <option key={idx}>{option}</option>
                      ))}
                    </select>
            </div>
        </div>
        <div className='w-full mx-2 flex-1'>
            <div className='font-bold h-6 mt-3  text-grey-500 text-xs leading-8 uppercase'>
                {' '}
                Base Group 
            </div>
            <div className='bg-white my-2 p-1 boarder border-gray-200 rounded'> 
                {group.map((option, idx)=>(
                        <div key={idx} className='flex-cols'>
                        <input type="checkbox" 
                         name={option} onChange={(e)=>{e.target.checked ? setBaseGroup(e.target.name): setBaseGroup(" ")}}/>
                        <label>{option}</label>
                        </div>
                      ))}
            </div>
        </div>
        <div>
          {BaseGroup==="Other" ? 
                   <div className='w-full mx-2 flex-1'>
                   <div className='font-bold h-6 mt-3  text-grey-500 text-xs leading-8 uppercase'>
                       {' '}
                       Specify Group
                   </div>
                   <div className='bg-white my-2 p-1 flex boarder border-gray-200 rounded'> 
                       <input
                           onChange={handleChange}
                           value={userData['fname'] || ""}
                           name="fname"
                           placeholder='Enter name of your base group '
                           className='p-1 px-2 appearance-none outline-none border w-5/6 text-gray-800'
                       />
                   </div>
               </div> :"" 
        }
        </div>
        </div>
  )
}

export default Role