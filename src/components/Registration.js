import React, {useState} from 'react'; 
import Stepper from './Stepper';
import StepperControl from './StepperControl';
import Personal from './steps/Personal';
import Profession from './steps/Profession';
import Role from './steps/Role';
import Complete from './steps/Complete';
import { StepperContext } from '../contexts/StepperContext';
import "../index.css"; 

const Registration = () => {

    const[currentStep, setCurrentStep]=useState(1); 
    const[userData, setUserData]=useState(""); 
    const[finalData, setFinalData]=useState([]); 


    const steps = [
        "Personal", 
        "Profession",
        "role",
        "Complete",
    ]
    const displayStep=(step)=>{
        switch(step){
            case 1: 
                return <Personal/>
            case 2: 
                return <Profession/>
            case 3: 
                return <Role/>
            case 4:
                return <Complete/>
            default:
        }
    }
    const handleClick=(dirrection)=>{
        let newStep=currentStep; 

        dirrection=="next" ? newStep++ : newStep--;
        //check if steps are within bounds
        newStep>0 && newStep<= steps.length && setCurrentStep(newStep);
    }
  return (
    <div className='md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white m-10'>
        <div className="r-card-in horizontal mt-5"> 
            <Stepper steps={steps} currentStep={currentStep}/>
        </div>
        {/* Display Components*/}
        <div className='my-10 p-10'>
            <StepperContext.Provider value={{
                userData,
                setUserData,
                finalData,
                setFinalData
            }}>
                {displayStep(currentStep)}
            </StepperContext.Provider>
        </div>
        <StepperControl handleClick={handleClick} steps={steps} currentStep={currentStep}/>
    </div>
  )
}

export default Registration