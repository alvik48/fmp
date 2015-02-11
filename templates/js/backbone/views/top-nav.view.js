'use strict';

/* ==============================================
    TopNavView
============================================== */

APP.TopNavView = Backbone.View.extend({
    el: $('.jsTopNav'),

    events: {
        'click .jsToggle': 'toggle'
    },

    initialize: function() {
        this.samples = new APP.NavLinks([
            { title: 'Home page', link: '/'},
            { title: 'Test page', link: '/test-page/' }
        ]);
        this.render();
    },

    render: function() {
        var self = this;
        _(this.samples.models).each(function(item){
            self.appendItem(item);
        }, this);
    },

    appendItem: function(item) {
        var link = '<a href="' + item.get('link') + '">' + item.get('title') + '</a>';
        $(this.el).append(link);
    },

    toggle: function() {
        $(this.el).toggleClass('active');
    }
});