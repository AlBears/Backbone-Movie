MovieApp.Views.MovieView = Backbone.View.extend({

  template: _.template(`<li><%= Title %>
                        (<%= Year %>)</li>`),

    initialize: function(options) {
      if (options.model)
      this.model = options.model;
    },

    render: function(){
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
});
