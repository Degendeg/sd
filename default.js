$(document).ready(function() {
	const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10);
	$('#age').text(getAge('1989-10-12'));
});