//=============================================
// ------------------------------------ TASK №1
//=============================================
const cache = (func) => {
    let cahedResults = [];
    return (...args) => {
        let cahedResultsFound = cahedResults.find(cahedResult => {
            for (let i = 0; i < args.length; i++) {
                if (cahedResult.args[i] !== args[i]) { return false; }
            }
            return true;
        })
        if (cahedResultsFound) { return cahedResultsFound.result; }
        let result = func(...args);
        cahedResults.push({ args: args, result: result });
        return result;
    }
}

//=============================================
// ------------------------------------ TASK №2
//=============================================
const forwardBackwardSteps = {
    step: 0,
    forward() {
        this.step++;
        return this;
    },
    backward() {
        this.step--;
        return this;
    },
    revealStep() {
        console.log(this.step);
        return this;
    }
}

//=============================================
// ------------------------------------ TASK №3
//=============================================
const applyAll = (func, ...args) => {
    return func.call(this, ...args);
}
const sum = (...args) => {
    return args.reduce((sum, item) => sum + item, 0);
}

const mul = (...args) => {
    return args.reduce((mul, item) => mul * item, 1);
}

//=============================================

module.exports = {cache, forwardBackwardSteps, applyAll, sum, mul}
