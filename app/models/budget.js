import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  goal: DS.attr('number'),
  actual: DS.attr('number'),
  user: DS.belongsTo('user'),

  difference: Ember.computed('goal', 'actual', function() {
    let goal = this.get('goal');
    let actual = this.get('actual');

      if (goal > actual) {
        return `You spent $${(goal - actual)} less than your goal! Good job!`
      } else {
        return `You spent $${(goal - actual)*(-1)} more than your goal! Do better!`
      }
    })
})
