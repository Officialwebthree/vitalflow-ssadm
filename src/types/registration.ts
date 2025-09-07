export interface BirthRegistration {
  id: string;
  registrationNumber: string;
  childName: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
  gender: 'male' | 'female' | 'other';
  weight: string;
  
  // Parent Information
  motherName: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  motherNationalId: string;
  motherOccupation: string;
  
  fatherName: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  fatherNationalId: string;
  fatherOccupation: string;
  
  // Contact Information
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
  };
  phone: string;
  email: string;
  
  // Hospital Information
  hospitalName: string;
  doctorName: string;
  
  // Status
  status: 'pending' | 'verified' | 'approved' | 'rejected';
  submittedAt: string;
  verifiedAt?: string;
  approvedAt?: string;
  approvedBy?: string;
  rejectionReason?: string;
}

export interface DeathRegistration {
  id: string;
  registrationNumber: string;
  deceasedName: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  dateOfBirth: string;
  dateOfDeath: string;
  timeOfDeath: string;
  placeOfDeath: string;
  gender: 'male' | 'female' | 'other';
  nationalId: string;
  maritalStatus: 'single' | 'married' | 'divorced' | 'widowed';
  occupation: string;
  
  // Cause of Death
  causeOfDeath: string;
  mannerOfDeath: 'natural' | 'accident' | 'suicide' | 'homicide' | 'pending' | 'undetermined';
  
  // Next of Kin
  nextOfKin: {
    name: string;
    relationship: string;
    nationalId: string;
    phone: string;
    email: string;
  };
  
  // Address
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
  };
  
  // Medical Information
  hospitalName?: string;
  doctorName?: string;
  medicalCertificateNumber?: string;
  
  // Status
  status: 'pending' | 'verified' | 'approved' | 'rejected';
  submittedAt: string;
  verifiedAt?: string;
  approvedAt?: string;
  approvedBy?: string;
  rejectionReason?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'citizen' | 'registrar' | 'admin';
  department?: string;
  createdAt: string;
}

export interface Statistics {
  totalBirths: number;
  totalDeaths: number;
  pendingBirths: number;
  pendingDeaths: number;
  approvedBirths: number;
  approvedDeaths: number;
  monthlyBirths: number[];
  monthlyDeaths: number[];
}