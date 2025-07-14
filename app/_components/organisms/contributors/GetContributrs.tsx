'use client';
import { useEffect, useState } from 'react';

type Contributor = {
  login: string;
  avatar_url: string;
  profile_url: string;
  contributions: number;
  name?: string;
  bio?: string;
  location?: string;
  website?: string;
  twitter?: string;
  followers?: number;
  public_repos?: number;
  created_at?: string;
};

export default function Contributors() {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const res = await fetch('/api/contributors');
        if (!res.ok) {
          throw new Error(`Fetch failed with status ${res.status}`);
        }

        const data = await res.json();
        setContributors(data.contributors);
      } catch (err: any) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchContributors();
  }, []);

  if (loading) return <p className="text-sm text-gray-500">Loading contributors...</p>;

  if (error)
    return (
      <div className="p-4 bg-red-100 text-red-600 rounded">
        ⚠️ Error loading contributors: {error}
      </div>
    );

  if (contributors.length === 0) return <p>No contributors yet! 🚧</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {contributors.map((user) => (
        <a
          key={user.login}
          href={user.profile_url}
          target="_blank"
          className="flex flex-col items-center p-4 rounded-xl bg-gray-100 dark:bg-zinc-800 hover:scale-105 transition"
        >
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-16 h-16 rounded-full mb-2"
          />
          <p className="font-medium">@{user.login}</p>
          <span className="text-xs text-gray-500">{user.contributions} contributions</span>
        </a>
      ))}
    </div>
  );
}
