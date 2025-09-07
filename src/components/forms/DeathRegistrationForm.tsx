import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { User, MapPin, Phone, Heart, Building } from 'lucide-react';
import { registrationStore } from '@/lib/registrationStore';
import { useNavigate } from 'react-router-dom';

export function DeathRegistrationForm() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    deceasedFirstName: '',
    deceasedMiddleName: '',
    deceasedLastName: '',
    dateOfBirth: '',
    dateOfDeath: '',
    timeOfDeath: '',
    placeOfDeath: '',
    gender: '',
    nationalId: '',
    maritalStatus: '',
    occupation: '',
    causeOfDeath: '',
    mannerOfDeath: '',
    nextOfKinName: '',
    nextOfKinRelationship: '',
    nextOfKinNationalId: '',
    nextOfKinPhone: '',
    nextOfKinEmail: '',
    street: '',
    city: '',
    state: '',
    postalCode: '',
    hospitalName: '',
    doctorName: '',
    medicalCertificateNumber: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save to localStorage
    const fullName = `${formData.deceasedFirstName} ${formData.deceasedMiddleName} ${formData.deceasedLastName}`.trim();
    const registration = registrationStore.add({
      type: 'Death',
      name: fullName,
      data: formData
    });
    
    toast({
      title: "Registration Submitted Successfully",
      description: `Reference Number: ${registration.id}. You will receive confirmation via email.`,
    });
    
    // Reset form and navigate home
    setCurrentStep(1);
    setFormData({
      deceasedFirstName: '',
      deceasedMiddleName: '',
      deceasedLastName: '',
      dateOfBirth: '',
      dateOfDeath: '',
      timeOfDeath: '',
      placeOfDeath: '',
      gender: '',
      nationalId: '',
      maritalStatus: '',
      occupation: '',
      causeOfDeath: '',
      mannerOfDeath: '',
      nextOfKinName: '',
      nextOfKinRelationship: '',
      nextOfKinNationalId: '',
      nextOfKinPhone: '',
      nextOfKinEmail: '',
      street: '',
      city: '',
      state: '',
      postalCode: '',
      hospitalName: '',
      doctorName: '',
      medicalCertificateNumber: '',
    });
    
    setTimeout(() => navigate('/'), 2000);
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

      {/* Step 1: Deceased Information */}
      {currentStep === 1 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Deceased Information
            </CardTitle>
            <CardDescription>Enter the details of the deceased</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="deceasedFirstName">First Name *</Label>
                <Input
                  id="deceasedFirstName"
                  value={formData.deceasedFirstName}
                  onChange={(e) => handleInputChange('deceasedFirstName', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="deceasedMiddleName">Middle Name</Label>
                <Input
                  id="deceasedMiddleName"
                  value={formData.deceasedMiddleName}
                  onChange={(e) => handleInputChange('deceasedMiddleName', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="deceasedLastName">Last Name *</Label>
                <Input
                  id="deceasedLastName"
                  value={formData.deceasedLastName}
                  onChange={(e) => handleInputChange('deceasedLastName', e.target.value)}
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
                <Label htmlFor="nationalId">National ID *</Label>
                <Input
                  id="nationalId"
                  value={formData.nationalId}
                  onChange={(e) => handleInputChange('nationalId', e.target.value)}
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
                <Label htmlFor="maritalStatus">Marital Status *</Label>
                <Select value={formData.maritalStatus} onValueChange={(value) => handleInputChange('maritalStatus', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Single</SelectItem>
                    <SelectItem value="married">Married</SelectItem>
                    <SelectItem value="divorced">Divorced</SelectItem>
                    <SelectItem value="widowed">Widowed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="occupation">Occupation *</Label>
                <Input
                  id="occupation"
                  value={formData.occupation}
                  onChange={(e) => handleInputChange('occupation', e.target.value)}
                  required
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Death Information */}
      {currentStep === 2 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Death Information
            </CardTitle>
            <CardDescription>Enter the details of death</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="dateOfDeath">Date of Death *</Label>
                <Input
                  id="dateOfDeath"
                  type="date"
                  value={formData.dateOfDeath}
                  onChange={(e) => handleInputChange('dateOfDeath', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="timeOfDeath">Time of Death *</Label>
                <Input
                  id="timeOfDeath"
                  type="time"
                  value={formData.timeOfDeath}
                  onChange={(e) => handleInputChange('timeOfDeath', e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="placeOfDeath">Place of Death *</Label>
              <Input
                id="placeOfDeath"
                value={formData.placeOfDeath}
                onChange={(e) => handleInputChange('placeOfDeath', e.target.value)}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="causeOfDeath">Cause of Death *</Label>
              <Textarea
                id="causeOfDeath"
                value={formData.causeOfDeath}
                onChange={(e) => handleInputChange('causeOfDeath', e.target.value)}
                rows={3}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="mannerOfDeath">Manner of Death *</Label>
              <Select value={formData.mannerOfDeath} onValueChange={(value) => handleInputChange('mannerOfDeath', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select manner of death" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="natural">Natural</SelectItem>
                  <SelectItem value="accident">Accident</SelectItem>
                  <SelectItem value="suicide">Suicide</SelectItem>
                  <SelectItem value="homicide">Homicide</SelectItem>
                  <SelectItem value="pending">Pending Investigation</SelectItem>
                  <SelectItem value="undetermined">Undetermined</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 3: Next of Kin & Address */}
      {currentStep === 3 && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Next of Kin Information
              </CardTitle>
              <CardDescription>Enter the details of the next of kin</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="nextOfKinName">Full Name *</Label>
                  <Input
                    id="nextOfKinName"
                    value={formData.nextOfKinName}
                    onChange={(e) => handleInputChange('nextOfKinName', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="nextOfKinRelationship">Relationship *</Label>
                  <Input
                    id="nextOfKinRelationship"
                    value={formData.nextOfKinRelationship}
                    onChange={(e) => handleInputChange('nextOfKinRelationship', e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="nextOfKinNationalId">National ID *</Label>
                  <Input
                    id="nextOfKinNationalId"
                    value={formData.nextOfKinNationalId}
                    onChange={(e) => handleInputChange('nextOfKinNationalId', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="nextOfKinPhone">Phone Number *</Label>
                  <Input
                    id="nextOfKinPhone"
                    type="tel"
                    value={formData.nextOfKinPhone}
                    onChange={(e) => handleInputChange('nextOfKinPhone', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="nextOfKinEmail">Email Address *</Label>
                  <Input
                    id="nextOfKinEmail"
                    type="email"
                    value={formData.nextOfKinEmail}
                    onChange={(e) => handleInputChange('nextOfKinEmail', e.target.value)}
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Deceased's Last Address
              </CardTitle>
              <CardDescription>Enter the last known address</CardDescription>
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
            </CardContent>
          </Card>
        </div>
      )}

      {/* Step 4: Medical Information */}
      {currentStep === 4 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5" />
              Medical Information
            </CardTitle>
            <CardDescription>Enter medical facility and certification details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="hospitalName">Hospital/Medical Facility</Label>
              <Input
                id="hospitalName"
                value={formData.hospitalName}
                onChange={(e) => handleInputChange('hospitalName', e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="doctorName">Certifying Doctor</Label>
              <Input
                id="doctorName"
                value={formData.doctorName}
                onChange={(e) => handleInputChange('doctorName', e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="medicalCertificateNumber">Medical Certificate Number</Label>
              <Input
                id="medicalCertificateNumber"
                value={formData.medicalCertificateNumber}
                onChange={(e) => handleInputChange('medicalCertificateNumber', e.target.value)}
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