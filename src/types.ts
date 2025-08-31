
export interface Question {
  id: number;
  chapter: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

export enum UserRole {
  Admin = 'admin',
  Student = 'student',
}

export interface QuizConfig {
  type: 'chapter' | 'mock';
  identifier: string | number;
  questions: Question[];
}

export interface QuizResult {
  score: number;
  total: number;
  answeredQuestions: {
    question: Question;
    selectedAnswer: string | null;
    isCorrect: boolean;
  }[];
}