#!/usr/bin/env node
const program = require('commander');
const inquirer = require('inquirer');
const { addcustomer, findcustomer, updatecustomer, removecustomer, listcustomer } = require('./app');

const question = [
    {
        type: 'input',
        name: 'firstname',
        message: 'Customer First Name:'
    },
    {
        type: 'input',
        name: 'lastname',
        message: 'Customer Last Name:'
    },
    {
        type: 'input',
        name: 'phone',
        message: 'Customer Phone Number:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Customer Email Address:'
    },
];


program
    .version('1.0.0')
    .description('Command line interface for customer management');

program
    .command('add')
    .alias('a')
    .description('Add customer')
    .action(() => { inquirer.prompt(question).then((answer) => addcustomer(answer)) });

program
    .command('Find <name>')
    .alias('f')
    .description('find customer')
    .action((name) => { findcustomer(name) });

program
    .command('update <_id>')
    .alias('u')
    .description('Update customer info')
    .action((_id) => { inquirer.prompt(question).then((answer) => updatecustomer(_id, answer)) });

program
    .command('remove <_id>')
    .alias('r')
    .description('Remove customer')
    .action((_id) => { removecustomer(_id) });

program
    .command('list')
    .alias('l')
    .description('List all customer')
    .action(() => { listcustomer() });




program.parse(process.argv);