import { NextRequest, NextResponse } from 'next/server';

// Este endpoint está en desuso porque estamos usando directamente Google Sheets
// Se mantiene como referencia para posible uso futuro

export async function POST(req: NextRequest) {
  return NextResponse.json({ message: "Este endpoint está deshabilitado. Utilizamos Google Sheets directamente." }, { status: 200 });
}

// Manejador GET para verificación
export async function GET() {
  return NextResponse.json({ message: "API de contratos funcionando correctamente" }, { status: 200 });
}
