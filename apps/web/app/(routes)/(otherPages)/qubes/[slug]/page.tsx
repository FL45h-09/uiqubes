import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ComponentTabs } from './ComponentTabs';
import { CodePreview } from '@/_components/molecules/codePreview/CodePreview';

// Component Imports
import { Button, Input, Checkbox, Switch, Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@uiqubes/ui';
import { AuthForm, NotificationCard, PricingCard, ProfileCard } from '@uiqubes/ui';

// Component Data Map
const componentsData = {
  'button': {
    name: 'Button',
    description: 'Interactive button component with multiple variants, powered by CVA for clean styling structure.',
    category: 'Elements',
    file: 'button.tsx',
    demo: <div className="flex gap-4"><Button>Default</Button><Button variant="destructive">Destructive</Button><Button variant="outline">Outline</Button></div>
  },
  'input': {
    name: 'Input',
    description: 'Standard text input field with robust, accessible structure.',
    category: 'Forms',
    file: 'input.tsx',
    demo: <div className="w-full max-w-sm"><Input type="email" placeholder="Email address" className="bg-[#111] border-gray-800 text-white" /></div>
  },
  'checkbox': {
    name: 'Checkbox',
    description: 'Accessible checkbox built on Radix UI.',
    category: 'Forms',
    file: 'checkbox.tsx',
    demo: <div className="flex items-center gap-2"><Checkbox id="terms" /><label htmlFor="terms" className="text-white text-sm">Accept terms and conditions</label></div>
  },
  'switch': {
    name: 'Switch',
    description: 'A slick toggle switch control, animated smoothly.',
    category: 'Forms',
    file: 'switch.tsx',
    demo: <div className="flex items-center gap-2"><Switch id="airplane-mode" /><label htmlFor="airplane-mode" className="text-white text-sm">Airplane Mode</label></div>
  },
  'accordion': {
    name: 'Accordion',
    description: 'A vertically stacked set of interactive headings that each reveal a section of content using Radix UI metrics.',
    category: 'Elements',
    file: 'accordion.tsx',
    demo: (
      <Accordion type="single" collapsible className="w-full max-w-md">
        <AccordionItem value="item-1" className="border-gray-800">
          <AccordionTrigger className="text-white">Is it accessible?</AccordionTrigger>
          <AccordionContent className="text-gray-400">Yes. It adheres to the WAI-ARIA design pattern strictly.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-gray-800">
          <AccordionTrigger className="text-white">Is it unstyled?</AccordionTrigger>
          <AccordionContent className="text-gray-400">Yes. Tailor it seamlessly using Tailwind CSS utility classes.</AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  },
  'auth-form': {
    name: 'Auth Form',
    description: 'A complete authentication form with email layout and OAuth buttons. Fully composed from basic inputs.',
    category: 'Blocks',
    file: 'blocks/auth-form.tsx',
    demo: <div className="w-full max-w-md"><AuthForm /></div>
  },
  'pricing-card': {
    name: 'Pricing Card',
    description: 'A premium pricing tier card with neon glow accents.',
    category: 'Blocks',
    file: 'blocks/pricing-card.tsx',
    demo: <div className="w-full max-w-sm"><PricingCard /></div>
  },
  'notification-card': {
    name: 'Notification Card',
    description: 'A stylized notifications widget perfect for dashboards.',
    category: 'Blocks',
    file: 'blocks/notification-card.tsx',
    demo: <div className="w-full max-w-sm"><NotificationCard /></div>
  },
  'profile-card': {
    name: 'Profile Card',
    description: 'A user identity and profile summary widget.',
    category: 'Blocks',
    file: 'blocks/profile-card.tsx',
    demo: <div className="w-full max-w-sm"><ProfileCard /></div>
  }
};

export default async function ComponentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const comp = componentsData[slug as keyof typeof componentsData];
  
  if (!comp) {
    return notFound();
  }

  // Read source code straight from the packages directory
  let sourceCode = '';
  try {
    const filePath = path.join(process.cwd(), '../../packages/ui/src', comp.file);
    sourceCode = fs.readFileSync(filePath, 'utf8');
  } catch {
    sourceCode = `// Failed to load source code for ${comp.file}\n// Filepath attempted: ${path.join(process.cwd(), '../../packages/ui/src', comp.file)}`;
  }

  return (
    <div className="min-h-screen bg-[var(--background)] pt-24 pb-12 relative z-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link href="/qubes" className="text-sm font-medium text-gray-400 hover:text-white mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to components
        </Link>
        
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-white">{comp.name}</h1>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400">
              {comp.category}
            </span>
          </div>
          <p className="text-lg text-gray-400 max-w-3xl">{comp.description}</p>
        </div>

        <h3 className="text-xl font-bold text-white mb-6">Preview</h3>
        <ComponentTabs 
           demo={comp.demo} 
           sourceCode={sourceCode} 
           codeElement={<CodePreview code={sourceCode} theme={11} />} 
        />
        
      </div>
    </div>
  );
}