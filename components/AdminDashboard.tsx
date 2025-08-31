
import React from 'react';
import { Question } from '../types';
import FileUpload from './FileUpload';

interface AdminDashboardProps {
  onQuestionsUpload: (questions: Question[]) => void;
  questionCount: number;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onQuestionsUpload, questionCount }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">Admin Dashboard</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">Upload an Excel file with questions to populate the quiz database.</p>
        
        <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-500/30 rounded-lg p-4 mb-8">
          <p className="font-semibold text-primary-800 dark:text-primary-200">
            Current Question Count: <span className="text-2xl font-bold">{questionCount}</span>
          </p>
        </div>

        <FileUpload onQuestionsUpload={onQuestionsUpload} />
        
        <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-100">Excel File Format Instructions</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Please ensure your Excel file has a header row and the following columns:
            </p>
            <ul className="list-decimal list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li><span className="font-mono bg-gray-200 dark:bg-gray-600 px-1 rounded">KnowledgeArea</span>: The chapter or topic of the question.</li>
                <li><span className="font-mono bg-gray-200 dark:bg-gray-600 px-1 rounded">Question</span>: The full text of the question.</li>
                <li><span className="font-mono bg-gray-200 dark:bg-gray-600 px-1 rounded">Correct</span>: The letter of the correct option (e.g., A, B, C).</li>
                <li><span className="font-mono bg-gray-200 dark:bg-gray-600 px-1 rounded">A</span>, <span className="font-mono bg-gray-200 dark:bg-gray-600 px-1 rounded">B</span>, <span className="font-mono bg-gray-200 dark:bg-gray-600 px-1 rounded">C</span>, etc.: Columns for each multiple-choice option text, with single-letter headers.</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
