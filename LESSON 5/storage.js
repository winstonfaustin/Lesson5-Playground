// ============================================
// 5. Local Storage
// ============================================

// ============================================
// 5.1: Save item to localStorage
// ============================================

function saveItem(item) {
    const items = JSON.parse(localStorage.getItem('items') || '[]');
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
    // Try: items.push({ item, timestamp: Date.now() }); // Add timestamp
    // Try: items.unshift(item); // Add to beginning instead
    // Try: localStorage.setItem('myItems', JSON.stringify(items)); // Different key
}

// ============================================
// 5.2: Load items from localStorage
// ============================================

function loadItems() {
    const storageResults = document.getElementById('storageResults');
    if (!storageResults) return;
    
    const items = JSON.parse(localStorage.getItem('items') || '[]');
    
    if (items.length === 0) {
        storageResults.innerHTML = '<p>No items saved yet.</p>';
    } else {
        storageResults.innerHTML = '<h4>Saved Items:</h4>';
        items.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'saved-item';
            itemDiv.innerHTML = `
                <span>${index + 1}. ${item}</span>
                <button class="delete-btn" onclick="deleteItem(${index})">Delete</button>
            `;
            storageResults.appendChild(itemDiv);
        });
    }
}

// Helper function for delete button
function deleteItem(index) {
    const items = JSON.parse(localStorage.getItem('items') || '[]');
    items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(items));
    loadItems();
}

// ============================================
// 5.3: Clear localStorage
// ============================================

function clearStorage() {
    localStorage.removeItem('items');
    // Try: localStorage.clear(); // Clear ALL localStorage
    // Try: if (confirm('Are you sure?')) localStorage.removeItem('items');
}

// ============================================
// BONUS: Advanced Storage Functions
// ============================================

function saveObject(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
}

function loadObject(key) {
    return JSON.parse(localStorage.getItem(key) || 'null');
}

function removeItemFromStorage(itemToRemove) {
    const items = JSON.parse(localStorage.getItem('items') || '[]');
    const filtered = items.filter(item => item !== itemToRemove);
    localStorage.setItem('items', JSON.stringify(filtered));
}
