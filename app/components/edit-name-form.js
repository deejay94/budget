import Ember from 'ember';

export default Ember.Component.extend({
  name: null,
  goal: 0,
  actions: {
    editBudget() {
      return this.sendAction('editBudget', this.get('budget'), this.name, this.goal);
    }
  }
});
