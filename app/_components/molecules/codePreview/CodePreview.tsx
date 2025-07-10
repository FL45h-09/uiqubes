import { HighlightCode } from "@/libs/HighlightCode";

export async function CodePreview({
  code,
  theme,
}: {
  code: string;
  theme?: number;
}) {
  const html = await HighlightCode(code, 'tsx', theme || 0);

  return (
    <div className="relative shiki box-border p-4 rounded-b-md">
        <div className="text-[13px] leading-6 font-mono text-sm overflow-auto" dangerouslySetInnerHTML={{ __html: html }} />
        {/* <div className="shiki bg-[#011627]" dangerouslySetInnerHTML={{ __html: html }} /> */}
        </div>
    
  );
}
