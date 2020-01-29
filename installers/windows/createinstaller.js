const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error)
    process.exit(1)
  })

function getInstallerConfig () {
  console.log('creating windows installer')
  const rootPath = path.join('./')
  const outPath = path.join(rootPath, 'release-builds')

  return Promise.resolve({
    appDirectory: path.join(outPath, 'Filmas-lv Desktop app-win32-ia32/'),
    authors: 'Rihards Gailums',
    noMsi: true,
    outputDirectory: path.join(outPath, 'windows-installer'),
    exe: 'Evolution Gaming Streaming test app.exe',
    setupExe: 'EVGStreaminapp.exe',
    setupIcon: path.join(rootPath, 'icon.ico')
  })
}