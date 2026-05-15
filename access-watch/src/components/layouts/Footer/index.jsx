import LogoIcon from "../../../assets/logoicon.png";
function Footer(){

    return (
        <footer>
          <div className="flex flex-wrap bg-gray-800 items-center justify-between md:justify-ceenter p-4">
            <div className="base-1/2 mx-auto md:mx-0">
               <img src={LogoIcon} alt="Logofooter" className="max-h-[50px] rounded-lg"/>
             </div>
            <div className="base-1/2 md:text-right text-center pt-2 w-full md:w-auto text-white opacity-75">
                Copyright {new Date().getFullYear()} Access Watch. All rights reserved.
            </div>
          </div>
        </footer>
    )
}

export default Footer;