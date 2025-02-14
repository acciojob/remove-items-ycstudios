const colorSelect = document.getElementById("colorSelect");
const removeButton = document.querySelector("input");
removeButton.addEventListener("click", function () {
	const selectedIndex = colorSelect.selectedIndex;
		colorSelect.remove(selectedIndex);
            
        });