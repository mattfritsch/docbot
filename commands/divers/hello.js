const { Command } = require('discord.js-commando');

module.exports = class HelloCommand extends Command{
    constructor(client) {
        super(client, {
            name:'hello', //nom de la commande
            memberName:'hello', //pareil que name
            group:'divers', //groupe associé à la commande
            aliases: ['bonjour', 'hi'], //facultatif, alias de la commande
            description: 'Replies with a hello message.', //description de la commande (!help)
            clientPermissions:['SEND_MESSAGES'],// le bot doit avoir la permission d'envoyer des messages
            userPermissions:['ADMINISTRATOR'], //l'utilisateur doit être administrateur pour executer la commande
                guildOnly: false, //facultatif, utiliser la commande en privé (défaut: false)
                throttling :{ //protection anti-flood, evite le spam des utilisateurs
                        usages: 2,
                        duration: 10,
                },
        });
    }

    async run(msg){
        msg.say(`Bonjour, je suis ${this.client.user.tag}`);
    }
};