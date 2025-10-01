const Events = require("events")

class Logger extends Events {
    log(a, b){
        this.emit('calculate', a + b)
    }
} 

const logger = new Logger()

logger.on("calculate", (data) => {
    console.log(data)
})

logger.log(3, 4)
logger.log(6, 4)
logger.log(8, 4)
logger.log(1, 4)