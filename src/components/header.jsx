import { Header } from '../styles'
import EBACLogo from '../../src/assets/EBAC-logo.png'

const Head = () => {
    return (
        <Header>
            <img src={EBACLogo} />
            <h1>PROYECTO REDUX ASÍNCRONO</h1>
        </Header>
    )
}

export default Head
