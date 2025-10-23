export abstract class AbstractParagraph {
  constructor(protected content: string) {}
  abstract render(): string;
}