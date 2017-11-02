import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createBudget (budget) {
      let newBudget = this.get('store').createRecord('budget', budget);
           newBudget.save();
           this.transitionTo('budgets');
        }
  }
});
