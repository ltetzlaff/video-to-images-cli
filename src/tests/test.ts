import { exec } from "../util"

async function run() {
  const commands = ["node dist/cli.js"]
  const args = ""

  const res = await Promise.all(
    commands
      .map(async (c, i) => exec(c + args))
      .map(async (execution, i) => {
        const { stdout, stderr } = await execution
        return { stdout, stderr }
      })
  )
  console.log(JSON.stringify(res))
}

run()
