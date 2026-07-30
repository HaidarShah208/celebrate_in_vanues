"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  email: z.email("Enter a valid email address"),
  message: z.string().trim().min(1, "Message is required"),
});

type ContactValues = z.infer<typeof contactSchema>;

/** Dark-on-black field treatment, used only inside the footer. */
const FIELD_CLASS =
  "border-surface-white/15 bg-surface-ink-soft text-surface-white placeholder:text-surface-white/50 focus-visible:ring-brand-red w-full rounded-lg border text-[15px] shadow-none";

type FooterContactFormProps = {
  className?: string;
};

export function FooterContactForm({ className }: FooterContactFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { email: "", message: "" },
  });

  const onSubmit = handleSubmit(() => {
    // TODO: post to the contact endpoint once it exists.
    toast.success("Thanks — we'll be in touch shortly.");
    reset();
  });

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={cn("flex flex-col", className)}
    >
      <h2 className="text-surface-white text-xl leading-none font-semibold">
        Get in Touch
      </h2>

      <div className="mt-4">
        <Input
          type="email"
          aria-label="Email address"
          placeholder="Email Address"
          className={cn(FIELD_CLASS, "h-11 px-5")}
          {...register("email")}
        />
        {errors.email ? (
          <p role="alert" className="text-brand-red mt-1.5 text-xs">
            {errors.email.message}
          </p>
        ) : null}
      </div>

      <div className="mt-4">
        <textarea
          aria-label="Message"
          placeholder="Message"
          className={cn(
            FIELD_CLASS,
            "focus-visible:ring-2 focus-visible:outline-none",
            "h-[148px] resize-none p-5 leading-[1.5]",
          )}
          {...register("message")}
        />
        {errors.message ? (
          <p role="alert" className="text-brand-red mt-1.5 text-xs">
            {errors.message.message}
          </p>
        ) : null}
      </div>

      <Button
        type="submit"
        className="focus-visible:ring-offset-surface-ink mt-[18px] h-[50px] w-[124px] self-end text-[15px] font-semibold"
      >
        Send
      </Button>
    </form>
  );
}
