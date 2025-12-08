import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center flex-1 px-4">
      <div className="max-w-3xl">
        <h1 className="text-2xl font-extrabold text-foreground mb-8">
          Fast & Reliable Browser API
        </h1>

        <p className="text-md mb-8">
          Effortlessly capture screenshots, create PDFs, scrape content, and
          extract metadata from any website with our state-of-the-art API. Our
          blazing-fast screenshot API delivers reliable performance, giving you
          the best user experience possible. Count on our screenshot API for
          seamless integration and exceptional results every time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/docs/get-started"
            className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2.5 font-medium text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
          >
            <span>Get Started</span>
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
