const util = require('util');
const fs = require('fs');

class MyCustomReporter {
  onRunComplete(contexts, results) {
    console.log('Custom reporter output:');
    console.log(results.testResults[0].testResults.map(f => f.failureDetails));
    const result = util.inspect(results.testResults[0].testResults, {
      depth: null
    });

    fs.writeFileSync('reporter-output', result);
  }
}

module.exports = MyCustomReporter;
