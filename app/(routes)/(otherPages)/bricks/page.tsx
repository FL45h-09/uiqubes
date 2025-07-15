'use client';
import { useEffect, useState } from 'react';
import { getAllBrix } from '@/libs/apiCalls/brixApi';
import { DynamicPreview } from '@/_components/atoms/dynamicComp/DynamicPreview';

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
    const fetchComponents = async () => {
      try {
        const data = await getAllBrix();
        setComponents(data.data || []);
      } catch (err) {
        console.error('Failed to load components:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchComponents();
  }, []);

  if (loading) return <div>Loading components...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Available Components</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {components.map((comp) => (
          <li key={comp.slug} className="border p-4 rounded bg-white">
            <div className="componentPreview mb-2">
              {/* <DynamicPreview previewPath={comp.preview} /> */}
            </div>
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