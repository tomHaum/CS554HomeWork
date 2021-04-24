import { AnalysisResult } from "./AnaylsisResult";

export function analize(text: string[]): AnalysisResult[] {
  let ret: AnalysisResult[] = [];
  for (let str in text) {
    ret.push(new AnalysisResult(str));
  }
  return ret;
}

export function analizeByDelim(test: string, delim: string): AnalysisResult[] {
  return analize(test.split(delim));
}
