const {v4: uuid} = require('uuid')
const {format} = require('date-fns')

const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

const logEvent = async (message, filename) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:MM:ss')}`
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`
   //ras
    try{
        if(!fs.existsSync(path.join(__dirname, 'logs'))){
           await fsPromises.mkdir(path.join(__dirname, 'logs'))
        }
        await fsPromises.appendFile(path.join(__dirname, 'logs', filename), logItem)

    } catch (err) {
        console.log(err)
    }
}

module.exports = logEvent