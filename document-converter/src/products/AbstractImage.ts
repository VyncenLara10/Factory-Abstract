export abstract class AbstractImage {
  constructor(protected url: string, protected alt: string) {}
  abstract render(): string;
}