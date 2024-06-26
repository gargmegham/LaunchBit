"use client"

import React from "react"

import { cn } from "@/libs/cn"
import { motion } from "framer-motion"

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
    const rows = new Array(150).fill(1)
    const cols = new Array(100).fill(1)
    let colors = ["--amber-200", "--amber-300", "--amber-400", "--amber-500", "--amber-600", "--amber-700"]
    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)]
    }

    return (
        <div
            className={cn(
                "absolute left-1/4 p-4 -top-1/4 flex  -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 ",
                className
            )}
            {...rest}
        >
            {rows.map((_, i) => (
                <motion.div key={`row` + i} className="size-8  border-l  border-neutral-700/30 relative">
                    {cols.map((_, j) => (
                        <motion.div
                            whileHover={{
                                backgroundColor: `var(${getRandomColor()})`,
                                opacity: 0.1,
                                transition: { duration: 0 },
                            }}
                            animate={{
                                transition: { duration: 2 },
                            }}
                            key={`col` + j}
                            className="size-8  border-r border-t border-neutral-700/30 relative"
                        >
                            {j % 2 === 0 && i % 2 === 0 ? (
                                <svg
                                    xmlns="http://www.w3.org/3000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="absolute h-6 w-10 -top-[14px] -left-[22px] text-neutral-700/30 stroke-[1px] pointer-events-none"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                                </svg>
                            ) : null}
                        </motion.div>
                    ))}
                </motion.div>
            ))}
        </div>
    )
}

export const Boxes = React.memo(BoxesCore)
