"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AnaylsisResult_1 = require("./AnaylsisResult");
function analize(text) {
    var ret = [];
    for (var str in text) {
        ret.push(new AnaylsisResult_1.AnalysisResult(str));
    }
    return ret;
}
exports.analize = analize;
function analizeByDelim(test, delim) {
    return analize(test.split(delim));
}
exports.analizeByDelim = analizeByDelim;
