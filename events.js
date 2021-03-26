const {EventEmitter} = require('events')

const ev = new EventEmitter()

//ev.once ouvir uma unica vez
//ev.on ouvir varias vezes

ev.once('saySomething', (message) => {
    console.log('Eu ouvi você ', message)
})

ev.emit('saySomething' , "Ouvindo")
ev.emit('saySomething', "Voçês")
