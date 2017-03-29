import Ember from 'ember';

export function backgroundColor([color]) {
  if (typeof color === 'number') {
    return Ember.String.htmlSafe(`background-color: #${color.toString(16)}`);
  }
}

export default Ember.Helper.helper(backgroundColor);
