# movies desktop app test

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.
- `renderer.js` - Rresponsible for running the user-interface of your app.

You can learn more about each of these components within the [Quick Start Guide](http://electron.atom.io/docs/tutorial/quick-start).

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/rg4444/movies_desktop_test
# Go into the repository
cd electron-template
# Install dependencies
npm install
# Run the app
npm start
```

## Package native apps for Windows, Mac and Linux using [electron-packager](https://github.com/electron-userland/electron-packager)


How to make Windows app
https://www.christianengvall.se/electron-packager-tutorial/
```bash
electron-packager .  --overwrite --asar=true --platform=win32 --arch=ia32  --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName="Filmas-lv desktop app"

electron-packager . --overwrite --asar=true --platform=linux --arch=x64 --icon=icon3.ico --prune=true --out=release-builds

electron-packager . --overwrite --platform=darwin --arch=x64 --icon=icon.icns --prune=true --out=release-builds

node build_installer.js
```

`see package.json for other useful scripts!`

Learn more about Electron and its API in the [documentation](http://electron.atom.io/docs/).

## Other Example Apps

For more example apps, see the
[list of boilerplates](http://electron.atom.io/community/#boilerplates)
created by the awesome electron community.

For a basic serial monitor example app see [electron-serialmon](https://github.com/jcramirez/electron-serialmon)

#### License [CC0 1.0 (Public Domain)](LICENSE.md)
