"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TS = require("text-statistics");
var AnaylsisResult = /** @class */ (function () {
    function AnaylsisResult() {
        this.fleschKincaidReadingEase = 0;
        this.fleschKincaidGradeLevel = 0;
        this.gunningFogScore = 0;
        this.colemanLiauIndex = 0;
        this.smogIndex = 0;
        this.automatedReadabilityIndex = 0;
        this.textLength = 0;
        this.letterCount = 0;
        this.sentenceCount = 0;
        this.wordCount = 0;
        this.averageWordsPerSentence = 0;
        this.averageSyllablesPerWord = 0;
        this.wordsWithThreeSyllables = 0;
        this.percentageWordsWithThreeSyllables = 0;
        this.syllableCount = 0;
    }
    AnaylsisResult.prototype.new = function (text) {
        var ts = new TS(text);
        this.fleschKincaidReadingEase = ts.fleschKincaidReadingEase();
        this.fleschKincaidGradeLevel = ts.fleschKincaidGradeLevel();
        this.gunningFogScore = ts.gunningFogScore();
        this.colemanLiauIndex = ts.colemanLiauIndex();
        this.smogIndex = ts.smogIndex();
        this.automatedReadabilityIndex = ts.automatedReadabilityIndex();
        this.textLength = ts.textLength();
        this.letterCount = ts.letterCount();
        this.sentenceCount = ts.sentenceCount();
        this.wordCount = ts.wordCount();
        this.averageWordsPerSentence = ts.averageWordsPerSentence();
        this.averageSyllablesPerWord = ts.averageSyllablesPerWord();
        this.wordsWithThreeSyllables = ts.wordsWithThreeSyllables();
        this.percentageWordsWithThreeSyllables = ts.percentageWordsWithThreeSyllables();
        this.syllableCount = ts.syllableCount();
    };
    return AnaylsisResult;
}());
exports.AnaylsisResult = AnaylsisResult;
