
import React from 'react';
import { UserRole } from '../types';
import { BookOpenIcon } from './icons/BookOpenIcon';

interface HeaderProps {
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  onHomeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ userRole, setUserRole, onHomeClick }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={onHomeClick}>
            <BookOpenIcon className="h-8 w-8 text-primary-600" />
            <h1 className="ml-3 text-2xl font-bold text-gray-800 dark:text-white">CDMP Pro Quizzer</h1>
          </div>
          <div className="flex items-center">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300 mr-3">Mode:</span>
            <div className="relative inline-flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1">
              <button
                onClick={() => setUserRole(UserRole.Student)}
                className={`px-4 py-1 text-sm rounded-full transition-colors duration-300 focus:outline-none ${
                  userRole === UserRole.Student ? 'bg-primary-600 text-white shadow' : 'text-gray-700 dark:text-gray-200'
                }`}
              >
                Student
              </button>
              <button
                onClick={() => setUserRole(UserRole.Admin)}
                className={`px-4 py-1 text-sm rounded-full transition-colors duration-300 focus:outline-none ${
                  userRole === UserRole.Admin ? 'bg-primary-600 text-white shadow' : 'text-gray-700 dark:text-gray-200'
                }`}
              >
                Admin
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
