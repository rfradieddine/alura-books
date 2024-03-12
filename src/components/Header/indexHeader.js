import Opcoes from '../OpcoesHeader/indexOpcoes'
import Logo from '../LogoHeader/indexLogo'
import Icons from '../IconesHeader/indexIcons'
import styled from 'styled-components'

const HeaderContainer = styled.header`

  background-image: linear-gradient(90deg, #ffffff 35%, #819db1);
  display: flex;
  justify-content: center;

`

function Header (){
    return(
        <HeaderContainer>
        <Logo/>
        <Opcoes/>
        <Icons/>
      </HeaderContainer>
    )
}

export default Header;