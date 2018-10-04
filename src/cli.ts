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

const { i, o, f } = flags

const errs: string[] = [i, o, f]
  .filter(flag => flag === undefined)
  .map(flag => `Missing required flag: -${flag}`)

if (errs.length) {
  console.error(errs.join("\n"))
  process.exit(1)
}

// Call module default export
videoToImages(i, o, f)
