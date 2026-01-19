// ============================================
// 2. Nested Arrays & Modern Loops
// ============================================

// ============================================
// 2.1: Nested Arrays (Matrix)
// ============================================

function findInGrid(grid, target) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === target) {
                return { row: i, col: j };
            }
        }
    }
    return null;
    // Try: return { found: false }; // Different return format
    // Try: Use for...of loops instead of traditional for loops
}

// ============================================
// 2.2: for...of Loop
// ============================================

function sumArray(numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
    // Try: if (num > 0) sum += num; // Only sum positive numbers
    // Try: sum *= num; // Multiply instead
    // Try: return numbers.reduce((a, b) => a + b, 0); // Using reduce
}

function findMax(numbers) {
    let max = numbers[0];
    for (const num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;
    // Try: Find minimum instead: if (num < min) min = num;
    // Try: return Math.max(...numbers); // Alternative approach
    // Try: Start from index 1: for (let i = 1; i < numbers.length; i++)
}

// ============================================
// 2.3: for...in Loop
// ============================================

function getObjectValues(obj) {
    const values = [];
    for (const key in obj) {
        values.push(obj[key]);
    }
    return values;
    // Try: Return keys instead: values.push(key);
    // Try: Return key-value pairs: values.push({ [key]: obj[key] });
    // Try: Filter certain properties: if (key !== "password") values.push(obj[key]);
}

function countProperties(obj) {
    let count = 0;
    for (const key in obj) {
        count++;
    }
    return count;
}

// ============================================
// 2.4: forEach Method
// ============================================

function doubleInPlace(numbers) {
    numbers.forEach((num, index) => {
        numbers[index] = num * 2;
    });
    return numbers;
    // Try: numbers[index] = num * 3; // Triple instead
    // Try: if (num > 0) numbers[index] = num * 2; // Only double positives
    // Try: numbers[index] = num ** 2; // Square instead
}

function logArrayWithIndex(items) {
    items.forEach((item, index) => {
        console.log(`Index ${index}: ${item}`);
    });
}

// ============================================
// BONUS: Combining Nested Arrays with Modern Loops
// ============================================

function flattenArray(nestedArray) {
    const result = [];
    for (const subArray of nestedArray) {
        for (const item of subArray) {
            result.push(item);
        }
    }
    return result;
}

function sumNestedArray(nestedArray) {
    let sum = 0;
    for (const subArray of nestedArray) {
        for (const num of subArray) {
            sum += num;
        }
    }
    return sum;
}
