import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  budgets: DS.hasMany('budget')
});

totalGoal: Ember.computed.sum('goal');
