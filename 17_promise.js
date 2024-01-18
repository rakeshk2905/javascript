// const isNotesAvailable = false;
// const promiseNotes = new Promise(function (success, reject) {
//   if (isNotesAvailable) {
//     success(`Sharing the notes..Here you go..`);
//   }
//   reject(`sorry guys...i didn't get time`);
// });

// promiseNotes
//   .then(function (success) {
//     console.log(success);
//     console.log(`Thanks you master`);
//   })
//   .catch(function (reject) {
//     console.log(`${reject}`);
//     console.log(`very khadus master`);
//   })
//   .finally(function () {
//     console.log(`i must have my notes`);
//   });

//using arrow function
const isNotesAvailable = false;
const promiseNotes = new Promise( (success, reject) => {
  if (isNotesAvailable) {
    success(`Sharing the notes..Here you go..`);
  }
  reject(`sorry guys...i didn't get time`);
});

promiseNotes
  .then( success => {
    console.log(success);
    console.log(`Thanks you master`);
  })
  .catch(reject => {
    console.log(`${reject}`);
    console.log(`very khadus master`);
  })
  .finally( ()=> {
    console.log(`i must have my notes`);
  });
















