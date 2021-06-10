const CommandoClient = require('./client');
const path = require('path');
const fs = require('fs')
const dotenv = require('dotenv')


const envConfig = dotenv.parse(fs.readFileSync('.env'))
for (const k in envConfig) {
    process.env[k] = envConfig[k]
}

const client = new CommandoClient({
    commandPrefix: '!', // Préfixe des commandes (ex: !help)
    owner: process.env.BOT_OWNER_ID, // ID de l'owner du bot
    presence: {
        activity: {
            name: `?help | miniMatthieu à votre service`, // message de présence
            type: 'PLAYING' // type d'activité
        }
    }
});

fs.readdir('./events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach((file) => {
        const eventFunction = require(`./events/${file}`);
        if (eventFunction.disabled) return;

        const event = eventFunction.event || file.split('.')[0];
        const emitter = (typeof eventFunction.emitter === 'string' ? client[eventFunction.emitter] : eventFunction.emitter) || client;
        const { once } = eventFunction;

        try {
            emitter[once ? 'once' : 'on'](event, (...args) => eventFunction.run(client, ...args));
        } catch (error) {
            console.error(error.stack);
        }
    });
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['divers', 'Divers'],
        ['admin', 'Admin'],
        ['bot', 'Bot'],
        ['games', 'Games'],
    ])
    .registerCommandsIn(path.join(__dirname, 'commands'))
;

// Lancement du bot, avec le token spécifié
client.login(process.env.BOT_TOKEN);