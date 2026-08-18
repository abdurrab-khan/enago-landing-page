import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { IoChevronDownOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IconType } from "react-icons/lib";

const LinkButton = ({
  href,
  label,
  style,
  Icon,
}: {
  href: string;
  label: string;
  Icon: IconType;
  style?: string;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-sm border border-gray-400 p-2 shadow-md transition-shadow hover:shadow-lg lg:px-2 lg:py-3",
        style,
      )}
    >
      <span className="hidden lg:inline">{label}</span>
      <Icon className="inline lg:hidden" />
    </Link>
  );
};

const Logo = () => {
  return (
    <Link href={"/"} className="py-4">
      <Image
        height={48}
        width={48}
        alt="logo"
        loading="eager"
        src={"/enago-logo.svg"}
        className="h-8 w-auto sm:h-9 md:h-10 lg:h-12"
      />
    </Link>
  );
};

const Navigation = () => {
  return (
    <ul className="flex flex-wrap items-center gap-3 text-black">
      <li>
        <button className="flex items-center gap-2 rounded-full p-2 shadow-md lg:p-3">
          <FaHeadphonesSimple size={20} className="text-gray-600" />
          <span className="hidden lg:block">お問い合わせ</span>
          <IoChevronDownOutline size={18} />
        </button>
      </li>
      <li>
        <LinkButton href="/" label="マイページへログイン" Icon={CiLogin} />
      </li>
      <li>
        <LinkButton
          href="/"
          label="お見積もり・ご注文"
          style="bg-blue-500 text-white"
          Icon={CiShoppingCart}
        />
      </li>
    </ul>
  );
};

function Header() {
  return (
    <header className="mx-auto flex w-full items-center justify-between px-4 lg:max-w-355 2xl:p-0">
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;
