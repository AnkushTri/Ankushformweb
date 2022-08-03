// const button=document.getElementById('botton');
// if(button.value===true){
//     alert
// }
// const h2=document.querySelector('h2');
// setTimeout(() => {
//     h2.style.display='none'
// // },4000);
// function submi(){
//     alert("Your form have been submitted successfully");
// }
// button.addEventListener(onclick,function run(){
// alert("Your form have been submitted successfully");
// });
function validateform() {
    var name = document.myform.name.value;
    var age = documdng.myform.age.value;
    if (name.length < 4) {
        alert("Name is too short");
        return false;
    }
    if (age < 7 && age > 80) {
        alert("your age is too shortyou are not eligible");
        return false;
    }
}