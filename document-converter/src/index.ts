import { DocumentClient } from './client/DocumentClient';
import { MarkdownFactory } from './factories/MarkdownFactory';
import { HtmlFactory } from './factories/HtmlFactory';
import { AbstractDocumentFactory } from './factories/AbstractDocumentFactory';
import { DocumentInput } from './models/RawDocument';
import * as fs from 'fs';
import * as path from 'path';

function getFactory(format: string): AbstractDocumentFactory {
  switch (format.toLowerCase()) {
    case 'markdown':
      return new MarkdownFactory();
    case 'html':
      return new HtmlFactory();
    default:
      throw new Error(`Formato no soportado: ${format}. Use 'markdown' o 'html'.`);
  }
}

function processDocument(jsonPath: string): void {
  try {
    const jsonContent = fs.readFileSync(jsonPath, 'utf-8');
    const input: DocumentInput = JSON.parse(jsonContent);

    console.log('='.repeat(60));
    console.log(`PROCESANDO: ${path.basename(jsonPath)}`);
    console.log(`FORMATO DE SALIDA: ${input.convert.toUpperCase()}`);
    console.log('='.repeat(60));

    const factory = getFactory(input.convert);
    const client = new DocumentClient(factory);

    // Convertir el documento
    const output = client.convertDocument(input);

    console.log('\n--- RESULTADO ---\n');
    console.log(output);
    console.log('='.repeat(60));
    console.log('\n');

  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error('Error desconocido');
    }
    process.exit(1);
  }
}

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Uso: npm start <ruta-al-archivo.json>');
  console.log('Ejemplo: npm start tests/test1.json');
  process.exit(1);
}

const jsonPath = args[0];

if (!fs.existsSync(jsonPath)) {
  console.error(`Error: El archivo ${jsonPath} no existe.`);
  process.exit(1);
}

processDocument(jsonPath);