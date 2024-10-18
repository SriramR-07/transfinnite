import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, Send } from 'lucide-react';
import CodeInput from './components/CodeInput';
import VulnerabilityReport from './components/VulnerabilityReport';
import { analyzeCode } from './services/codeAnalysis';
import { Vulnerability } from './types';

function App() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [vulnerabilities, setVulnerabilities] = useState<Vulnerability[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    try {
      const result = await analyzeCode(code, language);
      setVulnerabilities(result);
    } catch (error) {
      console.error('Error analyzing code:', error);
      setVulnerabilities([]);
    }
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Code Vulnerability Detector</h1>
      </header>
      <main className="flex-grow container mx-auto p-4 flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <CodeInput
            code={code}
            setCode={setCode}
            language={language}
            setLanguage={setLanguage}
          />
          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing || !code.trim()}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400 flex items-center justify-center w-full"
          >
            {isAnalyzing ? (
              <>
                <AlertTriangle className="animate-spin mr-2" />
                Analyzing...
              </>
            ) : (
              <>
                <Send className="mr-2" />
                Analyze Code
              </>
            )}
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <VulnerabilityReport vulnerabilities={vulnerabilities} />
        </div>
      </main>
      <footer className="bg-gray-200 p-4 text-center">
        <p>&copy; 2024 Code Vulnerability Detector. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;