import { ShortcutsDirective } from './directives/shortcuts-directive';
import { ShortcutsHelper } from './helpers/shortcuts-helper';

let VueShortcuts = {}

VueShortcuts.install = (Vue, options) => {
  ShortcutsHelper.init(options || {});
  Vue.directive('shortcuts', ShortcutsDirective);
};

export default VueShortcuts;
