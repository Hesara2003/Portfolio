import { motion } from 'framer-motion';
import { FC, useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete?: () => void;
}

const LoadingScreen: FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const text = "HESARA";
  const letters = Array.from(text) as Array<keyof typeof letterPaths>;

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(timer);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const child = {
    hidden: { 
      opacity: 0,
      pathLength: 0,
      pathOffset: 1
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      pathOffset: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        opacity: { duration: 0.5 }
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2.5 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900"
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center mb-8"
        >
          {letters.map((letter, index) => (
            <motion.svg
              key={index}
              className="w-16 h-24 md:w-24 md:h-32 lg:w-32 lg:h-48"
              viewBox="0 0 80 100"
              variants={child}
            >
              <defs>
                <linearGradient 
                  id={`gradient-${index}`} 
                  x1="0%" 
                  y1="0%" 
                  x2="100%" 
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#60A5FA" />
                  <stop offset="50%" stopColor="#A855F7" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
              </defs>
              <motion.path
                d={letterPaths[letter]}
                fill="none"
                strokeWidth="3"
                stroke={`url(#gradient-${index})`}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, pathOffset: 1 }}
                animate={{ pathLength: 1, pathOffset: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
              />
            </motion.svg>
          ))}
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 200 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
        />

        <div className="w-64 mt-8">
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-200 bg-purple-500/20">
                  Loading
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-purple-200">
                  {progress}%
                </span>
              </div>
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className="h-2 relative bg-purple-500 rounded-full"
            >
              <div className="absolute -inset-1 bg-purple-500/20 blur-sm rounded-full" />
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -z-10 w-48 h-48 md:w-64 md:h-64 bg-purple-500/30 rounded-full blur-[100px]"
        />
      </div>
    </motion.div>
  );
};

const letterPaths = {
  'H': "M20 20C20 20,20 80,20 80C35 80,50 80,50 80C50 65,50 35,50 20M20 50C20 50,50 50,50 50",
  'E': "M20 20C20 35,20 65,20 80C30 80,40 80,50 80M20 20C30 20,40 20,50 20M20 50C25 50,35 50,45 50",
  'S': "M50 25C50 10,20 10,20 25C20 40,50 45,50 60C50 75,20 75,20 60",
  'A': "M20 80C25 60,35 20,35 20C35 20,45 60,50 80M25 50C25 50,45 50,45 50",
  'R': "M20 20C20 35,20 65,20 80M20 20C35 20,45 20,50 25C55 30,55 35,50 40C45 45,35 45,20 45C30 45,40 45,45 50C50 55,55 70,60 80",
} as const;

export default LoadingScreen;