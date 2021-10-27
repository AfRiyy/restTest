const axios = require('axios');

axios.get('http://localhost:3000/employees')
    .then(resp => {
        dolgozok = resp.data;
        dolgozok.forEach(dolgozo => {
            console.log(`${dolgozo.fullname}`);
        });
    })
    .catch(error => {
        console.log(error);
    });

    // axios.post('http://localhost:3000/employees', {
    //     id: 5,
    //     "fullname": "Bárány Tamás",
    //     "city": "Miskolc",
    //     "salary": 2850000
    // }).then(resp => {
    //     console.log(resp.data);
    // }).catch(error => {
    //     console.log(error);
    // });

    axios.post('http://localhost:3000/employees', {
        id: 7
    }).then(resp => {
        console.log(resp.data);
    }).catch(error => {
        console.log(error);
    });

//     axios.delete('http://localhost:3000/employees/5/', {
// }).then(resp => {
//     console.log(resp.data);
// }).catch(error => {
//     console.log(error);
// });
