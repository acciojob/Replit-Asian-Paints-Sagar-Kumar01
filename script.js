let grid_item = document.getElementsByClassName("grid-item");
let block_id = document.getElementById("block_id");
let colour_id = document.getElementById("colour_id");
let change_button = document.getElementById("change_button");
let reset_button = document.getElementById("reset_button");

// Set all transparent on load
window.addEventListener("load", () => {
  resetGrid();
});

function resetGrid() {
  for (let i = 0; i < grid_item.length; i++) {
    grid_item[i].style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
}

change_button.addEventListener("click", () => {
  resetGrid(); // clear first

  let index = Number(block_id.value) - 1;
  let color = colour_id.value;

  if (grid_item[index]) {
    grid_item[index].style.backgroundColor = color;
  }
});

reset_button.addEventListener("click", () => {
  resetGrid();
});
