import React, {useState} from 'react'

const Student = ({handleChange, userData,setUserData}) => {

  const level=[" ","Basic", "SHS", "University"]
  const grade=["Nursery", "Primary", "JHS"]
  const [SelectedValue, setSelectedValue]=useState(level[0])

  const changeHandler=(e)=>{
    const{name, value}=e.target; 
    setUserData({...userData, [name]: value})
  }
  return (
    <div className='flex flex-col'>
    <div className='flex'>
    <div className='w-full mx-2 flex-1'>
        <div className='font-bold h-6 mt-3  text-grey-500 text-xs leading-8 uppercase'>
            {' '}
            level 
        </div>
        <div className='bg-white my-2 p-1 flex boarder border-gray-200 rounded'> 
            <select
                onChange={(e)=>{ setSelectedValue(e.target.value)
                                    changeHandler(e)}}
                value={userData['level'] || ""}
                name="level"
                id="1"
                className='p-1 px-2 appearance-none outline-none border w-5/6 text-gray-800'
                >
                  {level.map((option, idx)=>(
                    <option value={option} key={idx}>{option}</option>
                  ))}
                </select>
        </div>
        <div className='flex'>
        <div className='w-full mx-2 flex-1'>
            <div className='font-bold h-6 mt-3  text-grey-500 text-xs leading-8 uppercase'>
                {' '}
                School Name
            </div>
            <div className='bg-white my-2 p-1 flex boarder border-gray-200 rounded'> 
                <input
                    type="text"
                    onChange={handleChange}
                    value={userData['schoolName'] || ""}
                    name="schoolName"
                    placeholder='Name of School'
                    className='p-1 px-2 appearance-none outline-none border w-5/6 text-gray-800'
                />
            </div>
        </div>
        </div>
        <div className='w-full mx-2 flex-1'>
            <div className='font-bold h-6 mt-3  text-grey-500 text-xs leading-8 uppercase'>
                {' '}
                Course of study
            </div>
            <div className='bg-white my-2 p-1 flex boarder border-gray-200 rounded'> 
                <input
                    type="text"
                    onChange={handleChange}
                    value={userData['Course'] || ""}
                    name="Course"
                    placeholder='Course'
                    className='p-1 px-2 appearance-none outline-none border w-5/6 text-gray-800'
                />
            </div>
        </div>
        <div className='flex'>
          {SelectedValue==="Basic" ?
        <div className='w-full mx-2 flex-1'>
            <div className='font-bold h-6 mt-3  text-grey-500 text-xs leading-8 uppercase'>
                {' '}
                Grade
            </div>
            <div className='bg-white my-2 p-1 flex boarder border-gray-200 rounded'> 
                <input
                    type="text"
                    onChange={handleChange}
                    value={userData['grade'] || " "}
                    name="grade"
                    placeholder='Name of School'
                    className='p-1 px-2 appearance-none outline-none border w-5/6 text-gray-800'
                />
            </div>
        </div> : " "}
        <div className='w-full mx-2 flex-1'>
            <div className='font-bold h-6 mt-3  text-grey-500 text-xs leading-8 uppercase'>
                {' '}
                Graduation Date
            </div>
            <div className='bg-white my-2 p-1 flex boarder border-gray-200 rounded'> 
                <input
                    type="Date"
                    onChange={handleChange}
                    value={userData['gradDate'] || ""}
                    name="gradDate"
                    placeholder='Name of School'
                    className='p-1 px-2 appearance-none outline-none border w-5/6 text-gray-800'
                />
            </div>
        </div>
        </div>
        <div>
          {" "}
        </div>
    </div>
    </div>
    </div>  
    )
}

export default Student