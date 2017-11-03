import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  goal: DS.attr('number'),
  actual: DS.attr('number'),
  user: DS.belongsTo('user'),

  difference: Ember.computed('goal', 'actual', function() {
    let goal = this.get('goal');
    let actual = this.get('actual');
    return (goal - actual);
  })
});
