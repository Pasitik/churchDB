import React, { useState, useContext, useEffect } from "react";
import { StepperContext } from "../../contexts/StepperContext";

const Role = () => {
  const options = [
    "None",
    "Baptism",
    "Confirmation",
    "Holy Matrimony",
    "Holy Ordinance",
  ];
  const day = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const group = [
    "None",
    "PYC",
    "Laity Council",
    "Pastoral Council",
    "Finance council",
    "Knights of St John",
    "Knights of Marshal",
    "Knights of the Alter",
    "Lectors",
    "Choir",
    "Ushers",
    "Legion of Mary",
    "Other",
  ];

  const [selected, setSelected] = useState([]);
  const [DayBorn, setDayBorn] = useState(day[0]);
  const [BaseGroup, setBaseGroup] = useState(group[0]);
  //const[newArr,setNewArr]=useState([])
  const { userData, setUserData } = useContext(StepperContext);

  const handleDelete = (e) => {
    /*for(let i=userData.baseGroup.length - 1; i>=0; i--){
    if(userData.baseGroup[i]===e.target.value){
      userData.baseGroup.splice(i,1);
      newArr=userData.baseGroup
    }
  }*/
    //let index=userData.baseGroup
    //index=newArr;
    //userData.baseGroup=newArr
    const newArr = selected.filter((group) => group !== e.target.value);
    //console.log(" new Array  " + newArr);
    setSelected(newArr);
    console.log(" Selected  " + selected);
    setUserData((data) => ({
      ...data,
      [e.target.name]: selected,
    }));
  };

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const createBaseGroup = (e) => {
    const { name, value, id } = e.target;
    setUserData((data) => ({
      ...data,
      role: {
        ...data.role,
        baseGroup: { ...data.role.baseGroup, [id]: value },
      },
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name == "baseGroup") {
      createBaseGroup(e);
      // return;
    } else {
      setUserData((data) => ({
        ...data,
        role: { ...data.role, [name]: value },
      }));
    }
  };

  //console.log(userData)
  //console.log(userData.baseGroup)

  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3  text-grey-500 text-xs leading-8 uppercase">
            {" "}
            Sacrament
          </div>
          <div className="bg-white my-2 p-1 flex boarder border-gray-200 rounded">
            <select
              onChange={handleChange}
              value={userData.role["sacrament"] ?? " "}
              name="sacrament"
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
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3  text-grey-500 text-xs leading-8 uppercase">
          {" "}
          Day Born
        </div>
        <div className="bg-white my-2 p-1 flex boarder border-gray-200 rounded">
          <select
            onChange={(e) => {
              setDayBorn(e.target.value);
              handleChange(e);
            }}
            value={userData.role["dayBorn"] ?? ""}
            name="dayBorn"
            id="1"
            className="p-1 px-2 appearance-none outline-none border w-5/6 text-gray-800"
          >
            {day.map((option, idx) => (
              <option value={option} key={idx}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3  text-grey-500 text-xs leading-8 uppercase">
          {" "}
          Base Group
        </div>
        <div className="bg-white my-2 p-1 boarder border-gray-200 rounded">
          {group.map((option, idx) => (
            <div key={idx} className="flex-cols">
              <input
                type="checkbox"
                id={option}
                value={option}
                name="baseGroup"
                onChange={(e) =>
                  e.target.checked === true
                    ? handleChange(e)
                    : e.target.checked === false
                    ? handleDelete(e)
                    : ""
                }
              />
              <label for={option} value={option}>
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div>
        {BaseGroup === "Other" ? (
          <div className="w-full mx-2 flex-1">
            <div className="font-bold h-6 mt-3  text-grey-500 text-xs leading-8 uppercase">
              {" "}
              Specify Group
            </div>
            <div className="bg-white my-2 p-1 flex boarder border-gray-200 rounded">
              <input
                onChange={handleChange}
                value={userData["specify"] || ""}
                name="specify"
                placeholder="Enter name of your base group "
                className="p-1 px-2 appearance-none outline-none border w-5/6 text-gray-800"
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Role;
