let h1Element = document.body.children [0];
h1Element = document.body.children[0];

console.dir(h1Element)

h1Element.parentElement

console.dir(h1Element.parentElement)

h1Element.nextElementSibling

console.dir(h1Element.nextElementSibling)


document.getElementById('first-title')

let firstTitle = document.getElementById('first-title')

console.dir(firstTitle)

document.querySelector('highlighted-paragraph')

let highlightedParagraph = document.querySelector('.highlighted-paragraph')

console.dir(highlightedParagraph)

document.querySelector('p').textContent = ('This is a new text created by me')

//learn this section very well.

let link = document.createElement('a')
link.href = 'http://google.com'
link.textContent = 'this sends you to google home page'


let firstParagraph = document.querySelector('p')
 
firstParagraph.append('link');


