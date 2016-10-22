MovieApp.Router = Backbone.Router.extend({

    routes: {
        'home': 'home',
        '*path': 'home'
    },

    home: function(){
      var view = new MovieApp.Views.Home();
      $('#main').html(view.render().el);
    }
});
