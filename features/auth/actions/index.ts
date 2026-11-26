"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function signInWithGitHub(formData: FormData) {
  const requestedCallbackUrl = formData.get("callbackUrl");
  const callbackURL =
    typeof requestedCallbackUrl === "string" &&
    requestedCallbackUrl.startsWith("/") &&
    !requestedCallbackUrl.startsWith("//")
      ? requestedCallbackUrl
      : "/";

  const result = await auth.api.signInSocial({
    body: {
      provider: "github",
      callbackURL,
    },
    headers: await headers(),
  });

  if (!result.url) {
    throw new Error("GitHub sign-in did not return a redirect URL.");
  }

  redirect(result.url);
}