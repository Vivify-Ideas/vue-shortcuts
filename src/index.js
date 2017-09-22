/*
 * index.js
 *
 * Distributed under terms of the MIT license.
 */

import { ShortcutsDirective } from './directives/shortcuts-directive';
import { ShortcutsHelper } from './helpers/shortcuts-helper';

exports.install = (Vue, options) => {
  ShortcutsHelper.init();
  ShortcutsHelper.elementAvoided = [ ...(options && options.prevent ? options.prevent : []) ];
  Vue.directive('shortcuts', ShortcutsDirective);
};

