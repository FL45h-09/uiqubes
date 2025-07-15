'use client';
import dynamic from 'next/dynamic';

export function DynamicPreview({ previewPath }: { previewPath: string }) {
  // Assuming path is like './buttons/TailButton.jsx'
  const filename = previewPath.split('/').pop()?.replace('.jsx', '');

  // 🧠 Map known preview paths to imports
  const componentsMap: Record<string, any> = {
    TailButton: dynamic(() => import(`@/brix/buttons/TailButton`)),
    // add more mappings as needed
  };

  const Component = filename && componentsMap[filename];

  if (!Component) return <div className="text-red-500">Component Not Found</div>;

  return <Component />;
}