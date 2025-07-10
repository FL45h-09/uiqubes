import { CopyButton } from '@/_components/atoms/buttons/Buttons';
import { CodePreview } from '@/_components/molecules/codePreview/CodePreview';
import { codeString } from './codeToShow';

export const CodeBlock = () => {
  return (
    <>
    <div className="relative bg-[#1e1e1e] min-h-[30rem] w-full grow overflow-hidden rounded-tl-xl rounded-tr-xl shadow-2xl outline outline-white/10">
      <div className="flex">
        <div className="-mb-px flex justify-between text-sm/6 font-medium text-gray-400 w-full relative bg-gray-800">
          <div className="tabwrapper flex font-norma">
            <button className="px-4 py-2">Preview.jsx</button>
            <button className="border-l-2 border-l-white/5 px-4 py-2 text-white bg-[#1e1e1e]">Code.jsx </button>
          </div>
          <div className="px-4 py-2">
            <CopyButton codeBlock={codeString} />
          </div>
        </div>
      </div>
      <CodePreview code={codeString} theme={11} />
    </div>
    </>
  );
};
