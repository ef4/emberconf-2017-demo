import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  type: Ember.computed(function () {
    return this.constructor.modelName;
  })
});
