import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { join } from 'path';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, country, message, hearAbout } = body;

    if (!name || !email || !country || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const entry = {
      id: crypto.randomUUID(),
      name,
      email,
      phone: phone || null,
      country,
      message,
      hearAbout: hearAbout || null,
      submittedAt: new Date().toISOString(),
    };

    // Store inquiries in a JSON file (MVP — replace with database or email service later)
    const dataDir = join(process.cwd(), 'data');
    const filePath = join(dataDir, 'inquiries.json');

    try {
      await mkdir(dataDir, { recursive: true });
    } catch {
      // Directory may already exist
    }

    let inquiries: typeof entry[] = [];
    try {
      const existing = await readFile(filePath, 'utf-8');
      inquiries = JSON.parse(existing);
    } catch {
      // File may not exist yet
    }

    inquiries.push(entry);
    await writeFile(filePath, JSON.stringify(inquiries, null, 2));

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
