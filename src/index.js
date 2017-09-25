import { ShortcutsDirective } from './directives/shortcuts-directive';
import { ShortcutsHelper } from './helpers/shortcuts-helper';

export {
  function install (Vue, options) {
    ShortcutsHelper.init(options || {});
    Vue.directive('shortcuts', ShortcutsDirective);
  }
};
