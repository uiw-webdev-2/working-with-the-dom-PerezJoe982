/**
 * Traverse the DOM tree using querySelector() and querySelectorAll()
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
 */

import Closet from "./Closet";

// Wall_Dimentions, Items, boxes, Wall_color, Door,
const My_Closet = new Closet(
  "4ft Length, 8ft Height, 2ft Deep",
  "Clothing, boxes, safe, shelf",
  "Clothing and shoes",
  "light blue",
  true
);

const content = `
     <figure class="Closet__image">
       <img src= ${My_Closet.image}alt="" />
     </figure>
     <li class="Closet__Dimentions">${My_Closet.Wall_Dimentions}</h1>
      <li> Items: ${My_Closet.Items} </li> 
      <li> boxes:  ${My_Closet.boxes} </li>
      <li> Wall_color: ${My_Closet.Wall_color} </li> 
      <li> Door: ${My_Closet.Door} </li>
     </ul> 
   </article>
 `;

const main = document.querySelector(".maincontent");


const newArticle = document.createElement('article');
newArticle.classList.add('Closet');
newArticle.setAttribute('id','everyday');
newArticle.innerHTML = content;

main.append(newArticle);

//main.innerHTML = content;



// const listItem = document.querySelector("ul li:first-child");

// listItem.classList.toggle("webdev");

// const backpackTitle = document.querySelector('h1').className;
// document.querySelector('img').setAttribute('alt', backpackTitle);
