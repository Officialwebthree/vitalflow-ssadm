import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { Calendar, User, MapPin, Phone, Mail, Building } from 'lucide-react';

export function BirthRegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    childFirstName: '',
    childMiddleName: '',
    childLastName: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    gender: '',
    weight: '',
    motherFirstName: '',
    motherMiddleName: '',
    motherLastName: '',
    motherNationalId: '',
    motherOccupation: '',
    fatherFirstName: '',
    fatherMiddleName: '',
    fatherLastName: '',
    fatherNationalId: '',
    fatherOccupation: '',
    street: '',
    city: '',
    state: '',
    postalCode: '',
    phone: '',
    email: '',
    hospitalName: '',
    doctorName: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate registration number
    const registrationNumber = `BRN-${Date.now()}`;
    
    toast({
      title: "Registration Submitted Successfully",
      description: `Reference Number: ${registrationNumber}. You will receive confirmation via email.`,
    });
    
    // Reset form
    setCurrentStep(1);
    setFormData({
      childFirstName: '',
      childMiddleName: '',
      childLastName: '',
      dateOfBirth: '',
      timeOfBirth: '',
      placeOfBirth: '',
      gender: '',
      weight: '',
      motherFirstName: '',
      motherMiddleName: '',
      motherLastName: '',
      motherNationalId: '',
      motherOccupation: '',
      fatherFirstName: '',
      fatherMiddleName: '',
      fatherLastName: '',
      fatherNationalId: '',
      fatherOccupation: '',
      street: '',
      city: '',
      state: '',
      postalCode: '',
      phone: '',
      email: '',
      hospitalName: '',
      doctorName: '',
    });
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Progress Indicator */}
      <div className="flex justify-between mb-8">
        {[1, 2, 3, 4].map((step) => (
          <div
            key={step}
            className={`flex-1 h-2 mx-1 rounded-full transition-colors ${
              step <= currentStep ? 'bg-primary' : 'bg-muted'
            }`}
          />
        ))}
      </div>

      {/* Step 1: Child Information */}
      {currentStep === 1 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Child Information
            </CardTitle>
            <CardDescription>Enter the details of the newborn</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="childFirstName">First Name *</Label>
                <Input
                  id="childFirstName"
                  value={formData.childFirstName}
                  onChange={(e) => handleInputChange('childFirstName', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="childMiddleName">Middle Name</Label>
                <Input
                  id="childMiddleName"
                  value={formData.childMiddleName}
                  onChange={(e) => handleInputChange('childMiddleName', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="childLastName">Last Name *</Label>
                <Input
                  id="childLastName"
                  value={formData.childLastName}
                  onChange={(e) => handleInputChange('childLastName', e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="timeOfBirth">Time of Birth *</Label>
                <Input
                  id="timeOfBirth"
                  type="time"
                  value={formData.timeOfBirth}
                  onChange={(e) => handleInputChange('timeOfBirth', e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="gender">Gender *</Label>
                <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="weight">Birth Weight (kg) *</Label>
                <Input
                  id="weight"
                  type="number"
                  step="0.01"
                  value={formData.weight}
                  onChange={(e) => handleInputChange('weight', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="placeOfBirth">Place of Birth *</Label>
                <Input
                  id="placeOfBirth"
                  value={formData.placeOfBirth}
                  onChange={(e) => handleInputChange('placeOfBirth', e.target.value)}
                  required
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Parent Information */}
      {currentStep === 2 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Parent Information
            </CardTitle>
            <CardDescription>Enter the details of the parents</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold mb-3">Mother's Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="motherFirstName">First Name *</Label>
                  <Input
                    id="motherFirstName"
                    value={formData.motherFirstName}
                    onChange={(e) => handleInputChange('motherFirstName', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="motherMiddleName">Middle Name</Label>
                  <Input
                    id="motherMiddleName"
                    value={formData.motherMiddleName}
                    onChange={(e) => handleInputChange('motherMiddleName', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="motherLastName">Last Name *</Label>
                  <Input
                    id="motherLastName"
                    value={formData.motherLastName}
                    onChange={(e) => handleInputChange('motherLastName', e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <Label htmlFor="motherNationalId">National ID *</Label>
                  <Input
                    id="motherNationalId"
                    value={formData.motherNationalId}
                    onChange={(e) => handleInputChange('motherNationalId', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="motherOccupation">Occupation *</Label>
                  <Input
                    id="motherOccupation"
                    value={formData.motherOccupation}
                    onChange={(e) => handleInputChange('motherOccupation', e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold mb-3">Father's Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="fatherFirstName">First Name *</Label>
                  <Input
                    id="fatherFirstName"
                    value={formData.fatherFirstName}
                    onChange={(e) => handleInputChange('fatherFirstName', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="fatherMiddleName">Middle Name</Label>
                  <Input
                    id="fatherMiddleName"
                    value={formData.fatherMiddleName}
                    onChange={(e) => handleInputChange('fatherMiddleName', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="fatherLastName">Last Name *</Label>
                  <Input
                    id="fatherLastName"
                    value={formData.fatherLastName}
                    onChange={(e) => handleInputChange('fatherLastName', e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <Label htmlFor="fatherNationalId">National ID *</Label>
                  <Input
                    id="fatherNationalId"
                    value={formData.fatherNationalId}
                    onChange={(e) => handleInputChange('fatherNationalId', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="fatherOccupation">Occupation *</Label>
                  <Input
                    id="fatherOccupation"
                    value={formData.fatherOccupation}
                    onChange={(e) => handleInputChange('fatherOccupation', e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 3: Contact Information */}
      {currentStep === 3 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Contact Information
            </CardTitle>
            <CardDescription>Enter your contact details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="street">Street Address *</Label>
              <Input
                id="street"
                value={formData.street}
                onChange={(e) => handleInputChange('street', e.target.value)}
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="state">State/Province *</Label>
                <Input
                  id="state"
                  value={formData.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="postalCode">Postal Code *</Label>
                <Input
                  id="postalCode"
                  value={formData.postalCode}
                  onChange={(e) => handleInputChange('postalCode', e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 4: Hospital Information */}
      {currentStep === 4 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5" />
              Hospital Information
            </CardTitle>
            <CardDescription>Enter the medical facility details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="hospitalName">Hospital/Clinic Name *</Label>
              <Input
                id="hospitalName"
                value={formData.hospitalName}
                onChange={(e) => handleInputChange('hospitalName', e.target.value)}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="doctorName">Attending Doctor *</Label>
              <Input
                id="doctorName"
                value={formData.doctorName}
                onChange={(e) => handleInputChange('doctorName', e.target.value)}
                required
              />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 1}
        >
          Previous
        </Button>
        
        {currentStep < 4 ? (
          <Button type="button" onClick={nextStep}>
            Next
          </Button>
        ) : (
          <Button type="submit" variant="gradient">
            Submit Registration
          </Button>
        )}
      </div>
    </form>
  );
}