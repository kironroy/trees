'use strict';
const element = document.body;


// Instead of querying elements inside the loop
// fetch them beforehand and store them in variables:

function searchRitaList() {
  const input = document.getElementById('ritaInput').value.toUpperCase();
  const items = document.querySelectorAll('#ritaList li a');

  items.forEach(a => {
    a.parentElement.style.display = a.textContent.toUpperCase().includes(input)
      ? ''
      : 'none';
  });
}

// This reduces the number of times the DOM is accessed
// Making it more efficient.

// This waits 300ms after the user stops typing before 
// triggering the search.
// more efficient 

let debounceTimer;
document.getElementById('ritaInput').addEventListener('input', () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(searchRitaList, 300);
});



// Function to count occurrences of a class
function countClassOccurrences(className) {
  // Get all elements with the specified class
  const elements = document.getElementsByClassName(className);
  // Return the number of elements found
  return elements.length;
}

// Example usage
const className = 'book';
const count = countClassOccurrences(className);

document.getElementById(
  'total-books'
).innerHTML = `Total <i>${className}s</i>: ${count} `;

document.getElementById(
  'total-links'
).innerHTML = `Total links: ${document.links.length}`;

searchRitaList();
