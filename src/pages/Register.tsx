import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BirthRegistrationForm } from '@/components/forms/BirthRegistrationForm';
import { DeathRegistrationForm } from '@/components/forms/DeathRegistrationForm';
import { ArrowLeft, Baby, Heart } from 'lucide-react';

const Register = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Online Registration Portal</h1>
          
          <Tabs defaultValue="birth" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="birth" className="flex items-center gap-2">
                <Baby className="h-4 w-4" />
                Birth Registration
              </TabsTrigger>
              <TabsTrigger value="death" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Death Registration
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="birth">
              <Card>
                <CardHeader>
                  <CardTitle>Birth Registration</CardTitle>
                  <CardDescription>
                    Complete this form to register a new birth. All fields marked with * are required.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <BirthRegistrationForm />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="death">
              <Card>
                <CardHeader>
                  <CardTitle>Death Registration</CardTitle>
                  <CardDescription>
                    Complete this form to register a death. All fields marked with * are required.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <DeathRegistrationForm />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Register;