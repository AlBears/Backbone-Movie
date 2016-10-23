MovieApp.Models.Register = Backbone.Model.extend({

  validation: {
    name: {
      required: true
    },
    email: {
      required: true,
      pattern: 'email'
    }
  },

    initialize: function(options)   {},
});
