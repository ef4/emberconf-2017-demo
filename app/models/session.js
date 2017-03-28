import DS from 'ember-data';
const { attr } = DS;

export default DS.Model.extend({
  startTime: attr('date'),
  endTime: attr('date'),
  title: attr('string'),
  descriptionHTML: attr('string'),
  descriptionText: attr('string')
});
