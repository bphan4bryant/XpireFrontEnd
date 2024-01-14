import '../pages/Login.css'

function LandingBg({ children }: { children: JSX.Element[] | JSX.Element }) {
    return (
        <div className='Login-background'>
            <div className="Login-box-container">
                <div className="Login-box">
                    {children}
                </div>
            </div>
        </div >
    )
}

export default LandingBg
