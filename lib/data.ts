/* ---------- Employees ---------- */

export interface Employee {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  team: string;
  email: string;
  reportsTo: string;
}

export const employees: Employee[] = [
  {
    id: "fatima-zohra-boutfeah",
    name: "Fatima Zohra Boutfeah Khatib",
    firstName: "Fatima Zohra",
    lastName: "Boutfeah Khatib",
    role: "Chief Executive Officer",
    team: "Executive",
    email: "fatimazohra.boutfeah@meridian.example",
    reportsTo: "",
  },
  {
    id: "hajar-el-bachiri",
    name: "Hajar El Bachiri",
    firstName: "Hajar",
    lastName: "El Bachiri",
    role: "Director of People",
    team: "People",
    email: "hajar.elbachiri@meridian.example",
    reportsTo: "fatima-zohra-boutfeah",
  },
  {
    id: "anas-eraoui",
    name: "Anas Eraoui",
    firstName: "Anas",
    lastName: "Eraoui",
    role: "Director of Engineering",
    team: "Engineering",
    email: "anas.eraoui@meridian.example",
    reportsTo: "fatima-zohra-boutfeah",
  },
  {
    id: "amine-houmada",
    name: "Amine Houmada",
    firstName: "Amine",
    lastName: "Houmada",
    role: "Director of Operations",
    team: "Operations",
    email: "amine.houmada@meridian.example",
    reportsTo: "fatima-zohra-boutfeah",
  },
  {
    id: "fatima-zohra-asrih",
    name: "Fatima Zohra Asrih",
    firstName: "Fatima Zohra",
    lastName: "Asrih",
    role: "HR Manager",
    team: "People",
    email: "fatimazohra.asrih@meridian.example",
    reportsTo: "hajar-el-bachiri",
  },
  {
    id: "khalid-lazrag",
    name: "Khalid Lazrag",
    firstName: "Khalid",
    lastName: "Lazrag",
    role: "Senior Software Engineer",
    team: "Engineering",
    email: "khalid.lazrag@meridian.example",
    reportsTo: "anas-eraoui",
  },
  {
    id: "saad-alghem",
    name: "Saad Alghem",
    firstName: "Saad",
    lastName: "Alghem",
    role: "Frontend Engineer",
    team: "Engineering",
    email: "saad.alghem@meridian.example",
    reportsTo: "anas-eraoui",
  },
  {
    id: "rami-noha",
    name: "Rami Noha",
    firstName: "Rami",
    lastName: "Noha",
    role: "IT Support Specialist",
    team: "Operations",
    email: "rami.noha@meridian.example",
    reportsTo: "amine-houmada",
  },
  {
    id: "achguer",
    name: "Achguer",
    firstName: "",
    lastName: "Achguer",
    role: "Facilities Manager",
    team: "Operations",
    email: "achguer@meridian.example",
    reportsTo: "amine-houmada",
  },
];

/* ---------- Assistant answers ---------- */

export interface Answer {
  id: string;
  topic: string;
  keywords: string[];
  answer: string;
  source: string;
}

