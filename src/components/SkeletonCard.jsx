import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="animate-pulse">
      {/* Image Skeleton */}
      <div className="relative aspect-4/3 rounded-[32px] overflow-hidden mb-4 bg-slate-200"></div>
      
      {/* Info Section Skeleton */}
      <div className="px-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="h-5 bg-slate-200 rounded-md w-3/4"></div>
          <div className="h-5 bg-slate-200 rounded-md w-10 shrink-0"></div>
        </div>
        
        <div className="h-4 bg-slate-100 rounded-md w-1/2 mb-4"></div>

        <div className="flex items-center justify-between">
          <div className="h-6 bg-slate-200 rounded-md w-1/3"></div>
          <div className="h-10 bg-slate-200 rounded-xl w-24"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
