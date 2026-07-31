import type { Metadata } from "next";
import Image from "next/image";

import heroImage from "@/assets/home/home.jpg";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LoginForm } from "@/features/auth/components/login-form";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to discover and book exceptional venues.",
};

type LoginPageProps = {
  searchParams: Promise<{ next?: string | string[] }>;
};

function safeNextPath(value: string | string[] | undefined): string {
  const path = Array.isArray(value) ? value[0] : value;
  return path?.startsWith("/") && !path.startsWith("//") ? path : "/";
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;

  return (
    <main className="bg-background grid min-h-dvh lg:grid-cols-[minmax(0,0.92fr)_minmax(520px,1.08fr)]">
      <section className="relative flex min-h-dvh items-center justify-center px-5 py-16 sm:px-8 lg:px-14">
        <ThemeToggle className="border-border bg-panel text-ink absolute top-5 right-5 flex size-10 items-center justify-center rounded-full border shadow-sm" />

        <div className="w-full max-w-115">
          <Logo priority tone="ink" href={undefined} />

          <div className="mt-12">
            <p className="text-brand-red text-sm font-semibold">Welcome back</p>
            <h1 className="text-ink mt-2 text-3xl leading-tight font-semibold tracking-[-0.03em] sm:text-4xl">
              Sign in to your account
            </h1>
            <p className="text-muted-foreground mt-3 text-sm leading-6 sm:text-base">
              Find remarkable venues and trusted vendors for your next event.
            </p>
          </div>

          <LoginForm nextPath={safeNextPath(params.next)} />

        
        </div>
      </section>

      <section className="relative hidden overflow-hidden lg:block">
        <Image
          src={heroImage}
          alt="An elegant event venue"
          fill
          priority
          sizes="55vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-black/20" />
        <div className="absolute inset-x-0 bottom-0 p-14 text-white xl:p-20">
          <p className="max-w-150 text-4xl leading-tight font-semibold tracking-[-0.03em] xl:text-5xl">
            Exceptional spaces for unforgettable moments.
          </p>
          <p className="mt-5 max-w-130 text-base leading-7 text-white/80">
            Search, compare, and book the perfect venue with confidence.
          </p>
        </div>
      </section>
    </main>
  );
}
