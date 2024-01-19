'use client'
import { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type Props = {
	children: ReactNode
	initial?: any
	animate?: any
	transition?: any
	keyValue: any
	className?: string
}

const AnimationWrapper = ({
	keyValue,
	children,
	initial = { opacity: 0 },
	animate = { opacity: 1 },
	transition = { duration: 1 },
	className,
}: Props) => {
	return (
		<motion.div
			initial={initial}
			animate={animate}
			transition={transition}
			key={keyValue}
			className={className}
		>
			{children}
		</motion.div>
	)
}

export default AnimationWrapper
