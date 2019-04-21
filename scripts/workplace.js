var Workplace = function(){
  if(typeof storage !== 'undefined') {

    var _storage = storage;
    var self = this;

    var PREFIX = '_kaa_';


    this.add = function (value) {
      _storage.set(value.key, JSON.stringify(value));

    };

    this.remove = function (key) {
      _storage.remove(key);
    };

    this.edit = function (key = null) {

      var data = {
        key: PREFIX + new Date().getTime(),
        title: '',
        text: '',
        caption: 'New card',
        status: 'in work'
      };

      if(key !== null) {
        data = _storage.get(key);
        data.caption = 'Edit card';
      }

      var $overlay = $('<div/>');
      $overlay.addClass('overlay');
      $overlay.appendTo('body');

      var $card = $('<div style="display: none;"/>');
      $card.addClass('mdl-grid mdl-cell mdl-cell--12-col mdl-grid mdl-color--white mdl-shadow--2dp newcard');
      $card.html([data].map(editCard).join(''));
      $card.appendTo($overlay).fadeIn(200);

      if(data.status == 'finished') {
        $card.find('#cardsave').remove();
      }

      return $card;

    };


    this.finish = function(key){
        _storage.finish(key);
    }




    this.get = function(key) {

      data = _storage.get(key);
      var cardClass = "mdl-color--white mdl-shadow--2dp";
      if(data.status === 'finished') {
          cardClass = "mdl-color--amber-500 mdl-shadow--2dp";
      }

      var $card = $('<div style="display: none;" class="'+cardClass+' pad0"/>');
      $card.addClass('mdl-grid');
      $card.html([data].map(getCard).join(''));

      if(data.status === 'finished') {
        $card.find('button.btn-completed').remove()
      }
      $card.appendTo('#content').fadeIn(200);
      return $card;
    };

    this.getList = function( limit = null) {
        var keyList = _storage.getList(limit);
        for(var item in keyList) {
          var key = keyList[item];
          this.get(key);
        }
    };


    this.clear = function() {
      _storage.clear();
    }

  } else {
    alert('Storage not found')
  }
}
