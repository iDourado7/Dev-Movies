import { useState } from 'react'
import Logo from '../../assets/logo.png'
import { Container, Li, Menu } from './styles'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
 

export default function Header() {
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const [changeHeader, setChangeHeader] = useState(false)

    useEffect(() => {
        function handleScroll() {
            setChangeHeader(window.pageYOffset > 400)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // window.onscroll = () => {
        
    //      (window.pageYOffset > 400 ? setChangeHeader(true) : setChangeHeader(false))
    //  }

    return (
            <Container $changeHeader={changeHeader}>

                 <img src={Logo} alt='header-logo' onClick={() => navigate('/')}/>
                <Menu>
                    <Li $active={pathname === '/'}>
                        <Link to='/'>Home</Link>
                    </Li>

                    <Li $active={pathname.includes('filme')}>
                         <Link to='/filmes'>Filmes</Link>
                    </Li>

                    <Li $active={pathname.includes('/series')}>
                          <Link to='/series'>Séries</Link>
                    </Li>
                </Menu>
            </Container>
    )
}