import { useState } from "react";
import Input from "./Input";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="bg-[#2b2b2b] w-full flex flex-col justify-start items-center relative overflow-hidden md:flex-row sticky top-0 z-50">
        {/* عنوان */}
        <div className="p-5 md:flex md:flex-row md:justify-start md:items-center gap-[15px] md:w-[70%]">
          <h1 className="text-5xl bg-gradient-to-r from-cyan-500 via-pink-500 to-orange-500 text-transparent bg-clip-text font-extrabold cursor-pointer whitespace-nowrap text-center md:translate-y-[-2px] md:text-4xl">
            Test Project
          </h1>

          <Input
            type="text"
            id="search"
            placeholder="search"
            className="bg-gradient-to-r from-cyan-400 via-pink-500 to-orange-500  text-center rounded-[15px] outline-hidden p-[10px] box-border w-[100%] hidden md:block "
          />

        </div>

        <div className="md:w-[30%] hidden md:block">
          <ul className="flex flex-row justify-center items-center text-gray-200 gap-[10%] text-[16px] font-bold">
            <li className="cursor-pointer hover:text-pink-500 transition duration-600">Home</li>
            <li className="cursor-pointer hover:text-pink-500 transition duration-600">About</li>
            <li className="cursor-pointer hover:text-pink-500 transition duration-600">Community</li>
          </ul>
        </div>

        {/* دکمه منو */}
        <div className="w-full flex justify-between px-4 mb-[15px] mt-[18px] md:hidden">
          <button
            onClick={openMenu}
            className="w-10 h-10 flex flex-col justify-center items-center gap-[5px] border-2 border-white p-[6px] rounded-lg cursor-pointer md:hidden"
          >
            <div className="bg-white w-6 h-[2px]" />
            <div className="bg-white w-6 h-[2px]" />
            <div className="bg-white w-6 h-[2px]" />
          </button>

          <Input
            type="text"
            id="search"
            placeholder="search"
            className="bg-gradient-to-r from-cyan-400 via-pink-500 to-orange-500 w-[60%] text-center rounded-[15px] outline-hidden md:hidden"
          />
        </div>

        {/* منو اسلایدی با انیمیشن */}
        <div
          className={`
            fixed top-0 left-0 h-screen w-[60vw] max-w-xs z-30 bg-[#2b2b2b]
            transform transition-transform duration-500 ease-in-out shadow-2xl shadow-black 
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
          p-[10px] box-border md:hidden`}
        >
          {/* نوار بالای منو */}
          <div className="w-full flex flex-row justify-between items-center px-4 border-b-2 border-b-gray-600 p-[10px] box-border md:hidden">
            <h2 className="font-bold text-white md:hidden">Menu</h2>
            <button onClick={closeMenu} className="text-xl cursor-pointer md:hidden">
              &#10060;
            </button>
          </div>

          {/* لینک‌ها */}
          <nav className="p-4 flex flex-col gap-4 text-white md:hidden">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Community</a>
          </nav>
        </div>

        {/* لایه تار پشت منو برای کلیک خارج از منو */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-70 z-20"
            onClick={closeMenu}
          />
        )}
      </header>
    </>
  );
}
