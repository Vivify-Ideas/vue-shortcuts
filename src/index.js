import { ShortcutsDirective } from './directives/shortcuts-directive';
import { ShortcutsHelper } from './helpers/shortcuts-helper';

exports.install = (Vue, options) => {
  ShortcutsHelper.init(options || {});
  Vue.directive('shortcuts', ShortcutsDirective);
};
