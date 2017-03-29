import DS from 'ember-data';
const { attr, hasMany } = DS;
import Ember from 'ember';

export default DS.Model.extend({
  name: attr('string'),
  twitter: attr('string'),
  photoURL: attr('string'),
  bioHTML: attr('string'),
  bioText: attr('string'),
  bio: attr({ fieldType: '@cardstack/mobiledoc' }),
  tags: hasMany(),
  sessions: hasMany(),
  slug: attr('string'),
  type: Ember.computed(function () {
    return this.constructor.modelName;
  })
});
