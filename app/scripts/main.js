(function () {
  'use strict';

    var booksOwned = [
    {title: "Incognito"},
    {title: "Stranger In a Strange Land"},
    {title: "1984"},
    {title: "Brave New World"},
    {title: "Purpose Driven Life"},
    {title: "Mere Christianity"},
    {title: "The Alchemist"},
    {title: "Aleph"},
    {title: "The Shack"},
    {title: "The Giver"},
    {title: "The Chronicles of Narnia"}
  ];

  var SearchContainer = Backbone.View.extend ({
    tagName: 'ul',

    render: function(){
      $('.container').append(this.el);
    }

  });


  var BookName = Backbone.View.extend ({
    tagName: 'li',

    initialize: function(options) {
      this.title = options.title;
    },

    render: function(){
      this.$el.text(this.title);
      $('ul').append(this.el);
    }
  });

  var InputField = Backbone.View.extend ({
    initialize: function() {
      $('input').on('keyup', function () {
         console.log("this is working!");
      });
    }
    // },
    //
    // events: {
    // "keyup": ""
    // }
  });

  var searchContainer = new SearchContainer();
  searchContainer.render();

  var inputField = new InputField();

  _.each(booksOwned, function(title) {
    var bookName = new BookName(title);
    bookName.render();
  });

})();
