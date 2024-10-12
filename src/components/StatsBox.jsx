import React, { useEffect, useState } from 'react';

const StatsBox = () => {
  const [apiRequests, setApiRequests] = useState(0);
  const [users, setUsers] = useState(0);
  const [files, setFiles] = useState(0);

  useEffect(() => {
    const totalTime = 4000; // 4 seconds for faster completion
    const stepInterval = 20; // Faster step every 20ms
    const totalSteps = totalTime / stepInterval;

    const apiIncrement = Math.ceil(10000000 / totalSteps); // API Requests increase by 1M
    const usersIncrement = Math.ceil(15000 / totalSteps); // Users increase by 1K
    const filesIncrement = Math.ceil(2000000 / totalSteps); // Files increase by 0.2M

    const interval = setInterval(() => {
      setApiRequests((prev) => Math.min(prev + apiIncrement, 10000000));
      setUsers((prev) => Math.min(prev + usersIncrement, 15000));
      setFiles((prev) => Math.min(prev + filesIncrement, 2000000));
    }, stepInterval);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center mt-24 p-4 bg-transparent border border-white rounded-lg shadow-lg w-full max-w-xs mx-auto mb-10"> {/* Shortened width */}
      <div className="flex flex-col space-y-2 mt-4"> {/* Stack items vertically for mobile */}
        <div className="text-center">
          <div className="text-xs text-white mb-1" aria-label="API Requests Per Day">API Requests / Day</div> {/* Adjusted text size */}
          <div className="text-2xl text-white font-semibold animate-pulse">{apiRequests.toLocaleString()}+</div> {/* Adjusted text size */}
        </div>
        <div className="text-center">
          <div className="text-xs text-white mb-1" aria-label="Total Users">Users</div> {/* Adjusted text size */}
          <div className="text-2xl text-white font-semibold animate-pulse">{users.toLocaleString()}+</div> {/* Adjusted text size */}
        </div>
        <div className="text-center">
          <div className="text-xs text-white mb-1" aria-label="Number of Files">Number of Files</div> {/* Adjusted text size */}
          <div className="text-2xl text-white font-semibold animate-pulse">{files.toLocaleString()}+</div> {/* Adjusted text size */}
        </div>
      </div>
    </div>
  );
};

export default StatsBox;
