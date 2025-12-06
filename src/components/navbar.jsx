import { Anvil } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { getAuthSession } from "@/lib/auth";
import Image from "next/image";
import SignOut from "./signOut";

export function DropdownMenuDemo({ user }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image className="rounded-full cursor-pointer shadow-2xl shadow-gray-500" src={user.image} width={40} height={40} alt={user.name}/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>
            <Link href={`/my-account/${user.userName}`}>Hi, {user.name}</Link>
        </DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href={`/profile/${user.userName}`}>Profile</Link>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          {/* <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem> */}
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {/* <DropdownMenuItem>Team</DropdownMenuItem> */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          {/* <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem> */}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        {/* <DropdownMenuItem>GitHub</DropdownMenuItem> */}
        <DropdownMenuItem>Support</DropdownMenuItem>
        {/* <DropdownMenuItem disabled>API</DropdownMenuItem> */}
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SignOut />
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default async function Navbar(){
    const session = await getAuthSession();
    // console.log(session)
    const tempUser = {
        name: "Sam",
        userName: "sam",
    }
    // const [isopenDropDown,setopenDropDown] = useState(false);
    return (
        <div className="w-full flex pl-2 pr-8 py-2 justify-between h-12">
            <Link href={"/"} className="flex gap-2">
                <Anvil />
                <span className="font-extrabold">GeekForGeek CMS</span>
            </Link>
            {
                session ? 
                <div><DropdownMenuDemo user={session?.user} /></div> :
                <Link href={"/sign-in"} className="flex">
                    Sign in
                </Link>
            }
        </div>
    )
}