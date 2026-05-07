import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-gray-500 mb-8">Page not found.</p>
      <Link to="/" className="text-sm font-medium hover:underline">
        ← Back to home
      </Link>
    </div>
  );
}
