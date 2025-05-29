import React, { useState } from "react";
import states from "../assets/components/state";
import SaveEmployees from "../assets/components/saveEmployees";
import DatePicker from "@oliflox/date-picker";

function Index() {
  const [stateList] = useState(states);

  return (
    <>
      <div className="mainTitle">HRnet</div>
      <a href="/employees" className="mainLink">View Current Employees</a>
      <div className="mainSubtitle">Create Employee</div>
      <form action="#" id="create-employee" className="mainForm">
        <label htmlFor="first-name" className="mainLabel">First Name</label>
        <input type="text" id="first-name" className="mainInput" />

        <label htmlFor="last-name" className="mainLabel">Last Name</label>
        <input type="text" id="last-name" className="mainInput" />

        <DatePicker Label={"Date of Birth"} id={"date-of-birth"} inputClassName="mainInput" labelClassName="mainLabel" />

        <DatePicker Label={"Start Date"} id={"start-date"} inputClassName="mainInput" labelClassName="mainLabel" />

        <fieldset className="mainFieldset">
          <legend className="mainLegend">Address</legend>

          <label htmlFor="street" className="mainLabel">Street</label>
          <input id="street" type="text" className="mainInput" />

          <label htmlFor="city" className="mainLabel">City</label>
          <input id="city" type="text" className="mainInput" />

          <label htmlFor="state" className="mainLabel">State</label>
          <select name="state" id="state" className="mainSelect">
            {stateList.map((state) => (
              <option key={state.abbreviation} value={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </select>

          <label htmlFor="zip-code" className="mainLabel">Zip Code</label>
          <input id="zip-code" type="number" className="mainInput" />
        </fieldset>

        <label htmlFor="department" className="mainLabel">Department</label>
        <select name="department" id="department" className="mainSelect">
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
        <SaveEmployees />
      </form>
    </>
  );
}

export default Index;
