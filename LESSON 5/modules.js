// ============================================
// 6. Modules: Export & Import
// ============================================

// ============================================
// 6.1: Named Exports (Multiple exports from one file)
// ============================================

// Named exports - export multiple things from one file
export function calculateArea(width, height) {
    return width * height;
}

export function calculatePerimeter(width, height) {
    return 2 * (width + height);
}

export function isSquare(width, height) {
    return width === height;
}

// ============================================
// 6.2: Default Export (One main export from a file)
// ============================================

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    getArea() {
        return this.width * this.height;
    }
    
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
    
    isSquare() {
        return this.width === this.height;
    }
}

// Default export - export one main thing
export default Rectangle;

// ============================================
// Import Examples (for reference)
// ============================================

// To import named exports:
// import { calculateArea, calculatePerimeter } from './modules.js';

// To import default export:
// import Rectangle from './modules.js';

// To import with alias:
// import { calculateArea as getArea } from './modules.js';
// import Rectangle as Rect from './modules.js';

// To import everything:
// import * as MathUtils from './modules.js';
// Then use: MathUtils.calculateArea(5, 10)

// ============================================
// BONUS: Mixed Exports
// ============================================

// You can have both named and default exports in the same file:

export const PI = 3.14159;

export function calculateCircleArea(radius) {
    return PI * radius * radius;
}

export default class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    
    getArea() {
        return calculateCircleArea(this.radius);
    }
}
