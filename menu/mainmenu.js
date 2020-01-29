const {Menu} = require('electron')
const electron = require('electron')
const app = electron.app

const template = [
  {
    label: 'Connection',
    submenu: [
      {
        label: 'New secure connection'
      },
	        {
        label: 'Disconect'
      },
	  	        {
        label: 'Reconnect'
      },
    ]
  },

  {
    label: 'Edit',
    submenu: [
      {
        label: 'Preferences'
      },
	        {
        label: 'Configuration'
      },
	  	        {
        label: 'Settings'
      },
    ]
  },

  {
    label: 'View',
    submenu: [
      {
        label: 'Reload',
        accelerator: 'CmdOrCtrl+R',
        click (item, focusedWindow) {
          if (focusedWindow) focusedWindow.reload()
        }
      },
      {
        label: 'Toggle Developer Tools',
        accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
        click (item, focusedWindow) {
          if (focusedWindow) focusedWindow.webContents.toggleDevTools()
        }
     },

        ]
  },
  {
    role: 'window',
    submenu: [
      {
        role: 'minimize'
      },
      {
        role: 'close'
      }
    ]
  },
  
    {
    label: 'Developer tools',
    submenu: [
      {
        label: 'Change stream type'
      },
	      {
      type: 'separator'
    },
	        {
        label: '+ HLS'
      },
	  	        {
        label: 'RTMP'
      },
	  	  	        {
        label: 'CMAF'
      },
    ]
  },
  
   
  {
    role: 'help',
    submenu: [
      {
        label: 'Visit Filmas.lv',
        click () { require('electron').shell.openExternal('https://www.filmas.lv/') }
      },
	        {
        label: 'Contact support'
              },
			   {       label: 'Submit Debug Report'
              },
			  {        label: 'Update'
              }
    ]
  }
]

if (process.platform === 'darwin') {
  const name = app.getName()
  template.unshift({
    label: name,
    submenu: [
      {
        role: 'about'
      },
      {
        type: 'separator'
      },
      {
        role: 'services',
        submenu: []
      },
      {
        type: 'separator'
      },
      {
        role: 'hide'
      },
      {
        role: 'hideothers'
      },
      {
        role: 'unhide'
      },
      {
        type: 'separator'
      },
      {
        role: 'quit'
      }
    ]
  })
  // Edit menu.
  template[1].submenu.push(
    {
      type: 'separator'
    },
    {
    label: 'Connection',
    submenu: [
      {
        label: 'New secure connection'
      },
	        {
        label: 'Disconect'
      },
	  	        {
        label: 'Reconnect'
      },
    ]
    }
  )
  // Window menu.
  template[3].submenu = [
    {
      label: 'Close',
      accelerator: 'CmdOrCtrl+W',
      role: 'close'
    },
    {
      label: 'Minimize',
      accelerator: 'CmdOrCtrl+M',
      role: 'minimize'
    },
    {
      label: 'Zoom',
      role: 'zoom'
    },
    {
      type: 'separator'
    },
    {
      label: 'Bring All to Front',
      role: 'front'
    }
  ]
}

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)