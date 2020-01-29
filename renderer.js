// ŠIS SAŅEM DATUS NO MAIN.JS procesa un pievieno beigās log elementā
  const {ipcRenderer} = require('electron')

  ipcRenderer.on('asynchronous-message', (event, data) => {
    console.log("Received from main.js: " + data);
	//alert(arg);
	document.getElementById('log').insertAdjacentHTML('beforeend',data + "<br>");
  })
  
    ipcRenderer.on('asynchronous-message2', (event, data) => {
	document.getElementById('log2').innerHTML = data;
  })
  
    ipcRenderer.on('asynchronous-message3', (event, data) => {
    console.log("Received from main.js: " + data);
	//alert(arg);
	document.getElementById('log3').insertAdjacentHTML('beforeend',data);
  })


//ŠIS JAU BIJA

// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

let vueApp = new Vue({
  el: '#app',
  data: {
    message: 'Hola, Earth!',
    buttonText: 'I\'m button',
    counter: 0
  },
  methods: {
    button: function () {
      this.buttonText = `Been clicked ${++this.counter} times`
    }
  } // end of methods
})



