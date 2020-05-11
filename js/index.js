// Your code goes here




// Using your index.js file, create 10 unique event listeners. using your creativity to make the Fun Bus site more interactive. Here are some unique events you could try to use:
//  mouseover
//  keydown
//  wheel
//  click
//  load
//  focus
//  resize
//  scroll
//  select
//  dblclick
// Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

//  Nest two similar events somewhere in the site and prevent the event propagation properly
//  Stop the navigation items from refreshing the page by using preventDefault()


// Use 10 unique event listeners
// 1. Mouseover

let navHomeMouseOver = document.querySelectorAll('.nav-link')[0].addEventListener('mouseover', (e) => {e.target.style.color = 'red';})


// 2. Keydown

let navAboutKeyDown = document.querySelectorAll('.nav-link')[1].addEventListener('keydown', (e) => {e.target.style.color = 'green';})


// 3. Wheel

let navBlogWheel = document.querySelectorAll('.nav-link')[2].addEventListener('wheel', (e) => {e.target.style.color = 'red';})


// 4. click

let navContactClick = document.querySelectorAll('.nav-link')[3].addEventListener('click', (e) => {e.target.style.color = 'blue';})


