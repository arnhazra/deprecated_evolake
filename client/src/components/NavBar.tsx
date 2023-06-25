import { FC, Fragment, useEffect, useState } from 'react'
import { Container, Navbar, Nav, Form } from 'react-bootstrap'
import Link from 'next/link'
import Show from './Show'
import { useRouter } from 'next/router'

const NavBar: FC = () => {
    const router = useRouter()
    const [isAuthenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        if (localStorage.hasOwnProperty('accessToken')) {
            setAuthenticated(true)
        }

        else {
            setAuthenticated(false)
        }
    }, [router.pathname])

    return (
        <Fragment>
            <Show when={isAuthenticated}>
                <Navbar variant='dark' className='navbar' expand='lg' fixed='top'>
                    <Container>
                        <Link href='/dashboard'>
                            <Navbar.Brand>Dashboard</Navbar.Brand>
                        </Link>
                        <Navbar.Toggle></Navbar.Toggle>
                        <Navbar.Collapse>
                            <Nav className='ms-auto'>
                                <Link href='/pricing'><Navbar.Brand>Pricing</Navbar.Brand></Link>
                                <Link href='/analytics'><Navbar.Brand>Analytics</Navbar.Brand></Link>
                                <Link href='/usage'><Navbar.Brand>Usage</Navbar.Brand></Link>
                                <Link href='/subscription'><Navbar.Brand>Subscription</Navbar.Brand></Link>
                                <Link href='/wallet'><Navbar.Brand>Wallet</Navbar.Brand></Link>
                                <Link href='/account'><Navbar.Brand>Account</Navbar.Brand></Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Show>
            <Show when={!isAuthenticated}>
                <Navbar variant='dark' className='navbar' expand='lg' fixed='top'>
                    <Container>
                        <Link href='/'>
                            <Navbar.Brand>Lenstack</Navbar.Brand>
                        </Link>
                        <Navbar.Toggle></Navbar.Toggle>
                        <Navbar.Collapse>
                            <Nav className='ms-auto'>
                                <Link href='/product'><Navbar.Brand>Product</Navbar.Brand></Link>
                                <Link href='/pricing'><Navbar.Brand>Pricing</Navbar.Brand></Link>
                                <Link target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/arnhazra/'><Navbar.Brand>Developer</Navbar.Brand></Link>
                                <Link href='/identity'><Navbar.Brand>Get Started</Navbar.Brand></Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Show>
        </Fragment >
    )
}

export default NavBar