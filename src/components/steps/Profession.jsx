import React, { useState, useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";
import Employed from "./profession/Employed";
import Student from "./profession/Student";
import SelfEmployed from "./profession/SelfEmployed";
import Unemployed from "./profession/Unemployed";

const Profession = () => {
  const options = [" ", "Student", "Employed", "Self-Employed", "Unemployed"];
  const [selectedValue, setSelectedValue] = useState(options[0]);
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    if (e.target.value == "Student") {
      createStudent();
      return;
    }
  };
  const createStudent = () => {
    setUserData((data) => ({
      ...data,
      profession: {
        ...data.profession,
        student: {
          level: "",
          schoolName: "",
          studyCourse: "",
          graduationDate: "",
        },
      },
    }));
  };

  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3  text-grey-500 text-xs leading-8 uppercase">
            {" "}
            Employment Status
          </div>
          <div className="bg-white my-2 p-1 flex boarder border-gray-200 rounded">
            <select
              onChange={handleChange}
              value={selectedValue || ""}
              name="status"
              id="1"
              className="p-1 px-2 appearance-none outline-none border w-5/6 text-gray-800"
            >
              {options.map((option, idx) => (
                <option value={option} key={idx}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            {" "}
            {selectedValue === "Student" ? (
              <Student />
            ) : selectedValue === "Employed" ? (
              <Employed />
            ) : selectedValue === "Self-Employed" ? (
              <SelfEmployed />
            ) : selectedValue === "Unemployed" ? (
              <Unemployed />
            ) : (
              " "
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profession;
