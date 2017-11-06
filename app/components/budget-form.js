import Ember from 'ember';

export default Ember.Component.extend({
newBudget: {
  name: null,
  goal: null,
  actual: null
},
actions: {
  createBudget () {
    this.sendAction('createBudget', this.get('newBudget'));
    this.set('newBudget.name', null);
    this.set('newBudget.goal', null);
    this.set('newBudget.actual', null);
  },
  cancel() {
    this.sendAction('cancel', this.get('newBudget'));
    this.set('newBudget.name', null);
    this.set('newBudget.goal', null);
    this.set('newBudget.actual', null);
  }
}
});
