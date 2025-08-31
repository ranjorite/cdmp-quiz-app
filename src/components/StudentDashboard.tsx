
import React from 'react';
import { Question, QuizConfig } from '../types';
import QuizSelection from './QuizSelection';

interface StudentDashboardProps {
  questions: Question[];
  onStartQuiz: (config: QuizConfig) => void;
}

const StudentDashboard: React.FC<StudentDashboardProps> = ({ questions, onStartQuiz }) => {
  return (
    <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome to the CDMP Practice Zone</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Select a quiz from the options below to begin your preparation.</p>
            {questions.length > 0 ? (
                <QuizSelection questions={questions} onStartQuiz={onStartQuiz} />
            ) : (
                <div className="text-center py-12 px-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">No Questions Available</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                        It looks like the question bank is empty. Please ask an administrator to upload a question file.
                    </p>
                </div>
            )}
        </div>
    </div>
  );
};

export default StudentDashboard;