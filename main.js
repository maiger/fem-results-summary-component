fetch("./data.json")
  .then((response) => response.json())
  .then((json) => addCatecoryValues(json));

// Add correct icon, text and score to each category
function addCatecoryValues(data) {
  data.forEach((el) => {
    // Grab correct element from DOM
    let category = document.getElementsByClassName(
      el.category.toLowerCase()
    )[0];
    // Update DOM
    category.children[0].children[0].src = el.icon;
    category.children[0].children[1].innerText = el.category;
    category.children[1].children[0].innerText = el.score;
  });
}
