import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center flex-1 px-4">
      <div className="max-w-3xl">
        <p className="text-xl text-muted-foreground mb-8">
          Fast & Reliable Screenshot API for Developer
        </p>

        <p className="text-lg mb-8">
          Effortlessly capture screenshots, create PDFs, scrape content, and
          extract metadata from any website with our state-of-the-art API. Our
          blazing-fast screenshot API delivers reliable performance, giving you
          the best user experience possible. Count on our screenshot API for
          seamless integration and exceptional results every time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/docs/get-started"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Get Started →
          </Link>
          <Link
            href="/docs/batch-image"
            className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-6 py-3 font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            API Reference
          </Link>
        </div>
      </div>
    </div>
  );
}
