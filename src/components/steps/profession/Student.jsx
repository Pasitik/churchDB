import React, {useState} from 'react'

const Student = ({handleChange, userData}) => {
  const level=[" ","Basic", "SHS", "University"]
  const [SelectedValue, setSelectedValue]=useState(level[0])

  const changeHandler=(e)=>{
    setSelectedValue(e.target.value); 
    handleChange(e)
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
                onChange={changeHandler}
                defaultValue={SelectedValue}
                name="fname"
                id="1"
                className='p-1 px-2 appearance-none outline-none border w-5/6 text-gray-800'
                >
                  {level.map((option, idx)=>(
                    <option key={idx}>{option}</option>
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
                    value={userData['Lname'] || ""}
                    name="Lname"
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
                    value={userData['Lname'] || ""}
                    name="Lname"
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
                    type="text"
                    onChange={handleChange}
                    value={userData['Lname'] || ""}
                    name="Lname"
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