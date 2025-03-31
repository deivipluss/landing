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

// Modificado para manejar persistencia global
async function getDiscountState() {
  try {
    await ensureDirectoryExists();
    const fileData = await fs.readFile(dataFilePath, 'utf-8');
    const data = JSON.parse(fileData);
    const now = Date.now();

    // Si no hay targetTime o ya expiró, crear nuevo período
    if (!data.targetTime || data.targetTime <= now) {
      const newData = {
        targetTime: now + (12 * 60 * 60 * 1000), // 12 horas
        indiceDescuento: data.indiceDescuento || 0
      };
      
      // Guardar el nuevo estado
      await fs.writeFile(dataFilePath, JSON.stringify(newData, null, 2));
      return newData;
    }
    
    return data;
  } catch {
    // Estado inicial con tiempo actual + 12 horas
    const initialState = {
      targetTime: Date.now() + (12 * 60 * 60 * 1000),
      indiceDescuento: 0
    };
    await fs.writeFile(dataFilePath, JSON.stringify(initialState, null, 2));
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
    const currentState = await getDiscountState();
    
    // Solo actualizar si es necesario
    if (body.targetTime && body.targetTime > Date.now()) {
      await fs.writeFile(
        dataFilePath,
        JSON.stringify({
          targetTime: body.targetTime,
          indiceDescuento: body.indiceDescuento
        }, null, 2)
      );
      return NextResponse.json({ message: "Estado actualizado correctamente" });
    }
    
    return NextResponse.json(currentState);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}
