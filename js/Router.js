MovieApp.Router = Backbone.Router.extend({

    routes: {
        'home': 'home',
        'search': 'search',
        'register': 'register',
        '*path': 'home'
      }
});
