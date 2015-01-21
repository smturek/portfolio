import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    this.render('resume', { outlet: 'resume' });
  }
});
