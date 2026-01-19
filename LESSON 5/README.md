# Lesson 5: Advanced JavaScript Playground

## Overview
This playground helps you practice advanced JavaScript concepts. Modify the commented lines in each file to experiment and see results instantly!

## Files Structure

- **index.html** - Main playground interface
- **script.js** - DOM manipulation and main logic
- **nestedArrays.js** - Nested arrays, for...of, for...in, forEach
- **modernSyntax.js** - Arrow functions, template literals, ternary operators, short-circuiting
- **arrayMethods.js** - .map(), .filter(), .find(), spread operator, rest operator, .includes()
- **storage.js** - localStorage practice
- **modules.js** - Export/import examples

## How to Use

1. Open `index.html` in your browser
2. Open the browser's Developer Console (F12 or Cmd+Option+I)
3. Find the commented lines (marked with `// Try:`) in each JavaScript file
4. Modify those lines to experiment
5. Refresh the page to see your changes

## What to Modify

### Section 1: DOM Manipulation
**File:** `script.js`

**1.1 DOM Selectors (Lines 20-49)**
This section demonstrates three different ways to select elements:
- **querySelector** (Line 30): Selects the FIRST element matching the selector. Returns one element.
- **querySelectorAll** (Line 38): Selects ALL elements matching the selector. Returns a NodeList.
- **getElementsByClassName** (Line 45): Selects ALL elements with the class. Returns an HTMLCollection (live collection).

**Lines to modify:**
- **Line 16-17**: Try `innerHTML` instead of `textContent`, or add styles
- **Line 32-34**: Change `.demo-class` selector to `#someId` or `p`, or add console.log
- **Line 40-41**: Try forEach on querySelectorAll results
- **Line 47-48**: Try Array.from() on getElementsByClassName results
- **Line 64-66**: Modify event handler - try `e.target` or add more styles
- **Line 81**: Change `innerHTML` format or add styling

### Section 2: Nested Arrays & Modern Loops
**File:** `nestedArrays.js`

**Lines to modify:**
- **Line 18-19**: `findInGrid()` - Try different return format or use for...of loops
- **Line 32-34**: `sumArray()` - Try filtering positive numbers, multiply, or use reduce
- **Line 45-47**: `findMax()` - Try finding minimum, use Math.max, or start from index 1
- **Line 60-62**: `getObjectValues()` - Return keys instead, key-value pairs, or filter properties
- **Line 82-84**: `doubleInPlace()` - Triple, square, or only double positives

### Section 3: Modern Syntax
**File:** `modernSyntax.js`

**Lines to modify:**
- **Line 10**: `getCard()` - Convert to one-liner arrow function (see comment)
- **Line 19-20**: `add()` - Change to multiply or add third parameter
- **Line 23-24**: `greet()` - Modify greeting format or add toUpperCase
- **Line 27-28**: `getStatus()` - Change status text or add more states
- **Line 31-32**: `getEmail()` - Access different nested properties
- **Line 42-44**: `showMessage()` - Modify return format or add conditions
- **Line 49-51**: `getUsername()` - Add more fallback options or use nullish coalescing
- **Line 55**: `getDisplayName()` - Already uses short-circuiting, try adding more conditions

### Section 4: Array Methods
**File:** `arrayMethods.js`

**Lines to modify:**
- **Line 11**: `doubleNumbers()` - Change `num * 2` to `num * 3`
- **Line 20**: `filterGreaterThan5()` - Change condition to `< 5`
- **Line 29-31**: `findNumber()` - Find with different conditions (greater than, divisible by, less than)
- **Line 40-42**: `combineArrays()` - Reverse order, insert item in middle, or remove duplicates
- **Line 79-81**: `sumAll()` - Use reduce, multiply all, or calculate average
- **Line 96-98**: `hasAdminAccess()` - Add more roles or make case-insensitive

### Section 5: Local Storage
**File:** `storage.js`

**Lines to modify:**
- **Line 13-15**: `saveItem()` - Add timestamp, use unshift, or change key name
- **Line 35**: `loadItems()` - Modify display format in innerHTML
- **Line 58-59**: `clearStorage()` - Clear ALL localStorage or add confirmation dialog

### Section 6: Modules
**File:** `modules.js`

**What to try:**
- All exports are already working - see examples
- Try importing in a new file (requires local server)
- Experiment with named vs default exports
- See import examples in comments (lines 52-63)

## Tips

- Look for lines starting with `// Try:` - these are suggestions for modifications
- Check the browser console for errors
- Use `console.log()` to debug
- Refresh the page after making changes
- Test each modification individually
