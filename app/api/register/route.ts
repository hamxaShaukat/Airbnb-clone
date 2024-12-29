// app/api/register/route.ts
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import {prisma} from "@/lib/prismadb";

export async function POST(req: NextRequest) {
  try {
    const { email, name, password } = await req.json();

    // Check if the email already exists
    const emailExists = await prisma.user.findUnique({
      where: { email },
    });

    if (emailExists) {
      return new NextResponse(
        JSON.stringify({ message: "Email already exists" }),
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
        role: "guest",
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    return new NextResponse("Registration error", { status: 500 });
  }
}
