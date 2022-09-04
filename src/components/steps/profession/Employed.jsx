import React, {useState} from 'react'

const Employed = ({handleChange, userData}) => {
    const sector=[" ","Health", "Education", "Finance", "Information Technology", "Transport"]
    const [SelectedValue, setSelectedValue]=useState(sector[0])
  
    const changeHandler=(e)=>{
      setSelectedValue(e.target.value); 
    }
  

  return (
<div className='flex flex-col'>
          <div className='w-full mx-2 flex-1'>
        <div className='font-bold h-6 mt-3  text-grey-500 text-xs leading-8 uppercase'>
            {' '}
            Sector 
        </div>
        <div className='bg-white my-2 p-1 flex boarder border-gray-200 rounded'> 
            <select
                onChange={changeHandler}
                defaultValue={SelectedValue}
                name="fname"
                id="1"
                className='p-1 px-2 appearance-none outline-none border w-5/6 text-gray-800'
                >
                  {sector.map((option, idx)=>(
                    <option key={idx}>{option}</option>
                  ))}
                </select>
        </div>
        </div>
    </div>  )
}

export default Employed