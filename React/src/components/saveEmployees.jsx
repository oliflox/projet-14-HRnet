import React, { useState } from 'react';
import Modal from './Modal';

function SaveEmployees({ refs }) {
    const [isModalVisible, setModalVisible] = useState(false);
    const [error, setError] = useState(null);

    const validateForm = () => {
        const formData = {
            firstName: refs.firstNameRef.current?.value || '',
            lastName: refs.lastNameRef.current?.value || '',
            dateOfBirth: refs.dateOfBirth ? refs.dateOfBirth.toLocaleDateString() : '',
            startDate: refs.startDate ? refs.startDate.toLocaleDateString() : '',
            department: refs.departmentRef.current?.value || '',
            street: refs.streetRef.current?.value || '',
            city: refs.cityRef.current?.value || '',
            state: refs.stateRef.current?.value || '',
            zipCode: refs.zipCodeRef.current?.value || ''
        };

        return formData;
    };

    const saveEmployee = () => {
        try {
            setError(null);
            const formData = validateForm();
            
            const employees = JSON.parse(localStorage.getItem('employees')) || [];
            const employee = {
                id: Date.now(),
                ...formData,
                createdAt: new Date().toISOString()
            };

            employees.push(employee);
            localStorage.setItem('employees', JSON.stringify(employees));
            setModalVisible(true);

            // Réinitialiser le formulaire
            Object.values(refs).forEach(ref => {
                if (ref && ref.current) {
                    ref.current.value = '';
                }
            });

        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            {error && <div className="error-message">{error}</div>}
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

