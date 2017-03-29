import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  color: DS.attr('number')
});
