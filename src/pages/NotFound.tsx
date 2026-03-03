import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-6xl font-serif font-bold text-slate-800 mb-4">404</h1>
      <h2 className="text-2xl font-medium mb-6">Page Not Found</h2>
      <p className="text-slate-400 mb-8">The page you are looking for does not exist.</p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-amber-500 text-slate-900 rounded-md font-medium hover:bg-amber-400 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
