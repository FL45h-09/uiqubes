'use client';

import { useState } from 'react';
import { CopyIcon, CopiedIcon } from '@/_components/atoms/svgIcons/SvgIcons';
import { copyCode } from '@/libs/CopyCode';
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface PrimaryButtonProps {
  btnType?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  children: ReactNode;
}

export const PrimaryButton = ({ btnType = "button", children }: PrimaryButtonProps) => {
  return (
    <button
      type={btnType}
      className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none shadow-[var(--btn-shadow)] bg-[var(--color-primary)] rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-50 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    >
      {children}
    </button>
  );
};

// ✅ Fixed: CopyButton is now a functional React component
export const CopyButton = ({ codeBlock }: { codeBlock: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copyCode(codeBlock, () => {
      setCopied(true);
      // setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <button className={`p-[3px] border-[1px] border-white text-white rounded text-[18px] cursor-pointer transition-colors duration-200 ${ copied ? 'text-opacity-100 border-opacity-100' : 'border-opacity-25 text-opacity-25'}`} onClick={handleCopy} aria-label="Copy code to clipboard">
      {copied ? <CopiedIcon /> : <CopyIcon />}
    </button>
  );
};
