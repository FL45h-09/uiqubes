'use client';
import { useState } from 'react';
import { CopyButton } from '@/_components/atoms/buttons/Buttons';

export const ComponentTabs = ({ demo, sourceCode, codeElement }: { demo: React.ReactNode, sourceCode: string, codeElement: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  return (
    <div className="rounded-xl border border-gray-800 bg-[#0a0a0a] overflow-hidden shadow-2xl mb-24">
      <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3 bg-[#111]">
        <div className="flex space-x-1 bg-[#0a0a0a] rounded-lg p-1 border border-gray-800">
          <button 
            onClick={() => setActiveTab('preview')}
            className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${activeTab === 'preview' ? 'bg-[#222] text-white shadow border border-gray-700' : 'text-gray-400 hover:text-white'}`}
          >
            Preview
          </button>
          <button 
            onClick={() => setActiveTab('code')}
            className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${activeTab === 'code' ? 'bg-[#222] text-white shadow border border-gray-700' : 'text-gray-400 hover:text-white'}`}
          >
            Code
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500 mr-2">Copy source code</span>
          <CopyButton codeBlock={sourceCode} />
        </div>
      </div>
      
      <div className="p-0">
        {activeTab === 'preview' ? (
          <div className="min-h-[400px] w-full flex items-center justify-center p-8 bg-[url('/grid.svg')] bg-[#0a0a0a]">
            {demo}
          </div>
        ) : (
          <div className="max-h-[600px] overflow-auto bg-[#1a1a1a]">
             {codeElement}
          </div>
        )}
      </div>
    </div>
  );
}
