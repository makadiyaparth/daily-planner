import { Calendar1, CalendarDays, CalendarSync, IndianRupee, LayoutDashboard, ListTodo, NotebookPen, Utensils } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const apps = [
  {
    title: "Notes",
    url: "notes",
    icon: NotebookPen,
  },
  {
    title: "Todos",
    url: "todos",
    icon: ListTodo,
  },
  {
    title: "Dates",
    url: "dates",
    icon: CalendarDays,
  }
]

const trackers = [
    {
      title: "Expenses",
      url: "expenses",
      icon: IndianRupee,
    },
    {
        title: "Habits",
        url: "habits",
        icon: CalendarSync,
      },
      {
        title: "Meals",
        url: "meals",
        icon: Utensils,
      }
]

export function AppSidebar() {
  return (
    <Sidebar collapsible='icon'>
        <SidebarHeader>Aapp</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href='dashboard'>
                      <LayoutDashboard />
                      <span>Dashboard</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href='daily-view'>
                      <Calendar1 />
                      <span>Daily View</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Apps</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {apps.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Trackers</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {trackers.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
