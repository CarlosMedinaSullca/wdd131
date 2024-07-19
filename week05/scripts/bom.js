
const input= document.querySelector('#favchap');
const button= document.querySelector('button');
const list= document.querySelector('#list');

let chaptersArray= getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', function() {
    if (input.value.trim() !== '') { 
        
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value='';
        input.focus();
    }
    else {
        input.focus();
    }
} );

function displayList(item) {
    let newList= document.createElement('li');
    let deleteButton= document.createElement('button');
        
    newList.textContent= item;
    deleteButton.textContent= '❌';
    deleteButton.classList.add('delete');
        
    newList.append(deleteButton);
    list.appendChild(newList);

    deleteButton.addEventListener('click', () => {
        list.removeChild(newList);
        deleteChapter(newList.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter= chapter.slice(0, chapter.length -1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}