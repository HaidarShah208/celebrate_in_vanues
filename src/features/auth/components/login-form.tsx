"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, LoaderCircle, LockKeyhole, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { useLoginMutation } from "@/features/auth/hooks/use-login-mutation";
import {
  type LoginInput,
  loginSchema,
} from "@/features/auth/schemas/login-schema";
import { cn } from "@/lib/utils";

type LoginFormProps = {
  nextPath: string;
};

const INPUT_CLASS =
  "border-border bg-panel text-ink placeholder:text-muted-foreground focus:border-brand-red focus:ring-brand-red/15 h-12 w-full rounded-xl border pr-12 pl-11 text-sm outline-none transition focus:ring-4";

export function LoginForm({ nextPath }: LoginFormProps) {
  const router = useRouter();
  const loginMutation = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    },
  });

  const onSubmit = async (values: LoginInput) => {
    loginMutation.reset();
    try {
      await loginMutation.mutateAsync(values);
      router.replace(nextPath);
      router.refresh();
    } catch {
      // The mutation exposes its normalized error below the fields.
    }
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="mt-8 space-y-5"
    >
      <div>
        <label
          htmlFor="email"
          className="text-ink mb-2 block text-sm font-medium"
        >
          Email address
        </label>
        <div className="relative">
          <Mail
            className="text-muted-foreground pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2"
            aria-hidden
          />
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={cn(
              INPUT_CLASS,
              errors.email && "border-brand-red ring-brand-red/10 ring-4",
            )}
            {...register("email")}
          />
        </div>
        {errors.email ? (
          <p id="email-error" className="text-brand-red mt-1.5 text-xs">
            {errors.email.message}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="password"
          className="text-ink mb-2 block text-sm font-medium"
        >
          Password
        </label>
        <div className="relative">
          <LockKeyhole
            className="text-muted-foreground pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2"
            aria-hidden
          />
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            placeholder="Enter your password"
            aria-invalid={Boolean(errors.password)}
            aria-describedby={errors.password ? "password-error" : undefined}
            className={cn(
              INPUT_CLASS,
              errors.password && "border-brand-red ring-brand-red/10 ring-4",
            )}
            {...register("password")}
          />
          <button
            type="button"
            onClick={() => setShowPassword((visible) => !visible)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="text-muted-foreground hover:text-ink absolute top-1/2 right-4 -translate-y-1/2 transition-colors"
          >
            {showPassword ? (
              <EyeOff className="size-4" aria-hidden />
            ) : (
              <Eye className="size-4" aria-hidden />
            )}
          </button>
        </div>
        {errors.password ? (
          <p id="password-error" className="text-brand-red mt-1.5 text-xs">
            {errors.password.message}
          </p>
        ) : null}
      </div>

      {loginMutation.error ? (
        <div
          role="alert"
          className="border-brand-red/25 bg-surface-blush-soft text-brand-red rounded-xl border px-4 py-3 text-sm"
        >
          {loginMutation.error.message}
        </div>
      ) : null}

      <Button
        type="submit"
        disabled={isSubmitting || loginMutation.isPending}
        className="h-12 w-full rounded-xl text-base font-semibold"
      >
        {isSubmitting || loginMutation.isPending ? (
          <>
            <LoaderCircle className="size-4 animate-spin" aria-hidden />
            Signing in...
          </>
        ) : (
          "Sign in"
        )}
      </Button>
    </form>
  );
}
