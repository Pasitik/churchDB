import {useContext} from 'react';
import { StepperContext } from '../../contexts/StepperContext';

const Personal = () => {
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
                First Name
            </div>
            <div className='bg-white my-2 p-1 flex boarder border-gray-200 rounded'> 
                <input
                    onChange={handleChange}
                    value={userData['fname'] || ""}
                    name="fname"
                    placeholder='First Name'
                    className='p-1 px-2 appearance-none outline-none border w-5/6 text-gray-800'
                />
            </div>
        </div>
        <div className='w-full mx-2 flex-1'>
            <div className='font-bold h-6 mt-3  text-grey-500 text-xs leading-8 uppercase'>
                {' '}
                Surname
            </div>
            <div className='bg-white my-2 p-1 flex boarder border-gray-200 rounded'> 
                <input
                    type="text"
                    onChange={handleChange}
                    value={userData['Lname'] || ""}
                    name="Lname"
                    placeholder='Last/Family Name'
                    className='p-1 px-2 appearance-none outline-none border w-5/6 text-gray-800 '
                />
            </div>
        </div>
    </div>

    <div className='flex'>
        <div className='w-full mx-2 flex-1'>
            <div className='font-bold h-6 mt-3  text-grey-500 text-xs leading-8 uppercase'>
                {' '}
                Gender
            </div>
            <div className='bg-white my-2 p-1 flex boarder border-gray-200 rounded'> 
                <input
                    onChange={handleChange}
                    value={userData['fname'] || ""}
                    name="fname"
                    placeholder='First Name'
                    className='p-1 px-2 appearance-none outline-none border w-5/6 text-gray-800'
                />
            </div>
        </div>
        <div className='w-full mx-2 flex-1'>
            <div className='font-bold h-6 mt-3  text-grey-500 text-xs leading-8 uppercase'>
                {' '}
                Date of Birth
            </div>
            <div className='bg-white my-2 p-1 flex boarder border-gray-200 rounded'> 
                <input
                    type="Date"
                    onChange={handleChange}
                    value={userData['Lname'] || ""}
                    name="Lname"
                    className='p-1 px-2 appearance-none outline-none border w-5/6 text-gray-800 '
                />
            </div>
        </div>
    </div> 

    <div className='flex'>
        <div className='w-full mx-2 flex-1'>
            <div className='font-bold h-6 mt-3  text-grey-500 text-xs leading-8 uppercase'>
                {' '}
                Marital Status
            </div>
            <div className='bg-white my-2 p-1 flex boarder border-gray-200 rounded'> 
                <input
                    onChange={handleChange}
                    value={userData['fname'] || ""}
                    name="fname"
                    placeholder='First Name'
                    className='p-1 px-2 appearance-none outline-none border w-5/6 text-gray-800'
                />
            </div>
        </div>
        <div className='w-full mx-2 flex-1'>
            <div className='font-bold h-6 mt-3  text-grey-500 text-xs leading-8 uppercase'>
                {' '}
                Spouse Full Name
            </div>
            <div className='bg-white my-2 p-1 flex boarder border-gray-200 rounded'> 
                <input
                    type="text"
                    onChange={handleChange}
                    value={userData['Lname'] || ""}
                    name="Lname"
                    placeholder='Last/Family Name'
                    className='p-1 px-2 appearance-none outline-none border w-5/6 text-gray-800 '
                />
            </div>
        </div>
    </div>


    </div>
  )
}

export default Personal