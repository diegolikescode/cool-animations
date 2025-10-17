import { useState } from 'react'
import logo from '../../assets/alien.svg'

export default function LoginPanel() {
    const [showPwd, setShowPwd] = useState(false)

    return (
        <section
            className={`w-2/5 h-full flex flex-col items-center bg-bg rounded-xl py-10`}
        >
            <img src={logo} className={`w-40 h-40`} />
            <h1 className={`text-4xl`}>Welcome back!</h1>
            <span className={`pt-4 text-secondaryAccent text-md italic`}>
                Please enter your details
            </span>

            <form
                className="mt-16 space-y-6 w-3/5"
                onSubmit={(e) => {
                    e.preventDefault()
                    console.log('submited!')
                }}
            >
                <div className="group">
                    <label
                        htmlFor="email"
                        className="block text-md text-highlight"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="w-full bg-transparent border-0 border-b border-muted/60 focus:border-accent focus:outline-none py-3 text-xl leading-3 placeholder:text-muted/70"
                        placeholder="you@example.com"
                    />
                </div>

                <div className="group">
                    <label
                        htmlFor="password"
                        className="block text-md text-highlight"
                    >
                        Password
                    </label>
                    <div className="relative">
                        <input
                            id="password"
                            name="password"
                            type={showPwd ? 'text' : 'password'}
                            autoComplete="current-password"
                            required
                            className="w-full bg-transparent border-0 border-b border-muted/60 focus:border-accent focus:outline-none py-3 text-xl leading-3 placeholder:text-muted/70"
                            placeholder="••••••••"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPwd((v) => !v)}
                            aria-label={
                                showPwd ? 'Hide password' : 'Show password'
                            }
                            className="absolute inset-y-0 right-0 grid place-items-center px-2 text-muted hover:text-fg/80"
                        >
                            {/* eye icon */}
                            {showPwd ? (
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M3 3l18 18"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M10.58 10.58A3 3 0 0012 15a3 3 0 002.42-4.42M2.46 12.46C4.5 7.5 8 5 12 5c4 0 7.5 2.5 9.54 7.46-.43 1.03-1 1.98-1.7 2.82M6.12 6.12A13.5 13.5 0 002.46 12.46M17.88 17.88A13.5 13.5 0 0119.84 15.28"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M2.46 12.46C4.5 7.5 8 5 12 5s7.5 2.5 9.54 7.46C19.5 17.5 16 20 12 20S4.5 17.5 2.46 12.46z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />
                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="3"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                    <label className="inline-flex items-center gap-2 select-none">
                        <input
                            type="checkbox"
                            name="remember"
                            className="h-4 w-4 rounded border-muted/60 text-fg focus:ring-0"
                            defaultChecked
                        />
                        <span className="text-muted">Remember for 30 days</span>
                    </label>
                    <a href="#" className="text-muted hover:text-fg/90">
                        Forgot password?
                    </a>
                </div>

                {/* Primary button */}
                <button
                    type="submit"
                    className="h-12 w-full rounded-full bg-black text-white font-bold transition-colors duration-500 ease-in-out hover:bg-accent hover:cursor-pointer"
                >
                    Log In
                </button>

                <button
                    type="button"
                    className="h-12 w-full rounded-full bg-fg/10 text-fg border border-black/10 flex items-center justify-center gap-3 hover:bg-fg/15 transition-colors hover:cursor-pointer"
                >
                    <GoogleGlyph />
                    <span className={`font-bold`}>Log in with Google</span>
                </button>
            </form>

            <span
                className={`mt-auto text-lg pb-2 hover:underline hover:cursor-pointer`}
            >
                Don't have an account? <b>Sign Up</b>
            </span>
        </section>
    )
}

function GoogleGlyph() {
    return (
        <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
            <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.72 1.22 9.22 3.6l6.9-6.9C35.9 2.3 30.47 0 24 0 14.62 0 6.53 5.38 2.56 13.2l8.87 6.89C13.17 13.63 18.11 9.5 24 9.5z"
            />
            <path
                fill="#4285F4"
                d="M46.5 24.5c0-1.62-.15-3.17-.43-4.67H24v9.08h12.7c-.55 2.97-2.21 5.48-4.72 7.18l7.2 5.58C43.91 37.46 46.5 31.66 46.5 24.5z"
            />
            <path
                fill="#FBBC05"
                d="M11.43 28.09A14.5 14.5 0 019.5 24c0-1.43.25-2.8.7-4.09l-8.87-6.9A23.95 23.95 0 000 24c0 3.87.93 7.53 2.56 10.8l8.87-6.71z"
            />
            <path
                fill="#34A853"
                d="M24 48c6.47 0 11.9-2.13 15.87-5.84l-7.2-5.58c-2.01 1.35-4.6 2.17-8.67 2.17-5.89 0-10.83-4.12-12.57-9.58l-8.87 6.71C6.53 42.62 14.62 48 24 48z"
            />
        </svg>
    )
}
