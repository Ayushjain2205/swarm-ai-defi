import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";

const Navbar = () => {
  const router = useRouter();

  const getLinkClasses = (path) => {
    return `flex text-[16px] font-[500] ${
      router.pathname.startsWith(path) ? "border-b-2 border-black" : ""
    }`;
  };

  // const client = createThirdwebClient({
  //   clientId: "8530f5ccc7898ddac732f3abad73f31a",
  // });

  return (
    <div className="flex flex-row justify-between items-center px-[30px] h-[78px] border-b-[2px] border-black">
      <div className="flex text-[24px] font-[700]">
        <Link href="/">Swarm.ai</Link>
      </div>
      <div className="flex flex-row items-center gap-[30px]">
        <Link href="/" className={getLinkClasses("/use")}>
          Use
        </Link>
        <Link href="/create" className={getLinkClasses("/create")}>
          Create
        </Link>
        <Link href="/myagents" className={getLinkClasses("/myagents")}>
          My Agents
        </Link>
        <div className="flex flex-row items-center gap-[5px]">
          <img className="h-[52px] w-[52px]" src="/swarm-coin.svg" alt="" />
          <span className="text-[16px] font-[700]">480</span>
        </div>
        {/* <ConnectButton client={client} /> */}
      </div>
    </div>
  );
};

export default Navbar;
