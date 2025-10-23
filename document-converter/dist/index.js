"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const DocumentClient_1 = require("./client/DocumentClient");
const MarkdownFactory_1 = require("./factories/MarkdownFactory");
const HtmlFactory_1 = require("./factories/HtmlFactory");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
function getFactory(format) {
    switch (format.toLowerCase()) {
        case 'markdown':
            return new MarkdownFactory_1.MarkdownFactory();
        case 'html':
            return new HtmlFactory_1.HtmlFactory();
        default:
            throw new Error(`Formato no soportado: ${format}. Use 'markdown' o 'html'.`);
    }
}
function processDocument(jsonPath) {
    try {
        const jsonContent = fs.readFileSync(jsonPath, 'utf-8');
        const input = JSON.parse(jsonContent);
        console.log('='.repeat(60));
        console.log(`PROCESANDO: ${path.basename(jsonPath)}`);
        console.log(`FORMATO DE SALIDA: ${input.convert.toUpperCase()}`);
        console.log('='.repeat(60));
        const factory = getFactory(input.convert);
        const client = new DocumentClient_1.DocumentClient(factory);
        // Convertir el documento
        const output = client.convertDocument(input);
        console.log('\n--- RESULTADO ---\n');
        console.log(output);
        console.log('='.repeat(60));
        console.log('\n');
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        }
        else {
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
//# sourceMappingURL=index.js.map