import React, { useContext } from 'react'
import { Link} from 'react-router-dom';
import Context from '../../CharactersContext'
import { CharactersContextInterface } from '../../types'
import './Main.css';

const NilouBloom = () => {

  const {NilouBloom} = useContext(Context) as CharactersContextInterface
  const {handleClick} = useContext(Context) as CharactersContextInterface

  return (
    <Link to='./NilouBloom' id="teamsWrapper" onClick={() =>  handleClick(NilouBloom)}>
            <Link to='./NilouBloom' onClick={() => handleClick(NilouBloom)}>Nilou Bloom</Link>
            {NilouBloom.map((d,i) => (
              <div className="characterCard" key={i}>
                <img src={d.data.icon} alt={d.data.name} />
                <img src={d.data.element_i} alt={d.data.name} />
                <div className="backgroundGradient" style={{background: `${d.data.gradient}`}} ></div>
              </div>
            ))}
    </Link>
  )
}

export default NilouBloom