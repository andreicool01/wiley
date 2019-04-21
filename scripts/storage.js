var storage = {

  get: function(key) {
    return typeof localStorage.getItem(key) !== 'undefined' ? JSON.parse(localStorage.getItem(key)) : {};
  },

  set: function (key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      if(e === QUOTA_EXCEED_ERR) {
        alert('Out of storage limit!')
      }
    }
  },

  remove: function(key) {
     localStorage.removeItem(key);
  },

  clear: function() {
    localStorage.clear();
  },

  getList: function( limit = null) {
    var items = [],
        i = 0;
    for(var key in localStorage) {

      if(key.indexOf('_kaa_') !== -1) {
        items.push(key);
        if(limit !== null) {
          if (i >= limit - 1) {
            break;
          }
          i++;
        }
      }
    }

    var msort = this.msort(items),
    sortedList = [];
    for(var key in msort) {
      var o =  msort[key];
      sortedList.push(o.key);
    }
    return sortedList;

  },

  msort: function(items){
    var sorted = [];
    for(var k in items) {
      var key  = items[k],
      data = this.get(key);
      data.key = key;
      sorted.push(data);
    }

    sorted.sort(function(a, b){

      var titleA=a.title.toLowerCase(), titleB=b.title.toLowerCase();
      if (titleA < titleB) //sort string ascending
        return -1;
      if (titleA > titleB)
        return 1;
      return 0; //default return value (no sorting)
    });
    return sorted;
  },


  finish: function(key) {
      var task = this.get(key);
      task.status = 'finished';

      this.set(key, JSON.stringify(task));
  }




}
