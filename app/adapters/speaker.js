import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  shouldReloadRecord() {
    return false;
  },
  shouldBackgroundReloadRecord() {
    return false;
  },
  findRecord(store, type, id /*, snapshot */) {
    return this.ajax('/speakers').then(document => {
      let matching;
      let other = document.data.filter(d => {
        if (String(d.id) === id) {
          matching = d;
        } else {
          return true;
        }
      });
      return {
        data: matching,
        included: document.included.concat(other)
      };
    });
  }
});
