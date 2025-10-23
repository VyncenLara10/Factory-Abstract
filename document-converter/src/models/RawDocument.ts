export interface DocumentInput {
  data: {
    title1?: string;
    title2?: string;
    title3?: string;
    paragraph?: string;
    quote?: string;
    image?: string;
  };
  convert: 'markdown' | 'html';
}