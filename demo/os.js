const os = require('os');

console.log('OS', os.platform());

console.log('CPUs architecture:', os.arch());

console.log('Cores: ', os.cpus());

console.log('Free memory:', os.freemem());

console.log('All memory:', os.totalmem());

console.log('Home directory:', os.homedir());

console.log('I am onn in time:', os.uptime());
