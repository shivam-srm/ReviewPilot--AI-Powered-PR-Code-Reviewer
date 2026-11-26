"use client";

import { GitBranch } from "lucide-react";
import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { signInWithGitHub } from "@/features/auth/actions";

type SubmitButtonProps = {
  disabled?: boolean;
};

function SubmitButton({ disabled = false }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="default"
      size="lg"
      disabled={pending || disabled}
      className="mt-7 h-11 w-full justify-center gap-2 rounded-lg border border-[#F59E0B] bg-[#F59E0B] text-sm font-semibold text-[#18181B] hover:border-[#FBBF24] hover:bg-[#FBBF24] hover:text-[#18181B]"
    >
      {pending ? (
        <Spinner className="h-4 w-4 animate-spin" />
      ) : (
        <GitBranch className="h-4 w-4" />
      )}
      {pending ? "Signing in..." : "Login with GitHub"}
    </Button>
  );
}

type GitHubSignInFormProps = {
  callbackUrl?: string;
  disabled?: boolean;
};

export function GitHubSignInForm({
  callbackUrl,
  disabled = false,
}: GitHubSignInFormProps) {
  return (
    <form action={signInWithGitHub} className="flex flex-col">
      {callbackUrl ? (
        <input type="hidden" name="callbackUrl" value={callbackUrl} />
      ) : null}
      <SubmitButton disabled={disabled} />
    </form>
  );
}