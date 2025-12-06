import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { File, PenTool, Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import Link from "next/link"

export function AppSidebar() {
  const basicMenuItem = [
    {title:"Blogs", icon: File, url: "/blogs"},
    {title:"Draft", icon: PenTool, url: "/draft"},
    {title:"Home", url: "/", icon: Home,},
    {title:"Search", url: "/search", icon: Search,},
    {title:"Settings", url: "/settings", icon: Settings,},
  ]
  return (
    <Sidebar>
      <SidebarHeader >CRM</SidebarHeader>
      <SidebarContent>
        <SidebarGroup >
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              { 
                basicMenuItem.map((e,i) => (
                  <SidebarMenuItem key={i}>
                    <SidebarMenuButton>
                      <Link href={e.url} className="flex gap-4">
                        <e.icon />{e.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )) 
              }
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup >
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}