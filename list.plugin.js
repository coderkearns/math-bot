const math = require('mathjs');

module.exports = {
    name: "list",
    description: "List possible math expressions",
    execute(e) {
        const functionNames = getFunctions();

        let embed = {
            title: "Math Functions",
            /*fields: []*/
        }

        // Add an inline field for each function
        /*functionNames.forEach(functionName => {
            let value = "*No arguments*";
            if (math[functionName].signatures) {
                value = Object.keys(math[functionName].signatures)[0]
                if (value == "") {
                    value = "*No arguments*"
                }
            }
            embed.fields.push({
                name: functionName,
                value: value,
                inline: true
            });
        });*/

        embed.description = functionNames.join(", ")

        e.send({ embed });
    }
}

function getFunctions() {
    return ["config","factory","abs","acos","acosh","acot","acoth","acsc","acsch","add","addScalar","and","apply","arg","asec","asech","asin","asinh","atan","atan2","atanh","bellNumbers","bignumber","bin","bitAnd","bitNot","bitOr","bitXor","boolean","catalan","cbrt","ceil","clone","column","combinations","combinationsWithRep","compare","compareNatural","compareText","complex","composition","concat","conj","cos","cosh","cot","coth","count","cross","csc","csch","ctranspose","cube","cumsum","deepEqual","det","diag","diff","distance","divide","divideScalar","dot","dotDivide","dotMultiply","dotPow","eigs","equal","equalScalar","equalText","erf","exp","expm","expm1","factorial","filter","fix","flatten","floor","forEach","format","fraction","gamma","gcd","getMatrixDataType","hasNumericValue","hex","hypot","identity","im","index","intersect","inv","invmod","isInteger","isNaN","isNegative","isNumeric","isPositive","isPrime","isZero","kldivergence","kron","larger","largerEq","lcm","leftShift","log","log10","log1p","log2","lsolve","lsolveAll","lup","lusolve","mad","map","matrix","matrixFromColumns","matrixFromFunction","matrixFromRows","max","mean","median","min","mod","mode","multinomial","multiply","multiplyScalar","norm","not","nthRoot","nthRoots","number","numeric","oct","ones","or","partitionSelect","permutations","pickRandom","pow","print","prod","qr","quantileSeq","random","randomInt","range","re","replacer","reshape","resize","rightArithShift","rightLogShift","rotate","rotationMatrix","round","row","sec","sech","setCartesian","setDifference","setDistinct","setIntersect","setIsSubset","setMultiplicity","setPowerset","setSize","setSymDifference","setUnion","sign","sin","sinh","size","slu","smaller","smallerEq","sort","sparse","splitUnit","sqrt","sqrtm","square","squeeze","std","stirlingS2","string","subset","subtract","sum","tan","tanh","to","trace","transpose","typeOf","typed","unaryMinus","unaryPlus","unequal","unit","usolve","usolveAll","variance","xgcd","xor","zeros","chain","compile","derivative","evaluate","help","leafCount","parse","parser","rationalize","resolve","reviver","simplify","simplifyCore","symbolicEqual","isAccessorNode","isArray","isArrayNode","isAssignmentNode","isBigNumber","isBlockNode","isBoolean","isChain","isCollection","isComplex","isConditionalNode","isConstantNode","isDate","isDenseMatrix","isFraction","isFunction","isFunctionAssignmentNode","isFunctionNode","isHelp","isIndex","isIndexNode","isMatrix","isNode","isNull","isNumber","isObject","isObjectNode","isOperatorNode","isParenthesisNode","isRange","isRangeNode","isRegExp","isResultSet","isSparseMatrix","isString","isSymbolNode","isUndefined","isUnit"]
}
