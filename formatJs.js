const archives = require('./developpeurwebjunior.fr - server-life - veille-technique [630088258314960926].json');
const fs = require('fs');

// Plus utile...
// const filterNoEmptyLinks = archives.messages.filter((e) => e.embeds.length > 0);

archives.messages.map((e) => {
    delete e.type;
    delete e.timestampEdited;
    delete e.callEndedTimestamp;
    delete e.isPinned;
    delete e.content;
    delete e.author.id;
    delete e.author.name;
    delete e.author.discriminator;
    delete e.author.color;
    delete e.author.isBot;
    delete e.author.avatarUrl;
    delete e.attachments;
    delete e.reactions;
    delete e.mentions;

    return e;
});

fs.writeFile(
    'developpeurwebjunior.fr - server-life - veille-technique-filtered.json',
    JSON.stringify(archives),
    (err) => {
        if (err) return console.log(err);
        console.log('Fichier crée avec succés !');
    }
);

// console.log(filteredArchives);
// console.log(filteredArchives.length);
