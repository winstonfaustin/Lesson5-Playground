// ============================================
// 4. Array Methods
// ============================================

// ============================================
// 4.1: .map() - Transform each element
// ============================================

function doubleNumbers(numbers) {
    return numbers.map(num => num * 2);
    // Try: return numbers.map(num => num * 3);
}

// ============================================
// 4.2: .filter() - Keep only matching elements
// ============================================

function filterGreaterThan5(numbers) {
    return numbers.filter(num => num > 5);
    // Try: return numbers.filter(num => num < 5);
}

// ============================================
// 4.3: .find() - Find the first matching element
// ============================================

function findNumber(numbers, target) {
    return numbers.find(num => num === target);
    // Try: return numbers.find(num => num > target); // Find first greater than
    // Try: return numbers.find(num => num % target === 0); // Find divisible by
    // Try: return numbers.find(num => num < target); // Find first less than
}

// ============================================
// 4.4: Spread Operator (...) - Copy and combine arrays
// ============================================

function combineArrays(arr1, arr2) {
    return [...arr1, ...arr2];
    // Try: return [...arr2, ...arr1]; // Reverse order
    // Try: return [...arr1, 99, ...arr2]; // Insert item in middle
    // Try: return [...new Set([...arr1, ...arr2])]; // Remove duplicates
}

// ============================================
// BONUS: More Array Method Examples
// ============================================

function getNames(users) {
    return users.map(user => user.name);
}

function getActiveUsers(users) {
    return users.filter(user => user.isActive);
}

function findUserById(users, id) {
    return users.find(user => user.id === id);
}

function addItem(array, item) {
    return [...array, item];
}

function removeItem(array, index) {
    return [...array.slice(0, index), ...array.slice(index + 1)];
}

// ============================================
// 4.5: Rest Operator (...)
// ============================================

function sumAll(...numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
    // Try: return numbers.reduce((a, b) => a + b, 0); // Using reduce
    // Try: return numbers.reduce((a, b) => a * b, 1); // Multiply all
    // Try: return numbers.reduce((a, b) => a + b, 0) / numbers.length; // Average
}

function getFirstAndRest(...items) {
    const [first, ...rest] = items;
    return { first, rest };
}

// ============================================
// 4.6: array.includes()
// ============================================

function hasAdminAccess(role) {
    const adminRoles = ['admin', 'superadmin'];
    return adminRoles.includes(role);
    // Try: return ['admin', 'superadmin', 'moderator'].includes(role); // More roles
    // Try: return role?.toLowerCase().includes('admin'); // Case-insensitive
    // Try: return adminRoles.includes(role?.toLowerCase()); // Case-insensitive check
}

function isValidNumber(num, validNumbers) {
    return validNumbers.includes(num);
}
