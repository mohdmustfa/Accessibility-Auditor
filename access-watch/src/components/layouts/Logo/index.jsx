
import LogoTrans from '../../../assets/logoTrans.png';
import { Link } from "react-router-dom";
function BrandLogo() {
  return (
    <div className="flex items-center space-x-2">
        <Link to="/">
            <img src={LogoTrans} alt="Access Watch Logo" className='max-w-[190px]'/>
        </Link>
    </div>
  );
}
export default BrandLogo;