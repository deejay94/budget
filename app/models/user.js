import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  budgets: DS.hasMany('budget'),
  totalBudgetGoals: Ember.computed('budgets.@each.goal', function() {
     return this.get('budgets').mapBy('goal').reduce((a, b) => a + b, 0);
 })
});
