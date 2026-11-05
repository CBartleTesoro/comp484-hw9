

# COMP 484 Homework 9

This homework 9 consisted of implementing JavaScript built-in objects and browser DOM updates.

## Live Demo

[View the project on GitHub Pages](https://cbartletesoro.github.io/comp484-hw9/)

## Built-in Objects and Methods

- `Date` and `Date.toLocaleDateString()` format the current date. Date was seen in class, but the format wasnt addecuate. First attemp wasnt good, so I went to the official Npm page to look how to get it to the proper format. Found .toLocalDateString() with the desired format, and changed parameters to adjust to US and the asked 2-digit day/month requierement.s

- `Number()`, `Number.isNaN()`, and `Number.isInteger()` convert and validate values. Number() converts, Is.NaN() checks if it is Not a Number(NaN), and .isInteger() checks if its an integer(number).

- `Array`, `Array.push()`, `Array.reduce()` and `Array.length` . They are used to store the grades and calculate their total. I havent used these since Comp 333, but it was fun to do so. Array holds the grades, Array.push() adds a new grade when the button is pressed. Array.reduce() travels through the array and returns a singular value, in this case the total sum of the grades. Array.length was used to get the number of grades, in order to calculate the average.

- `Number.toFixed()` formats the given number to the specified decimal places(specify in parenthesis). Used to format the average grade result to 2 decimal places.

- DOM APIs (`document.getElementById()`, `document.createElement()`, `Element.appendChild()`, `Element.addEventListener()`, and `Node.textContent`). As seen in class, used to find page elements, display results, create list items, and respond to button clicks. 

## Screenshot

Screenshot file: [`docs/images/page.jpg`](docs/images/page.jpg)

## Reflection

A short reflection of 4-5 sentences that answers:
-What part was easiest?
-What part was hardest?
-What did you learn about the Date object?
-What did you learn about the Number object?
-What did you learn about displaying results in the browser?

The eazies part was setting up the date, as it didnt requiere any inputs or conversions. The first attempt showed the date, but not on the correct format, so after going to the npm webpage to read more about date, i saw one function that displayed a format almost identical to the one requested. From there I used it instead, and modified it in order to match the requested format. 

The hardest part was part 3, as I had to figure out how to set up a html button and input space, and how to use the input to get the desired output, then display it. From there once I did the extra credit, I changed the pass/fail to the terniary operator, which then meant I had to include another if/else elsewhere, hence I went back to part 2 and Included it. 

I learned that the Date object provides methos to retrieve and format the current date, which is a neat practical example of what the javascrip can do.

I learned from the Number object that it can be used to convert the input value and, through the use of its functions, check wheter its actually an integer or a NaN. 

Lastly, I also learned that the browser Javascript can be used to make the front page more interactive, besides changing pages, as with the input and buttons it could change on the spot what was displayed, either updating numbers, text, or other elements displayed in the browser.