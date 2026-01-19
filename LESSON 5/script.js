// ============================================
// LESSON 5: Advanced JavaScript Playground
// ============================================
// Modify the commented lines to experiment!

// ============================================
// 1. DOM Selection & Modification
// ============================================

const changeableTitle = document.getElementById('changeableTitle');
const changeTitleBtn = document.getElementById('changeTitleBtn');
const titleInput = document.getElementById('titleInput');

changeTitleBtn.addEventListener('click', function() {
    changeableTitle.textContent = titleInput.value || 'No text entered!';
    // Try: changeableTitle.innerHTML = '<em>' + titleInput.value + '</em>';
    // Try: changeableTitle.style.color = 'red';
});

// ============================================
// 1.1: querySelector, querySelectorAll, getElementsByClassName
// ============================================

const querySelectorBtn = document.getElementById('querySelectorBtn');
const querySelectorAllBtn = document.getElementById('querySelectorAllBtn');
const getElementsByClassNameBtn = document.getElementById('getElementsByClassNameBtn');
const selectorResults = document.getElementById('selectorResults');

querySelectorBtn.addEventListener('click', function() {
    const element = document.querySelector('.demo-class');
    selectorResults.innerHTML = `<p>querySelector found: "${element.textContent}"</p>`;
    // Try: const element = document.querySelector('#someId');
    // Try: const element = document.querySelector('p');
    // Try: console.log(element);
});

querySelectorAllBtn.addEventListener('click', function() {
    const elements = document.querySelectorAll('.demo-class');
    selectorResults.innerHTML = `<p>querySelectorAll found ${elements.length} elements</p>`;
    // Try: elements.forEach(el => console.log(el.textContent));
    // Try: const firstElement = elements[0];
});

getElementsByClassNameBtn.addEventListener('click', function() {
    const elements = document.getElementsByClassName('demo-class');
    selectorResults.innerHTML = `<p>getElementsByClassName found ${elements.length} elements</p>`;
    // Try: Array.from(elements).forEach(el => console.log(el));
    // Try: const firstElement = elements[0];
});

// ============================================
// 1.2: Event Listeners & Style Changes
// ============================================

const colorCard = document.getElementById('colorCard');
const colorBtn = document.getElementById('colorBtn');

const colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightyellow', 'lavender', 'peachpuff'];
let colorIndex = 0;

colorBtn.addEventListener('click', function(e) {
    colorCard.style.backgroundColor = colors[colorIndex % colors.length];
    colorIndex++;
    // Try: console.log(e.target); // e.target is the button that was clicked
    // Try: e.target.textContent = 'Clicked!';
    // Try: colorCard.style.color = 'white';
});

// ============================================
// 1.3: Dynamic Content with innerHTML
// ============================================

const dynamicList = document.getElementById('dynamicList');
const listInput = document.getElementById('listInput');
const addListItemBtn = document.getElementById('addListItemBtn');

function addListItem() {
    const text = listInput.value.trim();
    if (text) {
        dynamicList.innerHTML += `<li>${text}</li>`;
        // Try: dynamicList.innerHTML += `<li style="color: blue;">${text}</li>`;
        listInput.value = '';
    }
}

addListItemBtn.addEventListener('click', addListItem);

listInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addListItem();
    }
});

// ============================================
// 2. Nested Arrays & Modern Loops
// ============================================

const grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const gridDisplay = document.getElementById('gridDisplay');
const gridSearchInput = document.getElementById('gridSearchInput');
const gridSearchBtn = document.getElementById('gridSearchBtn');
const gridResults = document.getElementById('gridResults');
const arrayDisplay = document.getElementById('arrayDisplay');
const sumArrayBtn = document.getElementById('sumArrayBtn');
const findMaxBtn = document.getElementById('findMaxBtn');
const loopResults = document.getElementById('loopResults');

gridDisplay.textContent = JSON.stringify(grid);
arrayDisplay.textContent = JSON.stringify([1, 2, 3, 4, 5]);

gridSearchBtn.addEventListener('click', function() {
    const target = parseInt(gridSearchInput.value);
    const result = findInGrid(grid, target);
    if (result) {
        gridResults.innerHTML = `<p>Found ${target} at row ${result.row}, col ${result.col}</p>`;
    } else {
        gridResults.innerHTML = `<p>${target} not found in grid</p>`;
    }
});

sumArrayBtn.addEventListener('click', function() {
    const numbers = [1, 2, 3, 4, 5];
    const sum = sumArray(numbers);
    loopResults.innerHTML = `<p>Sum of ${JSON.stringify(numbers)} = ${sum}</p>`;
});

findMaxBtn.addEventListener('click', function() {
    const numbers = [1, 2, 3, 4, 5];
    const max = findMax(numbers);
    loopResults.innerHTML = `<p>Max of ${JSON.stringify(numbers)} = ${max}</p>`;
});

