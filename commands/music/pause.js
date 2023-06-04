const discordVoice = require('@discordjs/voice');

module.exports = {
    name: 'pause',
    description: 'Pause music.',
    async execute(message, args){
        if(!message.member.voice.channel){
            return message.reply('You must be in a voice channel!');
        }
        const connection = discordVoice.getVoiceConnection(message.guild.id);

        if(!connection){
            return message.channel.send(`I'm not in a voice channel`);
        }

        connection.state.subscription.player.pause();
    }
};