export interface Founder {
  role: string;
  name: string;
  subtitle: string;
}

export interface Member {
  name: string;
  classSection: string;
}

export interface DepartmentRole {
  department: string;
  name: string;
}

export const FOUNDERS: Founder[] = [
  { role: 'Patron', name: 'Ms. Nandita Sahu', subtitle: 'Principal, OP Jindal Modern School' },
  { role: 'Faculty Founder & In-Charge', name: 'Mr. Mahesh Dutt', subtitle: 'English Department' },
  { role: 'Founder & President', name: 'Jayati Saini', subtitle: 'Student Founder' },
  { role: 'Co-Founder & Vice President', name: 'Rishabh Jain', subtitle: 'Student Founder' },
];

export const DEPARTMENT_HEADS: DepartmentRole[] = [
  { department: 'Writing', name: 'Divyanshi Shekhawat' },
  { department: 'Speaking', name: 'Ojaswi Goel' },
  { department: 'Reading', name: 'Shaurya Agarwal' },
];

export const DEPARTMENT_VICE_HEADS: DepartmentRole[] = [
  { department: 'Writing', name: 'Yuvraj Jangra' },
  { department: 'Speaking', name: 'Viditaa Saini' },
  { department: 'Reading', name: 'Yuvanshi' },
];

export const MEMBERS: Member[] = [
  { name: 'Harshwardhan', classSection: 'Class IX-C' },
  { name: 'Yovraj Sachdeva', classSection: 'Class IX-C' },
  { name: 'Veronica Sihag', classSection: 'Class IX-F' },
  { name: 'Amrit Singh', classSection: 'Class IX-L' },
  { name: 'Bhuvnesh Nain', classSection: 'Class IX-N' },
  { name: 'Ekanshi Patel', classSection: 'Class X-D' },
  { name: 'Riana Mehta', classSection: 'Class X-E' },
  { name: 'Tavisha', classSection: 'Class X-G' },
  { name: 'Saanvi Arora', classSection: 'Class X-G' },
  { name: 'Yanna Singh', classSection: 'Class X-M' },
  { name: 'Mishka Gupta', classSection: 'Class XI-C' },
  { name: 'Aira Mehla', classSection: 'Class XI-C' },
  { name: 'Harman', classSection: 'Class XI-C' },
  { name: 'Yuvraj Jangra', classSection: 'Class XI-D' },
  { name: 'Yuvanshi', classSection: 'Class XI-D' },
  { name: 'Jayesh', classSection: 'Class XI-D' },
  { name: 'Nikunj Soni', classSection: 'Class XI-D' },
  { name: 'Daksh Singal', classSection: 'Class XI-D' },
  { name: 'Bhavya Singh', classSection: 'Class XI-F' },
  { name: 'Navya', classSection: 'Class XI-G' },
  { name: 'Grisha Narang', classSection: 'Class XI-G' },
  { name: 'Manvi', classSection: 'Class XI-H' },
  { name: 'Viditaa Saini', classSection: 'Class XI-H' },
  { name: 'Khushika Sharma', classSection: 'Class XI-J' },
  { name: 'Bhrigu Radhey', classSection: 'Class XI-J' },
  { name: 'Niyati', classSection: 'Class XI-J' },
  { name: 'Avanti Singh', classSection: 'Class XI-J' },
  { name: 'Aous Bhambhu', classSection: 'Class XII-C' },
  { name: 'Ojaswi Goel', classSection: 'Class XII-D' },
  { name: 'Vipul Jindal', classSection: 'Class XII-D' },
  { name: 'Shaurya Agarwal', classSection: 'Class XII-E' },
  { name: 'Divyanshi Shekhawat', classSection: 'Class XII-H' },
];
