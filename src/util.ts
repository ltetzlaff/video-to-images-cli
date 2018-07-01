import { exec as cpExec } from "child_process"
import { promisify } from "util"

export const exec = promisify(cpExec)
