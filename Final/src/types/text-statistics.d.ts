declare module "text-statistics" {
  interface TextStatistics {
    new (text: string): TextStatistics;
    fleschKincaidReadingEase(): number;
    fleschKincaidGradeLevel(): number;
    gunningFogScore(): number;
    colemanLiauIndex(): number;
    smogIndex(): number;
    automatedReadabilityIndex(): number;
    textLength(): number;
    letterCount(): number;
    sentenceCount(): number;
    wordCount(): number;
    averageWordsPerSentence(): number;
    averageSyllablesPerWord(): number;
    wordsWithThreeSyllables(): number;
    percentageWordsWithThreeSyllables(): number;
    syllableCount(): number;
  }
  const TextStatistics: TextStatistics;
  export = TextStatistics;
}
