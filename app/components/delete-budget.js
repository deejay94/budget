import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteBudget() {
      this.sendAction('deleteBudget', this.get('budget'))
    }
  }
});
