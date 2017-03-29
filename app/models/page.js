import DS from 'ember-data';
const { attr } = DS;
import Ember from 'ember';

export default DS.Model.extend({
  title: attr('string'),
  slug: attr('string'),
  type: Ember.computed(function () {
    return this.constructor.modelName;
  })
});
