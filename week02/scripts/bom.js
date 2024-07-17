
const input= document.querySelector('#favchap');
const button= document.querySelector('button');
const list= document.querySelector('#list');


button.addEventListener('click', function() {
    if (input.value.trim() !== '') { 
        
        const newList= document.createElement('li');
        const deleteButton= document.createElement('button');
        
        newList.textContent= input.value;
        deleteButton.textContent= '❌';
        
        newList.append(deleteButton);
        list.appendChild(newList);

        deleteButton.addEventListener('click', () => {
            list.removeChild(newList);
        });
    }
    else {
        input.focus();
    }
} );
