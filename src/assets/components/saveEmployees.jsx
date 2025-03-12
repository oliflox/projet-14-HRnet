$( function() {
    const stateSelect = document.getElementById('state');
    states.forEach(function(state) {
        const option = document.createElement('option');
        option.value = state.abbreviation;
        option.text = state.name;
        stateSelect.appendChild(option);
    });

    $( "#department" ).selectmenu();
    $( "#state" ).selectmenu();

    $('#date-of-birth').datetimepicker({
        timepicker: false,
        format: 'm/d/Y'
    });
    $('#start-date').datetimepicker({
        timepicker: false,
        format: 'm/d/Y'
    });
});

function saveEmployee() {
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
    $('#confirmation').modal();
}

