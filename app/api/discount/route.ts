import { NextResponse } from "next/server";
import { promises as fs } from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'discount-state.json');

// Asegurar que el directorio data existe
async function ensureDirectoryExists() {
  const dir = path.dirname(dataFilePath);
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

// Obtener el estado actual
async function getDiscountState() {
  try {
    await ensureDirectoryExists();
    const fileData = await fs.readFile(dataFilePath, 'utf-8');
    return JSON.parse(fileData);
  } catch {
    // Estado inicial si no existe el archivo
    const initialState = {
      targetTime: Date.now() + 12 * 60 * 60 * 1000,
      indiceDescuento: 0,
    };
    await fs.writeFile(dataFilePath, JSON.stringify(initialState));
    return initialState;
  }
}

export async function GET() {
  const state = await getDiscountState();
  return NextResponse.json(state);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { targetTime, indiceDescuento } = body;

    if (typeof targetTime !== "number" || typeof indiceDescuento !== "number") {
      return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
    }

    await ensureDirectoryExists();
    await fs.writeFile(
      dataFilePath,
      JSON.stringify({ targetTime, indiceDescuento })
    );

    return NextResponse.json({ message: "Estado actualizado correctamente" });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}
