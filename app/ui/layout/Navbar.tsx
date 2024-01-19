'use client'
import { useState } from 'react'
import { EDITOR_URL, HOME_URL, SIGN_IN_URL, SIGN_UP_URL } from '@/app/lib/links'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { HiMiniPencilSquare } from 'react-icons/hi2'
import Image from 'next/image'
import logo from '@/public/imgs/logo.png'
import Link from 'next/link'

const Navbar = () => {
	const [searchBoxVisibility, setSearchBoxVisibility] = useState(false)

	return (
		<nav className="navbar">
			<Link href={HOME_URL} className="flex-none w-10">
				<Image src={logo} alt="logo" className="w-full" />
			</Link>
			<div
				className={`absolute bg-white w-full left-0 top-full mt-0.! border-b border-grey py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:show ${
					searchBoxVisibility ? 'show' : 'hide'
				}`}
			>
				<input
					type="text"
					placeholder="Search"
					className="w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-dark-grey md:pl-12"
				/>
				<HiMagnifyingGlass className="absolute right-[12%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey" />
			</div>
			<div className="flex items-center gap-3 md:gap-6 ml-auto">
				<button
					className="md:hidden bg-grey w-12 h-12 rounded-full flex items-center justify-center"
					onClick={() => setSearchBoxVisibility(currentVal => !currentVal)}
				>
					<HiMagnifyingGlass className="text-xl" />
				</button>

				<Link
					href={EDITOR_URL}
					className="hidden md:flex gap-2 link items-center"
				>
					<HiMiniPencilSquare />
					<p className="text-xl">Escribir</p>
				</Link>

				<Link href={SIGN_IN_URL} className="btn-dark py-2">
					Acceder
				</Link>

				<Link href={SIGN_UP_URL} className="btn-light py-2 hidden md:block">
					Registrarse
				</Link>
			</div>
		</nav>
	)
}

export default Navbar
