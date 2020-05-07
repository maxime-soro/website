
function sortMerch(c) {
	var list, btnCont, btns, i, j;
  list = document.getElementsByClassName("sortMerch");
	if(c =="all") c="";
		// document.write(+c+);

	btnCont = document.getElementById("sortMerch1");
	btns = btnCont.getElementsByClassName("btn");
	// for (j = 0; j < btns.length; j++) {
	// 	btns[j].addEventListener("click", function clickos() {
	//
	// 		this.className+= " active-sort";
	// 	});
	// }

	// for (j = 0; j < btns.length; j++) {
	// 	btns[j].addEventListener("click", function clickos() {
	// 		var current = document.getElementsByClassName("active-sort");
	// 		current[0].className = current[0].className.replace(" active-sort", "");
	// 		this.style.backgroundColor = "#ffffff";
	// 		this.className+= " active-sort";
	// 	});
	// }
for (j = 0; j < btns.length; j++) {
	w3RemoveClass(btns[j], "active-sort");
	if (c == "") w3AddClass(btns[0], "active-sort")
	if (c == "new") w3AddClass(btns[1], "active-sort")
	if (c == "best") w3AddClass(btns[2], "active-sort")
	if (c == "melo") w3AddClass(btns[3], "active-sort")
	if (c == "verm") w3AddClass(btns[4], "active-sort")

}

	for (i = 0; i < list.length; i++) {
    w3RemoveClass(list[i], "show");

		// alert(list[i].className.indexOf(c));
    if (list[i].className.indexOf(c) > -1) w3AddClass(list[i], "show");


  }



}
	// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// var btnContainer = document.getElementById("myBtnContainer");
