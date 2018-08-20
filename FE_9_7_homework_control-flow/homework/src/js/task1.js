const login = prompt('Your login:', 'login');

if(login === 'User'){
	const password = prompt('Your password:', 'password');
	if (password === 'SuperUser'& new Date().getHours()<20) {
		alert('Good day!');
	} else if (password === 'SuperUser'& new Date().getHours()>20) {
		alert('Good evening!');
	} else if (password === ''|| password === null) {
		alert('Canceled');
	} else {
		alert('Wrong password');
	}
} else if (login === ''|| login === null) {
	alert('Canceled');
} else if (login.length<4) {
	alert("I don't know any users having name length less than 4 symbols");
} else {
	alert("I don't know you");
}

















