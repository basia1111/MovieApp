import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";

export const SearchField = () => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Search..." />
      <Button variant="ghost" type="submit">
        <Search />
      </Button>
    </div>
  );
};

const Header = () => {
  return (
    <div className="w-screen bg-bg-secondary py-4 md:px-8 px-4">
      <div className=" mx-auto flex flex-row justify-between items-center gap-4">
        <Link href="/" className="font-sans md:text-2xl text-l font-bold text-brand-primary line-br whitespace-nowrap">
          Movie App
        </Link>
        <SearchField />
      </div>
    </div>
  );
};

export default Header;
