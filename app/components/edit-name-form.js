import Ember from 'ember';

export default Ember.Component.extend({
  name: null,
  goal: null,
  actual: null,
  actions: {
    editBudget() {
      this.sendAction('editBudget', this.get('budget'), this.name, this.goal, this.actual);
      this.set('name', null);
      this.set('goal', null);
      this.set('actual', null);
    }
  }
});
