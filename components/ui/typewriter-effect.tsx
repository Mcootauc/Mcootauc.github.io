"use client"

import { cn } from "@/lib/utils"
import { motion, useAnimate } from "framer-motion"
import { useEffect, useState } from "react"

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}) => {
  const [scope, animate] = useAnimate()
  const [displayedCharCount, setDisplayedCharCount] = useState(0)

  useEffect(() => {
    const animateText = async () => {
      const textSpans = scope.current.querySelectorAll(".char")

      // Reset all characters to invisible
      await animate(textSpans, { opacity: 0 }, { duration: 0 })

      // Animate each character one by one
      for (let i = 0; i < textSpans.length; i++) {
        await animate(textSpans[i], { opacity: 1 }, { duration: 0.1, delay: 0.05 })
        setDisplayedCharCount(i + 1)
      }
    }

    animateText()
  }, [animate, scope])

  return (
    <div className="text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center inline-block relative">
      <motion.div ref={scope} className="inline">
        {words.map((word, idx) => (
          <span key={`${word}-${idx}`} className={cn("text-accent", word.className)}>
            {word.text.split("").map((char, charIdx) => (
              <span key={`${char}-${charIdx}`} className={cn("char inline-block opacity-0", className)}>
                {char}
              </span>
            ))}
            <span className="char inline-block opacity-0">&nbsp;</span>
          </span>
        ))}
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className={cn("inline-block h-[1em] w-[2px] bg-primary ml-0.5 absolute", cursorClassName)}
        style={{
          left: `${displayedCharCount}ch`,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />
    </div>
  )
}

