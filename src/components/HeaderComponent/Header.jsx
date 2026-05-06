import './Header.css'
import Topbar from '../TopBarComponent/Topbar';

function Header(){

    return(
        <div className="header-div">
            
                <img src="logoTitle.png" alt="" />
            
                <Topbar/>
        </div>
    )
}
export default Header;