import Link from "next/link";

const quickStartSteps = [
  {
    title: "Get credentials",
    description: "Create an API key and secret in the Capture console.",
    href: "/docs/get-started",
  },
  {
    title: "Choose an API",
    description:
      "Render a screenshot or PDF, extract content, or read metadata.",
    href: "/docs/capture-apis-overview",
  },
  {
    title: "Use SDKs or agents",
    description: "Skip manual signing with SDKs, CLI, MCP, or agent skills.",
    href: "/docs/sdk-overview",
  },
];

const primaryDocs = [
  {
    title: "Core APIs",
    description:
      "Single-request endpoints for screenshots, PDFs, content, metadata, and animated captures.",
    href: "/docs/capture-apis-overview",
  },
  {
    title: "Browser Sessions",
    description:
      "Run multi-step browser workflows with shared state and actions.",
    href: "/docs/browser-sessions-overview",
  },
  {
    title: "Capture CLI",
    description:
      "Take screenshots, generate PDFs, and extract pages from your terminal.",
    href: "/docs/capture-cli",
  },
  {
    title: "Agent Skill",
    description: "Give Claude and other agents Capture-powered browser tools.",
    href: "/docs/ai-agent-skill",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-background px-5 py-10 text-foreground sm:px-8 lg:px-10 lg:py-14">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 lg:gap-12">
        <section className="grid gap-8 lg:grid-cols-[1fr_25rem] lg:gap-12">
          <div className="flex flex-col justify-between gap-10">
            <div className="border-l-2 border-fd-primary pl-6">
              <h1 className="max-w-3xl text-3xl leading-tight font-semibold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                Screenshot, PDF, and extract web pages with one API.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Start with auth, then jump into screenshots, PDFs, content
                extraction, browser sessions, SDKs, or agent tooling.
              </p>
            </div>

            <div className="flex flex-col gap-4 text-base sm:flex-row sm:items-center">
              <Link
                href="/docs/get-started"
                className="font-semibold underline decoration-fd-primary decoration-2 underline-offset-4 transition hover:text-fd-primary"
              >
                Start building →
              </Link>
              <Link
                href="/docs/capture-apis-overview"
                className="font-semibold text-muted-foreground underline decoration-fd-primary decoration-2 underline-offset-4 transition hover:text-fd-primary"
              >
                Browse APIs →
              </Link>
            </div>
          </div>

          <aside className="rounded-lg border border-fd-border bg-muted/40 p-4">
            <h2 className="mb-3 text-xl font-semibold tracking-[-0.02em]">
              <span className="text-fd-primary">Start</span> here
            </h2>
            <div className="space-y-1">
              {quickStartSteps.map((step) => (
                <Link
                  key={step.href}
                  href={step.href}
                  className="group block rounded-md border border-transparent p-2 transition hover:border-fd-border hover:bg-background"
                >
                  <span className="font-semibold text-foreground underline decoration-fd-primary decoration-2 underline-offset-4 group-hover:text-fd-primary">
                    {step.title}
                  </span>
                  <span className="mt-0.5 block text-sm leading-5 text-muted-foreground">
                    {step.description}
                  </span>
                </Link>
              ))}
            </div>
          </aside>
        </section>

        <section className="grid gap-6 rounded-lg border border-fd-border bg-muted/35 p-6 lg:grid-cols-[1fr_auto] lg:items-center lg:p-7">
          <div>
            <h2 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
              <Link
                href="/docs/ai-agent-skill"
                className="underline decoration-fd-primary decoration-2 underline-offset-4 hover:text-fd-primary"
              >
                Give your agent Capture tools.
              </Link>
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Install the Capture skill to let agents take screenshots, generate
              PDFs, extract content, and read page metadata from your Capture
              account.
            </p>
          </div>
          <Link
            href="/docs/ai-agent-skill"
            className="flex items-center gap-3 overflow-x-auto rounded-md border border-fd-border bg-background px-4 py-3 font-mono text-sm transition hover:bg-muted lg:min-w-[28rem]"
          >
            <span className="text-fd-primary">$</span>
            <code>npx skills add techulus/capture-skills</code>
          </Link>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {primaryDocs.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group relative min-h-48 rounded-lg border border-fd-border bg-muted/35 p-6 transition hover:bg-muted sm:p-7"
            >
              <h2 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                <span className="underline decoration-fd-primary decoration-2 underline-offset-4 group-hover:text-fd-primary">
                  {card.title}
                </span>
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                {card.description}
              </p>
              <span className="mt-8 inline-flex text-sm font-semibold text-muted-foreground transition group-hover:text-fd-primary">
                Read docs →
              </span>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
