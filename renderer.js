
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
	document.getElementById('log3').innerHTML = "Pinging  &ensp;  " + data.url + "&ensp; Ping: &ensp;"+ data.ms;
  })
  
      ipcRenderer.on('asynchronous-message4', (event, data) => {
    console.log("Received from main.js: " + data);
	//alert(arg);
	document.getElementById('log4').innerHTML = "Manufacturer: &ensp; "+data.system.manufacturer+"<br> Model: &ensp; "+data.system.model+"<br> OS: &ensp; "+data.os.platform+"<br> OS version: &ensp; "+data.os.distro+"<br> CPU: &ensp; "+data.cpu.brand+"<br> Network card: &ensp; "+data.net.toString();
  })





