/* global document */

// import sum from './sum';
import './style.css';
import myImg from './js.png';

// console.log(sum(3, 3));

const cssTest = document.createElement('h1');
const imgTest = document.createElement('img');
cssTest.className = 'CssTest';
cssTest.innerText = 'CssTest';
imgTest.src = myImg;
document.body.append(cssTest);
document.body.append(imgTest);
