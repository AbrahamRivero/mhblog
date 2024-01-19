import { HiUser, HiAtSymbol, HiOutlineKey } from 'react-icons/hi2'
import google from '@/public/imgs/google.png'
import AuthInput from './components/AuthInput'
import Image from 'next/image'
import Link from 'next/link'
import { SIGN_IN_URL, SIGN_UP_URL } from '@/app/lib/links'
import AnimationWrapper from '../../AnimationWrapper/AnimationWrapper'

type Props = {
	type: string
}

const AuthForm = ({ type }: Props) => {
	return (
		<AnimationWrapper keyValue={type}>
			<section className="h-cover flex items-center justify-center">
				<form className="w-[80%] max-w-[400px]" action="">
					<h1 className="text-4xl font-gelasio capitalize text-center mb-24">
						{type === 'sign-in' ? 'Bienvenido de vuelta' : 'Únete a la caza'}
					</h1>

					{type !== 'sign-in' ? (
						<AuthInput
							name="fullname"
							type="text"
							placeholder="Full Name"
							icon={<HiUser className="input-icon" />}
						/>
					) : null}
					<AuthInput
						name="email"
						type="email"
						placeholder="Email"
						icon={<HiAtSymbol className="input-icon" />}
					/>
					<AuthInput
						name="password"
						type="password"
						placeholder="Password"
						icon={<HiOutlineKey className="input-icon" />}
					/>

					<button className="btn-dark center mt-14" type="submit">
						{type === 'sign-in' ? 'Acceder' : 'Registrarse'}
					</button>

					<div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold">
						<hr className="w-1/2 border-black" />
						<p>o</p>
						<hr className="w-1/2 border-black" />
					</div>

					<button className="btn-dark flex items-center justify-center gap-4 w-[90%] center">
						<Image src={google} alt="googleIcon" className="w-5" />
						Continuar con Google
					</button>

					{type === 'sign-in' ? (
						<p className="mt-6 text-dark-grey text-xl text-center">
							Aún no te unes?{' '}
							<Link
								href={SIGN_UP_URL}
								className="underline text-black text-xl ml-1"
							>
								Registrate
							</Link>
						</p>
					) : (
						<p className="mt-6 text-dark-grey text-xl text-center">
							Ya eres miembro del gremio?{' '}
							<Link
								href={SIGN_IN_URL}
								className="underline text-black text-xl ml-1"
							>
								Accede
							</Link>
						</p>
					)}
				</form>
			</section>
		</AnimationWrapper>
	)
}

export default AuthForm
