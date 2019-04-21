$(function(){

  var workplace = new Workplace();
  workplace.getList(); // getList(int) for limit

    // create task card
    $(document).delegate('#add', 'click', function () {

      if($('div.newcard').length==0) {
        // create new task card
        workplace.edit();
      }
    }); // create task card


  // button cancel card
  $(document).delegate('#cardcancel','click', function(){

    $('div.newcard').fadeOut(200, function(){
      $(this).remove();
      $('.overlay').remove();
    });
  });

  //button save card
  $(document).delegate('#cardsave','click',function(){

    var $key = $('div.newcard').find('input[name=key]'),
        $title = $('div.newcard').find('input[name=title]'),
        $text = $('div.newcard').find('textarea[name=text]');

    if($title.val()==='') {
      console.log('title empty');
      $title.addClass('text-error');
      return false;
    }

    if($text.val()==='') {
      console.log('text empty');
      $text.addClass('text-error');
      return false;
    }

    var objCard = {
      key: $key.val(),
      title: $title.val(),
      text: $text.val(),
      status: 'in work'
    };

    workplace.add(objCard);

    $('div.newcard').fadeOut(200, function(){
      $(this).remove();
      $('.overlay').remove();
    });
    location.reload();
  });

    $(document).delegate('button.btn-delete', 'click', function(){
      if(confirm('Delete task?')) {
        workplace.remove($(this).data('id'));
        location.reload();
      }
    });

  $(document).delegate('button.btn-completed', 'click', function(){
    if(confirm('Finish task?')) {
      workplace.finish($(this).data('id'));
      location.reload();
    }

  });


  $(document).delegate('button.btn-edit', 'click', function(){
      workplace.edit($(this).data('id'));
  });


    $(document).delegate('#trash','click',function () {
        if(confirm('Clear all storage?')) {
          workplace.clear();
          location.reload();
        }
    });


});

