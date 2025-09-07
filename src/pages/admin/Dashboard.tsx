import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AppLayout } from '@/components/layout/AppLayout';
import { 
  FileText, 
  UserCheck, 
  Clock, 
  TrendingUp,
  Baby,
  Heart,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const monthlyData = [
  { month: 'Jan', births: 245, deaths: 120 },
  { month: 'Feb', births: 312, deaths: 142 },
  { month: 'Mar', births: 289, deaths: 135 },
  { month: 'Apr', births: 334, deaths: 128 },
  { month: 'May', births: 298, deaths: 145 },
  { month: 'Jun', births: 367, deaths: 139 },
];

const recentRegistrations = [
  { id: 'BRN-2024001', type: 'Birth', name: 'John Michael Doe', status: 'pending', date: '2024-03-20' },
  { id: 'DRN-2024001', type: 'Death', name: 'Jane Smith', status: 'approved', date: '2024-03-19' },
  { id: 'BRN-2024002', type: 'Birth', name: 'Emily Johnson', status: 'verified', date: '2024-03-19' },
  { id: 'DRN-2024002', type: 'Death', name: 'Robert Brown', status: 'pending', date: '2024-03-18' },
  { id: 'BRN-2024003', type: 'Birth', name: 'Sarah Williams', status: 'approved', date: '2024-03-18' },
];

const Dashboard = () => {
  return (
    <AppLayout>
      <div className="p-6 space-y-6">
        <div>
          <h2 className="text-3xl font-bold">Dashboard Overview</h2>
          <p className="text-muted-foreground">Welcome to the Vital Records Management System</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Births</CardTitle>
              <Baby className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,893</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="inline h-3 w-3 mr-1" />
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Deaths</CardTitle>
              <Heart className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">809</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="inline h-3 w-3 mr-1" />
                +3% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
              <Clock className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47</div>
              <p className="text-xs text-muted-foreground">
                Requires immediate attention
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Verified Today</CardTitle>
              <UserCheck className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">
                Average processing: 2 days
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Registrations</CardTitle>
              <CardDescription>Birth and death registrations over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="births" fill="hsl(var(--primary))" />
                  <Bar dataKey="deaths" fill="hsl(var(--secondary))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Registration Trend</CardTitle>
              <CardDescription>Overall registration trend analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="births" stroke="hsl(var(--primary))" strokeWidth={2} />
                  <Line type="monotone" dataKey="deaths" stroke="hsl(var(--secondary))" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent Registrations */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Registrations</CardTitle>
            <CardDescription>Latest birth and death registrations requiring attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentRegistrations.map((registration) => (
                <div key={registration.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    {registration.type === 'Birth' ? (
                      <Baby className="h-8 w-8 text-primary" />
                    ) : (
                      <Heart className="h-8 w-8 text-secondary" />
                    )}
                    <div>
                      <p className="font-medium">{registration.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {registration.id} • {new Date(registration.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge 
                      variant={
                        registration.status === 'approved' ? 'success' :
                        registration.status === 'pending' ? 'warning' :
                        'default'
                      }
                    >
                      {registration.status === 'pending' && <Clock className="mr-1 h-3 w-3" />}
                      {registration.status === 'approved' && <CheckCircle className="mr-1 h-3 w-3" />}
                      {registration.status === 'verified' && <UserCheck className="mr-1 h-3 w-3" />}
                      {registration.status}
                    </Badge>
                    <Button size="sm" variant="outline">View Details</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Dashboard;