let input = document.querySelectorAll("input[type=text]");
let error = () => {
	let list = [];
	input.forEach((elem) => {
		list.push(elem.nextSibling.nextSibling);
	});
	return list;
};

console.log(error(), input);

let showError = (check = null) => {
	if (check == null) {
		for (let i = 0; i < input.length; i++) {
			if (input[i].value == "") {
				error()[i].style.visibility = "visible";
			}
		}
	} else {
		error()[check].style.visibility == "visible"
			? (error()[check].style.visibility = "hidden")
			: (error()[check].style.visibility = "visible");
	}
};

for (let i = 0; i < input.length; i++) {
	input[i].addEventListener("blur", (event) => {
        if(input[i].value != ""){
            showError(i);
        }
    });
}
