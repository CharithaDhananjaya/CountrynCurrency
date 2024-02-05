//import { useState } from "react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";

import { Button } from "../../components/ui/button";

import Logo from "../../components/customized/Logo";
import SearchBar from "../../components/customized/SearchBar";
import CountryList from "../../components/customized/CountryList";

function UserPage() {
  return (
    <>
      <div className="flex flex-col w-screen h-screen px-8 py-8">
        <div className="flex flex-col w-full h-full">
          {/* NavBar Element */}
          <div className="flex flex-row items-center justify-end sm:justify-between">
            <Logo />
            {/* User Avatar and Name - Button with a Dropdown */}
            <Button className="flex flex-row items-center gap-2 h-fit w-fit px-4 py-2.5 rounded-xl bg-transparent text-black font-normal hover:bg-gray-100 focus:bg-gray-100 focus:border focus:border-gray-300">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="hidden sm:block">Charitha Dhananjaya</span>
            </Button>
          </div>

          {/* Page Section */}
          <section className="flex flex-row w-full h-full gap-2 px-8 py-8 sm:gap-16 sm:flex-row">
            <div className="flex-col hidden w-full gap-2 px-2 py-4 sm:flex sm:w-4/12">
              <SearchBar></SearchBar>
            </div>
            <div className="flex flex-col w-full gap-2 px-2 py-4 sm:w-8/12">
              <div className="flex flex-col p-0.5 gap-1  w-full h-full">
                <CountryList></CountryList>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default UserPage;
