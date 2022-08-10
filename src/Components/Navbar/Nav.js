import React from 'react'
import './Nav.css'
import logo from './netflix.png'
import user from './download.png'

export default function Nav () {
    const [isDark, setIsDark] = React.useState(false)
    React.useEffect(() => {
        window.addEventListener ('scroll', () => {
            if(window.scrollY > 100){
                setIsDark(true)
            }else setIsDark(false)
        });
        return () => {
            window.removeEventListener('scroll', setIsDark)
        }
    }, [])
    return (
        <nav className={`nav ${isDark && 'nav__black'}`} >
            <div className='logo__full'>
                <h2>NOT- </h2><img className='nav__logo' src={logo} alt='Netflix Logo'/>
            </div>
            <img className='nav__avatar' src={user} alt='Logged In' />
        </nav>
    )
}