// Write your code here!
const element = document.createElement('div');
document.body.appendChild(element);
const ul = document.createElement('ul');
for (let i = 0; i < 3; i++) {
  const li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}
element.appendChild(ul);
element.style.border = '2px solid black';
element.style.fontSize = '24px';
element.style.marginLeft = '30px';
element.style.lineHeight = 2;
const mainNode = document.querySelector('#main');
mainNode.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Joe is the champion!'
document.body.appendChild(newHeader);
