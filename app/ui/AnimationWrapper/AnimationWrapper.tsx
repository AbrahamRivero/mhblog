import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const AnimationWrapper = ({ children }: Props) => {
	return <div>{children}</div>
}

export default AnimationWrapper
