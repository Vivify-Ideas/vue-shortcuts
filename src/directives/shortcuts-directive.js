import { ShortcutsHelper } from './../helpers/shortcuts-helper';

const ShortcutsDirective = {
  bind: (el, binding, vnode) => {
    let shortcuts = binding.value;
    for (let i in shortcuts) {
      if (shortcuts[i].avoid) {
        ShortcutsHelper.objAvoided.push(el);
        return;
      }
      let k = shortcuts[i].shortcut.join('');
      if (!ShortcutsHelper.mapFunctions[k]) {
        ShortcutsHelper.mapFunctions[k] = [];
      }
      ShortcutsHelper.mapFunctions[k].push({
        'ps': shortcuts[i].push === true,
        'oc': shortcuts[i].once === true,
        'fn': !(shortcuts[i].focus === true),
        'db': shortcuts[i].disabled || false,
        'cb': shortcuts[i].callback,
        'el': vnode.elm
      });
    }
  },
  unbind: (el, binding) => {
    let shortcuts = binding.value;
    for (let i in shortcuts) {
      if (shortcuts[i]) {
        let k = shortcuts[i].shortcut.join('');

        ShortcutsHelper.mapFunctions[k].splice(ShortcutsHelper.findIndexOf(k, el), 1);
      }
      let i;
      for (i in ShortcutsHelper.objAvoided) {
        if (ShortcutsHelper.objAvoided[i] === el) {
          ShortcutsHelper.objAvoided.splice(i, 1);
          break;
        }
      }
    }
  },
  update: (el, binding, vnode) => {
    let shortcuts = binding.value;
    for (let i in shortcuts) {
      let k = shortcuts[i].shortcut.join('');
      ShortcutsHelper.mapFunctions[k][ShortcutsHelper.findIndexOf(k, el)].db = shortcuts[i].disabled || false;
    }
  }
}

export { ShortcutsDirective };
