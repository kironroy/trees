// Fetch and display data from the JSON file
async function fetchTreesData() {
  try {
    const response = await fetch('./trees.json'); // Adjust the path if necessary
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.json();

    // Populate the list dynamically
    const ritaList = document.getElementById('ritaList');
    data.forEach(item => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<a href="${item.url}" target="_blank">${item.description}</a>`;
      ritaList.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Run the function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchTreesData);


