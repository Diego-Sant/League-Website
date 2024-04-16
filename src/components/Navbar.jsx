import { localeImg, lolImg, searchImg } from "../utils"
import { navLists } from "../constants"
import { IoMdArrowDropdown } from "react-icons/io"
import { MdArrowOutward } from "react-icons/md"

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={lolImg} alt="League of Legends" width={50} height={50}/>
      
        <div className="flex flex-1 justify-center max-xl:hidden">
          {navLists.map((nav) => (
            <div key={nav} className="flex px-5 text-sm cursor-pointer font-semibold hover:text-white/80 mt-4">
              {nav}
              {nav === 'NOTÍCIAS' && <IoMdArrowDropdown color="#ccc" className="mt-1" />}
              {nav === 'COMUNIDADE' && <IoMdArrowDropdown color="#ccc" className="mt-1" />}
              {nav === 'ESPORTS' && <MdArrowOutward color="#ccc" />}
              {nav === 'UNIVERSO' && <MdArrowOutward color="#ccc" />}
              {nav === 'SUPORTE' && <MdArrowOutward color="#ccc" />}
              {nav === 'MAIS' && <IoMdArrowDropdown color="#ccc" className="mt-1" />}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-4 max-xl:justify-end max-xl:flex-1 mt-2">
          <img src={searchImg} alt="Pesquisar" width={27} height={27} className="bg-gray-200/40 hover:bg-gray-200/60 rounded-lg p-1" />
          <img src={localeImg} alt="Idioma" width={23} height={23} className="pb-1.5 hover:bg-gray-200/40 rounded-lg"/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
