// modules/contact/contact.service.ts

import { Contact } from "./contact.model";
import { connectDB } from "@/lib/db";

export const contactService = {
  async createContact(data: any) {
    await connectDB();

    const newContact = await Contact.create(data);

    return newContact;
  },
};