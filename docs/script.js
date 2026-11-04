// ==========================
// Part 1: Date Display
// ==========================

// TODO:
// 1. Create a Date object
// 2. Get the current month, day, and year
// 3. Adjust month if needed (JavaScript months are 0-based)
// 4. Add leading zeros to month/day if needed
// 5. Create a string in the format: "Today is MM/DD/YYYY"
// 6. Display the result in the element with id="dateOutput"

// ==========================
// Part 2: Number Conversion
// ==========================

// TODO:
// 1. Create at least 4 separate variables:
//    - at least 2 numeric strings (example: "42")
//    - at least 1 decimal string (example: "19.75")
//    - at least 1 non-numeric string (example: "hello")

// TODO:
// 2. For EACH variable:
//
//    a. Convert the value using Number()
//    b. Check if it is NaN using Number.isNaN()
//    c. Check if it is an integer using Number.isInteger()

// TODO:
// 3. For EACH value, create a sentence showing:
//    - original value
//    - converted value
//    - whether it is NaN
//    - whether it is an integer
//
// Example format (you must create your own variables):
// "Original: '42' -> Converted: 42 -> isNaN: false -> isInteger: true"

// TODO:
// 4. Combine all your results into ONE string
//    (you can use + to join multiple strings)

// TODO:
// 5. Display the final result inside the element:
//    id="numberConversionOutput"

// ==========================
// Part 3: Math & Formatting
// ==========================

// TODO:
// 1. Create at least 2-3 numeric variables
//
// 2. Perform calculations:
//    - at least one addition
//    - at least one other operation (subtract, multiply, or divide)
//
// 3. Use at least ONE of the following:
//    - toFixed()
//    - toLocaleString()
//    - Number.parseInt()
//    - Number.parseFloat()
//
// 4. Build a string showing your results
//
// 5. Display the results inside the element with id="mathOutput"

// ==========================
// Part 4: Conditionals
// ==========================

// TODO:
// 1. Write at least TWO if/else statements
//
// Ideas:
// - check if a value is NaN
// - check if a number is an integer
// - check if a result is greater than a certain value
//
// 2. Display a message on the page based on the condition
//    (append it to an existing section or create a new message)


//--------------------------------------------------------------------------------//
// PART 1: Date Display ///

// Display the current date
//const dateOutput = document.getElementById('dateOutput'); // Get the element to display the date
//const currentDate = new Date();
//dateOutput.textContent = `Current Date: ${currentDate.toDateString()}`;
//This above was my first attempt at displaying the date. It worked, but it was not being displayed in the requested format.

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString("en-US", { //while going throught the npn date documentation, i saw the tolocaldatestring command, which gave a similar format to the one asked, but without the leading zeros and with the standard day/month/year format. By specifiying the "en-US", I was able to change the format to the requested one.
  month: "2-digit",
  day: "2-digit",
  year: "numeric"
  //These specifications(month, day, year) make it so it is not displayed as a sinle digit if its a number from 1-9. I recall in class classmates were using padSTart to add leading zeros, but this was a simpler way to do it since toLocaleDateString is one element rather than day/month/year being individual ones.
});

document.getElementById("dateOutput").textContent =
  `Today is ${formattedDate}`;


//--------------------------------------------------------------------------------//
// PART 2: Number Conversion ///

const number = "183"
const float = "99.99"
const string = "Stuart"
const isNumber = "45"

// Convert the values using Number()
var numberConverted = Number(number);
var floatConverted = Number(float);
var stringConverted = Number(string);
var isNumberNumber = Number(isNumber); 
//At first i tought that now that they were converted that I could use the isString or IsNan to the vars, which didnt work, as they are not objects. So I used the Number.IsNaN() and Number.IsInteger() with the values inside parenthesis.

document.getElementById("numberConversionOutput").textContent =
  `Original value: "${number}" → Converted: ${numberConverted} → isNaN: ${Number.isNaN(numberConverted)} → isInteger: ${Number.isInteger(numberConverted)} \n
  Original value: "${float}" → Converted: ${floatConverted} → isNaN: ${Number.isNaN(floatConverted)} → isInteger: ${Number.isInteger(floatConverted)} \n
  Original value: "${string}" → Converted: ${stringConverted} → isNaN: ${Number.isNaN(stringConverted)} → isInteger: ${Number.isInteger(stringConverted)} \n
  Original value: "${isNumber}" → Converted: ${isNumberNumber} → isNaN: ${Number.isNaN(isNumberNumber)} → isInteger: ${Number.isInteger(isNumberNumber)}`;

  //--------------------------------------------------------------//
  // PART 3: Math and Number Formatting --  option B ///
/*Option B: Grade score calculator
Use values like:

grade scores
Then calculate:

total score
average score
Display the average with toFixed(2).
*/

const grades = new Array(); //array to store the grades.

const gradeInput = document.getElementById("gradeInput");
const gradeList = document.getElementById("gradeList");
const gradeOutput = document.getElementById("gradeOutput");
const mathOutput = document.getElementById("mathOutput");

function buttonClick() {
    const inputValue = gradeInput.value; 
    const grade = Number(inputValue); //convert inputValue to a number, if its a number.

    if(!Number.isInteger(grade) || Number.isNaN(grade) || grade < 0 || grade > 100) { //if its not an integer or out of valid range, it will fail.
        gradeOutput.textContent = "Please enter a valid grade between 0 and 100.";
        return;
    }

    grades.push(grade); //add the grade to the array.

    const listItem = document.createElement("li");
    listItem.textContent = grade; 
    gradeList.appendChild(listItem);//add the grade to the list.

    //now to update the total and average.
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    //reduce adds each number in the array and sums it up. We saw it in Comp 333 with prof Kyle Dewey. With sum + grade, 0, it means it will take first value, starting 0 as given in the right, add it, go to next value, add it, and so on until it reaches the end of the array. Its called reduce because it reduced an array to a single value.

    const average = total / grades.length; //We divide the total by the number of grades to get the average.

    gradeOutput.textContent = `Total: ${total} `;
    mathOutput.textContent = `Average: ${average.toFixed(2)}`;
}

document.getElementById("addGradeButton").addEventListener("click", buttonClick); //when the button is clicked, it will call the function.

