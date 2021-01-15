var words = ['minecraft', 'pindakaas', 'zeven', 'ring', 'water', 'luidspreker', 'soms', 'letterlijk', 'kat', 'bitter', 'kanon', 'lood', 'adel', 'maag', 'koe', 'varken', 'geit', 'hond', 'huizen', 'boederij', 'vleugel', 'vogel', 'vereneging', 'bejaarde', 'wereldreis', 'rijbewijs', 'kleuren', 'dronken', 'illustratie', 'formule', 'lawine', 'publiceren', 'smokkelen', 'aansprakelijkheidswaardevaststellingsveranderingen'];
var word = words[Math.floor(Math.random() * words.length)];
var lives = 5;
var wordArray = word.split('');
var wordArrayOriginal = word.split('');
var audio = new Audio('sounds/ding-sound-effect_1.mp3');
var lose = new Audio('sounds/lose.mp3');
var win = new Audio('sounds/victorymp3.mp3');

document.querySelector('#retry').disabled = true;
document.querySelector('#levens').innerHTML = lives;


for(var i = 0; i < wordArray.length; i++){
    document.querySelector('#letterGuess').innerHTML += "_";
}

var wordReplace = document.querySelector('#letterGuess').innerHTML;
var wordReplaceArray = wordReplace.split('');

checkLives();

function main(){
    var inputField = document.querySelector('#letter').value;

    if(document.querySelector('#letter').value.length >= 2){
        alert('Vul maar 1 character in');
    } else {
        if(wordArray.includes(inputField)){
            console.log('Dit letter zit in het woord.')
            audio.play();
            for(var i = 0; i < wordArray.length; i++){
                if(inputField == wordArray[i]){         
                    wordArray.splice(i, 1);
                } 
            }

            for(var j = 0; j < wordArrayOriginal.length; j++){
                if(inputField == wordArrayOriginal[j]){
                    wordReplaceArray[j] = wordArrayOriginal[j];
                    document.getElementById('letterGuess').innerHTML = wordReplaceArray;
                }
            } 
        } else {
            console.log('dit letter zit niet in het woord.');

            anime({
                targets: '#btn',
                translateX: [0, 10, -10, 0],
                duration: 300,
                easing: 'linear'
            });

            lives -= 1;
            checkLives();
            if(lives <= 0){
                lose.play();
                document.querySelector('#gameOver').innerHTML = "Game Over";
                document.querySelector('#btn').disabled = true;
                document.querySelector('#retry').disabled = false;
            }
        }

        if(wordReplaceArray.join('') == wordArrayOriginal.join('')){
            win.play();
        }

        document.querySelector('#levens').innerHTML = lives;
    }
}



function checkLives(){
    switch(lives){
        case 0:
            console.log('Geen levens over');
            document.querySelector('#imgHang').src = "images/hang5.png";
            break;
        case 1:
            console.log('1 leven over');
            document.querySelector('#imgHang').src = "images/hang4.png";
            break;
        case 2:
            console.log('2 live left');
            document.querySelector('#imgHang').src = "images/hang3.png";
            break;
        case 3:
            console.log('3 live left');
            document.querySelector('#imgHang').src = "images/hang2.png";
            break;
        case 4:
            console.log('4 live left');
            document.querySelector('#imgHang').src = "images/hang1.png";
            break;
        case 5:
            console.log('5 live left');
            document.querySelector('#imgHang').src = "images/hang0.png";
            break;
    }
}