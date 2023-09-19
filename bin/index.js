#! /usr/bin/env node
const avigilon = require('./lib/avigilon.js')


const usage = "\nUsage: tran <lang_name> sentence to be translated"

const yargs = require('yargs')


const options = yargs
    .usage(usage)
    .option("n", {
        alias: "userNonce",
        describe: "userNonce.",
        type: "boolean",
        demandOption: true
    })
    .option("k", {
        alias: "userKey",
        describe: "userKey.",
        type: "boolean",
        demandOption: true
    })
    .help(true)
    .argv

const argv = require('yargs/yargs')(process.argv.slice(2)).argv;

const userNonce = argv.n || argv.userNonce;

const userKey = argv.k || argv.userKey;


if (yargs.argv.n != true && yargs.argv.userNonce != true) {
    avigilon.showHelp()
    return
}

if (yargs.argv.k != true && yargs.argv.userKey != true) {
    avigilon.showHelp()
    return
}

avigilon.tokenGenerator(userNonce, userKey)
    .then((result) => {
        console.log('authorizationToken:', result)
    }, (err) => {
        console.log('authorizationToken error:', err)
    })

