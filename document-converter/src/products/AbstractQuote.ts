export abstract class AbstractQuote {
  constructor(protected content: string) {}
  abstract render(): string;
}