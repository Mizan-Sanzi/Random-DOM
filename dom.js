console.log("hello DOM");
let textOfTextBox;
document.getElementById("text-box").addEventListener("keyup", function(event){
console.log(event.target.value);
})
console.log(document);
const student = {
    name : 'Abul',
    age : 35,
    homeTown: 'Dhaka',
    subject : 'Physics',
    study : function(time){
        console.log(time, 'studying...')
    }
}
// console.log(document.getElementsByTagName('li'));
console.log(student);
const listItems = document.getElementsByTagName('li');
for (const li of listItems){
    console.log(li);
};
const allHeadings = document.getElementsByTagName('h1');
for (const heading of allHeadings){
    console.log(heading);
    console.log(heading.innerText);
}

//get elements by class name
const listHeading = document.getElementsByClassName('list-head'); // correction needed!
console.log(listHeading);
// /* for (const listHead of listHeading){
//     console.log(listHead);
//     console.log(listHead.innerText);
// } */
const changeText = document.getElementById('main-one');
changeText.innerText = 'Text changed by javascript';

//vid: 25.4 
//querySelectorAll
const someLi = document.querySelectorAll('li');
console.log(someLi);
for (const li of someLi){
    console.log(li.innerText);
}
const otherLi = document.querySelector('.list-head');
console.log(otherLi);
for (const list of otherLi) {
    console.log(list.innerText);
}

//vid: 25.5 
//Get Attribute
