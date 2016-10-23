var MovieApp = {

    Views: {},
    Models: {},
    Collections: {},
    Router: {}
}

$(document).ready(function() {
    MovieApp.Router.Instance = new MovieApp.Router();
    var customers = new MovieApp.Collections.Customers([
      new MovieApp.Models.Customers({id:1, name: "John", email: "john@example.com"}),
      new MovieApp.Models.Customers({id:2, name: "Peter", email: "peter@example.com"}),
      new MovieApp.Models.Customers({id:3, name: "Mike", email: "mike@example.com"}),
    ]);

    MovieApp.Router.Instance.on('route:home', function() {
        var homeView = new MovieApp.Views.Home();
        $('#main').html(homeView.render().el);
        var customerView = new MovieApp.Views.CustomerView({model: customers});
        $('#customers').html(customerView.render().el);
    });

    MovieApp.Router.Instance.on('route:search', function() {
        var searchView = new MovieApp.Views.Search();
        $('#main').html(searchView.render().el);
    });

    MovieApp.Router.Instance.on('route:register', function() {
        var registerView = new MovieApp.Views.Register();
        $('#main').html(registerView.render().el);

        registerView.on('form:submitted', function(attr) {
            console.log(attr);
            attr.id = customers.isEmpty() ? 1 : (_.max(customers.pluck('id')) + 1);
            customers.add(attr);
            console.log(customers);
            MovieApp.Router.Instance.navigate('home', true);
        });
    });

    Backbone.history.start();
});
