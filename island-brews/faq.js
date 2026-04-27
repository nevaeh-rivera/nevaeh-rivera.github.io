/* ===================
   Island Brews FAQ Interactivity
   ICS 107 - Week 15
   ===================

   This script does two things:
   1. Hides all FAQ answers when the page loads
   2. Shows/hides an answer when its question is clicked
*/


/* ===================
   PART 1: Hide All Answers on Page Load
   =================== */

// Step 1: Find all the answer divs on the page
// document.querySelectorAll() searches for elements by class name
// It returns a list of every element that matches
let answers = document.querySelectorAll('.faq-answer');
                                      // Use '.faq-answer'
                                      // The dot means "class name"

// Step 2: Loop through every answer and hide it
// forEach runs the function once for each answer found
answers.forEach(function(answer) {
  answer.classList.add('hidden');         // Use 'hidden'
                                      // This adds the "hidden" class
                                      // Your CSS already has .faq-answer.hidden { display: none; }
});


/* ===================
   PART 2: Make Questions Clickable
   =================== */

// Step 3: Find all the question buttons on the page
let questions = document.querySelectorAll('.faq-question');
                                      // Use '.faq-question'

// Step 4: Add a click listener to each question
questions.forEach(function(question) {

  question.addEventListener('click', function() {
                          // Use 'click'
                          // This means: "when this button is clicked, run this function"

    // Step 5: Find the answer that belongs to this question
    // nextElementSibling means "the next HTML element right after this one"
    let answer = question.nextElementSibling;         // Use nextElementSibling

    // Step 6: Toggle the "hidden" class on the answer
    // toggle() adds the class if missing, removes it if present
    answer.classList.toggle('hidden');     // Use toggle

    // Step 7: Update aria-expanded for accessibility
    // Check if the answer is currently visible (does NOT have the hidden class)
    let isExpanded = !answer.classList.contains('hidden');

    // Set aria-expanded to true (visible) or false (hidden)
    question.setAttribute('aria-expanded', isExpanded);
                                      // Use isExpanded
  });
});
/* ===================
   PART 3: Dark Mode Toggle
   =================== */

// Find the theme toggle button
let themeToggle = document.querySelector('.theme-toggle');

// Only run if the button exists on the page
if (themeToggle) {
  themeToggle.addEventListener('click', function() {
    // Toggle the "dark-mode" class on the body
    document.body.classList.toggle('dark-mode');

    // Check if dark mode is now active
    let isDarkMode = document.body.classList.contains('dark-mode');

    // Update button text
    if (isDarkMode) {
      themeToggle.textContent = 'Light Mode';
    } else {
      themeToggle.textContent = 'Dark Mode';
    }
  });
}