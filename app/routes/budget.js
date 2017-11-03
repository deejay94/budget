import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
  return this.get('store').findRecord('budget', params.budget_id);
},
actions: {
  deleteBudget (budget) {
    budget.destroyRecord()
    .then(()=>{
         this.transitionTo('budgets');
    })
  },
  editBudget(budget, name, goal, actual) {
  budget.set('name', name);
  budget.set('goal', goal);
  budget.set('actual', actual);
  budget.save();
  }
}
})
