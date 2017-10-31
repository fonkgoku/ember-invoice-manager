import Ember from 'ember';

export function linebreakRenderer([string]) {
  return string.replace(/\n\r?/g, '<br>').htmlSafe();
}

export default Ember.Helper.helper(linebreakRenderer);
