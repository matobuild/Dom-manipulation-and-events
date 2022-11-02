const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const para = document.createElement('p');
para.classList.add('para');
para.style.color = 'red';
para.textContent = 'Hey I\'m am red';
container.appendChild(para);

const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = 'I\'m a blue h3';
container.appendChild(h3);

const div = document.createElement('div');
div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';
container.appendChild(div);

const h1 = document.createElement('h1');
h1.textContent = "I\'m in a div";
div.appendChild(h1);

const p = document.createElement('p');
p.textContent = "ME TOO!"
div.append(p);

// SECOND WAY
const btn = document.querySelector('#btn');
btn.onclick = () => alert("HELLO world2");

// THIRD AND BEST WAY
const btn3 = document.querySelector('#btn3');
// btn3.addEventListener('click', () => {
//     alert("Hello world3");
// });

btn3.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });