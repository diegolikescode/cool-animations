import LoginPanel from './components/LoginPanel'

export default function AuthCharacters() {
    /*
        <div className="min-h-screen bg-bg text-fg grid place-items-center px-4">
        </div>
        */
    return (
        <div
            className={`bg-surface flex items-center w-full h-full p-4 text-white`}
        >
            <div className={`flex items-center justify-center w-3/5 h-full`}>
                ANIMATION DIV
            </div>
            <LoginPanel />
        </div>
    )
}
