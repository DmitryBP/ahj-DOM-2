import './style.css';

console.log('hello world')

let div = document.createElement('div');
div.className = "alert";
div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
document.body.append(div);

let div1 = document.createElement('div');
div1.className = "img";
document.body.append(div1);
