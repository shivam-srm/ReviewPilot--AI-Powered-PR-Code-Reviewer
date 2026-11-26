"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, GitPullRequest, ShieldCheck, Sparkles } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GitHubSignInForm } from "@/features/auth/components/github-sign-in-form";

type SignInPageProps = {
  searchParams: Promise<{ callbackUrl?: string | string[] }>;
};

export default function SignInPage({ searchParams }: SignInPageProps) {
  const { callbackUrl: requestedCallbackUrl } = use(searchParams);
  const callbackUrl =
    typeof requestedCallbackUrl === "string" &&
    requestedCallbackUrl.startsWith("/") &&
    !requestedCallbackUrl.startsWith("//")
      ? requestedCallbackUrl
      : "/";
  return (
    <main className="dark min-h-screen bg-black font-sans text-[#f1f5f5]">
      <div className="grid min-h-screen lg:grid-cols-[1.08fr_0.92fr]">
        <section className="flex flex-col border-b border-white/[0.08] bg-black px-6 pb-9 pt-7 sm:px-10 sm:pt-9 lg:min-h-screen lg:border-b-0 lg:border-r lg:px-[6.5vw] lg:py-8">
          <Link href="/" className="group inline-flex w-fit items-center" aria-label="ReviewPilot home">
            <span className="inline-flex items-center transition-transform group-hover:-translate-y-0.5">
              <Image
                src="/reviewpilot-logo.svg"
                alt="ReviewPilot"
                width={220}
                height={57}
                priority
                className="h-12 w-auto dark:hidden lg:h-14"
              />
              <Image
                src="/reviewpilot-logo-dark.svg"
                alt=""
                aria-hidden="true"
                width={220}
                height={57}
                className="hidden h-12 w-auto dark:block lg:h-14"
              />
            </span>
          </Link>

          <div className="my-auto pt-12 lg:pt-8">
            <p className="font-geist-sans text-sm font-medium tracking-[-0.02em] text-neutral-600 dark:text-[#91a2a9]">
              Pull requests, with better context
            </p>
            <h1 className="mt-4 max-w-[650px] font-geist-sans text-[clamp(2.7rem,5vw,4.35rem)] font-bold leading-[1.02] tracking-[-0.065em] text-neutral-950 dark:text-[#f4f7f6]">
              See the change.
              <br />
              Understand the
              <br />
              <span className="font-geist-sans text-[#D97706] dark:text-[#F59E0B]">reason.</span>
            </h1>
            <p className="mt-5 max-w-[430px] text-[15px] leading-7 text-neutral-600 dark:text-[#9aa9ae]">
              ReviewPilot brings the important parts of every pull request into
              focus, so your team can spend less time searching and more time shipping.
            </p>

            <div className="mt-9 max-w-[650px] overflow-hidden rounded-xl border border-white/[0.1] bg-[#080808] shadow-[0_24px_70px_-48px_rgba(0,0,0,0.95)]">
              <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3 dark:border-white/[0.08] sm:px-5">
                <div className="flex min-w-0 items-center gap-2.5 text-sm font-medium text-neutral-800 dark:text-[#dfe8e7]">
                  <GitPullRequest size={16} className="shrink-0 text-[#D97706] dark:text-[#F59E0B]" />
                  <span className="truncate">Session handling</span>
                  <span className="text-neutral-400 dark:text-[#56666d]">/</span>
                  <span className="truncate font-mono text-[11px] font-normal text-neutral-500 dark:text-[#819198]">
                    src/auth/session.ts
                  </span>
                </div>
                <span className="ml-3 inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-medium text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-200">
                  <span className="size-1.5 rounded-full bg-emerald-500 dark:bg-emerald-300" />
                  Reviewed
                </span>
              </div>

              <div className="px-4 py-3 font-mono text-[11px] leading-7 sm:px-5 sm:text-xs">
                <div className="grid grid-cols-[2rem_minmax(0,1fr)] gap-x-3">
                  <span className="text-right text-neutral-400 dark:text-[#58666c]">41</span>
                  <span className="truncate text-neutral-700 dark:text-[#b6c4c6]">
                    const session = await store.find(token);
                  </span>
                  <span className="text-right text-neutral-400 dark:text-[#58666c]">42</span>
                  <span className="truncate border-l-2 border-[#d9855d] bg-orange-50 pl-2 text-orange-900 dark:border-[#f0a178] dark:bg-[#f0a178]/[0.09] dark:text-[#f5bd9f]">
                    if (!session) return null;
                  </span>
                  <span className="text-right text-neutral-400 dark:text-[#58666c]">43</span>
                  <span className="truncate text-neutral-700 dark:text-[#b6c4c6]">
                    return session.user;
                  </span>
                </div>
              </div>

              <div className="review-mark mx-4 mb-4 flex items-start gap-3 rounded-lg border border-[#e7c7b5] bg-[#fff9f5] px-3.5 py-3 dark:border-[#f0a178]/20 dark:bg-[#201b19] sm:mx-5">
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md bg-[#f0a178]/15 text-[#a95634] dark:text-[#f0a178]">
                  <Sparkles size={14} />
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <p className="text-xs font-semibold text-neutral-900 dark:text-[#f2e7e1]">
                      ReviewPilot found a useful check
                    </p>
                    <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-700 dark:text-emerald-300">
                      <Check size={11} />
                      addressed
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] leading-5 text-neutral-600 dark:text-[#b8aaa4]">
                    Expired sessions are rejected before user data is returned.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between text-xs text-neutral-500 dark:text-[#7d8c91]">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={14} className="text-neutral-700 dark:text-[#9eb4b6]" />
              Your team stays in control.
            </span>
            <span className="hidden font-mono sm:inline">Built for careful reviewers</span>
          </div>
        </section>

        <section className="relative flex min-h-[650px] items-center justify-center bg-black px-5 py-12 sm:px-10 lg:min-h-screen lg:px-[5vw]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 hidden h-full w-px bg-neutral-200 dark:bg-white/[0.05] lg:block"
          />

          <Card className="relative w-full max-w-[420px] gap-0 overflow-visible rounded-2xl border border-white/[0.09] bg-[#080808] p-0 text-[#edf3f2] shadow-[0_32px_90px_-56px_rgba(0,0,0,0.9)] ring-0">
            <span
              aria-hidden="true"
              className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/70 to-transparent"
            />
            <CardHeader className="gap-0 px-6 pt-7 sm:px-8 sm:pt-8">
              <p className="text-sm font-medium text-neutral-600 dark:text-[#91a2a9]">
                Welcome back
              </p>
              <h2 className="mt-2 font-geist-sans text-[1.8rem] font-semibold tracking-[-0.045em] text-neutral-950 dark:text-[#f4f7f6]">
                Sign in to ReviewPilot
              </h2>
              <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-[#96a5aa]">
                Your next thoughtful review is waiting.
              </p>
            </CardHeader>

            <CardContent className="px-6 pb-7 sm:px-8 sm:pb-8">
              <GitHubSignInForm callbackUrl={callbackUrl} />

              <p className="mt-6 text-center text-xs leading-5 text-neutral-500 dark:text-[#829197]">
                Need access? Ask your workspace admin for an invite.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
