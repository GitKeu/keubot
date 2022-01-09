const discord = require('discord.js');
const bot = new Discord.Client();
const bot.login("OTI5ODM0NTE3Mzc0NTc0NjIy.YdtF4A.a8rcyyaINz1SxWlQaGT8-Tcmlsc");
const bot.once('ready', () => {    console.log(`Bot online: ${bot.user.tag}!`);     });
const Discord = require('discord.js');
const bot = new Discord.Client();
const bot.login(“NTY3MzM1OTEzMDE4MDk3Njc2.XLSOog.tjfJZMsZAhrTWk8UenezByztSnY”);
const bot.once('ready', () => { >   console.log(`Bot online: ${bot.user.tag}!`);    
});
const bot.on(‘guildMemberAdd’, membro=> {  membro.send(`Seja bem vindo! Siga as regras do servidor e divirta-se ðŸ˜€`)
});
const bot.on('message', msg => {
if (msg.content === '!oi') {
   msg.reply('Esse é o meu primeiro bot!');
 }
});
