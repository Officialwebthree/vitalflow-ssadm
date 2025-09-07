import { NavLink, useLocation } from 'react-router-dom';
import {
  FileText,
  Home,
  UserCheck,
  BarChart3,
  Users,
  Settings,
  Search,
  FileSpreadsheet,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

const menuItems = [
  {
    title: 'Dashboard',
    items: [
      { title: 'Overview', url: '/admin', icon: Home },
      { title: 'Statistics', url: '/admin/statistics', icon: BarChart3 },
    ],
  },
  {
    title: 'Registrations',
    items: [
      { title: 'Pending Approvals', url: '/admin/pending', icon: UserCheck },
      { title: 'Birth Records', url: '/admin/births', icon: FileText },
      { title: 'Death Records', url: '/admin/deaths', icon: FileText },
      { title: 'Search Records', url: '/admin/search', icon: Search },
    ],
  },
  {
    title: 'Reports',
    items: [
      { title: 'Generate Reports', url: '/admin/reports', icon: FileSpreadsheet },
    ],
  },
  {
    title: 'System',
    items: [
      { title: 'User Management', url: '/admin/users', icon: Users },
      { title: 'Settings', url: '/admin/settings', icon: Settings },
    ],
  },
];

export function AppSidebar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <Sidebar>
      <SidebarContent>
        {menuItems.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        className={({ isActive }) =>
                          isActive
                            ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                            : 'hover:bg-sidebar-accent/50'
                        }
                      >
                        <item.icon className="mr-2 h-4 w-4" />
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}