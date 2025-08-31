
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { QuizConfig, QuizResult } from '../types';

interface QuizProps {
  quizConfig: QuizConfig;
  onQuizComplete: (result: QuizResult) => void;
}

const Quiz: React.FC<QuizProps> = ({ quizConfig, onQuizComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const quizDuration = useMemo(() => quizConfig.questions.length * 90, [quizConfig.questions.length]); // 90 seconds per question
  const [timeLeft, setTimeLeft] = useState(quizDuration);
  
  const handleSubmit = useCallback(() => {
    let score = 0;
    const answeredQuestions = quizConfig.questions.map(q => {
      const selectedAnswer = selectedAnswers[q.id] || null;
      const isCorrect = selectedAnswer === q.correctAnswer;
      if (isCorrect) score++;
      return { question: q, selectedAnswer, isCorrect };
    });
    
    onQuizComplete({
      score,
      total: quizConfig.questions.length,
      answeredQuestions,
    });
  }, [quizConfig.questions, selectedAnswers, onQuizComplete]);

  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);


  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleSelectAnswer = (questionId: number, answer: string) => {
    setSelectedAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const currentQuestion = quizConfig.questions[currentQuestionIndex];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
        <div className="flex justify-between items-center mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              {quizConfig.type === 'mock' ? `Mock Exam ${quizConfig.identifier}` : `Chapter: ${quizConfig.identifier}`}
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Question {currentQuestionIndex + 1} of {quizConfig.questions.length}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500 dark:text-gray-400">Time Left</p>
            <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">{formatTime(timeLeft)}</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 leading-relaxed">{currentQuestion.question}</h3>
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectAnswer(currentQuestion.id, option)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-colors duration-200 flex items-center
                  ${selectedAnswers[currentQuestion.id] === option 
                    ? 'bg-primary-50 dark:bg-primary-900/30 border-primary-500' 
                    : 'bg-gray-50 dark:bg-gray-700 border-transparent hover:border-primary-300'}`}
              >
                <span className={`flex-shrink-0 w-6 h-6 rounded-full mr-4 flex items-center justify-center font-bold text-sm
                  ${selectedAnswers[currentQuestion.id] === option 
                    ? 'bg-primary-500 text-white' 
                    : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200'}`}>
                  {String.fromCharCode(65 + index)}
                </span>
                <span>{option}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <button
            onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
            disabled={currentQuestionIndex === 0}
            className="px-6 py-2 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          
          {currentQuestionIndex === quizConfig.questions.length - 1 ? (
             <button
                onClick={handleSubmit}
                className="px-6 py-2 text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
                Submit Exam
            </button>
          ) : (
            <button
                onClick={() => setCurrentQuestionIndex(prev => Math.min(quizConfig.questions.length - 1, prev + 1))}
                className="px-6 py-2 text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
                Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;