
// Recieving tada from MAIN.JS end publish to "log" div element
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
	document.getElementById('log3').innerHTML = data.url+ "<br>"+data.ok+ "<br>"+data.status+ "<br>"+data.ms;
  })





