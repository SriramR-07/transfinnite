import { Vulnerability } from '../types';

// This is a mock function to simulate API call to an LLM for code analysis
export const analyzeCode = async (code: string, language: string): Promise<Vulnerability[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Mock vulnerabilities (in a real scenario, this would come from the LLM)
  const mockVulnerabilities: Vulnerability[] = [
    {
      type: 'SQL Injection',
      description: 'Potential SQL injection vulnerability detected in database query.',
      fix: 'Use parameterized queries or prepared statements instead of string concatenation.'
    },
    {
      type: 'Cross-Site Scripting (XSS)',
      description: 'Possible XSS vulnerability found in user input handling.',
      fix: 'Sanitize user input before rendering it in HTML context.'
    }
  ];

  // In a real scenario, we would send the code and language to an LLM API
  // and receive actual vulnerabilities. For now, we'll return mock data.
  return mockVulnerabilities;
};