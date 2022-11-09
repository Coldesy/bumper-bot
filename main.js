const { Client } = require('discord.js-selfbot-v13');
const { ToadScheduler, SimpleIntervalJob, Task } = require('toad-scheduler')

const client = new Client(); // All partials are loaded automatically

client.on('ready', async () => {
  const guild = await client.guilds.fetch('752105258481877073');
  const channels = await guild.channels.fetch()
  const r = channels.get('1039188775059849226')
  //getting channel and guild
  
  const scheduler = new ToadScheduler()
  const task = new Task('simple task', () => { r.sendSlash('302050872383242240','bump')})
  const job = new SimpleIntervalJob({ hours: 02, }, task)
  scheduler.addSimpleIntervalJob(job)
  
})


client.login('MTAzNzUyOTA1NDQwNTk5MjQ3OQ.GJ9r4K.8J469OYPkKijmSvNGPAkcLL83W8rs0hZ40SZhg')