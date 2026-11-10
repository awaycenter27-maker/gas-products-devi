import {spawn} from 'node:child_process'
import {fileURLToPath} from 'node:url'
const cli = fileURLToPath(new URL('../node_modules/next/dist/bin/next',import.meta.url))
const args=process.argv.slice(2).filter(arg=>arg!=='--strictPort').map(arg=>arg==='--host'?'--hostname':arg)
const child=spawn(process.execPath,[cli,'dev',...args],{stdio:'inherit'})
for(const signal of ['SIGINT','SIGTERM']) process.on(signal,()=>child.kill(signal))
child.on('exit',code=>{process.exitCode=code ?? 1})
