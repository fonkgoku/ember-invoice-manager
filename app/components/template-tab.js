import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  templateListStatus: service(),
  classNames: ['panel panel-default template-tab'],
  classNameBindings: ['isOpen'],
  isOpen: false,
  index: null,
  isProcessing: false,

  init() {
    this._super(...arguments);
    this.get('templateListStatus').on('toggle', this, 'compareServiceValues');
  },
  
  willDestroyElement() {
    this._super(...arguments);
    this.get('templateListStatus').on('toggle', this, 'compareServiceValues');
  },

  compareServiceValues(index) {
    const isTarget = this.get('index') === index;
    this.set('isOpen', isTarget);
  },

  actions: {
    toggleTab() {
      this.get('templateListStatus').trigger('toggle', this.get('index'));
    }
  }
});
