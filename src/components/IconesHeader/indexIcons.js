import sacola from '../../img/sacola.svg'
import perfil from '../../img/perfil.svg'
import styled from 'styled-components'

const icons = [perfil, sacola]

const Icone = styled.li`

  margin-right: 20px;
  width: 25px;

`

const Icones = styled.ul`

  display: flex;
    cursor: pointer;
    align-items: center;

`

function Icons(){
    return(
        <Icones>
          {icons.map( (icone) => (
            <Icone><img src={icone} alt='icone'></img></Icone>
          ) ) }
        </Icones>
    )
}

export default Icons;