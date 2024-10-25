// services/client/FlipText.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

export function FlipText({ text, className }: { text: string; className?: string }) {
  const controls = useAnimationControls();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const flipInterval = setInterval(() => {
      setIsFlipping(true);
      controls.start({
        rotateX: [0, 90, 0],
        transition: {
          duration: 1.5,
          times: [0, 0.5, 1],
        },
      }).then(() => setIsFlipping(false));
    }, 5000);

    return () => clearInterval(flipInterval);
  }, [controls]);

  return (
    <div className="perspective-1000">
      <motion.span
        animate={controls}
        className={`inline-block origin-bottom ${className}`}
        style={{ backfaceVisibility: 'hidden' }}
      >
        {text}
      </motion.span>
    </div>
  );
}