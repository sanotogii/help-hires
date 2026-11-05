export interface Employee {
  id: string;
  name: string;
  role: string;
  team: string;
  email: string;
  reportsTo: string | null;
  askMeAbout: string;
}

export interface Answer {
  keywords: string[];
  answer: string;
  source: string;
}

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

export const employees: Employee[] = [
  {
    id: "maya",
    name: "Maya Chen",
    role: "Chief Executive Officer",
    team: "Leadership",
    email: "maya.chen@meridian.example",
    reportsTo: null,
    askMeAbout: "Company history, priorities, and how the teams fit together.",
  },
  {
    id: "daniel",
    name: "Daniel Okafor",
    role: "Director of Engineering",
    team: "Engineering",
    email: "daniel.okafor@meridian.example",
    reportsTo: "maya",
    askMeAbout: "The engineering roadmap and how projects are staffed.",
  },
  {
    id: "priya",
    name: "Priya Raman",
    role: "Director of People",
    team: "People",
    email: "priya.raman@meridian.example",
    reportsTo: "maya",
    askMeAbout: "Benefits, policies, and anything about your first month.",
  },
  {
    id: "lucas",
    name: "Lucas Moreau",
    role: "Director of Operations",
    team: "Operations",
    email: "lucas.moreau@meridian.example",
    reportsTo: "maya",
    askMeAbout: "Facilities, vendors, and office logistics.",
  },
  {
    id: "amara",
    name: "Amara Silva",
    role: "Engineering Manager",
    team: "Engineering",
    email: "amara.silva@meridian.example",
    reportsTo: "daniel",
    askMeAbout: "Frontend architecture, code reviews, and team rituals.",
  },
  {
    id: "noah",
    name: "Noah Kim",
    role: "Senior Software Engineer",
    team: "Engineering",
    email: "noah.kim@meridian.example",
    reportsTo: "amara",
    askMeAbout: "Backend services, deployments, and the release process.",
  },
  {
    id: "lena",
    name: "Lena Fischer",
    role: "Frontend Engineer",
    team: "Engineering",
    email: "lena.fischer@meridian.example",
    reportsTo: "amara",
    askMeAbout: "The design system and accessibility conventions.",
  },
  {
    id: "sofia",
    name: "Sofia Alvarez",
    role: "People Operations Manager",
    team: "People",
    email: "sofia.alvarez@meridian.example",
    reportsTo: "priya",
    askMeAbout: "Relocation, payroll, and time-off requests.",
  },
  {
    id: "ben",
    name: "Ben Carter",
    role: "Talent Partner",
    team: "People",
    email: "ben.carter@meridian.example",
    reportsTo: "priya",
    askMeAbout: "The hiring process and the referral program.",
  },
  {
    id: "grace",
    name: "Grace Liu",
    role: "IT Support Lead",
    team: "Operations",
    email: "grace.liu@meridian.example",
    reportsTo: "lucas",
    askMeAbout: "Laptop setup, accounts, and access problems.",
  },
  {
    id: "omar",
    name: "Omar Haddad",
    role: "Facilities Manager",
    team: "Operations",
    email: "omar.haddad@meridian.example",
    reportsTo: "lucas",
    askMeAbout: "Desk setup, meeting rooms, and building access.",
  },
];

export const answers: Answer[] = [
  {
    keywords: ["vpn", "remote access", "working remotely", "network"],
    answer:
      "Install the company VPN from the IT Self-Service portal, sign in with your work email, and approve the prompt on your phone. Connect before opening internal tools when you are off-site. If the profile will not install, Grace Liu in IT Support can push it to your laptop.",
    source: "IT Setup Guide.pdf",
  },
  {
    keywords: ["vacation", "time off", "pto", "holiday", "leave"],
    answer:
      "You get 25 paid vacation days per year, plus public holidays. Request time off in the People portal at least two weeks ahead for anything longer than three days, and your manager approves it. Unused days carry over up to five.",
    source: "Employee Handbook.pdf",
  },
  {
    keywords: ["expense", "reimburse", "receipt", "travel"],
    answer:
      "Submit expenses within 30 days through the finance portal, attach an itemized receipt, and choose the right project code. Anything over 200 needs manager approval before you spend. Reimbursements arrive with the next payroll cycle.",
    source: "Expense Policy.pdf",
  },
  {
    keywords: ["working hours", "hours", "schedule", "flexible", "start time"],
    answer:
      "Core hours are 10:00 to 16:00. Outside that you can start early or finish late as long as team meetings are covered. Fridays usually wind down at 15:00. Keep your calendar current so people know when to reach you.",
    source: "Employee Handbook.pdf",
  },
  {
    keywords: ["first week", "first day", "onboarding", "checklist", "orientation"],
    answer:
      "On day one, collect your badge from Facilities, sign in to your laptop, and meet your onboarding buddy. By Friday you should finish the security training and book a coffee with everyone on your team. The People portal keeps the full checklist.",
    source: "Onboarding Checklist.pdf",
  },
  {
    keywords: ["it support", "laptop", "password", "email account", "software", "tech support"],
    answer:
      "For hardware, accounts, or software, open a ticket in the IT portal or visit the second-floor service desk. Urgent access issues go to the #it-help channel. Typical response time is under two hours on weekdays.",
    source: "IT Support Portal",
  },
  {
    keywords: ["benefits", "health insurance", "dental", "401k", "insurance"],
    answer:
      "Health, dental, and vision coverage start on your first day. The company matches 4% of your salary into the 401(k) after 90 days. You can add dependants during your first 30 days without a qualifying event.",
    source: "Benefits Guide 2026.pdf",
  },
  {
    keywords: ["dress code", "attire", "clothes", "wear"],
    answer:
      "Wear what helps you do your best work. Most people are casual, but keep a smart layer for client visits and external meetings. There is no formal dress code.",
    source: "Employee Handbook.pdf",
  },
];

export const tickets: Ticket[] = [
  {
    id: "t1",
    title: "Configure laptop",
    newHire: "Lena Fischer",
    group: "IT Support",
    status: "in-progress",
    tag: "Hardware",
  },
  {
    id: "t2",
    title: "Install desk and monitor",
    newHire: "Lena Fischer",
    group: "Facilities",
    status: "in-progress",
    tag: "Furniture",
  },
  {
    id: "t3",
    title: "Create email account",
    newHire: "Lena Fischer",
    group: "IT Support",
    status: "done",
    tag: "Account",
  },
  {
    id: "t4",
    title: "Grant VPN access",
    newHire: "Noah Kim",
    group: "IT Support",
    status: "todo",
    tag: "Access",
  },
  {
    id: "t5",
    title: "Print badge",
    newHire: "Noah Kim",
    group: "Facilities",
    status: "in-progress",
    tag: "Building",
  },
  {
    id: "t6",
    title: "Assign software licenses",
    newHire: "Amara Silva",
    group: "IT Support",
    status: "todo",
    tag: "Software",
  },
  {
    id: "t7",
    title: "Set up building access",
    newHire: "Amara Silva",
    group: "Facilities",
    status: "done",
    tag: "Building",
  },
  {
    id: "t8",
    title: "Order standing desk",
    newHire: "Ben Carter",
    group: "Facilities",
    status: "todo",
    tag: "Furniture",
  },
  {
    id: "t9",
    title: "Create shared drive access",
    newHire: "Ben Carter",
    group: "IT Support",
    status: "todo",
    tag: "Access",
  },
  {
    id: "t10",
    title: "Install video call kit",
    newHire: "Omar Haddad",
    group: "IT Support",
    status: "done",
    tag: "Hardware",
  },
];
