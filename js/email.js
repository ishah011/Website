$(document).ready(function() {
    $('#submit').click(function() {
        $('#contactForm').attr('action',
                       'mailto:imshah2@illinois.edu?subject=' +
                       $('#contactSubject').val() + '&body=' + $('#contactMessage').val());
        $('##submit').submit();
    });
});