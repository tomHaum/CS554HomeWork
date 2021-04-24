import TS = require("text-statistics");

export class AnalysisResult {
  constructor(text: string) {
    //this.text = text;
    let ts = new TS(text);
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
  }
  text: string = "";
  fleschKincaidReadingEase: number = 0;
  fleschKincaidGradeLevel: number = 0;
  gunningFogScore: number = 0;
  colemanLiauIndex: number = 0;
  smogIndex: number = 0;
  automatedReadabilityIndex: number = 0;
  textLength: number = 0;
  letterCount: number = 0;
  sentenceCount: number = 0;
  wordCount: number = 0;
  averageWordsPerSentence: number = 0;
  averageSyllablesPerWord: number = 0;
  wordsWithThreeSyllables: number = 0;
  percentageWordsWithThreeSyllables: number = 0;
  syllableCount: number = 0;
}
