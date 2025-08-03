import React, { useEffect, useState } from 'react';
import { Code } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-slate-900 flex items-center justify-center transition-opacity duration-500 ${
        isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        {/* Logo Animation */}
        <div className="mb-8 relative">
          <div className="w-16 h-16 mx-auto mb-4 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl animate-pulse" />
            <div className="absolute inset-1 bg-slate-900 rounded-lg flex items-center justify-center">
              <Code className="w-8 h-8 text-blue-400 animate-bounce" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Portfolio
          </h1>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-slate-400">Loading</span>
            <span className="text-sm text-slate-400">{Math.round(progress)}%</span>
          </div>
          
          <div className="w-full bg-slate-800 rounded-full h-1 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>

        {/* Loading Text */}
        <div className="mt-6">
          <div className="flex items-center justify-center space-x-1">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;