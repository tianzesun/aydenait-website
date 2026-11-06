import { Component, type ReactNode } from "react";

// Shows a fallback instead of a blank screen if a page throws while rendering.
// App.tsx renders it inside the per-page wrapper, so moving to another page clears the error.
type State = { refId: string | null };

const newRefId = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : Date.now().toString(36);

class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { refId: null };

  static getDerivedStateFromError(): State {
    return { refId: newRefId() };
  }

  componentDidCatch(error: unknown) {
    console.error(`[${this.state.refId}] Page failed to render:`, error);
  }

  render() {
    if (!this.state.refId) return this.props.children;
    return (
      <section className="min-h-[70vh] flex items-center justify-center px-4 py-16">
        <div className="max-w-md text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Something went wrong</h1>
          <p className="text-blue-100 mb-8">
            This page couldn't be displayed. Please reload it, or email{" "}
            <a className="text-cyan-300 underline" href="mailto:contact@aydenait.com">contact@aydenait.com</a> if the
            problem continues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Reload the page
            </button>
            {/* Plain link, not <Link>: a full page load starts the app fresh */}
            <a href="/" className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors">
              Go to Home
            </a>
          </div>
          <p className="mt-8 text-xs text-blue-400">Reference: {this.state.refId}</p>
        </div>
      </section>
    );
  }
}

export default ErrorBoundary;
