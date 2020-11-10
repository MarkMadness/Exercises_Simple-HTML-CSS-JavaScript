# Exercises_Simple - HTML, CSS, & JavaScript

This folder is for all my simple coding exercises for frontend development. Most of the files here will be HTML, CSS, and JavaScript work. These coding challenges come from 
The Tech Academy Roundtable, dailycodingproblem.com, and others

## TTA RoundTable Challenge 1

Given an array of numbers, return an array which contains all the even numbers in the original array, which also have even indices.

    <div>
        <p>Original Array >>> [1,2,2,3,4,2,7,8,9,6]</p>
        <p id='newArray'></p>
    </div>

    <script>
        var array = [1,2,2,4,6,2,7,8,9,6];
        var returnArray = [];
        for(var i=0;i<array.length;i+=2) {
            if (array[i] % 2 == 0){
                returnArray.push(array[i]);
            }
        }
        document.getElementById('newArray').innerHTML = "New Array >>> [" + returnArray + "]";
        console.log(returnArray);
    </script>
    
## TTA RoundTable Challenge 2

Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented 
in the following order: quarters, dimes, nickels, pennies.

    <div class='form'>
        <form>
        <label for='payment'>What is the payment amount?</label>
        <input type='text' id='payment' name='payment'>
        <label for='quarters'>How many quarters do you have?</label>
        <input type='text' id='quarters' name='quarters'>
        <label for='dimes'>How many dimes do you have?</label>
        <input type='text' id='dimes' name='dimes'>
        <label for='nickels'>How many nickels do you have?</label>
        <input type='text' id='nickels' name='nickels'>
        <label for='pennies'>How many pennies do you have?</label>
        <input type='text' id='pennies' name='pennies'>
        </form>
    </div>
    <div>
        <button type='button' onClick="payWithChange()">Calculate!</button>
        <h3>Do you have enough?</h3>
        <p id='totalChange'></p>
        <p id='finalAnswer'></p>
    </div>

    <script>
        function payWithChange() {
            var payment = document.getElementById('payment').value;
            var quarters = document.getElementById('quarters').value;
            var dimes = document.getElementById('dimes').value;
            var nickels = document.getElementById('nickels').value;
            var pennies = document.getElementById('pennies').value;

            var totalQuarters = 0.25 * quarters;
            var totalDimes = 0.1 * dimes;
            var totalNickels = 0.05 * nickels;
            var totalPennies = 0.01 * pennies;
            var totalChange = totalDimes + totalDimes + totalNickels + totalPennies;
            if(payment < totalChange){
                document.getElementById('totalChange').innerHTML = 'Your total change is ' + totalChange;
                document.getElementById('finalAnswer').innerHTML = 'Yes';
            } else{
                document.getElementById('totalChange').innerHTML = 'Your total change is ' + totalChange;
                document.getElementById('finalAnswer').innerHTML = 'No';
            }
        }
    </script>
    
## TTA Roundtable Challenge 3
    
Write a routine that reverses a string in place. Example: reverseString("Hello, World") = output: dlroW ,olleH

    <div>
        <h3>Type in a string you want reversed</h3>
        <form><input type='text' id='origin'></form>
        <button type='button' onClick='newString()'>The new string is ...</a>
        <h3 id='newString'></h3>
    </div>

    <script>
        function newString() {
            document.getElementById('newString').innerHTML = document.getElementById('origin').value.split("").reverse().join("");
        }
    </script>
## TTA Roundtable Challenge 4

Given a string, return true if the string is a palindrome and false if it isn’t. Include spaces and punctuation in deciding if the string is a palindrome.

    <div>
        <form><input type='text' id='input' placeholder='Enter a string'></form>
        <button type='button' onClick='checkPalindrome()'>Check if it's a palindrome</button>
        <h3 id='answer'></h3>
    </div>

    <script>
        function checkPalindrome(){
            var string = document.getElementById('input').value.toLowerCase();
            var reverse = string.split("").reverse().join("");
            if (string === reverse) {
                document.getElementById('answer').innerHTML = "Yes, the string is a palindrome!"
            } else {
                document.getElementById('answer').innerHTML = "No, the string is NOT a palindrome!"
            }
        }
    </script>

## TTA Roundtable Challenge 5

Write a function that takes a string as argument and returns the number of vowels contained in that string.

    <div>
        <form><input type='text' id='input' placeholder='Enter a string'></form>
        <button type='button' onClick='findVowels()'>How many vowels does it have?</button>
        <h3 id='vowelCount'></h3>
    </div>

    <script>
        function findVowels() {
            var str = document.getElementById('input').value.split("");
            var count = 0;
            for(var i=0;i<str.length;i++){
                if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
                    count++;
                }
            }
            document.getElementById('vowelCount').innerHTML = count;
        }
    </script>

