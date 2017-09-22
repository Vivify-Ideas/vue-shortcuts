# VueShortcuts

[![npm](https://img.shields.io/npm/v/vue-shortcuts.svg)](https://www.npmjs.com/package/vue-shortcuts) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> A Simple keyboard shortcut plugin for Vue

## Installation

```bash
npm install --save vue-shortcuts
```

## Usage

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import VueShortcuts from 'vue-shortcuts'

Vue.use(VueShortcuts, { prevent: ['input'] })
```
### Options
| Prop | Type | Default | Describe |
| ---- | ---- | ------- | ------- |
| prevent | Array | `[]` | List of selectors that will ignore the event |

### Syntax
```
<component v-shortcuts="[
  { shortcut: [ 'ctrl', 'space' ], callback: foo, push: true, focus: true },
  { shortcut: [ 'shift', 'esc' ], callback: bar, once: true, disabled: someBoolean },
]">
```
### Props

| Prop | Type | Default | Describe |
| ---- | ---- | ------- | ------- |
| shortcut | Array | `[]` | Array of keystrokes that trigger the callback |
| callback | Function | `none` | Callback function called while the key is pressed |
| once | Boolean | `false` | Trigger only on keyup |
| push | Boolean | `false` | Trigger only on keydown and up, not contiuously while held |
| focus | Boolean | `false` | Focus element instead of calling callback |
| disabled | Boolean | `false` | Reactive property that disables that key |

## License

[MIT](http://opensource.org/licenses/MIT)
