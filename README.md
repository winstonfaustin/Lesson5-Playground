# Lesson 5: Advanced JavaScript Playground

## Overview
This is an interactive playground for learning advanced JavaScript concepts. Write and run code directly in your browser with instant feedback! No need to open separate files or refresh the page.

## Features

- **Interactive Code Editor** - Write and edit JavaScript code directly in the browser
- **Live Console Output** - See results instantly when you run your code
- **Sidebar Navigation** - Easy navigation between different lessons
- **Dark/Light Mode Toggle** - Switch between themes for comfortable coding
- **Run & Reset Buttons** - Execute code or reset to default examples
- **Keyboard Shortcut** - Press `Ctrl+Enter` (or `Cmd+Enter` on Mac) to run code

## How to Use

1. Open `index.html` in your browser
2. Use the **sidebar** on the left to navigate between lessons:
   - DOM Basics
   - Nested Arrays
   - Modern Syntax
   - Array Methods
   - Local Storage
   - Modules
3. Each lesson has:
   - **Code Editor** (left panel) - Edit the JavaScript code
   - **Console** (right panel) - See the output of your code
   - **Run Button** - Execute your code
   - **Reset Button** - Restore the default example code
   - **Clear Button** - Clear the console output
4. Modify the code in the editor and click **Run** to see results
5. Look for commented lines with `// Try:` for suggestions on what to experiment with

## Files Structure

- **index.html** - Main playground interface with all lessons
- **playground.js** - Handles code execution and console output
- **script.js** - DOM manipulation examples (optional, for reference)
- **nestedArrays.js** - Nested arrays examples (optional, for reference)
- **modernSyntax.js** - Modern syntax examples (optional, for reference)
- **arrayMethods.js** - Array methods examples (optional, for reference)
- **storage.js** - localStorage examples (optional, for reference)
- **modules.js** - Export/import examples (optional, for reference)

## Lessons

### 1. DOM Basics
Learn how to select and manipulate HTML elements using:
- `getElementById()` - Select element by unique ID
- `getElementsByClassName()` - Select elements by class
- `querySelector()` & `querySelectorAll()` - Modern CSS selector methods

**Try it:** Modify the code to change text, styles, or add event listeners!

### 2. Nested Arrays
Practice working with nested arrays and modern loop syntax:
- `for...of` - Loop through array values
- `for...in` - Loop through object properties
- `forEach()` - Execute function for each element

**Try it:** Experiment with different loop types and array operations!

### 3. Modern Syntax
Explore modern JavaScript features:
- Arrow Functions - `const add = (a, b) => a + b`
- Template Literals - `` `${name} is ${age} years old` ``
- Ternary Operator - `condition ? true : false`
- Optional Chaining - `user?.profile?.email`
- Short-Circuiting - `value && doSomething()`

**Try it:** Convert functions to arrow functions or try different syntax patterns!

### 4. Array Methods
Master essential array methods:
- `.map()` - Transform each element
- `.filter()` - Keep only matching elements
- `.find()` - Find first matching element
- Spread Operator - `[...arr1, ...arr2]`
- `.includes()` - Check if array contains value

**Try it:** Modify the operations to see different results!

### 5. Local Storage
Learn to persist data in the browser:
- `localStorage.setItem()` - Save data
- `localStorage.getItem()` - Retrieve data
- `JSON.stringify()` - Convert objects to strings
- `JSON.parse()` - Convert strings back to objects

**Try it:** Save different types of data and see how it persists!

### 6. Modules
Understand JavaScript modules:
- Named exports - `export function name() {}`
- Default exports - `export default ClassName`
- Import syntax - `import { name } from './file.js'`
- Dynamic imports - `import('./modules.js').then(module => {...})`

**Works on Vercel!** Dynamic `import()` works in all modern browsers and on Vercel deployments without needing a local server.

## Tips

- **Use the inline editor** - No need to open separate files!
- **Click Run** after making changes to see results instantly
- **Use Reset** to restore the default example code
- **Check the console** for errors if something doesn't work
- **Try the suggestions** - Look for `// Try:` comments in the code
- **Toggle theme** - Use the sun/moon icon in the header to switch themes
- **Keyboard shortcut** - `Ctrl+Enter` (or `Cmd+Enter`) to run code quickly

## Theme Toggle

Click the theme toggle button in the top right to switch between:
- **Dark Mode** - Dark backgrounds with light text (default)
- **Light Mode** - Light backgrounds with dark text

Your preference is automatically saved and will persist when you reload the page.

## About

SIM IT Club - Lesson 5 - Advanced JavaScript Playground

Live Demo: [lesson5-playground.vercel.app](https://lesson5-playground.vercel.app)
