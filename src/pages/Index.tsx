import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Search, Shield, Clock, BarChart3, Users } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="bg-gradient-header text-white">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8" />
              <h1 className="text-2xl font-bold">Vital Records System</h1>
            </div>
            <div className="flex gap-4">
              <Link to="/register">
                <Button variant="secondary" size="sm">
                  Register
                </Button>
              </Link>
              <Link to="/verify">
                <Button variant="outline" size="sm" className="text-white border-white hover:bg-white/20">
                  Verify Certificate
                </Button>
              </Link>
              <Link to="/admin">
                <Button variant="outline" size="sm" className="text-white border-white hover:bg-white/20">
                  Admin Login
                </Button>
              </Link>
            </div>
          </div>
        </nav>
        
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-5xl font-bold mb-4">
            Online Birth & Death Registration System
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Secure, efficient, and accessible vital records management using modern technology and structured system analysis
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="shadow-lg">
                Start Registration
              </Button>
            </Link>
            <Link to="/verify">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                Verify Certificate
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">System Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <FileText className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Online Registration</CardTitle>
              <CardDescription>
                Register births and deaths online with our secure multi-step forms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1">
                <li>• Step-by-step guided process</li>
                <li>• Document upload support</li>
                <li>• Real-time validation</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Search className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Certificate Verification</CardTitle>
              <CardDescription>
                Instantly verify the authenticity of birth and death certificates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1">
                <li>• QR code verification</li>
                <li>• Reference number lookup</li>
                <li>• Digital certificates</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Shield className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Secure & Compliant</CardTitle>
              <CardDescription>
                Built with security and data privacy as top priorities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1">
                <li>• End-to-end encryption</li>
                <li>• Role-based access control</li>
                <li>• Audit trails</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Clock className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Fast Processing</CardTitle>
              <CardDescription>
                Automated workflows reduce processing time significantly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1">
                <li>• Automated verification</li>
                <li>• Email notifications</li>
                <li>• Status tracking</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <BarChart3 className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Analytics & Reports</CardTitle>
              <CardDescription>
                Comprehensive statistics and reporting capabilities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1">
                <li>• Real-time dashboards</li>
                <li>• Custom reports</li>
                <li>• Data visualization</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Multi-User Support</CardTitle>
              <CardDescription>
                Different interfaces for citizens, registrars, and administrators
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1">
                <li>• Citizen portal</li>
                <li>• Registrar dashboard</li>
                <li>• Admin controls</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">System Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary">15,234</div>
              <div className="text-muted-foreground">Total Registrations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">98%</div>
              <div className="text-muted-foreground">User Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">2 Days</div>
              <div className="text-muted-foreground">Average Processing</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground">System Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-3">About the System</h4>
              <p className="text-sm text-muted-foreground">
                Developed using Structured System Analysis and Design Methodology (SSADM) to ensure efficiency, security, and scalability.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="text-sm space-y-2">
                <li><Link to="/register" className="text-muted-foreground hover:text-primary">Register Birth/Death</Link></li>
                <li><Link to="/verify" className="text-muted-foreground hover:text-primary">Verify Certificate</Link></li>
                <li><Link to="/admin" className="text-muted-foreground hover:text-primary">Admin Portal</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact Support</h4>
              <p className="text-sm text-muted-foreground">
                Email: support@vitalrecords.gov<br />
                Phone: 1-800-VITAL-REC<br />
                Hours: Monday-Friday, 8AM-5PM
              </p>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 Vital Records Management System. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;