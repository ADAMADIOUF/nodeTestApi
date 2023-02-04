const os = require('os')
//about info
const user = os.userInfo()
console.log(user)
//method returns
console.log(`the system uptime is ${os.uptime}`)
const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
}
console.log(currentOs)
