import React, { useState, useRef } from "react";
import states from "../utils/state";
import SaveEmployees from "../components/saveEmployees";
import DatePicker from "@oliflox/date-picker";

function Index() {
  const [stateList] = useState(states);
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [startDate, setStartDate] = useState(null);
  
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const departmentRef = useRef(null);
  const streetRef = useRef(null);
  const cityRef = useRef(null);
  const stateRef = useRef(null);
  const zipCodeRef = useRef(null);

  const refs = {
    firstNameRef,
    lastNameRef,
    dateOfBirth,
    startDate,
    departmentRef,
    streetRef,
    cityRef,
    stateRef,
    zipCodeRef
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="mainTitle">HRnet</div>
      <a href="/employees" className="mainLink">View Current Employees</a>
      <div className="mainSubtitle">Create Employee</div>
      <form onSubmit={handleSubmit} id="create-employee" className="mainForm">
        <label htmlFor="first-name" className="mainLabel">First Name</label>
        <input type="text" id="first-name" className="mainInput" ref={firstNameRef} />

        <label htmlFor="last-name" className="mainLabel">Last Name</label>
        <input type="text" id="last-name" className="mainInput" ref={lastNameRef} />

        <DatePicker 
          Label={"Date of Birth"} 
          id={"date-of-birth"} 
          inputClassName="mainInput" 
          labelClassName="mainLabel"
          onChange={setDateOfBirth}
          value={dateOfBirth}
        />

        <DatePicker 
          Label={"Start Date"} 
          id={"start-date"} 
          inputClassName="mainInput" 
          labelClassName="mainLabel"
          onChange={setStartDate}
          value={startDate}
        />

        <fieldset className="mainFieldset">
          <legend className="mainLegend">Address</legend>

          <label htmlFor="street" className="mainLabel">Street</label>
          <input id="street" type="text" className="mainInput" ref={streetRef} />

          <label htmlFor="city" className="mainLabel">City</label>
          <input id="city" type="text" className="mainInput" ref={cityRef} />

          <label htmlFor="state" className="mainLabel">State</label>
          <select name="state" id="state" className="mainSelect" ref={stateRef}>
            {stateList.map((state) => (
              <option key={state.abbreviation} value={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </select>

          <label htmlFor="zip-code" className="mainLabel">Zip Code</label>
          <input id="zip-code" type="number" className="mainInput" ref={zipCodeRef} />
        </fieldset>

        <label htmlFor="department" className="mainLabel">Department</label>
        <select name="department" id="department" className="mainSelect" ref={departmentRef}>
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
        <SaveEmployees refs={refs} />
      </form>
    </>
  );
}

export default Index;
