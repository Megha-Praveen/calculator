import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-300 to-purple-600">
      <h1 className="text-4xl font-extrabold text-white mb-6 drop-shadow-lg">
        Welcome to Next.js Calculator
      </h1>
      <Link href="/calculator">
        <button className="p-4 bg-indigo-600 text-white font-bold rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-700">
          Open Calculator
        </button>
      </Link>
    </div>
  );
}