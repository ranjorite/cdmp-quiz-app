
import React from 'react';
import { QuizResult } from '../types';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { XCircleIcon } from './icons/XCircleIcon';

interface QuizResultProps {
  result: QuizResult;
  onReset: () => void;
}

const QuizResultComponent: React.FC<QuizResultProps> = ({ result, onReset }) => {
  const percentage = result.total > 0 ? Math.round((result.score / result.total) * 100) : 0;
  const passed = percentage >= 70;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">Quiz Completed!</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">Here's how you performed.</p>

        <div className={`text-center p-8 rounded-lg mb-8 ${passed ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'}`}>
            <p className={`text-5xl font-bold ${passed ? 'text-green-600' : 'text-red-600'}`}>{percentage}%</p>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-200 mt-2">
                You answered {result.score} out of {result.total} questions correctly.
            </p>
        </div>

        <div className="text-center mb-8">
            <button
              onClick={onReset}
              className="px-8 py-3 text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Take Another Quiz
            </button>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Answer Review</h3>
          <div className="space-y-4">
            {result.answeredQuestions.map(({ question, selectedAnswer, isCorrect }, index) => (
              <div key={question.id} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  {index + 1}. {question.question}
                </p>
                <div className={`flex items-start p-2 rounded-md ${isCorrect ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'}`}>
                  {isCorrect ? <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" /> : <XCircleIcon className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />}
                  <p className="text-sm text-gray-700 dark:text-gray-200">
                    Your answer: <span className="font-medium">{selectedAnswer || 'Not answered'}</span>
                  </p>
                </div>
                {!isCorrect && (
                  <div className="flex items-start p-2 mt-2 rounded-md bg-blue-100 dark:bg-blue-900/30">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                     <p className="text-sm text-gray-700 dark:text-gray-200">
                        Correct answer: <span className="font-medium">{question.correctAnswer}</span>
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResultComponent;

