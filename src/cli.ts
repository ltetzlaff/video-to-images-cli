#!/usr/bin/env node

import * as updateNotifier from "update-notifier"
import * as meow from "meow"
import videoToImages from "video-to-images"

const cli = meow(`
  Usage
    $ video-to-images -i <path|glob> -o <pattern> -f <fps>...
      or
    $ video-to-images-cli -i <path|glob> -o <pattern> -f <fps>...

    pattern could e.g. be <$img_%04d.png>
`)

const { input, pkg, flags } = cli

updateNotifier({ pkg }).notify()

if (input.length === 0) {
  console.error("No path given.")
  process.exit(1)
}

// Call module default export
const { i, o, f } = flags
videoToImages(i, o, f)
