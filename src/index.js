/* global document */

// import sum from './sum';
import './style.css';

// console.log(sum(3, 3));

const cssTest = document.createElement('h1');
cssTest.className = 'CssTest';
cssTest.innerText = 'CssTest';
document.body.append(cssTest);
