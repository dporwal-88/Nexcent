// modules/auth/auth.controller.ts

import { authService } from "./auth.service";
import { validateRegister, validateLogin } from "./auth.validation";

export const authController = {
  async register(req: Request) {
    try {
      const body = await req.json();
      const data = validateRegister(body);

      const user = await authService.register(data);

      return Response.json({
        success: true,
        message: "User registered",
        data: user,
      });
    } catch (err: any) {
      return Response.json({ success: false, message: err.message }, { status: 400 });
    }
  },

  async login(req: Request) {
    try {
      const body = await req.json();
      const data = validateLogin(body);

      const result = await authService.login(data);

      return Response.json({
        success: true,
        message: "Login successful",
        data: result,
      });
    } catch (err: any) {
      return Response.json({ success: false, message: err.message }, { status: 400 });
    }
  },
};