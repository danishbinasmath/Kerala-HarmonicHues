# Simple Observable Reactjs Store (SORS)

> Simple Observable Reactjs Store is a simple library to manage reactjs store. It uses HOC and javascript observable pattern. It can be usefull if you looking for a simple way to manage your reactjs app.

[![NPM](https://img.shields.io/npm/v/sors.svg)](https://www.npmjs.com/package/sors) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save sors
```

## Usage
**Simple Example**

counter.js
```jsx
import React, { Component } from 'react'

import { InjectStore, Store } from 'sors'

const demoInitialState = {
  count: 0,
}

export const counterStore = new Store('demo', demoInitialState)

class Counter extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    let val = Number(this.props.getStore(appStore, 'id'));
    val += 1;
    this.props.setStore(appStore, 'id', val)
  }

  render() {
    return (
      <div style={{width: '100%', height: '300px'}}>
      <button onClick={this.onClick}>Increase</button>
      </div>
    )
  }
}

export default InjectStore(Counter, counterStore)
```

example.js
```jsx
import React, { Component } from 'react'

import { InjectStore, Store } from 'sors'

import { counterStore } from './counter'

export const mainStore = new Store('main', {})

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.getStore(counterStore, 'count')
    }
    this.onChange = this.onChange.bind(this)
    props.onStore(counterStore, 'count', this.onChange)
  }

  onChange(newVal) {
    this.setState({ counter: newVal })
  }

  render() {
    return (
      <div style={{width: '100%', height: '300px'}}>{this.state.counter}</div>
    )
  }
}

export default InjectStore(Example, mainStore, )
```

### API

**props.getStore(store, node):** used to get node value from store

**props.setStore(store, node, data):** used to set node value = data in store

**props.on(node, fn):** subscribe "fn" to get updated value when node(s) in the current store changes

**props.onStore(store,node, fn):** subscribe "fn" to get updated value when node(s) in store changes


## License

MIT © [Mojahed Elbakre](https://github.com/mmmmoj)
