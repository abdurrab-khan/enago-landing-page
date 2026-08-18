import { navigation } from "@/data/navigation";
import { IoChevronDown } from "react-icons/io5";
import { TbHome } from "react-icons/tb";

const NavBtn = ({ label, items }: (typeof navigation)[0]) => {
  return (
    <li
      key={label}
      className="group relative flex cursor-pointer items-center gap-x-4 text-lg transition-all hover:font-semibold hover:text-[#fec043]"
    >
      {label}
      <IoChevronDown />
      <div className="absolute top-[calc(100%+10px)] right-1/2 z-20 hidden min-h-28 min-w-72 translate-x-1/2 rounded-b-xl border border-gray-400/40 bg-white shadow group-hover:block">
        {!items.length ? (
          <span className="flex items-center justify-center text-gray-400/70">
            No Links
          </span>
        ) : (
          <></>
        )}
      </div>
    </li>
  );
};

function Nav() {
  return (
    <nav className="hidden w-full bg-[#464646] px-4 py-2.5 text-white lg:block 2xl:px-0">
      <div className="mx-auto flex w-full items-center lg:max-w-355">
        <TbHome size={28} />
        <ul className="flex w-full flex-wrap items-center justify-around gap-y-2">
          {navigation.map((d) => (
            <NavBtn key={d.label} {...d} />
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
