$(document).ready(function () {

	$('[data-toggle="tooltip"]').tooltip({
		trigger : 'hover'
	});

    $('.whoami').click(function () {
		$('.expand').find('i').toggleClass('fa-angle-double-up fa-angle-double-down');
        $('.content').slideToggle('slow');
    });
	
	$('.copyright-date').text(new Date().getFullYear());
	
});