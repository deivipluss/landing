import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'discount.json');

// Asegurar que el directorio data existe
if (!fs.existsSync(path.dirname(DATA_FILE))) {
  fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
}

// Función para leer datos
function readData() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading discount data:', error);
  }
  return null;
}

// Función para escribir datos
function writeData(data: any) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data));
  } catch (error) {
    console.error('Error writing discount data:', error);
  }
}

export async function GET() {
  let data = readData();

  if (!data || typeof data.targetTime !== "number" || typeof data.indiceDescuento !== "number") {
    console.warn("Archivo discount.json no válido o no encontrado. Creando uno nuevo...");
    data = {
      targetTime: Date.now() + 8 * 60 * 60 * 1000,
      indiceDescuento: 0,
    };
    writeData(data);
  } else if (Date.now() >= data.targetTime) {
    const newIndiceDescuento = Math.min((data.indiceDescuento || 0) + 1, 3);
    data = {
      targetTime: Date.now() + 8 * 60 * 60 * 1000,
      indiceDescuento: newIndiceDescuento,
    };
    writeData(data);
  }

  return new NextResponse(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
  });
}

export async function POST(req: Request) {
  const body = await req.json();
  writeData(body);
  return NextResponse.json(body);
}
