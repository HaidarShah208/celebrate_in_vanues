import { z } from "zod";
export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: z.email("Enter a valid email address"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be 500 characters or fewer"),
});
export type ContactFormValues = z.infer<typeof contactFormSchema>;
