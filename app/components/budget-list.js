import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteBudget () {
      return this.sendAction('deleteBudget', this.get('budget'));
    }
  }
});
