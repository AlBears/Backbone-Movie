var MovieApp = {

    Views: {},
    Models: {},
    Collections: {},
    Router: {}
}

$(document).ready(function(){
	MovieApp.Router.Instance = new MovieApp.Router();
 	Backbone.history.start();
});
