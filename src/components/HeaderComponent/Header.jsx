import './Header.css'
import Topbar from '../TopBarComponent/Topbar';
import toro from '/headerImages/toromobile1.png'
import momiji from '/headerImages/momijimobile1.png'

function Header(){

    return(
        <div
  className="header-div"
  style={{
    backgroundImage: `url(${toro}), url(${momiji})`,
    backgroundPosition: 'left center, right center',
    backgroundRepeat: 'no-repeat, no-repeat',
    backgroundSize: 'auto 100%, auto 100%',
  }}
>
            
                <img src="logoTitle.png" alt="" />
            
                <Topbar/>
        </div>
    )
}
export default Header;