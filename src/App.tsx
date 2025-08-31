
import React, { useState, useCallback } from 'react';
import { UserRole, Question, QuizConfig, QuizResult } from './types';
import Header from './components/Header';
import AdminDashboard from './components/AdminDashboard';
import StudentDashboard from './components/StudentDashboard';
import Quiz from './components/Quiz';
import QuizResultComponent from './components/QuizResult';
import { defaultQuestions } from './defaultQuestions';

function App() {
  const [userRole, setUserRole] = useState<UserRole>(UserRole.Student);
  const [questions, setQuestions] = useState<Question[]>(defaultQuestions);
  const [activeQuiz, setActiveQuiz] = useState<QuizConfig | null>(null);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  const handleQuestionsUpload = useCallback((newQuestions: Question[]) => {
    setQuestions(newQuestions);
  }, []);

  const handleStartQuiz = useCallback((config: QuizConfig) => {
    setActiveQuiz(config);
    setQuizResult(null);
  }, []);

  const handleQuizComplete = useCallback((result: QuizResult) => {
    setQuizResult(result);
    setActiveQuiz(null);
  }, []);
  
  const handleReset = useCallback(() => {
    setActiveQuiz(null);
    setQuizResult(null);
  }, []);

  const renderContent = () => {
    if (activeQuiz) {
      return <Quiz quizConfig={activeQuiz} onQuizComplete={handleQuizComplete} />;
    }
    if (quizResult) {
      return <QuizResultComponent result={quizResult} onReset={handleReset} />;
    }
    if (userRole === UserRole.Admin) {
      return <AdminDashboard onQuestionsUpload={handleQuestionsUpload} questionCount={questions.length} />;
    }
    return <StudentDashboard questions={questions} onStartQuiz={handleStartQuiz} />;
  };

  return (
    <div className="min-h-screen font-sans">
      <Header userRole={userRole} setUserRole={setUserRole} onHomeClick={handleReset} />
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
