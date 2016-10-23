MovieApp.Views.Register = Backbone.View.extend({

  template: _.template(`<form id="registerForm">
                          <input type="text" class="contact-name" placeholder="register">
                          <input type="email" class="contact-email" placeholder="email">
                          <input type="submit" value="Register">
                        </form>`),
  events: {
    'click input[type="submit"]': 'reg'
  },

    initialize: function(options) {},

    render: function()
    {
        this.$el.html(this.template());
        return this;
    },

    reg: function(e){
      console.log('register');
      e.preventDefault();
      this.trigger('form:submitted', {
        name: this.$('.contact-name').val(),
        email: this.$('.contact-email').val()
      });
    }
});
