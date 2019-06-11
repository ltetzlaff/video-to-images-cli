#!/usr/bin/env node

import * as updateNotifier from "update-notifier"
import * as meow from "meow"
import { sync } from "glob"
import videoToImages from "video-to-images"
import Queue from "p-queue"

const cli = meow(`
  Usage
    $ video-to-images -i <path|glob> -o <pattern> -f <fps> -j <concurrency=1>
      or
    $ video-to-images-cli -i <path|glob> -o <pattern> -f <fps> -j <concurrency=1>

    pattern could e.g. be "$img_%04d.png"
`)

const { input, pkg, flags } = cli

updateNotifier({ pkg }).notify()

const { i, o, f, j = 1 } = flags

const errs: string[] = [i, o, f]
  .filter(flag => flag === undefined)
  .map(flag => `Missing required flag: -${flag}`)

if (errs.length) {
  console.error(errs.join("\n"))
  process.exit(1)
}

// Resolve input glob
const inputs = sync(i)

// Call Module from concurrenct queue
const len = inputs.length
console.log(`Received ${len} inputs`)
const queue = new Queue({ concurrency: j })
for (let i = 0; i < len; i++) {
  queue.add(async () => {
    console.log(`Starting ${i + 1}/${len}`)
    const inputFile = inputs[i]
    return videoToImages(inputFile, `${inputFile}_${o}`, f)
  })
}
queue.onEmpty().then(() => console.log("Done"))
