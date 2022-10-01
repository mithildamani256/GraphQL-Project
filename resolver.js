const request = require("request");
const {fetchToCurl} = require("fetch-to-curl");
const { CORE_COMMENT_FIELDS } = require('./fragments');

 var XMLHttpRequest = require('xhr2');

 var customerProfile;
const resolvers = {
  Query: {

    oneAppUserIdQuery: (id) =>
    {

      const url = "https://nvly8z5v47.execute-api.ap-south-1.amazonaws.com/dev/v1/customers/search";
      var data = `{
          "oneAppUserId": "OAED175FB0EBB611ECAE6BDF648E6E430A"
      }`;



      function getResponse(url){
          return new Promise(function(resolve,reject){
              var xhr = new XMLHttpRequest();
              xhr.open('post',url);
              xhr.setRequestHeader("Content-Type", "application/json");
              xhr.onload = function () {
                  var status = xhr.status;
                  if(status = 200){
                    var json = JSON.parse(xhr.responseText);
                    console.log(json);
                    customerProfile = json.customerProfile;
                     resolve(customerProfile);
                  }else{
                      reject(status);
                  }
              };
              xhr.send(data);
          })
      }

 async function finalresponse ()
 {
   var y = await getResponse(url);
   return y
 }

 var z = finalresponse();
 return z;
},

emailIdQuery: (emailId) =>
    {

      const url = "https://nvly8z5v47.execute-api.ap-south-1.amazonaws.com/dev/v1/customers/search";
      var data = `{

    "email": "srtbatter@gmail.com"

      }`;

      function getResponse(url){
          return new Promise(function(resolve,reject){
              var xhr = new XMLHttpRequest();
              xhr.open('post',url);
              xhr.setRequestHeader("Content-Type", "application/json");
              xhr.onload = function () {
                  var status = xhr.status;
                  if(status = 200){
                    var json = JSON.parse(xhr.responseText);
                    // console.log(json);
                    customerProfile = json.customerProfile;
                     resolve(customerProfile);
                  }else{
                      reject(status);
                  }
              };
              xhr.send(data);
          })
      }

 async function finalresponse ()
 {
   var y = await getResponse(url);
   return y
 }

 var z = finalresponse();

 return z;
},

panNumberQuery: (pan) =>
    {

  const url = "https://nvly8z5v47.execute-api.ap-south-1.amazonaws.com/dev/v1/customers/search";
  var data = `{
        "pan":  "QWERA1234P"
      }`;

      function getResponse(url){
          return new Promise(function(resolve,reject){
              var xhr = new XMLHttpRequest();
              xhr.open('post',url);
              xhr.setRequestHeader("Content-Type", "application/json");
              xhr.onload = function () {
                  var status = xhr.status;
                  if(status = 200){
                    var json = JSON.parse(xhr.responseText);
                    console.log(json);
                    customerProfile = json.customerProfile;
                     resolve(customerProfile);
                  }else{
                      reject(status);
                  }
              };
              xhr.send(data);
          })
      }

 async function finalresponse ()
 {
   var y = await getResponse(url);
   return y
 }

 var z = finalresponse();

 return z;


},

phoneNumberQuery: (number) =>
    {
  const url = "https://nvly8z5v47.execute-api.ap-south-1.amazonaws.com/dev/v1/customers/search";
  var data =
    `{
    "mobile": {
        "countryCode": "91",
        "number": "9900030100"
    }
}`
      ;

      function getResponse(url){
          return new Promise(function(resolve,reject){
              var xhr = new XMLHttpRequest();
              xhr.open('post',url);
              xhr.setRequestHeader("Content-Type", "application/json");
              xhr.onload = function () {
                  var status = xhr.status;
                  if(status = 200){
                    var json = JSON.parse(xhr.responseText);
                    console.log(json);
                    customerProfile = json.customerProfile;
                     resolve(customerProfile);
                  }else{
                      reject(status);
                  }
              };
              xhr.send(data);
          })
      }

 async function finalresponse ()
 {
   var y = await getResponse(url);
   return y
 }

 var z = finalresponse();

 return z;
},
}
}

;

module.exports = { resolvers };








      //
      // async function handleRequest(){
      //     try{
      //         var res = await getResponse(url);
      //         var json = JSON.parse(res);
      //         customerProfile = json.customerProfile;
      //         // console.log(json);
      //         // console.log(customerProfile);
      //         return customerProfile;
      //     }catch(error){
      //         console.log(error)
      //     }
      // }

// handleRequest().then(response=>{
// let x = response
// console.log(x);
// })
// .catch(error=>{console.log(error);});
//


//
// var url = "https://nvly8z5v47.execute-api.ap-south-1.amazonaws.com/dev/v1/customers/search";
//
// var xhr = new XMLHttpRequest();
// xhr.open("POST", url);
//
// xhr.setRequestHeader("Content-Type", "application/json");
//
//  xhr.onreadystatechange = function async () {
//    if (xhr.readyState === 4) {
//       console.log(xhr.status);
//       console.log(xhr.responseText);
//
//       var json = JSON.parse(xhr.responseText);
//        customerProfile = json.customerProfile;
//        console.log( customerProfile);
//    }};
//
//
// var data = `{
//     "oneAppUserId": "OAED175FB0EBB611ECAE6BDF648E6E430A"
// }`;
//
// xhr.send(data);
//
//     },


// "OAED175FB0EBB611ECAE6BDF648E6E430A"


// `curl --location --request POST 'https://nvly8z5v47.execute-api.ap-south-1.amazonaws.com/dev/v1/customers/search' \
// --header 'Content-Type: application/json' \
// --data-raw '{
//     "oneAppUserId": id
// }'
