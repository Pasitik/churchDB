import React,  {useState, useContext} from 'react'
import { StepperContext } from '../../contexts/StepperContext';

const Role = () => {
    const options =["None", "Baptism" , "Confirmation" , "Holy Matrimony", "Holy Ordinance"]
    const day =["Monday" , "Tuesday" , "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const group=["None", "PYC", "Laity Council","Pastoral Council", "Finance council","Knights of St John",
                  "Knights of Marshal", "Knights of the Alter", "Lectors", "Choir", "Ushers", "Legion of Mary", "Other"]
  
  const[selected,setSelected]=useState([]);
  const[DayBorn, setDayBorn]=useState(day[0]); 
  const[BaseGroup, setBaseGroup]=useState(group[0])
  const[SelectedValue, setSelectedValue]=useState(options[0]); 
  const {userData, setUserData}=useContext(StepperContext);

  const handleGroupChange=(e)=>{
  const item=e.target.value
  setSelected([...selected, item])
  setUserData({...userData, [e.target.name]: [...selected, item]})
}


const handleChange=(e)=>{
  const{name, value}=e.target; 
  setUserData({...userData, [name]: value})
}
console.log(userData)
//console.log(userData.baseGroup)

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
                    onChange={handleChange}
                    value={userData['sacrament'] || " "}
                    name="sacrament"
                    id="1"
                    className='p-1 px-2 appearance-none outline-none border w-5/6 text-gray-800'
                    >
                      {options.map((option, idx)=>(
                        <option value={option} key={idx}>{option}</option>
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
                    onChange={(e)=> {setDayBorn(e.target.value)
                    handleChange(e)}}
                    value={userData['dayBorn'] || ""}
                    name="dayBorn"
                    id="1"
                    className='p-1 px-2 appearance-none outline-none border w-5/6 text-gray-800'
                    >
                      {day.map((option, idx)=>(
                        <option value={option} key={idx}>{option}</option>
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
                        id={option} 
                        value={option}
                        name="baseGroup"
                             onChange={(e)=>e.target.checked===true ?  handleGroupChange(e):   setUserData({...userData, [e.target.name]: 
                              userData.baseGroup.splice(!userData.baseGroup.indexOf({option}),selected.length-1)                         
                            })
                                          }/>
                        <label for={option} value={option}>{option}</label>
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
                           value={userData['specify'] || ""}
                           name="specify"
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