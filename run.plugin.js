const math = require('mathjs');

module.exports = {
    name: "run",
    description: "Run math expressions",
    execute(e) {
        let [exprType, ...args] = e.args;
        if (Object.hasOwn(math, exprType)) {
            try {
                let result = math[exprType](...args);
                e.send(`${result}`);
            } catch (err) {
                e.send(`${err}`);
            }
        } else {
            e.send("Not a valid expression type.");
        }
    }
}
