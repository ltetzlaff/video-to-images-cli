# video-to-images-cli

[![Build Status](https://travis-ci.com/ltetzlaff/video-to-images-cli.svg?branch=master)](https://travis-ci.com/ltetzlaff/video-to-images-cli)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

CLI for [video-to-images](https://github.com/ltetzlaff/video-to-images)

## Setup (in ./)

### Install NodeJS

[Download](https://nodejs.org/en/download/current/)

### Fetch dependencies

```bash
npm install
```

## Dev (in ./)

Typescript builds are automatic and watch for file changes:
```bash
npm run build
```

or run this to build only once:
```bash
npm run buildOnce
```

Building, Linting, Formatting, Testing:
```bash
npm test
```

## Contribution

- use `git pull --rebase` in favor of regular pull, i recommend configuring it globally via:
  ```bash
  git config --global pull.rebase true
  ```
