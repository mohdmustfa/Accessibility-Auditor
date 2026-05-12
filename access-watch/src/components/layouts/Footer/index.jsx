import LogoIcon from "../../../assets/logoicon.png";
function Footer(){

    return (
        <footer>
          <div className="flex flex-wrap bg-gray-800 items-center justify-between p-4">
            <div className="base-1/2">
               <img src={LogoIcon} alt="Logofooter" className="max-h-[50px] rounded-lg"/>
             </div>
            <div className="base-1/2 text-right md:text-left pt-2">
                Copyright {new Date().getFullYear()} Access Watch. All rights reserved.
            </div>
          </div>
        </footer>
    )
}

export default Footer;