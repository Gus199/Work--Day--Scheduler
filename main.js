

var today =moment();
$('.container').css("font-size","40px").text(today.format('MMMM Do YYYY, h:mm:ss a'));

var saveButton = document.getElementById('button-addon1');


saveButton.addEventListener('click', function(event){
 var textInput = document.querySelector('.form-control').value;
 localStorage.setItem('text', textInput);
 alert(' this text saved');

event.preventDefault();
});

