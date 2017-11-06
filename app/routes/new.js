import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createBudget (budget) {
      let newBudget = this.get('store').createRecord('budget', budget);
      newBudget.save()
      .then(() => {
        this.get('flashMessages').success('Successfully added new Budget');
        this.transitionTo('budgets');
      })
      .catch(() => {
        newBudget.rollbackAttributes();
        this.get('flashMessages').danger('Failed to add new Budget, please check all required fields.');
      })
        },
      cancel(budget) {
        this.transitionTo('budgets');
      }
  }
});
