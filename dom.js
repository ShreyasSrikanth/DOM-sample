//EXAMINE THE DOCUMENT OBJECT
//console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// document.all[10].textContent="Hello"
//console.log(document.images)

//GETELEMENTBYID
// console.log(document.getElementById('header-title'))
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent="Hello";
// headerTitle.innerText = "Goodbye";
//console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom="solid 3px #000";

// var list = document.getElementById('items');
// list.style.color="green";
// list.style.fontWeight="bold";
// console.log(list);
// var element = document.getElementsByClassName('list-group-item');
// element[2].style.fontWeight = 'bold';
// element[2].style.backgroundColor='green'
//Gives error because getElementsByClassName is an array
//element.style.backgroundColor='green'

// var element2 = document.getElementsByClassName('list-group2-item');
// element2[0].textContent="ChangedText";
// console.log(element2[0]);


// var li = document.getElementsByTagName('li');
// li[3].textContent="Change text using getElementByTagName";
// console.log(li)

//QuerySelector
var header = document.querySelector('#main-header');
header.style.borderBottom='solid 4px #ccc';

var input = document.querySelector('input');
input.value="Hello world"

var submit = document.querySelector('input[type="submit"]');
submit.value = "Send"

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)')
thirdItem.style.color = 'white';

var allItems = document.querySelectorAll('li:nth-child(2)');

allItems.forEach(function(item) {
    item.style.color = 'green';
});

var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i =0; i < odd.length ; i++){
    odd[i].style.backgroundColor='green';
}

// var oddItem = document.querySelectorAll('li:nth-child(odd)');
// oddItem.style.backgroundColor = 'green';