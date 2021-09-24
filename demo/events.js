const EventEmitter = require('events');

const emmitter = new EventEmitter();

//* не работает
// emmitter.on(event: 'anything', listener: data => {
//     console.log('ON: anything', data)
// })

// emmitter.emit(event:'anything', args{ a:1})

// setTimeout(() => {
//     emmitter.emit('anything', {c:3})
// }, 1500)

class Dispatcher extends EventEmitter {
  subscribe(eventName, callBack) {
    console.log('[Subscribe...]');
    this.on(eventName, callBack);
  }

  dispatch(eventName, data) {
    console.log('[Dispatching...]');
    this.emit(eventName, data);
  }
}

const dis = new Dispatcher();
dis.dispatch(eventName: 'aa', callBack: data => {
    console.log('On: aa', data)
})

dis.dispatch(eventName:'aa', data{aa:22})