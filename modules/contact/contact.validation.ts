// modules/contact/contact.validation.ts

export const validateContact = (data: any) => {
  const { name, email, message } = data;

  if (!name || !email || !message) {
    throw new Error("All fields are required");
  }

  if (!email.includes("@")) {
    throw new Error("Invalid email format");
  }

  if (message.length < 10) {
    throw new Error("Message must be at least 10 characters");
  }

  return { name, email, message };
};