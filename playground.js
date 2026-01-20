// Playground functionality for code editor and console

function createPlayground(editorId, consoleId, defaultCode) {
    const editor = document.getElementById(editorId);
    const consoleOutput = document.getElementById(consoleId);
    
    if (!editor || !consoleOutput) return;
    
    // Find buttons in the same playground
    const playground = editor.closest('.playground');
    const runBtn = playground?.querySelector('.run-btn');
    const resetBtn = playground?.querySelector('.reset-btn');
    const clearBtn = playground?.querySelector('.clear-btn');
    
    // Store original code
    const originalCode = defaultCode || editor.value;
    
    // Override console methods
    const originalLog = console.log;
    const originalError = console.error;
    const originalWarn = console.warn;
    
    function addToConsole(message, type = 'log') {
        const line = document.createElement('div');
        line.className = `console-line console-${type}`;
        line.textContent = message;
        consoleOutput.appendChild(line);
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
    }
    
    function runCode() {
        // Clear console
        consoleOutput.innerHTML = '';
        
        // Override console methods
        const customLog = (...args) => {
            originalLog.apply(console, args);
            addToConsole(args.map(arg => {
                if (arg === null) return 'null';
                if (arg === undefined) return 'undefined';
                if (typeof arg === 'object') {
                    // Use compact JSON stringify for arrays/objects
                    return JSON.stringify(arg);
                }
                return String(arg);
            }).join(' '), 'log');
        };
        
        const customError = (...args) => {
            originalError.apply(console, args);
            addToConsole(args.join(' '), 'error');
        };
        
        const customWarn = (...args) => {
            originalWarn.apply(console, args);
            addToConsole(args.join(' '), 'warn');
        };
        
        // Override console BEFORE executing code
        console.log = customLog;
        console.error = customError;
        console.warn = customWarn;
        
        // Function to restore console
        const restoreConsole = () => {
            console.log = originalLog;
            console.error = originalError;
            console.warn = originalWarn;
        };
        
        try {
            const code = editor.value;
            // Create a safe execution context
            const result = new Function(code)();
            
            // Check if result is a Promise (for async code like import())
            if (result && typeof result.then === 'function') {
                // Wait for promise to resolve, then restore console
                // Use a longer delay to ensure all async callbacks complete
                result.finally(() => {
                    // Wait longer to capture all async console.log calls
                    setTimeout(() => {
                        restoreConsole();
                    }, 1000);
                }).catch((err) => {
                    // Also capture errors from the promise
                    customError(`Promise error: ${err.message}`);
                    setTimeout(() => {
                        restoreConsole();
                    }, 1000);
                });
            } else {
                if (result !== undefined) {
                    addToConsole(String(result), 'result');
                }
                // For sync code, restore after a short delay
                setTimeout(() => {
                    restoreConsole();
                }, 100);
            }
        } catch (error) {
            addToConsole(`Error: ${error.message}`, 'error');
            // Restore original console methods on error
            restoreConsole();
        }
    }
    
    function resetCode() {
        editor.value = originalCode;
        consoleOutput.innerHTML = '';
    }
    
    function clearConsole() {
        consoleOutput.innerHTML = '';
    }
    
    if (runBtn) runBtn.addEventListener('click', runCode);
    if (resetBtn) resetBtn.addEventListener('click', resetCode);
    if (clearBtn) clearBtn.addEventListener('click', clearConsole);
    
    // Allow Ctrl+Enter or Cmd+Enter to run code
    editor.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            runCode();
        }
    });
}

