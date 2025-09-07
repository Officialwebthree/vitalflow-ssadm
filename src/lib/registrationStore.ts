export interface Registration {
  id: string;
  type: 'Birth' | 'Death';
  name: string;
  status: 'pending' | 'verified' | 'approved';
  date: string;
  data?: any;
}

const STORAGE_KEY = 'vital_records_registrations';

export const registrationStore = {
  getAll(): Registration[] {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  },

  add(registration: Omit<Registration, 'id' | 'date' | 'status'>): Registration {
    const registrations = this.getAll();
    const newRegistration: Registration = {
      ...registration,
      id: `${registration.type === 'Birth' ? 'BRN' : 'DRN'}-${Date.now()}`,
      date: new Date().toISOString(),
      status: 'pending'
    };
    registrations.push(newRegistration);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(registrations));
    return newRegistration;
  },

  getStats() {
    const registrations = this.getAll();
    const now = new Date();
    const today = now.toISOString().split('T')[0];
    
    return {
      totalBirths: registrations.filter(r => r.type === 'Birth').length,
      totalDeaths: registrations.filter(r => r.type === 'Death').length,
      pendingApprovals: registrations.filter(r => r.status === 'pending').length,
      verifiedToday: registrations.filter(r => 
        r.status === 'verified' && r.date.split('T')[0] === today
      ).length
    };
  },

  getMonthlyData() {
    const registrations = this.getAll();
    const monthlyData: Record<string, { births: number; deaths: number }> = {};
    
    registrations.forEach(reg => {
      const month = new Date(reg.date).toLocaleDateString('en-US', { month: 'short' });
      if (!monthlyData[month]) {
        monthlyData[month] = { births: 0, deaths: 0 };
      }
      if (reg.type === 'Birth') {
        monthlyData[month].births++;
      } else {
        monthlyData[month].deaths++;
      }
    });

    // Return last 6 months of data
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    return months.map(month => ({
      month,
      births: monthlyData[month]?.births || 0,
      deaths: monthlyData[month]?.deaths || 0
    }));
  },

  clear() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
  }
};