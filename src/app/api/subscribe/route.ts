import { NextResponse } from "next/server";

const BUTTONDOWN_API_KEY = process.env.BUTTONDOWN_API_KEY;

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validação básica
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Email inválido. Verifica e tenta de novo." },
        { status: 400 }
      );
    }

    if (!BUTTONDOWN_API_KEY) {
      console.error("BUTTONDOWN_API_KEY não configurada");
      return NextResponse.json(
        { error: "Serviço temporariamente indisponível. Tenta mais tarde." },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.buttondown.com/v1/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Token ${BUTTONDOWN_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email_address: email }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));

      // Email já cadastrado não é erro de verdade
      if (response.status === 400 && errorData?.email?.includes("already")) {
        return NextResponse.json(
          { message: "Esse email já está na lista!" },
          { status: 200 }
        );
      }

      console.error("Erro Buttondown:", response.status, errorData);
      return NextResponse.json(
        { error: "Erro ao cadastrar. Tenta de novo mais tarde." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Boa! Agora é só confirmar no email que te enviamos 🎉" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Erro interno:", err);
    return NextResponse.json(
      { error: "Erro inesperado. Tenta de novo." },
      { status: 500 }
    );
  }
}
