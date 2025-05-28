import React, { useEffect, useState } from 'react';
import states from './state';
import Modal from './Modal';

function SaveEmployees() {
    const [isModalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const stateSelect = document.getElementById('state');
        states.forEach(function(state) {
            const option = document.createElement('option');
            option.value = state.abbreviation;
            option.text = state.name;
            stateSelect.appendChild(option);
        });
    }, []);

    const saveEmployee = () => {
        const firstName = document.getElementById('first-name');
        const lastName = document.getElementById('last-name');
        const dateOfBirth = document.getElementById('date-of-birth');
        const startDate = document.getElementById('start-date');
        const department = document.getElementById('department');
        const street = document.getElementById('street');
        const city = document.getElementById('city');
        const state = document.getElementById('state');
        const zipCode = document.getElementById('zip-code');

        const employees = JSON.parse(localStorage.getItem('employees')) || [];
        const employee = {
            firstName: firstName.value,
            lastName: lastName.value,
            dateOfBirth: dateOfBirth.value,
            startDate: startDate.value,
            department: department.value,
            street: street.value,
            city: city.value,
            state: state.value,
            zipCode: zipCode.value
        };
        employees.push(employee);
        localStorage.setItem('employees', JSON.stringify(employees));
        setModalVisible(true);
    };

    return (
        <div>
            <button className="saveBtn" onClick={saveEmployee}>Save</button>
            <Modal 
                message="Employee Created!" 
                isVisible={isModalVisible} 
                onClose={() => setModalVisible(false)} 
            />
        </div>
    );
}

export default SaveEmployees;

