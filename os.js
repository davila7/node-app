const os = require('os');

//info del usuario
const user = os.userInfo();
//console.log(user);

//system uptime
//console.log(`The system uptime is ${os.uptime()} seconds`);

//os
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);