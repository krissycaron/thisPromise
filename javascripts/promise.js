// console.log("hi");
// //promises.. can store a bunch or instructions on getting data. 
// //you wrap the ajax call in a promise ... the por

// // 3 stages of promise(pending fullfilled rejected ) ... 

// //making 3 json files. 
// // print to the dom from 

// $(document).ready(function(){
// var dinos = [];

// function writeDOM(){
//         var domString = "";
//         for(var i=0; i<dinos.length; i++){
//             domString += `<h1>${dinos[i].type}</h1>`;
//         }
//         $("#promises").append(domString);
//     }



//ajax is fed the thing that will be returns (data1)
// $.ajax("/db/dino1.json").done(function(data1){
// 	console.log("data", data1.dino1);
// 	//takes array and makes it equal to the array 
// 	dinos = data1.dino1
// 	writeDom();
// }).fail(function(error1){
// 	console.log(error1);
// })


// pulling from multiple json files .... l
//the pryamid method doesnt allow access to all the key values form anywhere. 
//if one of these fails you will stop the code. 
// $.ajax("./db/dino1.json").done(function(data1){
//         console.log("data1", data1.dinosaurs1);
//         dinosaurs = data1.dinosaurs1
//         $.ajax("./db/dinosaurs2.json").done(function(data2){
//             console.log("data2", data2.dinosaurs2);
//             data2.dinosaurs2.forEach(function(dino){
//                 dinosaurs.push(dino);
//             })
//             $.ajax("./db/dinosaurs3.json").done(function(data3){
//             console.log("data3", data3.dinosaurs3);
//             data3.dinosaurs3.forEach(function(dino){
//                 dinosaurs.push(dino);
//             })
//             writeDOM(); 
//         }).fail(function(error3){
//             console.log(error3);
//         })
//         }).fail(function(error2){
//             console.log(error2);
//         })
//     }).fail(function(error1){
//         console.log(error1);
//     })
// this is a pyramid of doom.... to many nested elements 





// here is how it should be .. 
//writing a function per file. 
// //this would be in an iife
// var firstDino1Json = function(){
// //return = the answer .. make a copy of the promise and resole is good reject is fail 
// // .. then call ajax ... Promise is just a javascript object.. with methods

// 	return new Promise(function(resolve, reject){
// 		$.ajax("./db/dino1.json").done(function(data1){
// 		//grab the informaiton and sned it along 
// 		resolve(data1.dino1);
// 		}).fail(function(error1){
// 		reject(error1);
// 		})

// 	})
// };
// //this would be in a main.js
// //calling then is tied to resolve .. that data that comes back correctly then is resole and catch is reject
// firstDino1Json().then(function(jsondata1){
// 	console.log(jsondata1);
// 	dinos = jsondata1;
// 	writeDOM();
// }).catch(function(jsondataFail1){
// 	console.log(jsondataFail1);
// });






// });

/////////////////////////////////////////////////////////
$(document).ready(function(){

    var dinosaurs = [];


    function writeDOM(){
        var domString = "";
        for(var i=0; i<dinosaurs.length; i++){
            domString += `<h1>${dinosaurs[i].type}</h1>`;
        }
        $("#promises").append(domString);
    }


    var firstDinosaurJSON = function(){
        return new Promise(function(resolve, reject){
            $.ajax("./db/dino1.json").done(function(data1){
                resolve(data1.dino1);
            }).fail(function(error1){
                reject(error1);
            })
        })
    };



firstDinosaurJSON().then(function(jsonData1){
    console.log(jsonData1);
    dinosaurs = jsonData1;
    writeDOM();
}).catch(function(jsonDataFail1){
    console.log(jsonDataFail1);
});


Promise.all([firstDinosaurJSON(),second])


});




///////////////

