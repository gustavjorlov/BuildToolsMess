var utils = require("./utils/utils.js");

(function (){

	utils.complicatedStuff();

	var result = [1, 2, 3, 6, 2, 3, 4, 5, 1].sort((a, b) => {
		return (a > b) ? 1 : -1;
	}).join("-f-");

	document.getElementById("main").innerHTML = result;

})();