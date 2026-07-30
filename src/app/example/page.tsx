import type { Metadata } from "next";

import { ContactForm } from "@/features/example/components/contact-form";

export const metadata: Metadata = {
  title: "Example form",
  description: "React Hook Form + Zod validation example.",
};

export default function ExamplePage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-16">
      <div className="mb-8 max-w-xl">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Example form
        </h1>
        <p className="text-muted-foreground mt-2 text-sm sm:text-base">
          Demonstrates react-hook-form, zod, @hookform/resolvers, and sonner
          toasts.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
