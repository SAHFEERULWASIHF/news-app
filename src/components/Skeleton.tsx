export default function Skeleton() {
  return (
    <div className="border dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800 p-0 animate-pulse">
      {/* Image Placeholder */}
      <div className="h-48 w-full bg-gray-300 dark:bg-gray-700"></div>
      
      <div className="p-5 space-y-4">
        {/* Title Placeholder */}
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
        
        {/* Author Placeholder */}
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
        
        {/* Content Placeholder */}
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
        </div>
        
        {/* Button Placeholder */}
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-20 pt-2"></div>
      </div>
    </div>
  );
}