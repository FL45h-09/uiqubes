const words = ["React", "Next.js", "Tailwind CSS", "Radix UI", "Framer Motion", "TypeScript", "Vercel", "Turborepo"];

const MarqueeItem = () => (
  <div className="flex space-x-16 items-center flex-shrink-0 min-w-full justify-around pr-16 bg-[var(--background)]">
    {words.map((w, i) => (
      <span key={i} className="text-2xl md:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-gray-400 to-gray-800 uppercase px-8">
        {w}
      </span>
    ))}
  </div>
);

export const MarqueeSection = () => {
  return (
    <div className="w-full overflow-hidden bg-[var(--background)] py-12 relative flex">
      {/* Gradients to fade edges smoothly into the background */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none"></div>
      
      {/* Inline styles for isolation to prevent Tailwind CSS config issues */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 30s linear infinite;
        }
      `}} />
      
      <div className="flex w-[200%] overflow-hidden">
        <div className="flex animate-infinite-scroll min-w-fit">
          <MarqueeItem />
          <MarqueeItem />
        </div>
      </div>
    </div>
  );
};
