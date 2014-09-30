(function () {
  'use strict';

  console.log('The Iron Yard Rocks');

    var booksOwned = [
    {
      title: "Incognito",
      author: "David Eagleman"
    },
    {
      title: "Stranger In a Strange Land",
      author: "Robert A. Heinlein"
    },
    {
      title: "1984",
      author: "George Orwell"
    },
    {
      title: "Brave New World",
      author: "Aldous Huxley"
    },
    {
      title: "Purpose Driven Life",
      author: "Rick Warren"
    },
    {
      title: "Mere Christianity",
      author: "C.S. Lewis"
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho"
    },
    {
      title: "Aleph",
      author: "Paulo Coelho"
    },
    {
      title: "The Shack",
      author: "William P. Young"
    },
    {
      title: "The Giver",
      author: "Lois Lowry"
    },
    {
      title: "The Chronicles of Narnia",
      author: "C.S. Lewis"
    }
  ];

  var SearchContainer = Backbone.View.extend({
    tagName: 'ul',

    initialize: function(options) {
      this.options = options || {};
    },

    render: function(){
      $('body').append(this.el);
    }

  });


  var BookName = Backbone.View.extend({
    tagName: 'li',

    initialize: function(options) {
      this.title = options.title;
    },

    render: function(){
      this.$el.text(this.title);
      $('ul').append(this.el);
    }
  });

  var searchContainer = new SearchContainer();
  searchContainer.render();

  _.each(booksOwned, function(person){
    var bookName = new BookName(person);
    bookName.render();
  });

})();
