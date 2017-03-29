import DS from 'ember-data';
const { attr } = DS;
import Ember from 'ember';

export default DS.Model.extend({
  name: attr('string'),
  photoURL: attr('string'),
  bio: attr({ fieldType: '@cardstack/mobiledoc' }),
  slug: attr('string'),
  type: Ember.computed(function () {
    return this.constructor.modelName;
  }),
  save() {
    if (this.get('isNew') && !this.get('slug')) {
      this.set('slug', this.get('name').replace(' ', '-').replace(/^a-zA-Z-/g, ''));
    }
    this._super.apply(this, arguments);
  }
});
