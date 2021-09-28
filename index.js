const chalk = require('chalk');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { Command } = require('commander');
const text = require('./data');
const contactsPath = path.resolve('./db/contacts.json');
const {
  listContacts,
  addContact,
  getContactById,
  removeContact,
} = require('./contacts');
const program = new Command();

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      listContacts()
        .then(contacts => console.table(contacts))
        .catch(console.error);
      break;

    case 'get':
      const contactById = getContactById(id)
        .then(contact => {
          console.log(chalk.green('This is the needed contact:'));
          console.log(contact);
        })
        .catch(console.error);
      break;

    case 'add':
      addContact(name, email, phone)
        .then(contact => {
          console.log(chalk.green('New contact added!'));
          console.log(contact);
        })
        .catch(console.error);
      break;

    case 'remove':
      removeContact(id).then(contacts => {
        console.log(chalk.green('Contact was deleted'));
        console.table(contacts);
      });
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
