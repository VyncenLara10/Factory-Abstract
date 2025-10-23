export abstract class AbstractTitle {
  constructor(protected content: string, protected level: number) {}
  abstract render(): string;
}