import React from "react";
import Image from "next/image";
import Link from "next/link";
import { auth, signOut, signIn } from "@/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            width={144}
            height={30}
            alt="Logo"
            className="cursor-pointer"
          />
        </Link>
        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <React.Fragment>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>
              <form action={async () => {
                "use server";
                await signOut({redirectTo: "/"});
              }}>
                <button type="submit">Logout</button>
              </form>
              <Link href={`/user/${session?.user?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </React.Fragment>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
