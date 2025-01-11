'use strict';
const element = document.body;

function searchRitaList() {
  const input = document.getElementById('ritaInput');
  const filter = input.value.toUpperCase();
  const ul = document.getElementById('ritaList');
  const li = ul.getElementsByTagName('li');
  for (let i = 0; i < li.length; i++) {
    const a = li[i].getElementsByTagName('a')[0];
    const textValue = a.textContent || a.innerText;
    textValue.toUpperCase().indexOf(filter) > -1
      ? (li[i].style.display = '')
      : (li[i].style.display = 'none');
  }
}

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
