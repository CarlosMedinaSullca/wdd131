const input= document.querySelector('input');
const button= document.querySelector('button');
const list= document.querySelector('ul');

const newList= document.createElement('li');
const assoButton= document.createElement('button');

newList.textContent= input.value;
assoButton.textContent= '❌';

newList.append(assoButton);
list.appendChild(newList);

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {};
    else {
        input.focus();
    };
} )
