import { navigation } from "@/data/navigation";
import { TbHome } from "react-icons/tb";

function Nav() {
  return (
    <nav className="hidden w-full bg-[#464646] px-4 py-2.5 text-white lg:block 2xl:px-0">
      <div className="mx-auto flex w-full items-center lg:max-w-355">
        <TbHome size={28} />
        <ul className="flex w-full items-center justify-around">
          {navigation.map((d) => (
            <li key={d.label}>{d.label}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
