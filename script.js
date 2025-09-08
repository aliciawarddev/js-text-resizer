// Get references to HTML elements 
const sampleText = document.getElementById('sampleText');       // The text to resize
const sizeDisplay = document.getElementById('sizeDisplay');     // Shows current size 
const increaseBtn = document.getElementById('increaseBtn');     // Larger button
const descreaseBtn = document.getElementById('decreaseBtn');    // Smaller button
const resetBtn = document.getElementById('resetBtn');           // Reset button

// Set starting font size (in pixels)
let currentSize = 16;                                           // Tracks current size

// Size boundaries and default 
const MIN_SIZE = 10;                                            // Smallest allowed size
const MAX_SIZE = 32;                                            // Largest allowed size
const DEFAULT_SIZE = 16;                                        // Store default for reference

// Function to update the text size
function updateTextSize() {
    sampleText.style.fontSize = currentSize + 'px';           // Apply size to text element
    sizeDisplay.textContent = currentSize + 'px';             // Update the display number
    
    // Disable buttons at limits
    increaseBtn.disabled = currentSize >= MAX_SIZE;           // Disable at max
    decreaseBtn.disabled = currentSize <= MIN_SIZE;           // Disable at min
}

// Function to increase text size 
function increaseSize() {
    if (currentSize < MAX_SIZE) {                               // Check if below maximum
        currentSize += 2;                                       // Increase by 2 pixels
        updateTextSize();                                       // Apply the change
    }
}

// Function to decrease text size 
function decreaseSize() {
    if (currentSize > MIN_SIZE) {                               // Check if above minimum
        currentSize -= 2;                                       // Decrease by 2 pixels
        updateTextSize();                                       // Apply the change
    }
}

// Function to reset to default size
function resetSize() {
    currentSize = DEFAULT_SIZE;                                 // Set back to default (16px)
    updateTextSize();                                           // Apply the change
}

// Connect buttons to functions 
increaseBtn.addEventListener('click', increaseSize);            // Larger button click
descreaseBtn.addEventListener('click', decreaseSize);           // Smaller button click
resetBtn.addEventListener('click', resetSize);                  // Reset button click

// Add keyboard support for accessibility
document.addEventListener('keydown', (e) => {
   if (e.key === '+' || e.key === '=') {                   // Plus key pressed
       e.preventDefault();                                   // Prevent default action
       increaseSize();                                       // Increase size
   } else if (e.key === '-' || e.key === '_') {           // Minus key pressed
       e.preventDefault();                                   // Prevent default action
       decreaseSize();                                       // Decrease size
   } else if (e.key === '0') {                             // Zero key pressed
       e.preventDefault();                                   // Prevent default action
       resetSize();                                          // Reset to default
   }
});

// Initialize display on page load
updateTextSize();                                              // Set initial display