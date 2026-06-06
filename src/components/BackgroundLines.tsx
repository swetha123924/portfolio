import React from 'react';

interface BackgroundLinesProps {
  className?: string;
}

const BackgroundLines: React.FC<BackgroundLinesProps> = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Horizontal Lines */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--theme-accent)]/40 to-transparent animate-pulse"></div>
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--theme-accent)]/30 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--theme-accent)]/40 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Vertical Lines */}
      <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-[var(--theme-accent)]/40 to-transparent animate-pulse"></div>
      <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-[var(--theme-accent)]/30 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute left-3/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-[var(--theme-accent)]/40 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Diagonal Lines */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--theme-accent)]/35 to-transparent transform rotate-45 origin-top-left animate-pulse"></div>
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-[var(--theme-accent)]/25 to-transparent transform -rotate-45 origin-top-right animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--theme-accent)]/35 to-transparent transform -rotate-45 origin-bottom-left animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-[var(--theme-accent)]/25 to-transparent transform rotate-45 origin-bottom-right animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[var(--theme-accent)]/50 rounded-full animate-bounce"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[var(--theme-accent)]/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-[var(--theme-accent)]/50 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-[var(--theme-accent)]/40 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
    </div>
  );
}
export default BackgroundLines;