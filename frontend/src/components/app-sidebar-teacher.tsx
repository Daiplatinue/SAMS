import * as React from "react"
import { Headset } from "lucide-react"

import { Calendars } from "@/components/calendars"
import { DatePicker } from "@/components/date-picker"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar"

import avatar from '../sections/assets/av3.jpg'

const data = {
  user: {
    name: "Teacher",
    email: "teacher@gmail.com",
    avatar,
  },
  calendars: [
    {
      name: "Contents",
      items: [  
        { label: "Event", url: "" },
        { label: "Meetings", url: "" },
        { label: "Dashboard", url: "" },
        { label: "Leaderboard", url: "" },
        { label: "Announcement", url: "" },
        { label: "Manage Accounts", url: "" },
      ],
    },
  ],
};


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="h-16 border-b border-sidebar-border bg-customBlue text-white">
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        <DatePicker />
        <SidebarSeparator className="mx-0" />
        <Calendars calendars={data.calendars} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="flex justify-center items-center text-center">
              <Headset />
              <span>Contact Support</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
