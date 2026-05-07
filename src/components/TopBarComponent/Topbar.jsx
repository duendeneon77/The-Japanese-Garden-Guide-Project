import './Topbar.css'
import { useState } from 'react';

function Topbar(){

    const [buttonMenu, setButtonMenu] = useState()

    function togleMenu(buttonToBeClicked){
        if(buttonMenu === buttonToBeClicked){
            setButtonMenu(null)
        }
        else{
            setButtonMenu(buttonToBeClicked)
        }

    }
    
    return(
    
    <div id="topbar-div">




                <div className='menu-container'onMouseLeave={() => setButtonMenu(null)}>
    
    <button onClick={() => togleMenu('indice')}>
        Índice
    </button>

    {buttonMenu === 'indice' ? (
        <div
            className="menu indice"
            onMouseLeave={() => setButtonMenu(null)}
        >
            <a href="#/history"><button className='btndrop'>História</button></a>
            <a href="#/species"><button className='btndrop'>Espécies</button></a>
            <a href="#/substitutes"><button className='btndrop'>Substitutas</button></a>
            <a href="#/project"><button className='btndrop'>O projeto</button></a>
        </div>
    ) : null}

</div>

        <div className='menu-container' onMouseLeave={() => setButtonMenu(null)}>
            <button onClick={()=>togleMenu('midia')}
            >Mídia</button>
            {buttonMenu === 'midia' ? (
                    <div className="menu midia">
                        
                        <a href="#/artigos"><button className='btndrop'>Artigos</button></a>
                        <a href="#/videos"><button className='btndrop'>Videos</button></a>
                        
                    </div>
            )
            :null}
        </div>


        
        <button>Login</button>
    </div>
    )
}
export default Topbar;