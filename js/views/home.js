MovieApp.Views.Home = Backbone.View.extend({
    template: _.template(`<div>Home Page</div>
                          <div id="customers"></div>`),
    initialize: function(options) {},

    render: function()
    {
        this.$el.html(this.template());
        return this;
    }
});
