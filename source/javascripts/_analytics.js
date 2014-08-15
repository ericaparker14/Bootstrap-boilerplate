//Submit
$('#ss-submit').on('click', function(){
  ga('send', 'event',  'Form', 'Clicked', 'Submit');
});

//Rules
$('#officialrules').on('click', function(){
  ga('send', 'event',  'Form', 'Rules', 'Clicked');
});
