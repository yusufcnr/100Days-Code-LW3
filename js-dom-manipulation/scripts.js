//jshint esversion:6

const link = document.querySelector("a");
link.textContent = "Just Manipulating the link with Js";
link.href = "https://developer.mozilla.org";


const sect = document.createElement('section');
const para = document.createElement('p');
para.textContent = "This is paragraf";
sect.appendChild(para);

const text = document.createTextNode(' — the premier source for web development knowledge.');

const linkPara = document.querySelector('p');
linkPara.appendChild(text);

sect.appendChild(linkPara);
sect.removeChild(linkPara);

linkPara.remove();

para.style.backgroundColor = "blue";
