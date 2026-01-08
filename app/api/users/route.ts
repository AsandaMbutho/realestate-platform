import { NextResponse } from "next/server";

// Mock users for demo/pitch
let mockUsers = [
  { id: 1, name: "Alice Admin", email: "alice@demo.com", role: "ADMIN" },
  { id: 2, name: "Bob Agent", email: "bob@demo.com", role: "AGENT" },
  { id: 3, name: "Cara Client", email: "cara@demo.com", role: "CLIENT" },
  { id: 4, name: "Mark Manager", email: "mark@demo.com", role: "MANAGER" },
];

// GET: return all users
export async function GET() {
  return NextResponse.json(mockUsers);
}

// POST: add a new user (mock only, not persisted)
export async function POST(req: Request) {
  const { name, email, role } = await req.json();

  if (!name || !email || !role) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const newUser = {
    id: mockUsers.length + 1,
    name,
    email,
    role,
  };

  mockUsers.push(newUser);

  return NextResponse.json(newUser, { status: 201 });
}
