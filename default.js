document.addEventListener('DOMContentLoaded', () => {
	const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10);
	document.getElementById('age').textContent = getAge('1989-10-12');

	const navigationType = performance.getEntriesByType('navigation')[0].type;
	if (navigationType === 'reload') {
		window.scrollTo(0, 0);
		window.location.href = window.location.origin;
	}
});