// ============================================
// 3. Modern Syntax: User Card Generator
// ============================================

const userNameInput = document.getElementById('userNameInput');
const isActiveCheck = document.getElementById('isActiveCheck');
const generateCardBtn = document.getElementById('generateCardBtn');
const userCardsContainer = document.getElementById('userCardsContainer');

generateCardBtn.addEventListener('click', function() {
    const user = {
        name: userNameInput.value || 'Anonymous',
        isActive: isActiveCheck.checked
    };
    
    const cardText = getCard(user);
    
    const cardDiv = document.createElement('div');
    cardDiv.className = `user-card ${user.isActive ? 'active' : 'offline'}`;
    cardDiv.innerHTML = `<strong>${cardText}</strong>`;
    userCardsContainer.appendChild(cardDiv);
    
    userNameInput.value = '';
});

// ============================================
// 3.1: Short-Circuiting (&& and ||)
// ============================================

const shortCircuitInput = document.getElementById('shortCircuitInput');
const isVisibleCheck = document.getElementById('isVisibleCheck');
const shortCircuitBtn = document.getElementById('shortCircuitBtn');
const shortCircuitResults = document.getElementById('shortCircuitResults');

shortCircuitBtn.addEventListener('click', function() {
    const message = shortCircuitInput.value;
    const isVisible = isVisibleCheck.checked;
    
    const result = showMessage(isVisible, message);
    const username = getUsername({ name: message || null });
    const displayName = getDisplayName({ name: message || null }, false);
    
    shortCircuitResults.innerHTML = `
        <p><strong>showMessage (&&):</strong> ${result || 'null (not visible)'}</p>
        <p><strong>getUsername (||):</strong> ${username}</p>
        <p><strong>getDisplayName (&& + ||):</strong> ${displayName}</p>
    `;
});

// ============================================
// 4. Array Methods
// ============================================

const originalArray = [1, 2, 3, 4, 5];
const arrayResults = document.getElementById('arrayResults');

document.getElementById('originalArray').textContent = JSON.stringify(originalArray);

document.getElementById('doubleBtn').addEventListener('click', function() {
    const doubled = doubleNumbers(originalArray);
    displayArrayResult('Doubled (.map):', doubled);
});

document.getElementById('filterBtn').addEventListener('click', function() {
    const filtered = filterGreaterThan5(originalArray);
    displayArrayResult('Filtered > 5 (.filter):', filtered);
});

document.getElementById('findBtn').addEventListener('click', function() {
    const found = findNumber(originalArray, 3);
    displayArrayResult('Found (.find):', found !== undefined ? [found] : ['Not found']);
});

document.getElementById('spreadBtn').addEventListener('click', function() {
    const combined = combineArrays(originalArray, [6, 7, 8]);
    displayArrayResult('Combined (spread):', combined);
});

function displayArrayResult(label, array) {
    arrayResults.innerHTML = `<p><strong>${label}</strong></p>`;
    array.forEach(num => {
        const span = document.createElement('span');
        span.className = 'number-item';
        span.textContent = num;
        arrayResults.appendChild(span);
    });
}

// ============================================
// 4.1: Rest Operator & includes()
// ============================================

const restInput = document.getElementById('restInput');
const restBtn = document.getElementById('restBtn');
const roleInput = document.getElementById('roleInput');
const includesBtn = document.getElementById('includesBtn');
const restResults = document.getElementById('restResults');

restBtn.addEventListener('click', function() {
    const numbersStr = restInput.value.split(',').map(n => parseInt(n.trim()));
    const sum = sumAll(...numbersStr);
    restResults.innerHTML = `<p>Sum of ${numbersStr.join(', ')} = ${sum}</p>`;
});

includesBtn.addEventListener('click', function() {
    const role = roleInput.value;
    const hasAccess = hasAdminAccess(role);
    restResults.innerHTML = `<p>Role "${role}" has admin access: ${hasAccess ? 'Yes' : 'No'}</p>`;
});

// ============================================
// 5. Local Storage
// ============================================

const saveInput = document.getElementById('saveInput');
const saveBtn = document.getElementById('saveBtn');
const loadBtn = document.getElementById('loadBtn');
const clearBtn = document.getElementById('clearBtn');
const storageResults = document.getElementById('storageResults');

saveBtn.addEventListener('click', function() {
    const item = saveInput.value.trim();
    if (item) {
        saveItem(item);
        saveInput.value = '';
        loadItems();
    }
});

loadBtn.addEventListener('click', function() {
    loadItems();
});

clearBtn.addEventListener('click', function() {
    clearStorage();
    storageResults.innerHTML = '<p>Storage cleared!</p>';
});

loadItems();
