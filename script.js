let studentDetails = [
    {
        name: 'Cyril Thomas',
        age: 23,
        dep: 'Artificial Intelligence',
        score: 93
    },
    {
        name: 'Anna Tennyson',
        age: 22,
        dep: 'Civil Engineering',
        score: 55
    },
    {
        name: 'Sneha Achu Tom',
        age: 24,
        dep: 'Computer Science',
        score: 77
    },
    {
        name: 'Sharon Kurian',
        age: 23,
        dep: 'Mechanical',
        score: 43
    },
    {
        name: 'Meghana Suresh',
        age: 21,
        dep: 'Artificial Intelligence',
        score: 80
    }
];

function displayTable(data) {
    const tableBody = document.getElementById('bodyContent');
    tableBody.innerHTML = '';

    data.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.dep}</td>
            <td>${student.score}</td>
        `;
        tableBody.appendChild(row);
    });
}

function sortStudents() {
    const selectElement = document.getElementById('sortSelect');
    const selectedField = selectElement.value;

    if (!selectedField) return;

    const sortedData = [...studentDetails];
    sortedData.sort((a, b) => {
        if (typeof a[selectedField] === 'string') {
            return a[selectedField].localeCompare(b[selectedField]);
        } else {
            return a[selectedField] - b[selectedField];
        }
    });

    displayTable(sortedData);
}


function filterStudents() {
    const marks = parseInt(document.getElementById('mark').value);
    if (isNaN(marks)) {
        alert('Enter a valid value for score');
        return;
    }

    const filteredStudents = studentDetails.filter(student => student.score >= marks);
    displayTable(filteredStudents);
}

document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.trim().toLowerCase();
    const filteredStudents = studentDetails.filter(student => {
        for (const key in student) {
            if (typeof student[key] === 'string' && student[key].toLowerCase().includes(query)) {
                return true;
            }
        }
        return false;
    });
    displayTable(filteredStudents);
});


displayTable(studentDetails);
