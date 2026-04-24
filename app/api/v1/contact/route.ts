// app/api/v1/contact/route.ts

import { contactController } from "@/modules/contact/contact.controller";

export async function POST(req: Request) {
  return contactController.createContact(req);
}

