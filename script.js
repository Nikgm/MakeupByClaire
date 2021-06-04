import models from './models.js'


const modelPics = document.querySelectorAll('main article');
const audio = document.getElementsByTagName('audio')[0];
const mainDisplay = document.querySelector('main');
const displayButton = document.getElementById('displayButton')
var showMoreCounter = 0;
for (var i=0; i < modelPics.length; i++){
    modelPics[i].addEventListener('mouseenter',function(){
        audio.play();
    })
}

for (showMoreCounter;showMoreCounter<6;showMoreCounter++){displayThumbnail(showMoreCounter)}

function displayThumbnail(showMoreCounter){
    mainDisplay.innerHTML += `<article><div id="${models[showMoreCounter].name}"></div></article>`
    document.getElementById(`${models[showMoreCounter].name}`).style.cssText = `background: url("${models[showMoreCounter].thumbnail}") no-repeat center center/cover;`
}


displayButton.addEventListener('click',function(){
    for (showMoreCounter;showMoreCounter<12;showMoreCounter++){displayThumbnail(showMoreCounter)}
})
