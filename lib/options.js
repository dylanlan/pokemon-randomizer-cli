'use strict';

const validators = require('./validators');

exports.ALL_OPTIONS = [
    {
        short: 'n',
        long: 'number',
        type: '<n>',
        description: 'Number of Pokemon',
        validator: async (value) => validators.positiveIntegerValidator('Number', value),
        default: 6,
    },
    {
        short: 'e',
        long: 'evolved',
        description: 'Only fully evolved Pokemon',
        validator: async (value) => validators.booleanValidator('Evolved', value),
        default: false,
    },
    {
        short: 't',
        long: 'type',
        type: '[type]',
        description: 'Only Pokemon of this type',
        validator: async (value) => validators.stringValidator('Type', value),
        default: undefined,
    },
    {
        short: 'r',
        long: 'random-type',
        description: 'Only Pokemon of a random type',
        validator: async (value) => validators.booleanValidator('Random Type', value),
        default: undefined,
    },
    {
        short: 'u',
        long: 'unique',
        description: 'Only unique Pokemon',
        validator: async (value) => validators.booleanValidator('Unique', value),
        default: false,
    },
    {
        short: 'f',
        long: 'file',
        type: '[file]',
        description: 'Load options from a json file',
        validator: async (value) => validators.fileValidator('File', value),
        default: '',
    },
    {
        short: 's',
        long: 'super-effective',
        type: '[super-effective]',
        description: 'Only Pokemon super effective against this type',
        validator: async (value) => validators.stringValidator('Super Effective', value),
        default: undefined,
    },
];