// Initialize playgrounds when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // DOM Manipulation Playground
    createPlayground('domEditor', 'domConsole', 
        `// getElementById() - Get element by unique ID
// Manipulate the mini website on the right!

// Get the site title
const title = document.getElementById('site-title');
if (title) {
    console.log('Found title:', title.textContent);
    // Change the title text
    title.textContent = 'Welcome to JavaScript!';
    console.log('Title changed to:', title.textContent);
}

// Get the status text
const statusText = document.getElementById('status-text');
if (statusText) {
    console.log('Status:', statusText.textContent);
    statusText.textContent = 'Status: Active';
}`
    );
    
    // Nested Arrays Playground
    createPlayground('arraysEditor', 'arraysConsole',
        `// Nested Arrays & Loops Practice
const grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log('Grid:', grid);

// Try for...of loop
for (const row of grid) {
    console.log('Row:', row);
    for (const num of row) {
        console.log('Number:', num);
    }
}

// Try forEach
grid.forEach((row, i) => {
    console.log(\`Row \${i}:\`, row);
});

// Find value in grid
function findInGrid(grid, target) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === target) {
                return { row: i, col: j };
            }
        }
    }
    return null;
}

console.log('Find 5:', findInGrid(grid, 5));`
    );
    
    // Modern Syntax Playground
    createPlayground('syntaxEditor', 'syntaxConsole',
        `// Modern Syntax Practice

// Arrow Functions
const add = (a, b) => a + b;
console.log('Add:', add(5, 3));

// Template Literals
const name = 'Winston';
const age = 20;
console.log(\`\${name} is \${age} years old\`);

// Ternary Operator
const isActive = true;
console.log(isActive ? 'Active' : 'Offline');

// Optional Chaining
const user = { profile: { email: 'test@example.com' } };
console.log('Email:', user?.profile?.email);

// Short-circuiting
const message = 'Hello';
const show = true;
console.log(show && message);
console.log(user?.name || 'Guest');`
    );
    
    // Array Methods Playground
    createPlayground('arrayMethodsEditor', 'arrayMethodsConsole',
        `// Array Methods Practice
const numbers = [1, 2, 3, 4, 5];

console.log('Original:', numbers);

// .map() - Transform
const doubled = numbers.map(num => num * 2);
console.log('Doubled (.map):', doubled);

// .filter() - Filter
const evens = numbers.filter(num => num % 2 === 0);
console.log('Evens (.filter):', evens);

// .find() - Find
const found = numbers.find(num => num > 3);
console.log('Found > 3 (.find):', found);

// Spread Operator
const more = [...numbers, 6, 7, 8];
console.log('Spread:', more);

// .includes()
console.log('Includes 3:', numbers.includes(3));`
    );
    
    // Local Storage Playground
    createPlayground('storageEditor', 'storageConsole',
        `// Local Storage Practice

// Save an item
localStorage.setItem('myKey', 'Hello from localStorage!');
console.log('Item saved!');

// Load an item
const savedItem = localStorage.getItem('myKey');
console.log('Loaded item:', savedItem);

// Save an object (use JSON.stringify)
const user = { name: 'Winston', age: 20 };
localStorage.setItem('user', JSON.stringify(user));
console.log('Object saved!');

// Load an object (use JSON.parse)
const loadedUser = JSON.parse(localStorage.getItem('user'));
console.log('Loaded user:', loadedUser);`
    );
    
    // Modules Playground
    createPlayground('modulesEditor', 'modulesConsole',
        `// Modules - Import and Use Functions/Classes
// Dynamic import() works in all modern browsers and on Vercel!

import('./modules.js').then(module => {
    // Use named exports
    const area = module.calculateArea(5, 10);
    console.log('Area (5x10):', area);
    
    const perimeter = module.calculatePerimeter(5, 10);
    console.log('Perimeter (5x10):', perimeter);
    
    const isSquare = module.isSquare(5, 5);
    console.log('Is square (5x5)?', isSquare);
    
    // Use default export (Rectangle class)
    const Rectangle = module.default;
    const rect = new Rectangle(8, 12);
    console.log('Rectangle area:', rect.getArea());
    console.log('Rectangle perimeter:', rect.getPerimeter());
    
    // Use other named exports
    console.log('PI constant:', module.PI);
    console.log('Circle area (radius 5):', module.calculateCircleArea(5));
    
    // Use Circle class (named export, not default)
    const Circle = module.Circle;
    const circle = new Circle(5);
    console.log('Circle instance area:', circle.getArea());
}).catch(error => {
    console.error('Error loading module:', error.message);
});`
    );
});
