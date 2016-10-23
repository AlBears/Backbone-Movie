MovieApp.Views.CustomerView = Backbone.View.extend({

  template: _.template(`Customers: <%= length %>`),

    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
    },

    render: function(){
      this.$el.html(this.template(this.model));
      return this;
    }
});
