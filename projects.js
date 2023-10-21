// sample quiz
$(document).ready(function() {
    var answered = false;
  
    $('.option').click(function() {
        if (!answered) {
          
            $('.option').not(this).off('click');
            $('#feedback').empty().removeClass('correct incorrect');
            
            if ($(this).hasClass('correct-answer')) {
                $('#feedback').text('Correct!').addClass('correct');
            } else {
                $('#feedback').text('Incorrect!').addClass('incorrect');
            }

            $('.option').removeClass('selected');
            $(this).addClass('selected');

            answered = true; 
        }
    });
  });
  