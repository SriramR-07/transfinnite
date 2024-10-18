import React from 'react';
import { Code } from 'lucide-react';

interface CodeInputProps {
  code: string;
  setCode: (code: string) => void;
  language: string;
  setLanguage: (language: string) => void;
}

const CodeInput: React.FC<CodeInputProps> = ({ code, setCode, language, setLanguage }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex items-center mb-2">
        <Code className="mr-2" />
        <h2 className="text-xl font-semibold">Code Input</h2>
      </div>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      >
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="csharp">C#</option>
      </select>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your code here..."
        className="w-full h-64 p-2 border rounded font-mono"
      />
    </div>
  );
};

export default CodeInput;