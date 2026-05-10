import { NextRequest, NextResponse } from "next/server";

// In-memory storage for demo (would use database in production)
const rsvpDatabase: Array<{
  id: string;
  name: string;
  email: string;
  phone: string;
  attendance: string;
  guests: string;
  message: string;
  timestamp: string;
}> = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    if (!body.name || !body.email || !body.attendance) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, attendance" },
        { status: 400 }
      );
    }

    // Create RSVP entry
    const rsvpEntry = {
      id: Date.now().toString(),
      name: body.name,
      email: body.email,
      phone: body.phone || "",
      attendance: body.attendance,
      guests: body.guests || "2",
      message: body.message || "",
      timestamp: new Date().toISOString(),
    };

    // Save to database (in-memory for now)
    rsvpDatabase.push(rsvpEntry);

    // Log to console for verification
    console.log("✨ RSVP Received:", rsvpEntry);

    return NextResponse.json(
      {
        success: true,
        message: `Thank you ${body.name}! Your RSVP has been recorded.`,
        id: rsvpEntry.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("RSVP error:", error);
    return NextResponse.json(
      { error: "Failed to process RSVP" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  // Optional: Get all RSVPs (for admin verification)
  const authHeader = request.headers.get("authorization");
  if (authHeader === "Bearer admin-secret-key") {
    return NextResponse.json({
      total: rsvpDatabase.length,
      responses: rsvpDatabase,
    });
  }

  return NextResponse.json(
    { error: "Unauthorized" },
    { status: 401 }
  );
}
