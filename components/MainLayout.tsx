import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import SideNavigation from "./SideNavigation";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import NavigationHeading from "./NavigationHeading";


interface MainLayoutProps {
  children: ReactNode;
}

export default async function MainLayout({ children }: MainLayoutProps) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    await supabase.auth.signOut();
    return redirect("/login");
  };

  if (!user) {
    return redirect("/login");
  }

  return (
    <main className="flex">
      <SideNavigation />
      <section className="w-full">
        <header className="p-3 fixed z-10 left-60 bg-white border-b right-0">
          <div className="container flex justify-between items-center">
            <div>
              <NavigationHeading />
            </div>
            <div className="flex gap-6 justify-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant={"outline"}><PlusIcon className="mr-2"/> Create</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40" align="end">
                  <Link href={"/admin/projects/create"}>
                    <DropdownMenuItem className="text-gray-500 cursor-pointer">
                      Project
                    </DropdownMenuItem>
                  </Link>
                  <Link href={"/admin/blogs/create"}>
                    <DropdownMenuItem className="text-gray-500 cursor-pointer">
                      Blog
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>
                      {user?.email && user.email[0]}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <DropdownMenuItem className="text-gray-500">
                    {user.email}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <form action={signOut}>
                    <button className="py-2 px-2 text-sm block hover:bg-gray-100 rounded-md no-underline bg-btn-background w-full text-left">
                      Logout
                    </button>
                  </form>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>
        <div className="absolute left-60 right-0 bottom-0 top-24 right-5">
          <div className="container">
            {children}
          </div>
        </div>
        {/* <div className="p-5 mt-20 max-w-6xl ml-auto mr-auto w-1/2"></div> */}
      </section>
    </main>
  );

  // return user ? (
  //   <div className="flex items-center gap-4">
  //     Hey, {user.email}!
  //     <form action={signOut}>
  //       <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
  //         Logout
  //       </button>
  //     </form>
  //   </div>
  // ) : (
  //   <Link
  //     href="/login"
  //     className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
  //   >
  //     Login
  //   </Link>
  // )
}
