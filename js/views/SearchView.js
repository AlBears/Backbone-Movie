MovieApp.Views.Search = Backbone.View.extend({

    template: "<input type='text' placeholder='search'> \
               <button>Search movie</button> \
               <ul id='movie-list'></ul>",
    events: {
      'click button' : 'getmovies'
    },

    initialize: function(options) {},

    render: function()
    {
        this.$el.html(this.template);
        return this;
    },

    getmovies: function(){
      var title = this.$el.find('input').val();
      var movies = new MovieApp.Collections.Movies({title: title});

      movies.fetch();
    }
});
