import { useContext, useEffect } from "react";
import { StepperContext } from "../../contexts/StepperContext";

const Personal = () => {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((data) => ({
      ...data,
      personalData: { ...data.personalData, [name]: value },
    }));
  };
  useEffect(() => {
    console.log(userData);

    // console.log(userData.profession.level ?? "abu");
  }, [userData]);

  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3  text-grey-500 text-xs leading-8 uppercase">
            {" "}
            First Name
          </div>
          <div className="bg-white my-2 p-1 flex boarder border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={userData.personalData["fname"] ?? ""}
              name="fname"
              placeholder="First Name"
              className="p-1 px-2 appearance-none outline-none border w-5/6 text-gray-800"
            />
          </div>
        </div>
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3  text-grey-500 text-xs leading-8 uppercase">
            {" "}
            Surname
          </div>
          <div className="bg-white my-2 p-1 flex boarder border-gray-200 rounded">
            <input
              type="text"
              onChange={handleChange}
              value={userData.personalData["lname"] || ""}
              name="lname"
              placeholder="Last/Family Name"
              className="p-1 px-2 appearance-none outline-none border w-5/6 text-gray-800 "
            />
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3  text-grey-500 text-xs leading-8 uppercase">
            {" "}
            Gender
          </div>
          <div className="bg-white my-2 p-1 flex boarder border-gray-200 rounded">
            <select
              onChange={handleChange}
              value={userData.personalData["gender"] || ""}
              name="gender"
              placeholder="First Name"
              className="p-1 px-2 appearance-none outline-none border w-5/6 text-gray-800"
            >
              <option value=" "> </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3  text-grey-500 text-xs leading-8 uppercase">
            {" "}
            Date of Birth
          </div>
          <div className="bg-white my-2 p-1 flex boarder border-gray-200 rounded">
            <input
              type="Date"
              onChange={handleChange}
              value={Date.parse(userData.personalData["date"]) || ""}
              name="dob"
              className="p-1 px-2 appearance-none outline-none border w-5/6 text-gray-800 "
            />
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3  text-grey-500 text-xs leading-8 uppercase">
            {" "}
            Marital Status
          </div>
          <div className="bg-white my-2 p-1 flex boarder border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={userData.personalData["maritalStatus"] || ""}
              name="maritalStatus"
              placeholder="First Name"
              className="p-1 px-2 appearance-none outline-none border w-5/6 text-gray-800"
            />
          </div>
        </div>
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3  text-grey-500 text-xs leading-8 uppercase">
            {" "}
            Spouse Full Name
          </div>
          <div className="bg-white my-2 p-1 flex boarder border-gray-200 rounded">
            <input
              type="text"
              onChange={handleChange}
              value={userData.personalData["spouseFullName"] || ""}
              name="spouseFullName"
              placeholder="Last/Family Name"
              className="p-1 px-2 appearance-none outline-none border w-5/6 text-gray-800 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
