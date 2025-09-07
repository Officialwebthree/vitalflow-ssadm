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
import { registrationStore } from '@/lib/registrationStore';
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [stats, setStats] = useState(registrationStore.getStats());
  const [monthlyData, setMonthlyData] = useState(registrationStore.getMonthlyData());
  const [recentRegistrations, setRecentRegistrations] = useState(registrationStore.getAll());

  useEffect(() => {
    // Refresh data on component mount and set up interval
    const refreshData = () => {
      setStats(registrationStore.getStats());
      setMonthlyData(registrationStore.getMonthlyData());
      setRecentRegistrations(registrationStore.getAll().slice(-5).reverse());
    };

    refreshData();
    const interval = setInterval(refreshData, 5000); // Refresh every 5 seconds

    return () => clearInterval(interval);
  }, []);
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
              <div className="text-2xl font-bold">{stats.totalBirths}</div>
              <p className="text-xs text-muted-foreground">
                Total birth registrations
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Deaths</CardTitle>
              <Heart className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalDeaths}</div>
              <p className="text-xs text-muted-foreground">
                Total death registrations
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
              <Clock className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.pendingApprovals}</div>
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
              <div className="text-2xl font-bold">{stats.verifiedToday}</div>
              <p className="text-xs text-muted-foreground">
                Verified today
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
              {recentRegistrations.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <FileText className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>No registrations yet</p>
                  <p className="text-sm">New registrations will appear here</p>
                </div>
              ) : (
                recentRegistrations.map((registration) => (
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
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Dashboard;