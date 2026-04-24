// modules/contact/contact.controller.ts

import { contactService } from "./contact.service";
import { validateContact } from "./contact.validation";

export const contactController = {
  async createContact(req: Request) {
    try {
      const body = await req.json();

      const validatedData = validateContact(body);

      const result = await contactService.createContact(validatedData);

      return Response.json({
        success: true,
        message: "Saved to database ✅",
        data: result,
      });
    } catch (error: any) {
      return Response.json(
        { success: false, message: error.message },
        { status: 400 }
      );
    }
  },
};