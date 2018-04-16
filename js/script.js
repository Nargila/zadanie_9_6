// Zadanie 9.6 Manipulowanie DOM po kliknięciu

var add = document.getElementById('addElem');
var list = document.getElementById('list');

add.addEventListener('click', 
	function() {
		var element = document.createElement('li');
        element.innerHTML = ' item ' + list.getElementsByTagName('li').length;
		list.appendChild(element);
	}
);

