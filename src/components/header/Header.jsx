import menu from "../../image/menu-svgrepo-com.svg";
import search from "../../image/search-svgrepo-com.svg";
import cart from "../../image/cart-shopping-svgrepo-com.svg";
function Header() {
  return (
    <header className="bg-mybg p-4 w-full flex items-center justify-between fixed top-0
    left-0 z-[100] drop-shadow-header-shadow" >
      {/*header left */}
      <div className="flex items-center">
        <img src={menu} alt="menu" className="w-6 h-6 object-contain cursor-pointer"/>
        <h1 className="ml-2 text-sm font-bold">
          <span className="text-[#eb9191]">E-Commerce</span> site
        </h1>
        <div className="overflow-hidden ml-2 flex items-center rounded-full bg-[#f2eaea]">
            <input type="text" placeholder="search...." className="ml-2 outline-none p-2 font-semibold text-sm  w-[200px] bg-inherit" />
            <img src={search} alt="searchbar" className="mr-2 w-6 h-6 object-contain cursor-pointer"/>
        </div>
      </div>
      {/*header right */}
      <div>
        <img src={cart} alt="cart" className="w-6 h-6 object-contain cursor-pointer"/>
      </div>
    </header>
  );
}

export default Header;
