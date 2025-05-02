# 🌲 A treasure trove of resources on trees, especially the majestic redwoods!

## 🔗 [The Link](https://treesinfo.netlify.app/)

### Books

1\. *Trees in Paradise: A California History* by Jared Farmer

2\. *The Wild Trees* by Richard Preston

3\. *The Last Stand: The War Between Wall Street and Main Street Over California's Ancient Redwoods* by David Harris

4\. *The Ghost Forest: Racists, Radicals, and Real Estate in the California Redwoods* by Greg King

5\. *COAST REDWOOD: A Natural and Cultural History*

6\. *Giants in the Earth: The California Redwoods* by Peter Johnstone

7\. *From the Redwood Forest: Ancient Trees, the Bottom Line, and a Headwaters Journey* by Joan Dunning and Doug Thron

8\. *Redwood: The Story Behind the Scenery* by Richard A. Rasp

9\. *Tree: A Life Story* by David T. Suzuki and Wayne Grady

10\. *The Golden Spruce: A True Story of Myth, Madness, and Greed* by John Vaillant

### Papers and PDFs

- *Antoine and Steve Sillett* (Paper)

- *Professor Steve, Stephen C. Sillett, Humboldt University* (PDF)

- *National Geographic Redwoods, July 1964* (PDF, Page 15)

### Links

- **Top Redwood Trees Hyperion Coast Redwood**

- **MD Vaden's Main Page**

- **MD Vaden's Tallest and Largest Redwoods Redwood Trees Data**

- **Tallest Douglas Firs**

- **Tallest Tropical Tree**

- **Largest Old Growth Cedar**

- **Italy is Protecting its Giant Trees Forever**

- **Tallest Tree in Asia (Second Tallest Species)**

- **Tallest Trees in Australia**

- **The 13,000-Year-Old Oak of the Inland Empire**

- **In California, a Scrub Oak Is an Old Pro at Cloning**

- **Jurupa Oak, Getty Images**

- **All Redwoods**

- **Hyperion Location, Maps**

- **Hyperion Top View Tree, Maps**

- **NATGEO Map (JPG)**

- **Redwoods Finder Interactive Map**

- **Big Tree Area: Giant Tree, Rockefeller Grove Google Maps**

- **Colonel Armstrong Tree, Map**

- **Big Leaf on the Ground, Near Hyperion, Map**

- **Fern Canyon Prairie Creek Redwoods Park, Map**

- **Walker Road, Map**

- **Stout Grove Google Maps**

- **Grove of Titans Google Maps**

- **Montgomery Woods State Reserve, Map**

### 🎥 Videos

- **YouTube Playlist**

- **National Geographic Explorer Climbing Redwood Giants**

- **Charles Hurwitz, Maxxam**


### Code

Old function

```javascript

// function that lets user search for a keyword

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
```
Optimization 



```javascript

// Instead of querying elements inside the loop
// fetch them beforehand and store them in variables:

function searchRitaList() {
  const input = document.getElementById('ritaInput').value.toUpperCase();
  const items = document.querySelectorAll('#ritaList li a');

  items.forEach((a) => {
    a.parentElement.style.display = a.textContent.toUpperCase().includes(input) ? '' : 'none';
  });
}

// This reduces the number of times the DOM is accessed
// Making it more efficient.
```


```javascript
// This waits 300ms after the user stops typing before 
// triggering the search.
// more efficient 

let debounceTimer;
document.getElementById('ritaInput').addEventListener('input', () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(searchRitaList, 300);
});

```

Use querySelectorAll Instead of getElementsByTagName
querySelectorAll returns a static NodeList, which can be iterated directly with .forEach() instead of requiring a loop.




