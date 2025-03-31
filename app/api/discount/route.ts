import { NextResponse } from "next/server";

// Simulación de almacenamiento en memoria (puedes reemplazarlo con una base de datos)
let discountState = {
  targetTime: Date.now() + 12 * 60 * 60 * 1000, // 12 horas desde ahora
  indiceDescuento: 0, // Índice inicial
};

// Manejo de solicitudes GET y POST
export async function GET() {
  return NextResponse.json(discountState);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { targetTime, indiceDescuento } = body;

    // Validar los datos recibidos
    if (typeof targetTime !== "number" || typeof indiceDescuento !== "number") {
      return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
    }

    // Actualizar el estado del descuento
    discountState = { targetTime, indiceDescuento };
    return NextResponse.json({ message: "Estado actualizado correctamente" });
  } catch (error) {
    return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 });
  }
}
