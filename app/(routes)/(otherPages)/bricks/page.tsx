'use client';
import { useEffect, useState } from 'react';

type ComponentMeta = {
  name: string;
  slug: string;
  description: string;
  status: string;
  tags: string[];
  path: string;
  preview: string;
};

export default function BrixPage() {
  const [components, setComponents] = useState<ComponentMeta[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/packages')
      .then((res) => res.json())
      .then((data) => {
        setComponents(data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load packages:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading components...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Available Components</h1>
      <ul className="space-y-4">
        {components.map((comp) => (
          <li key={comp.slug} className="border p-4 rounded bg-white">
            <h2 className="text-xl font-semibold">{comp.name}</h2>
            <p className="text-gray-600">{comp.description}</p>
            <p className="text-xs mt-1 text-gray-500">
              Tags: {comp.tags.join(', ')} | Status: {comp.status}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
