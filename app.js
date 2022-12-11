

let formAdd = document.getElementById('add-item');

formAdd.addEventListener('submit', (e) => {
    let ul = document.getElementsByTagName('ul')[0];

    e.preventDefault();

    let text = formAdd.querySelector('input').value;
    formAdd.querySelector('input').value = null;

    let li = document.createElement('li');
    let productName = document.createElement('span');
    let deleteButton = document.createElement('span');
    let editButton = document.createElement('span');

    li.appendChild(productName);
    li.appendChild(deleteButton);
    li.appendChild(editButton);

    ul.appendChild(li);

    productName.textContent = text;
    deleteButton.textContent = 'delete';
    editButton.textContent = 'edit';

    productName.classList.add('name');
    deleteButton.classList.add('delete');
    editButton.classList.add('edit');
})

let productListUL = document.querySelector('#product-list ul');
productListUL.addEventListener('click', (e) => {
    let target = e.target;
    //console.log(target);
    if (target.className == "delete") {
        let li = target.parentElement;
        li.remove();
    }

    if (target.className == 'edit') {
        let li = target.parentElement.children[0];

        let input = document.createElement("input");
        input.setAttribute("type", "text");

        let myValue = li.innerHTML;
        input.setAttribute("value", myValue);
        li.innerHTML = '';
        
        li.appendChild(input);

        let button = document.createElement('button');
        button.innerHTML = "Done";
        li.appendChild(button);

        button.addEventListener('click', function(){
            li.innerHTML = input.value;
        })
    }
})





