MovieApp.Views.Register = Backbone.View.extend({

  template: _.template(`
<form id="registerForm">
  <div class="form-group">
      <label for="name" class="col-lg-2 control-label">Name</label>
      <div class="col-lg-10">
          <input type="text" class="form-control contact-name" id="name" name="name" />
          <span class="help-block hidden"></span>
      </div>
  </div>
  <div class="form-group">
      <label for="email" class="col-lg-2 control-label">Email</label>
      <div class="col-lg-10">
          <input type="email" class="form-control contact-email" id="email" name="email" />
          <span class="help-block hidden"></span>
      </div>
  </div>
  <div class="form-group">
      <div class="col-lg-offset-2 col-lg-10">
          <button type="button" id="register" class="btn btn-success">Register</button>
      </div>
  </div>
</form>`),


  events: {
    'click #register': 'reg'
  },

    initialize: function() {
      Backbone.Validation.bind(this);
    },

    render: function()
    {
        this.$el.html(this.template());
        return this;
    },

    reg: function(e){
      e.preventDefault();
      var data = {
        name:this.$('.contact-name').val(),
        email:this.$('.contact-email').val()
      }
      //this.signUp(data);
      this.model.set(data);
      if(this.model.isValid(true)){
      this.trigger('form:submitted', data);
      // this.trigger('form:submitted', {
      //   name: name,
      //   email: email
      // });
    }
    },

    // signUp: function (data) {
    //
    //
    //
    //     if(this.model.isValid(true)){
    //         // this.model.save();
    //         alert('Great Success!');
    //     }
    // },
});