export const answers: Answer[] = [
  {
    id: "vpn",
    topic: "VPN setup",
    keywords: ["vpn", "remote", "connect", "network"],
    answer:
      "Install the company VPN client from the IT portal, sign in with your work email, and approve the prompt on your phone. If the connection fails, ask IT Support to check that your VPN access ticket is done.",
    source: "VPN Setup Guide.pdf",
  },
  {
    id: "vacation",
    topic: "Vacation policy",
    keywords: ["vacation", "holiday", "leave", "time off", "days off"],
    answer:
      "Full-time employees get 22 days of paid leave per year. Request days in the HR portal at least two weeks ahead, and your manager approves them.",
    source: "Employee Handbook.pdf",
  },
  {
    id: "expenses",
    topic: "Expense reports",
    keywords: ["expense", "expenses", "reimburse", "receipt", "refund"],
    answer:
      "Submit your receipts in the finance portal within 30 days of the purchase. Reimbursements are paid with the next monthly payroll.",
    source: "Expense Policy.pdf",
  },
  {
    id: "hours",
    topic: "Working hours",
    keywords: ["hours", "schedule", "working", "time", "remote day"],
    answer:
      "Core hours are 10:00 to 16:00, Monday to Friday. You can start between 08:00 and 10:00, and one remote day per week is allowed after your first month.",
    source: "Employee Handbook.pdf",
  },
  {
    id: "first-week",
    topic: "First-week checklist",
    keywords: ["first week", "checklist", "start", "onboarding", "begin"],
    answer:
      "In your first week: collect your badge, check your laptop and accounts, meet your buddy, read the handbook, and have a one-to-one with your manager.",
    source: "Onboarding Checklist.pdf",
  },
  {
    id: "it-help",
    topic: "IT help",
    keywords: ["it", "help", "support", "laptop", "broken", "password"],
    answer:
      "For any IT problem, open a ticket in the IT portal or ask Rami Noha in IT Support. Password resets are handled instantly from the login page.",
    source: "IT Support Guide.pdf",
  },
  {
    id: "benefits",
    topic: "Benefits",
    keywords: ["benefits", "insurance", "health", "cnss", "mutuelle"],
    answer:
      "You are enrolled in the company health insurance from your start date. HR sends your insurance card details during your first two weeks.",
    source: "Benefits Overview.pdf",
  },
  {
    id: "dress-code",
    topic: "Dress code",
    keywords: ["dress", "clothes", "wear", "attire"],
    answer:
      "The dress code is smart casual. Client meetings may call for something a little more formal.",
    source: "Employee Handbook.pdf",
  },
];

/* ---------- Setup tickets ---------- */

export type TicketStatus = "todo" | "in-progress" | "done";
export type TicketGroup = "IT Support" | "Facilities";

export interface Ticket {
  id: string;
  title: string;
  newHire: string;
  group: TicketGroup;
  status: TicketStatus;
  tag: string;
}

export const tickets: Ticket[] = [
  {
    id: "t1",
    title: "Install desk and monitor",
    newHire: "Saad Alghem",
    group: "Facilities",
    status: "done",
    tag: "Desk",
  },
  {
    id: "t2",
    title: "Configure laptop",
    newHire: "Saad Alghem",
    group: "IT Support",
    status: "in-progress",
    tag: "Equipment",
  },
  {
    id: "t3",
    title: "Create email account",
    newHire: "Saad Alghem",
    group: "IT Support",
    status: "done",
    tag: "Accounts",
  },
  {
    id: "t4",
    title: "Grant VPN access",
    newHire: "Saad Alghem",
    group: "IT Support",
    status: "todo",
    tag: "Access",
  },
  {
    id: "t5",
    title: "Print badge",
    newHire: "Saad Alghem",
    group: "Facilities",
    status: "in-progress",
    tag: "Access",
  },
  {
    id: "t6",
    title: "Assign software licenses",
    newHire: "Saad Alghem",
    group: "IT Support",
    status: "todo",
    tag: "Software",
  },
  {
    id: "t7",
    title: "Prepare welcome kit",
    newHire: "Saad Alghem",
    group: "Facilities",
    status: "todo",
    tag: "Welcome",
  },
  {
    id: "t8",
    title: "Install desk and monitor",
    newHire: "Rami Noha",
    group: "Facilities",
    status: "todo",
    tag: "Desk",
  },
  {
    id: "t9",
    title: "Configure laptop",
    newHire: "Rami Noha",
    group: "IT Support",
    status: "in-progress",
    tag: "Equipment",
  },
  {
    id: "t10",
    title: "Create email account",
    newHire: "Rami Noha",
    group: "IT Support",
    status: "done",
    tag: "Accounts",
  },
];