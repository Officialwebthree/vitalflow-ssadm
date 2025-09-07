import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Search, CheckCircle, XCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Verify = () => {
  const [referenceNumber, setReferenceNumber] = useState('');
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate verification process
    setTimeout(() => {
      if (referenceNumber.startsWith('BRN-') || referenceNumber.startsWith('DRN-')) {
        setVerificationResult({
          valid: true,
          type: referenceNumber.startsWith('BRN-') ? 'Birth Certificate' : 'Death Certificate',
          registrationNumber: referenceNumber,
          name: referenceNumber.startsWith('BRN-') ? 'John Michael Doe' : 'Jane Elizabeth Smith',
          date: referenceNumber.startsWith('BRN-') ? '2024-01-15' : '2024-02-20',
          status: 'Approved',
          issueDate: '2024-03-01',
        });
      } else {
        setVerificationResult({
          valid: false,
        });
        toast({
          title: "Invalid Reference Number",
          description: "Please check the reference number and try again.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
        
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Certificate Verification</h1>
          
          <Card>
            <CardHeader>
              <CardTitle>Verify Certificate Authenticity</CardTitle>
              <CardDescription>
                Enter the reference number from your birth or death certificate to verify its authenticity
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleVerification} className="space-y-4">
                <div>
                  <Label htmlFor="referenceNumber">Reference Number</Label>
                  <div className="flex gap-2 mt-1">
                    <Input
                      id="referenceNumber"
                      placeholder="e.g., BRN-1234567890 or DRN-1234567890"
                      value={referenceNumber}
                      onChange={(e) => setReferenceNumber(e.target.value)}
                      required
                    />
                    <Button type="submit" disabled={isLoading}>
                      <Search className="mr-2 h-4 w-4" />
                      {isLoading ? 'Verifying...' : 'Verify'}
                    </Button>
                  </div>
                </div>
              </form>
              
              {verificationResult && (
                <div className="mt-8">
                  {verificationResult.valid ? (
                    <Card className="border-success/50 bg-success/5">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-success">
                          <CheckCircle className="h-5 w-5" />
                          Certificate Verified
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <dl className="space-y-2">
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Type:</dt>
                            <dd className="font-medium">{verificationResult.type}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Registration Number:</dt>
                            <dd className="font-mono text-sm">{verificationResult.registrationNumber}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Name:</dt>
                            <dd className="font-medium">{verificationResult.name}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Date:</dt>
                            <dd>{new Date(verificationResult.date).toLocaleDateString()}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Issue Date:</dt>
                            <dd>{new Date(verificationResult.issueDate).toLocaleDateString()}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Status:</dt>
                            <dd>
                              <Badge variant="success">{verificationResult.status}</Badge>
                            </dd>
                          </div>
                        </dl>
                        
                        <div className="mt-6 p-4 bg-muted rounded-lg">
                          <p className="text-sm text-muted-foreground">
                            This certificate is authentic and has been issued by the Vital Records Management System.
                            For any queries, please contact our support team.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ) : (
                    <Card className="border-destructive/50 bg-destructive/5">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-destructive">
                          <XCircle className="h-5 w-5" />
                          Certificate Not Found
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          The reference number you entered could not be found in our system.
                          Please check the number and try again.
                        </p>
                        <p className="text-sm text-muted-foreground mt-4">
                          If you believe this is an error, please contact our support team at support@vitalrecords.gov
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>How to Find Your Reference Number</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li>Look at the top right corner of your certificate</li>
                <li>Find the alphanumeric code starting with "BRN-" for birth certificates or "DRN-" for death certificates</li>
                <li>Enter the complete reference number including the prefix</li>
                <li>Click the Verify button to check authenticity</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Verify;