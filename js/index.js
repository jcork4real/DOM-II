// Your code goes here




// Using your index.js file, create 10 unique event listeners. using your creativity to make the Fun Bus site more interactive. Here are some unique events you could try to use:
//  mouseover
//  keydown
//  wheel
//  click
//  mouseenter
//  mouseleave
//  mouseup
//  dblclick
//  contextmenu
//  mouseout
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


// 5. mouseenter

let welcomeMouseEnter = document.querySelectorAll('p')[0].addEventListener('mouseenter', (e) => {e.target.style.color = 'green';}) 

// 6. mouseleave

let welcomeMouseLeave = document.querySelectorAll('.text-content')[0].addEventListener('mouseleave', (e) => {e.target.style.color = 'green';}) 

// 7. mouseup

let welcomeMouseUp = document.querySelectorAll('.text-content')[1].addEventListener('mouseup', (e) => {e.target.style.color = 'green';}) 

// 8.dblclick

let welcomeDblClick = document.querySelectorAll('.content-destination')[0].addEventListener('dblclick', (e) => {e.target.style.color = 'green';}) 

// 9. contextmenu


let welcomeSelect = document.querySelectorAll('h4')[0].addEventListener('contextmenu', (e) => {e.target.style.color = 'red';}) 


// 10.  mousout

let welcomeMouseOut = document.querySelectorAll('h4')[1].addEventListener('mouseout', (e) => {e.target.style.color = 'red';}) 