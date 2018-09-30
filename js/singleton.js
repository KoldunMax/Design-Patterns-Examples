let LoggerSingleton = (function () {
  
  let logCount = 0
  let loggerSingletonInstance = null

  function createInstance() {
    return {
      Log
    }
  }

  function Log(message) {
    console.log(`${logCount}: ${message}`)
    logCount += 1
  }

  return {
    getInstance: function () {
      return loggerSingletonInstance === null ? createInstance() : loggerSingletonInstance
    }
  }
}())

let HardProcessor = (function () {
  let start = 0

  return {
    setStartPointHardProcessor: (_start) => {
      start = _start
      LoggerSingleton.getInstance().Log('Processor just created.')
    },
    processTo: (end) => {
      let sum = 0
      for (let i = start; i <= end; i++) {
        sum += i
      }
      LoggerSingleton.getInstance().Log(`Processor just calculated some value: ${sum}`)
      
      return sum
    }
  }
}())

HardProcessor.setStartPointHardProcessor(1)
LoggerSingleton.getInstance().Log('Hard work started...')
HardProcessor.processTo(5)
LoggerSingleton.getInstance().Log('Hard work finished...')