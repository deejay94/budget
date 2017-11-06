import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
  return this.get('store').findRecord('budget', params.budget_id);
},
actions: {
  deleteBudget (budget) {
    budget.destroyRecord()
    .then(()=>{
      this.get('flashMessages').success('Successfully deleted a Budget');
      this.transitionTo('budgets');
    })
    .catch(() => {
      budget.rollbackAttributes();
      this.get('flashMessages').danger('Failed to delete budget');
    })
  },
  editBudget (budget, name, goal, actual) {
    budget.set('name', name);
    budget.set('goal', goal);
    budget.set('actual', actual);
    budget.save()
    .then(() => {
      this.get('flashMessages').success('Successfully edited your budget');
      })
    .catch(() => {
        budget.rollbackAttributes();
        this.get('flashMessages').danger('Failed to edit your budget');
      })
}
}
})
