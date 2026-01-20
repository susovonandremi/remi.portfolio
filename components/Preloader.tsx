"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

const words = ["Design", "Engineering", "Remi"];

export default function Preloader({ onComplete }: PreloaderProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    // Cycle through words every 0.2s
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => {
        if (prev === words.length - 1) {
          clearInterval(wordInterval);
          // Wait a bit after last word, then start exit animation
          setTimeout(() => {
            setIsVisible(false);
            // Re-enable scrolling and call onComplete after animation
            setTimeout(() => {
              document.body.style.overflow = "";
              onComplete();
            }, 800);
          }, 200);
          return prev;
        }
        return prev + 1;
      });
    }, 200);

    return () => {
      clearInterval(wordInterval);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentWordIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white"
            >
              {words[currentWordIndex]}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
