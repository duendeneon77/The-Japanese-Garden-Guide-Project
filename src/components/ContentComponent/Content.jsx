import './Content.css'
import { Link, useLocation } from 'react-router-dom'

function ContentComponent({children}){
    
    
    return(
        <div className="contentHome-div">
            {
            location.pathname !== '/'
            ? <Link to="/" className='goBackLink'><p id="goBack">← Inicio</p></Link>
            : null
            }

            {children}
            
        </div>
    )
}

export default ContentComponent