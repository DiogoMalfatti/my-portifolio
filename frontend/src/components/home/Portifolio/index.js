import React from 'react'
import { PortifolioStyle } from './style'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PortifolioSection = () => {
  return (
    <PortifolioStyle>
      <h2>Portifólio</h2>
      <p>
        Na seção Portifólio você vai encontar os projetos que criei e trabalhos
        que participei bem como as linguagens, bibliotecas e frameworks usados.
      </p>
      <p>
        Nos cards dos projetos vai existir um ícone do github no qual você pode
        olhar o código fonte do projeto.
      </p>
      <p>
        Em alguns deles pode exitir também um ícone de youtube onde eu tenho um
        vídeo comentando sobre o projeto.
      </p>
      <div>
        card destaque
        <FontAwesomeIcon icon={faGithubSquare} size="4x" />
      </div>
      <div>cards caroussel</div>
      <button>Portifólio</button>
    </PortifolioStyle>
  )
}

export default PortifolioSection
