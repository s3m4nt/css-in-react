import styled, { css, keyframes }  from 'styled-components'

// import './Nav.css'

const fade = keyframes`
    0% {
        opacity: 0;
    }
    25% {
        opacity: .5;
    }
    50% {
        opacity: .65;
    }
    100% {
        opacity: 1;
    }
`

const NavHolder = styled.nav`
    border: 1px solid white;
    color: white;
    text-align: center;
    animation: ${fade} 5s linear infinite;
`

const Header = styled.h1`
    color: lightblue;
    font-size: 35px
`

const PinkHeader = styled(Header)`
    color: lightpink;
`



export default function Nav() {
    return(
        <div>
            <NavHolder>
                <Header style={{'fontSize': '58px'}}>Hello!</Header>
                <PinkHeader style={{'fontSize': '12px'}}>Hello AGAIN!</PinkHeader>
            </NavHolder>
        </div>
    )
}