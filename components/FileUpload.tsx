
import React, { useState, useCallback } from 'react';
import { Question } from '../types';
import { UploadCloudIcon } from './icons/UploadCloudIcon';

interface FileUploadProps {
  onQuestionsUpload: (questions: Question[]) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onQuestionsUpload }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleFile = useCallback(async (file: File) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const data = await file.arrayBuffer();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const workbook = (window as any).XLSX.read(data);
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const json: any[][] = (window as any).XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      
      if (json.length < 2) {
          throw new Error("Excel file is empty or has no data rows.");
      }

      const headers = json[0].map(h => String(h).toLowerCase().trim());
      
      const chapterIndex = headers.indexOf('knowledgearea');
      const questionIndex = headers.indexOf('question');
      const correctKeyIndex = headers.indexOf('correct');

      const optionHeaderIndices: { [key: string]: number } = {};
      headers.forEach((h, i) => {
        if (h.length === 1 && h >= 'a' && h <= 'z') {
          optionHeaderIndices[h.toUpperCase()] = i;
        }
      });
      
      if (questionIndex === -1 || chapterIndex === -1 || correctKeyIndex === -1 || Object.keys(optionHeaderIndices).length < 2) {
        throw new Error("Invalid Excel format. Required columns missing or misnamed. Please check for 'KnowledgeArea', 'Question', 'Correct', and single-letter option columns (A, B, etc.).");
      }
      
      const sortedOptionKeys = Object.keys(optionHeaderIndices).sort();

      const questions: Question[] = json.slice(1).map((row, index) => {
        if (!row || row.length === 0) return null;

        const options = sortedOptionKeys
          .map(key => String(row[optionHeaderIndices[key]] || '').trim())
          .filter(opt => opt && opt !== 'undefined' && opt !== '');

        const correctOptionKey = String(row[correctKeyIndex] || '').trim().toUpperCase();
        
        const correctOptionColumnIndex = optionHeaderIndices[correctOptionKey];
        const correctAnswer = correctOptionColumnIndex !== undefined ? String(row[correctOptionColumnIndex] || '').trim() : '';
        
        const questionText = String(row[questionIndex] || '').trim();
        const chapterText = String(row[chapterIndex] || 'Uncategorized').trim();

        if (!questionText || !chapterText || options.length < 2 || !correctAnswer) {
          return null;
        }

        return {
          id: index + 1,
          chapter: chapterText,
          question: questionText,
          options,
          correctAnswer,
        };
      }).filter((q): q is Question => q !== null);


      onQuestionsUpload(questions);
      setSuccess(`${questions.length} questions loaded successfully!`);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'An unknown error occurred during file processing.');
    } finally {
      setLoading(false);
    }
  }, [onQuestionsUpload]);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  return (
    <div>
      <label htmlFor="file-upload" className="cursor-pointer">
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md"
        >
          <div className="space-y-1 text-center">
            <UploadCloudIcon className="mx-auto h-12 w-12 text-gray-400" />
            <div className="flex text-sm text-gray-600 dark:text-gray-400">
              <span className="relative rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500">
                Upload a file
              </span>
              <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleChange} accept=".xlsx, .xls" />
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">XLSX, XLS up to 10MB</p>
          </div>
        </div>
      </label>
      {loading && <p className="mt-2 text-sm text-blue-500">Processing file...</p>}
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      {success && <p className="mt-2 text-sm text-green-600">{success}</p>}
    </div>
  );
};

export default FileUpload;
