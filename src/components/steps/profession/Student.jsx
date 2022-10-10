import React, { useState, useContext, useEffect } from "react";
import { StepperContext } from "../../../contexts/StepperContext";

const Student = () => {
  const level = [" ", "Basic", "SHS", "University"];
  const grade = ["Nursery", "Primary", "JHS"];
  const [SelectedValue, setSelectedValue] = useState(level[0]);
  const [StudentInfo, setStudentInfo] = useState({});
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((data) => ({
      ...data,
      profession: {
        ...data.profession,
        student: { ...data.profession.student, [name]: value },
      },
    }));
  };

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3  text-grey-500 text-xs leading-8 uppercase">
            {" "}
            level
          </div>
          <div className="bg-white my-2 p-1 flex boarder border-gray-200 rounded">
            <select
              onChange={handleChange}
              value={userData.profession.student.level || ""}
              name="level"
              id="1"
              className="p-1 px-2 appearance-none outline-none border w-5/6 text-gray-800"
            >
              {level.map((option, idx) => (
                <option value={option} key={idx}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="flex">
            <div className="w-full mx-2 flex-1">
              <div className="font-bold h-6 mt-3  text-grey-500 text-xs leading-8 uppercase">
                {" "}
                School Name
              </div>
              <div className="bg-white my-2 p-1 flex boarder border-gray-200 rounded">
                <input
                  type="text"
                  onChange={handleChange}
                  value={userData.profession.student.schoolName ?? ""}
                  name="schoolName"
                  placeholder="Name of School"
                  className="p-1 px-2 appearance-none outline-none border w-5/6 text-gray-800"
                />
              </div>
            </div>
          </div>
          <div className="w-full mx-2 flex-1">
            <div className="font-bold h-6 mt-3  text-grey-500 text-xs leading-8 uppercase">
              {" "}
              Course of study
            </div>
            <div className="bg-white my-2 p-1 flex boarder border-gray-200 rounded">
              <input
                type="text"
                onChange={handleChange}
                value={userData.profession.student.studyCourse ?? ""}
                name="studyCourse"
                placeholder="Course"
                className="p-1 px-2 appearance-none outline-none border w-5/6 text-gray-800"
              />
            </div>
          </div>
          <div className="flex">
            {SelectedValue === "Basic" ? (
              <div className="w-full mx-2 flex-1">
                <div className="font-bold h-6 mt-3  text-grey-500 text-xs leading-8 uppercase">
                  {" "}
                  Grade
                </div>
                <div className="bg-white my-2 p-1 flex boarder border-gray-200 rounded">
                  <input
                    type="text"
                    onChange={handleChange}
                    value={userData.profession.student.studyCourse ?? ""}
                    name="gradDate"
                    placeholder="Name of School"
                    className="p-1 px-2 appearance-none outline-none border w-5/6 text-gray-800"
                  />
                </div>
              </div>
            ) : (
              " "
            )}
            <div className="w-full mx-2 flex-1">
              <div className="font-bold h-6 mt-3  text-grey-500 text-xs leading-8 uppercase">
                {" "}
                Graduation Date
              </div>
              <div className="bg-white my-2 p-1 flex boarder border-gray-200 rounded">
                <input
                  type="Date"
                  onChange={handleChange}
                  value={StudentInfo["gradDate"] || ""}
                  name="gradDate"
                  placeholder="Name of School"
                  className="p-1 px-2 appearance-none outline-none border w-5/6 text-gray-800"
                />
              </div>
            </div>
          </div>
          <div> </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
