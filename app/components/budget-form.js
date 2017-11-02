import Ember from 'ember';

export default Ember.Component.extend({
newBudget: {
  name: null,
  goal: 0
},
actions: {
  createBudget () {
    return this.sendAction('createBudget', this.get('newBudget'));
  }
}
});
