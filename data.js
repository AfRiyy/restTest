var json;
fetch('http://localhost:3000/employees', {
      method: 'GET'
   })
   .then(function(response) {
      return response.json();
   })
   .then(function(json) {
    var arrayLength = Object.keys(json).length
    console.log(arrayLength);
      for (let index = 0; index < arrayLength; index++) {
        var para = document.createElement("button");               // Create a <p> element
        para.innerText = (json[index].id)+" "+json[index].fullname;
        para.setAttribute('id',json[index].id);           
        para.setAttribute('fullname',json[index].fullname);           
        document.body.appendChild(para);
        var br = document.createElement("br");
        document.body.appendChild(br);
        para.addEventListener("click",logThis); 
      }

   });

function setIdToLast(json) {
    //var lastId = Object.keys(json)[-1].id;
    // console.log(lastId);
    // var arrayLength = Object.keys(json).length;
    // var idElement = document.getElementById('id');
    // idElement.value = arrayLength;
    console.log(json);
}
setIdToLast();


function addToJson(){
    var id = document.getElementById('id').value;
    var fullname = document.getElementById('fullname').value;
    var city = document.getElementById('city').value;
    var salary = document.getElementById('salary').value;
        var data = {
        id: id,
        fullname: fullname,
        city: city,
        salary: salary
    };
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/employees',
        data: data
      });
}

 function logThis(event) {
   var id = event.target.id;
   var fullname = document.getElementById(id).getAttribute('fullname');
   console.log(id+" "+fullname);
   var data = {
       id: id
   };
   $.ajax({
    type: 'DELETE',
    url: 'http://localhost:3000/employees/'+id,
    data: data
  });
 }

// var deleteAll = document.getElementById('deleteAllBtn');

// deleteAll.addEventListener(()=>{
//     $.ajax({
//         type: 'DELETE',
//         url: 'http://localhost:3000/employees/'
//       });
// });

function  addArray() {
  var data = {"valami":{}};
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/',
    data: data
  });
}

addArray();








 //nem releváns kódok, de lehet szemezgetni
 // function addToJson(){
//     var id = document.getElementById('id').value;
//     var fullname = document.getElementById('fullname').value;
//     var city = document.getElementById('city').value;
//     var salary = document.getElementById('salary').value;
//     // axios.post('http://localhost:3000/employees', {
//     //     id: id,
//     //     "fullname": fullname,
//     //     "city": city,
//     //     "salary": salary
//     // }).then(resp => {
//     //     console.log(resp.data);
//     // }).catch(error => {
//     //     console.log(error);
//     // });
//     var data =  {  id: id,
//          "fullname": fullname,
//          "city": city,
//        "salary": salary }
//        var url = "http://localhost:3000/employees";

//        var xhr = new XMLHttpRequest();
//        xhr.open("PUT", url);
       
//        xhr.setRequestHeader("Accept", "application/json");
//        xhr.setRequestHeader("Content-Type", "application/json");
       
//        xhr.onreadystatechange = function () {
//           if (xhr.readyState === 4) {
//              console.log(xhr.status);
//              console.log(xhr.responseText);
//           }};
       
//        xhr.send(data);
// }
// function htmlizeResponse(res) {
//     return `<div class="alert alert-secondary mt-2" role="alert"><pre>` + JSON.stringify(res, null, 2) + "</pre></div>";
//   }

// async function addToJson() {
//     let resultElement = document.getElementById("putResult");
//     resultElement.innerHTML = "";

//     var id = document.getElementById('id').value;
//     var fullname = document.getElementById('fullname').value;
//     var city = document.getElementById('city').value;
//     var salary = document.getElementById('salary').value;
//     try {
//       const res = await instance.put({
//         id: id,
//         fullname: fullname,
//         city: city,
//         salary: salary
//       });
  
//       const result = {
//         status: res.status + "-" + res.statusText,
//         headers: res.headers,
//         data: res.data,
//       };
  
//       resultElement.innerHTML = htmlizeResponse(result);
//     } catch (err) {
//       resultElement.innerHTML = htmlizeResponse(err);
//     }
//   }

// const createUser = (user) => {
//     axios.post('http://localhost:3000/employees', user)
//         .then(response => {
//             const addedUser = response.data;
//             console.log(`POST: user is added`, addedUser);
//             // append to DOM
//             appendToDOM([addedUser]);
//         })
//         .catch(error => console.error(error));
// };

// function fillJson() {
//     var id = document.getElementById('id').value;
//     var fullname = document.getElementById('fullname').value;
//     var city = document.getElementById('city').value;
//     var salary = document.getElementById('salary').value;
//     var user = {
//         id: id,
//         fullname: fullname,
//         city: city,
//         salary: salary
//      };
//      return user;
// }

// var user = fillJson;
//  createUser(user);