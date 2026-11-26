import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign in | ReviewPilot",
    description: "Sign in to ReviewPilot to review pull requests with your team.",
};

export default function AuthLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen w-full">{children}</div>
    );
}