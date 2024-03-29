![](https://img.shields.io/badge/Electron-green)
# Image Resizer Electron
> Cross-platform desktop app to resize image dimensions, using JavaScript and Electron.

## Built With
- Electron


## Live Demo
N/A


## Getting Started
[![Electron Logo](https://electronjs.org/images/electron-logo.svg)](https://electronjs.org)

[![CircleCI Build Status](https://circleci.com/gh/electron/electron/tree/main.svg?style=shield)](https://circleci.com/gh/electron/electron/tree/main)
[![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/4lggi9dpjc1qob7k/branch/main?svg=true)](https://ci.appveyor.com/project/electron-bot/electron-ljo26/branch/main)
[![Electron Discord Invite](https://img.shields.io/discord/745037351163527189?color=%237289DA&label=chat&logo=discord&logoColor=white)](https://discord.gg/electronjs)

:memo: Available Translations: 🇨🇳 🇧🇷 🇪🇸 🇯🇵 🇷🇺 🇫🇷 🇺🇸 🇩🇪.
View these docs in other languages on our [Crowdin](https://crowdin.com/project/electron) project.

The Electron framework lets you write cross-platform desktop applications
using JavaScript, HTML and CSS. It is based on [Node.js](https://nodejs.org/) and
[Chromium](https://www.chromium.org) and is used by the [Atom
editor](https://github.com/atom/atom) and many other [apps](https://electronjs.org/apps).

Follow [@ElectronJS](https://twitter.com/electronjs) on Twitter for important
announcements.

This project adheres to the Contributor Covenant
[code of conduct](https://github.com/electron/electron/tree/main/CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code. Please report unacceptable
behavior to [coc@electronjs.org](mailto:coc@electronjs.org).

## Installation

To install prebuilt Electron binaries, use [`npm`](https://docs.npmjs.com/).
The preferred method is to install Electron as a development dependency in your
app:

```sh
npm install electron --save-dev
```

For more installation options and troubleshooting tips, see
[installation](docs/tutorial/installation.md). For info on how to manage Electron versions in your apps, see
[Electron versioning](docs/tutorial/electron-versioning.md).

## Platform support

Each Electron release provides binaries for macOS, Windows, and Linux.

* macOS (High Sierra and up): Electron provides 64-bit Intel and ARM binaries for macOS. Apple Silicon support was added in Electron 11.
* Windows (Windows 7 and up): Electron provides `ia32` (`x86`), `x64` (`amd64`), and `arm64` binaries for Windows. Windows on ARM support was added in Electron 5.0.8.
* Linux: The prebuilt binaries of Electron are built on Ubuntu 20.04. They have also been verified to work on:
  * Ubuntu 14.04 and newer
  * Fedora 24 and newer
  * Debian 8 and newer

## Quick start & Electron Fiddle

Use [`Electron Fiddle`](https://github.com/electron/fiddle)
to build, run, and package small Electron experiments, to see code examples for all of Electron's APIs, and
to try out different versions of Electron. It's designed to make the start of your journey with
Electron easier.

Alternatively, clone and run the
[electron/electron-quick-start](https://github.com/electron/electron-quick-start)
repository to see a minimal Electron app in action:

```sh
git clone https://github.com/electron/electron-quick-start
cd electron-quick-start
npm install
npm start
```

## Resources for learning Electron

* [electronjs.org/docs](https://electronjs.org/docs) - All of Electron's documentation
* [electron/fiddle](https://github.com/electron/fiddle) - A tool to build, run, and package small Electron experiments
* [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - A very basic starter Electron app
* [electronjs.org/community#boilerplates](https://electronjs.org/community#boilerplates) - Sample starter apps created by the community

## Programmatic usage

Most people use Electron from the command line, but if you require `electron` inside
your **Node app** (not your Electron app) it will return the file path to the
binary. Use this to spawn Electron from Node scripts:

```javascript
const electron = require('electron')
const proc = require('child_process')

// will print something similar to /Users/maf/.../Electron
console.log(electron)

// spawn Electron
const child = proc.spawn(electron)
```
## Authors

👤 *Author1*

- GitHub: [@didierganthier](https://github.com/didierganthier)
- Twitter: [@didierganthier_](https://twitter.com/didierganthier_)
- LinkedIn: [didierganthier](https://linkedin.com/in/didierganthier)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

## 📝 License

This project is [MIT](./LICENSE) licensed.
