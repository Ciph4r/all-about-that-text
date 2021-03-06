# All About That Text

### Introduction

We've been making event listener functions that take in input in two ways: what was clicked, and what's the current state of our app. For this project. the focus will be looking at what was clicked and what was typed into our input box.

Because we're all about that text, 'bout that text, no pictures.

Sorry about getting that stuck in your head!


### Tools We'll Learn, Practice, And Begin To Master

* Event listener functions.
* Reading strings from input boxes.
* String building and manipulation.
* Keeping our back end and front end separate.
* Function expressions.
* Creating, appending, and removing elements.


### Features Specifications

* The user can click on any of the five buttons and get the appropriate result printed on the screen. (Feel free to run `npm test` to see the functions needed for each button if you haven't already finished that back-end portion.)
* The result will be cleared and replaced by any further button clicks by the user.
* STRETCH GOAL: The input box will be cleared of text and re-focused as soon as a button is pushed.


### Technical Guidelines

* Every function should be a function expression in the form:

```javascript
const add = function(x, y) {
  return x + y;
}
```

* The back end and front end should be separate files. Make sure they're linked in your html, and in the right order--code needs to be placed AFTER code it uses, whether that's within a JS file or when loaded into an html file. The names we've picked out are `main.js` for your front-end code and `back-end.js` for the logic functions, but feel free to rename them!


### Okay... Helper Functions First

**printValue**
* We need a function that can take in a value and put it on the DOM. The way we'll use it is simple:

```javascript
printValue(someValueWeWantOnTheScreen);
```

We'll just place a value we want on the DOM in that function, and then it will work like `console.log`, only for our particular DOM.

This can be done in just four steps:

1. Create a list item. (`document.createElement` if you've forgotten!)
2. Set the value passed in as a parameter as the text inside that `li` (use `.innerText`!).
3. Query the `result` list that we've set aside as a printing area. Check `index.html` to see what query might work!
4. Append the list item we made to that list.

**IMPORTANT**: test that it works! This is **important** because otherwise if our later functions don't work, we won't be sure the problem is actually IN those functions, and not in this one.

So! Launch your app in your browser (perhaps via VS Code's LiveServer extension?) and, in the dev tools console, call your function with some value (maybe 'hello', maybe 3... could be anything). If it shows up as an `li` on your DOM, you've done it!

**clearResults**

The other helper function we'll need is something to clear the results that `printValue` prints out. It can be used something like this:

```javascript
clearResults();
```

No need to pass anything in, because we're not being more specific than, "Clear all the results from our one results console."

So our function will need to:

1. Query ALL the `li`s that are children of the results area.
2. Loop through those `li`s, removing them all. (You can simply call any element's `.remove` method to tell it to kindly show itself out.)

Note: there are definitely other ways to clear our results. Any way is acceptable, except for forcing a page reload. Dont... don't do that. It's not terrible right now, but would be in most apps!

**IMPORTANT**: test that this one works too! Call `printValue` a couple of times with some values thrown in, and then try calling `clearResults` and see if they get removed.


### Click Handlers

A "click handler" is simply a function that you've set to handle click events. (With the vanilla JavaScript we're using, that's via the `.addEventListener` method.) We're going to add one for each button on our page so that each button will do its own unique job.

For now, let's skip adding event handlers. Let's just make some functions and call them manually so we know that part's working; otherwise, when things go wrong, we won't know which aspect is breaking down, the function itself or the connection to the button.

**Here are the steps each function will need to take:**

1. Call our result-clearing helper function to ensure we're working with a clean slate.
2. Query the input box and save that DOM element in a variable--we'll have to access it more than once in the function, so saving it means we won't have to query it again.
3. Grab the text from the input box element. Do some research to find out what property it's in, but I'll tell you that it's NOT in `.innerText`!
4. Pass that value to the appropriate back-end function for the button the user pressed, which should spit us back out what the user wanted.
5. Pass that value to our printing helper function.
6. Stretch goal: clear out the text the user typed in and re-focus the input box. This is nice for the user and also for testing your app; it'll make it much much faster to try different inputs with different buttons. Both will use the input box element, and for the first part, you can use the same property you used to READ the input box's text, but this time you can WRITE to it. For the focus part, there's a method for that; just figure out what it is and then call it! **NOTE**: once again, you COULD reload the page for clearing the input box, but don't do it!
7. If you completed the previous step, you could add the input-box-focus code to the global scope, so that we also focus the input box when the page loads up. This will be nice for the user but especially nice for the development process, as your live server will be reloading the page all the time, and it'll be nice not to have to find that input box every time!


**Testing Your Function**

The best way to test this function is to write something in the input box, then call the function in the console window. If it worked, the value should be printed to our results element!

**Other Buttons**

Once you've got that working, write and test functions for each of the other buttons. Most of the code will be the same, except for which back-end function you'll call.

Now to wire it all up!


### Last Step: Adding Event Listeners

Home stretch, and the easy part!

1. Query the DOM elements for each button.
2. For each one, add an event listener to its matching function.

**Testing**

Now you can test! Just type in some input to the input box and press the respective button. Fix the inevitable bug or two and you've got it! You did it! You're DONE.


### Further Stretch Goals

1. It's kind of weird that this is all presented as one app, isn't there? It's really five seperate. What about giving each button its own input box? You'll have to query a different input box every time, and lay the groundwork in the html. The CSS is already there, though, so you should be able to use the style classes we've already put together!
2. Make some more buttons. How about one that reverses the order of WORDS in a sentence? How about one that prints out the fibonnaci numbers up to the given number? How about one that counts words in a sentence? How about YOU COME UP WITH YOUR OWN IDEAS FOR ONCE. (Sorry I snapped at you. I love you all.)
