const { Client } = require('discord.js-selfbot-v13');
const { ToadScheduler, SimpleIntervalJob, Task } = require('toad-scheduler')

const client = new Client(); // All partials are loaded automatically

client.on('ready', async () => {
  const guild = await client.guilds.fetch('991050666111795260');
  const channels = await guild.channels.fetch()
  const r = channels.get('992124546285043764')
  //getting channel and guild
  
  const scheduler = new ToadScheduler()
  const task = new Task('simple task', () => { r.sendSlash('302050872383242240','bump')})
  const job = new SimpleIntervalJob({ hours: 02, }, task)
  scheduler.addSimpleIntervalJob(job)
  
})


client.login(process.env.TOKEN)
