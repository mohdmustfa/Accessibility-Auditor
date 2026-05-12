import BrandLogo from "../Logo";

function Header() {
  return (
    <header className="bg-white text-white px-4 py-2">
      <div className="container mx-auto">
         <div className="flex items-center justify-between">
            <div className="base-1/4">
               <BrandLogo />
            </div>
            <div className="base-1/8">
                <nav>
                    <ul className="flex space-x-4">
                    <li><a href="/" className="text-gray-900 hover:text-blue-800">Home</a></li>
                    <li><a href="/about" className="text-gray-900 hover:text-blue-800">About</a></li>
                    </ul>
                </nav>
                </div>
            </div>
        </div>
    </header>
  );
}
export default Header;