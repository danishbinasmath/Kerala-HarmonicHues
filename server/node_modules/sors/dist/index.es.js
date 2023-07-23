import React from 'react';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Observable = function () {
  function Observable() {
    classCallCheck(this, Observable);

    this.observers = [];
    this.data = null;
  }

  createClass(Observable, [{
    key: 'subscribe',
    value: function subscribe(fn) {
      this.observers.push(fn);
    }
  }, {
    key: 'unsubscribe',
    value: function unsubscribe(fn) {
      this.observers = this.observers.filter(function (f) {
        return f !== fn;
      });
    }
  }, {
    key: 'getData',
    value: function getData() {
      return this.data;
    }
  }, {
    key: 'notify',
    value: function notify(data) {
      this.data = data;
      this.observers.forEach(function (fn) {
        if (typeof fn === 'function') {
          fn(data);
        }
      });
    }
  }]);
  return Observable;
}();

var Store = function () {
  function Store() {
    classCallCheck(this, Store);

    this.store = {};
  }

  createClass(Store, [{
    key: 'addStore',
    value: function addStore(storeName) {
      this.store[storeName] = {};
    }
  }, {
    key: 'addNode',
    value: function addNode(storeName, nodeName) {
      if (!this.store[storeName]) throw new Error('No store found');
      this.store[storeName][nodeName] = new Observable();
    }
  }, {
    key: 'setStore',
    value: function setStore(storeName, nodeName, data) {
      if (!this.store[storeName] || !this.store[storeName][nodeName]) throw new Error('No store found');
      this.store[storeName][nodeName].notify(data);
    }
  }, {
    key: 'getStore',
    value: function getStore(storeName, nodeName) {
      if (!this.store[storeName] || !this.store[storeName][nodeName]) throw new Error('No store found');
      return this.store[storeName][nodeName].getData();
    }
  }, {
    key: 'addListener',
    value: function addListener(storeName, nodeName, fn) {
      if (!this.store[storeName] || !this.store[storeName][nodeName]) throw new Error('No store found');
      if (!fn || typeof fn !== 'function') throw new Error('You need to pass a valid callback function');
      this.store[storeName][nodeName].subscribe(fn);
    }
  }, {
    key: 'removeListener',
    value: function removeListener(storeName, nodeName, fn) {
      if (!this.store[storeName] || !this.store[storeName][nodeName]) throw new Error('No store found');
      if (!fn || typeof fn !== 'function') throw new Error('You need to pass a valid callback function');
      this.store[storeName][nodeName].unsubscripe(fn);
    }
  }]);
  return Store;
}();

var GlobalStore = new Store();

function InjectStore(Component, store) {
  return function (_React$Component) {
    inherits(_class, _React$Component);

    function _class(props) {
      classCallCheck(this, _class);

      var _this = possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

      _this.storeName = store.getName();
      var state = store.getInitState() || {};
      GlobalStore.addStore(_this.storeName);
      Object.keys(state).forEach(function (node) {
        GlobalStore.addNode(_this.storeName, node);
        GlobalStore.setStore(_this.storeName, node, state[node]);
      });
      _this.on = _this.on.bind(_this);
      _this.onStore = _this.onStore.bind(_this);
      _this.getStore = _this.getStore.bind(_this);
      _this.setStore = _this.setStore.bind(_this);
      _this.listeners = [];
      return _this;
    }

    createClass(_class, [{
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.listeners.forEach(function (listener) {
          return GlobalStore.removeListener(listener.store, listener.node, listener.fn);
        });
      }
    }, {
      key: 'on',
      value: function on(nodes, fn) {
        var _this2 = this;

        if (nodes) {
          if (Array.isArray(nodes)) {
            nodes.forEach(function (node) {
              GlobalStore.addListener(_this2.storeName, node, fn);
              _this2.listeners.push({ store: _this2.storeName, node: node, fn: fn });
            });
          } else {
            GlobalStore.addListener(this.storeName, nodes, fn);
            this.listeners.push({ store: this.storeName, nodes: nodes, fn: fn });
          }
        }
      }
    }, {
      key: 'onStore',
      value: function onStore(store, nodes, fn) {
        var _this3 = this;

        if (store && nodes) {
          var storeName = store.getName();
          if (Array.isArray(nodes)) {
            nodes.forEach(function (node) {
              GlobalStore.addListener(storeName, node, fn);
              _this3.listeners.push({ store: storeName, node: node, fn: fn });
            });
          } else {
            GlobalStore.addListener(storeName, nodes, fn);
            this.listeners.push({ store: storeName, nodes: nodes, fn: fn });
          }
        }
      }
    }, {
      key: 'getStore',
      value: function getStore(store, nodeName) {
        var storeName = store.getName();
        return GlobalStore.getStore(storeName, nodeName);
      }
    }, {
      key: 'setStore',
      value: function setStore(store, nodeName, data) {
        var storeName = store.getName();
        GlobalStore.setStore(storeName, nodeName, data);
      }
    }, {
      key: 'render',
      value: function render() {
        return React.createElement(Component, { on: this.on, onStore: this.onStore, getStore: this.getStore, setStore: this.setStore });
      }
    }]);
    return _class;
  }(React.Component);
}

var Store$1 = function () {
  function Store(name, initState) {
    classCallCheck(this, Store);

    this.setName(name);
    this.setInitState(initState);
  }

  createClass(Store, [{
    key: 'setName',
    value: function setName(name) {
      this.name = name;
    }
  }, {
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'setInitState',
    value: function setInitState(initState) {
      if (!initState || (typeof initState === 'undefined' ? 'undefined' : _typeof(initState)) !== 'object') throw new Error('unspported type');
      this.initState = initState;
    }
  }, {
    key: 'getInitState',
    value: function getInitState() {
      return this.initState;
    }
  }]);
  return Store;
}();

export { InjectStore, Store$1 as Store };
//# sourceMappingURL=index.es.js.map
