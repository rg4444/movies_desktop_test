// ./build_installer.js

// 1. Import Modules
const { MSICreator } = require('electron-wix-msi');
const path = require('path');

// 2. Define input and output directory.
// Important: the directories must be absolute, not relative e.g
// appDirectory: "C:\\Users\sdkca\Desktop\OurCodeWorld-win32-x64", 
const APP_DIR = path.resolve(__dirname, './release-builds/Filmas-lv Desktop app-win32-ia32');
// outputDirectory: "C:\\Users\sdkca\Desktop\windows_installer", 
const OUT_DIR = path.resolve(__dirname, './release-builds/windows-installer');

// 3. Instantiate the MSICreator
const msiCreator = new MSICreator({
    appDirectory: APP_DIR,
    outputDirectory: OUT_DIR,

    // Configure metadata
    description: 'Filmas-lv Desktop app',
    exe: 'Filmas-lv Desktop app',
    name: 'Filmas-lv Desktop app',
    manufacturer: 'Rihards Gailums',
    version: '0.0.1',
	extensions: ['WixUtilExtension'],
//(array, optional) - Specify WiX extensions to use e.g ['WixUtilExtension', 'C:\My WiX Extensions\FooExtension.dll']
shortName: 'EVGStreamTestapp',
// optional, string) - A short name for the app, used wherever spaces and special characters are not allowed. Will use the name if left undefined.

shortcutFolderName: 'Evolution Gaming Streaming',
//(string, optional) - Name of the shortcut folder in the Windows Start Menu. Will use the manufacturer field if left undefined.

shortcutName: 'Evolution Gaming Streaming',
//(string, optional) - Name of the shortcut in the Windows Start Menu. Will use the app's name field if left undefined.


    // Configure installer User Interface
    ui: {
        chooseDirectory: true
    },
});

// 4. Create a .wxs template file
msiCreator.create().then(function(){

    // Step 5: Compile the template to a .msi file
    msiCreator.compile();
});