import { exec } from "../util"

async function run() {
  const commands = ["node dist/cli.js --help"]
  const args = ""

  const res = await Promise.all(
    commands
      .map(async (c, i) => exec(`${c} ${args}`))
      .map(async (execution, i) => {
        const { stdout, stderr } = await execution
        return { stdout, stderr }
      })
  )
  for (let i = 0; i < commands.length; i++) {
    const r = res[i]
    const c = commands[i]

    console.log(
      [
        `\ncommand: ${c}`,
        "stdout:",
        r.stdout,
        "stderr:",
        r.stderr ? r.stderr : "undefined"
      ].join("\n  ")
    )
  }
}

run()
