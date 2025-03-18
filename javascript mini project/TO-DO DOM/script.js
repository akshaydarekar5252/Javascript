let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let input = document.querySelector('input');

btn.addEventListener('click', function() {
    let item = document.createElement('li');
    item.innerText = input.value;

    let delBtn = document.createElement('button');
    delBtn.innerText = 'delete';
    delBtn.classList.add('delete');
    item.appendChild(delBtn);



    ul.appendChild(item);
    input.value = '';//clears the input field
});



//we use this event delegation for to delete all buttons



ul.addEventListener('click', function(event) {
    if(event.target.nodeName == 'BUTTON') {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log('delete button clicked');
    }
});




//it is not works on all buttons so we use the event delegation for that 


// let delBtns = document.querySelectorAll('.delete');
// for(delBtn of delBtns) {
//     delBtn.addEventListener('click', function() {
//        let par = this.parentElement;
//          par.remove();

//     });
// }