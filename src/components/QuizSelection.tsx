
import React, { useMemo } from 'react';
import { Question, QuizConfig } from '../types';
import { BookOpenIcon } from './icons/BookOpenIcon';
import { ClipboardListIcon } from './icons/ClipboardListIcon';

interface QuizSelectionProps {
  questions: Question[];
  onStartQuiz: (config: QuizConfig) => void;
}

const QuizSelection: React.FC<QuizSelectionProps> = ({ questions, onStartQuiz }) => {
  const chapters = useMemo(() => {
    const chapterSet = new Set(questions.map(q => q.chapter));
    return Array.from(chapterSet).sort();
  }, [questions]);

  const MOCK_EXAM_COUNT = 5;
  const MOCK_EXAM_SIZE = 100;
  
  // Simple shuffle function
  const shuffle = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleStartChapterQuiz = (chapter: string) => {
    const chapterQuestions = questions.filter(q => q.chapter === chapter);
    onStartQuiz({
      type: 'chapter',
      identifier: chapter,
      questions: shuffle(chapterQuestions),
    });
  };

  const handleStartMockExam = (examNumber: number) => {
    const shuffledQuestions = shuffle(questions);
    const mockQuestions = shuffledQuestions.slice(0, MOCK_EXAM_SIZE);
    onStartQuiz({
      type: 'mock',
      identifier: examNumber,
      questions: mockQuestions,
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 flex items-center mb-4">
          <BookOpenIcon className="w-6 h-6 mr-3 text-primary-500" />
          Chapter-wise Quizzes
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {chapters.map(chapter => (
            <button
              key={chapter}
              onClick={() => handleStartChapterQuiz(chapter)}
              className="w-full text-left p-4 bg-slate-50 dark:bg-gray-700 rounded-lg shadow-sm hover:bg-slate-100 dark:hover:bg-gray-600 hover:shadow-md transition-all duration-200"
            >
              <p className="font-semibold text-gray-800 dark:text-gray-100">{chapter}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{questions.filter(q => q.chapter === chapter).length} questions</p>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 flex items-center mb-4">
          <ClipboardListIcon className="w-6 h-6 mr-3 text-primary-500" />
          Full Mock Exams
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: MOCK_EXAM_COUNT }, (_, i) => i + 1).map(examNumber => (
            <button
              key={examNumber}
              onClick={() => handleStartMockExam(examNumber)}
              disabled={questions.length < MOCK_EXAM_SIZE}
              className="w-full text-left p-4 bg-slate-50 dark:bg-gray-700 rounded-lg shadow-sm hover:bg-slate-100 dark:hover:bg-gray-600 hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <p className="font-semibold text-gray-800 dark:text-gray-100">Mock Exam {examNumber}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{MOCK_EXAM_SIZE} questions</p>
            </button>
          ))}
          {questions.length < MOCK_EXAM_SIZE && (
            <p className="col-span-full text-sm text-center text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 p-3 rounded-md">
              At least {MOCK_EXAM_SIZE} questions must be uploaded to enable mock exams.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizSelection;