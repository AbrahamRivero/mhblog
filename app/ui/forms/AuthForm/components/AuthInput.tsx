'use client'
import { ReactNode, useState } from 'react'
import { HiEye, HiEyeSlash } from 'react-icons/hi2'

type Props = {
	name: string
	type: any
	value?: any
	placeholder: string
	id?: any
	icon: ReactNode
}

const AuthInput = ({ name, type, value, placeholder, id, icon }: Props) => {
	const [passwordVisible, setPasswordVisible] = useState(false)
	return (
		<div className="relative w-[100%] mb-4">
			<input
				id={id}
				name={name}
				type={type === 'password' && passwordVisible ? 'text' : type}
				placeholder={placeholder}
				defaultValue={value}
				className="input-box "
			/>
			{icon}

			{type === 'password' ? (
				passwordVisible ? (
					<HiEyeSlash
						className="input-icon left-[auto] right-4 cursor-pointer"
						onClick={() => setPasswordVisible(false)}
					/>
				) : (
					<HiEye
						className="input-icon left-[auto] right-4 cursor-pointer"
						onClick={() => setPasswordVisible(true)}
					/>
				)
			) : null}
		</div>
	)
}

export default AuthInput
