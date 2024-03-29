const _ = require('lodash');
const logger = require('./logger');

exports.logPokemon = async (options, pokemon) => {
    const optionModifiers = getOptionModifiers(options);
    logger.log(`Picked ${optionModifiers} Pokemon:`);
    _.forEach(pokemon, (poke) => {
        logger.log(poke.name);
    });
};

function getOptionModifiers(options) {
    const optionModifiers = [];
    optionModifiers.push(options.number);

    if (options.unique) optionModifiers.push('unique');
    if (options.evolved) optionModifiers.push('evolved');
    if (options.type) optionModifiers.push(options.type);
    if (options.superEffective) optionModifiers.push(`super effective against ${options.superEffective}`);

    return optionModifiers.join(', ');
}
