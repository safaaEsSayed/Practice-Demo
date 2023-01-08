//Task01

/*
function courseData(option) {
   let defaultValues = {
    courseName: "courseName",
    courseDuation: "courseDuation",
    courseOwner: "courseOwner",
   };

   Object.assign(defaultValues, option);
   console.log(
     `Course Name:${defaultValues.courseName}, Course Duation:${defaultValues.courseDuation}, Course Owner:${defaultValues.courseOwner}`
   );
 }
 courseData();
*/

//Task02
//A
/*
 fetch("http://jsonplaceholder.typicode.com/users")
   .then(function (result) {
     return result.json();
   })
   .then(function (response) {

     for (let index = 0; index < response.length; index++) {
        var obName=response[index].name
        var buttons=document.createElement("button")
        buttons.innerHTML=obName
        document.body.appendChild(buttons);
     }
   })
   .catch(function (error) {
     console.log(error);
   });
*/

//B
/*
 async function execute() {
   try {
     let result = await fetch("http://jsonplaceholder.typicode.com/users");
     let outPutID = await result.json();
     //console.log(outPutID);
     for (let index = 0; index < outPutID.length; index++) {
      var obName=outPutID[index].name
      var buttons=document.createElement("button")
      buttons.innerHTML=obName
      document.body.appendChild(buttons);
      buttons.addEventListener('click',
      function () {
        let para=document.createElement('p')
        document.body.appendChild(para);
        //para.innerHTML= Object.entries(outPutID[index]);
        para.innerHTML= JSON.stringify(outPutID[index])

      }
      );

      }
     }
      catch (error) {
     console.log(error);
     }
 }

 execute();
*/

// خلي بالك الفرق بينه وبين ال فوق وليه ف التاسك حاطط اللينك د 
async function execute() {
  try {
  
    //console.log(outPutID);
    for (var index = 0; index < 10; index++) {
      let x=index+1
     let result = await fetch(`http://jsonplaceholder.typicode.com/users/${x}`);
     let outPutID = await result.json();
     var obName=outPutID.name
     var buttons=document.createElement("button")
     buttons.innerHTML=obName
     document.body.appendChild(buttons);
     buttons.addEventListener('click',
     function () {
       let para=document.createElement('p')
       document.body.appendChild(para);
       //para.innerHTML= outPutID;
       //para.innerHTML= Object.entries(outPutID);
       para.innerHTML= JSON.stringify(outPutID)

     }
     );

     }
    }
     catch (error) {
    console.log(error);
    }
}

execute();
