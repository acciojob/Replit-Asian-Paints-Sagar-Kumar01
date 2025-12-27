//your JS code here. If required.

let grid_item = document.getElementsByClassName("grid-item");
let block_id = document.getElementById("block_id");
let colour_id = document.getElementById("colour_id");
let change_button = document.getElementById("change_button");
let reset_button = document.getElementById("reset_button");



change_button.addEventListener("click", ()=>{
	let value = block_id.value;
	let color = colour_id.value;
	grid_item[value-1].style.backgroundColor = color;
	
});

reset_button.addEventListener("click", ()=>{
	for(let i = 0; i<grid_item.length; i++){
		grid_item[i].style.backgroundColor = "transparent";
	}
	
});
