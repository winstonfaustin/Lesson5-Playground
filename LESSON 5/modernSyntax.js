// ============================================
// 3. Modern Syntax
// ============================================

// ============================================
// 3.1: Arrow Functions & Template Literals
// ============================================

const getCard = (user) => {
    // Try converting to one-liner: const getCard = u => `User ${u?.name} is ${u.isActive ? "Active" : "Offline"}`;
    if (user && user.isActive) {
        return `User ${user.name} is Active`;
    } else {
        return `User ${user?.name || "Unknown"} is Offline`;
    }
};

const add = (a, b) => a + b;
// Try: const add = (a, b) => a * b; // Multiply instead
// Try: const add = (a, b, c) => a + b + c; // Add third parameter

const greet = (person) => `Hello, ${person?.name || "Guest"}!`;
// Try: const greet = (person) => `Hi ${person?.name || "there"}!`;
// Try: const greet = (person) => `Welcome, ${person?.name?.toUpperCase() || "Guest"}!`;

const getStatus = (isOnline) => isOnline ? "Online" : "Offline";
// Try: const getStatus = (isOnline) => isOnline ? "🟢 Online" : "🔴 Offline";
// Try: Add more states: isOnline ? "Online" : isAway ? "Away" : "Offline";

const getEmail = (user) => user?.profile?.email || "No email";
// Try: const getEmail = (user) => user?.contact?.email || user?.email || "No email";
// Try: const getEmail = (user) => user?.profile?.contact?.email || "No email";

const createMessage = (name, age) => `${name} is ${age} years old and ${age >= 18 ? "an adult" : "a minor"}`;

// ============================================
// 3.2: Short-Circuiting (&& and ||)
// ============================================

function showMessage(isVisible, message) {
    return isVisible && message;
    // Try: return isVisible && `<strong>${message}</strong>`;
    // Try: return isVisible ? message : null; // Ternary alternative
    // Try: return isVisible && message && message.length > 0 ? message : null;
}

function getUsername(user) {
    return user?.name || "Guest";
    // Try: return user?.name || user?.email || "Guest";
    // Try: return user?.name ?? "Guest"; // Nullish coalescing
    // Try: return user?.name || user?.username || "Guest";
}

function getDisplayName(user, isAdmin) {
    return user?.name && (isAdmin ? `${user.name} (Admin)` : user.name) || "Guest";
}
