const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow
const ua = require('universal-analytics')

const path = require('path')
const url = require('url')

const si = require('systeminformation');

// In main process.
const {ipcMain} = require('electron')
  //const mainWindow = ... // reference to the BrowserWindow


const Traceroute = require('nodejs-traceroute');
  
function runTraceroute() { 
try {
    const tracer = new Traceroute();
    tracer
 //       .on('pid', (pid) => {
 //           console.log(`pid: ${pid}`);
//			mainWindow.webContents.send('asynchronous-message', `pid: ${pid}`)
 //       })
        .on('destination', (destination) => {
  //          console.log(`destination: ${destination}`);
			mainWindow.webContents.send('asynchronous-message', `destination: ${destination}`)
        })
        .on('hop', (hop) => {
 //           console.log(`hop: ${JSON.stringify(hop)}`);
			mainWindow.webContents.send('asynchronous-message', `hop: ${JSON.stringify(hop)}`)
			
        })
        .on('close', (code) => {
 //           console.log(`close: code ${code}`);
			mainWindow.webContents.send('asynchronous-message', `close: code ${code}`)
        });
 
    tracer.trace('github.com');
} catch (ex) {
    console.log(ex);
}
}

//si.cpu(function(data) {
//    console.log('CPU Information:');
//    console.log('- manufucturer: ' + data.manufacturer);
//    console.log('- brand: ' + data.brand);
//    console.log('- speed: ' + data.speed);
//    console.log('- cores: ' + data.cores);
//    console.log('- physical cores: ' + data.physicalCores);
 //   console.log('...');
//})



//	si.networkStats().then(data => {
//	    console.log(data);
//	});
// Working!
//	si.getStaticData().then(data => {
//	    console.log(data);
// Working!
//si.getDynamicData().then(data => {
//	    console.log(data);

setInterval(function() {
si.inetChecksite('https://systeminformation.io/network.html').then(data => {
//	    console.log(data);
        mainWindow.webContents.send('asynchronous-message3', data);		
	})
}, 1000)

setInterval(function() {
si.inetLatency('1.1.1.1').then(data => {
//	    console.log(data);
		mainWindow.webContents.send('asynchronous-message2', data);
	})
}, 1000)

setInterval(function() {
    si.networkStats().then(data => {
       console.log(data);
//		mainWindow.webContents.send('asynchronous-message3', data);
    })
}, 1000)


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

/**
 */
function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({    width: 1000,
    height: 700,
    resizable: false,
	backgroundColor: '#000000'
})
  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

 // mainWindow.setMenu(null)

  // Open the DevTools.
 //  mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
  require('./menu/mainmenu')
  
  
  //ŠIS PALAIŽ TRACEROUTE FUNKCIJU UN NOSŪTA DATUS UZ PAMATLOGU
    setTimeout(() => {
        console.log("sending message from main process")
        mainWindow.webContents.send('asynchronous-message', 'Starting traceroute');
		mainWindow.webContents.send('asynchronous-message2', 'Starting traceroute2');
		mainWindow.webContents.send('asynchronous-message3', 'Starting traceroute3');
		runTraceroute();
    }, 2000)    
  
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  app.quit()
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
