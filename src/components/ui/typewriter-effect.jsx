'use client';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { cn } from '../../lib/utils';

export const TypewriterEffectSmooth = ({ 
  words, 
  className, 
  cursorClassName,
  cursorColor = 'bg-neutral-600',
  cursorHeight = 'h-10',
  textClassName = 'text-4xl font-bold',
  duration = 2,
  delay = 1
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Combine all words into a single string with spaces
  const combinedText = words.map(word => word.text).join(' ');
  
  // Get the combined class names (prioritizing the last word's className)
  const combinedClassName = words.length > 0 ? words[words.length - 1].className : '';

  return (
    <div ref={ref} className={cn('flex space-x-1 my-6', className)}>
      {isInView && (
        <>
          <motion.div
            className="overflow-hidden whitespace-nowrap"
            initial={{ width: '0%' }}
            animate={{ width: 'fit-content' }}
            transition={{ 
              duration: duration, 
              ease: 'linear', 
              delay: delay 
            }}
          >
            <div className={cn(textClassName, combinedClassName, 'inline-flex')}>
              {combinedText}
            </div>
          </motion.div>
          <span className={cn(
            'block w-1 animate-pulse',
            cursorHeight,
            cursorColor,
            'dark:bg-neutral-300',
            cursorClassName
          )} />
        </>
      )}
    </div>
  );
};