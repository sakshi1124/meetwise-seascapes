export const dummyMeetings = [
  {
    id: "1",
    title: "Team Discussion - Ramesh Sharma",
    date: "2024-01-15",
    time: "10:30 AM",
    duration: "45 min",
    participants: 6,
    summary: "The team meeting began with Ramesh Sharma providing an overview of the quarterly business objectives and current project status. We discussed the upcoming product launch timeline, which has been moved to mid-February to accommodate additional testing phases. The resource allocation strategy was thoroughly reviewed, with particular emphasis on the need for additional UI/UX designers for the final sprint. Key concerns were raised about the current backend API performance under load, prompting discussions about optimization strategies. The marketing team presented initial campaign concepts, which received positive feedback from stakeholders. Budget considerations were addressed, with approval given for additional cloud infrastructure costs. The team also discussed potential risks and mitigation strategies for the upcoming client presentation. Overall, the meeting established clear priorities and action items for the next two weeks, ensuring all departments are aligned on delivery expectations.",
    tasks: [
      { task: "Finalize UI wireframes", assignee: "Priya Patel", deadline: "2024-01-20" },
      { task: "Complete backend API integration", assignee: "Arjun Singh", deadline: "2024-01-25" },
      { task: "Prepare marketing strategy document", assignee: "Kavya Reddy", deadline: "2024-01-22" }
    ],
    dates: [
      { event: "Product launch", date: "2024-02-15" },
      { event: "Client presentation", date: "2024-01-30" }
    ]
  },
  {
    id: "2",
    title: "Sprint Planning - Anjali Gupta",
    date: "2024-01-12",
    time: "2:00 PM",
    duration: "1h 15min",
    participants: 8,
    summary: "Anjali Gupta led the comprehensive sprint planning session for the upcoming two-week development cycle. The team reviewed the product backlog and prioritized user stories based on business value and technical complexity. Detailed story point estimation was conducted using planning poker methodology, resulting in a total commitment of 65 story points for the sprint. The authentication system implementation was identified as the highest priority item, requiring coordination between frontend and backend teams. Payment gateway integration discussions revealed the need for additional security compliance checks. The QA team outlined their testing strategy, emphasizing the importance of automated test coverage for new features. Technical debt items were also scheduled, including database query optimization and code refactoring tasks. The team discussed potential blockers and dependencies, establishing clear communication protocols for issue escalation. Resource allocation was confirmed, with two developers dedicated to the authentication module and one focused on payment integration. The sprint goal was clearly defined as delivering a fully functional user registration and payment system.",
    tasks: [
      { task: "Implement user authentication", assignee: "Vikram Joshi", deadline: "2024-01-18" },
      { task: "Design payment gateway", assignee: "Sneha Agarwal", deadline: "2024-01-20" },
      { task: "Create test cases", assignee: "Rahul Kumar", deadline: "2024-01-19" }
    ],
    dates: [
      { event: "Sprint demo", date: "2024-01-26" },
      { event: "Code review deadline", date: "2024-01-24" }
    ]
  },
  {
    id: "3",
    title: "Client Review - Suresh Krishnan",
    date: "2024-01-10",
    time: "11:00 AM",
    duration: "30 min",
    participants: 4,
    summary: "Suresh Krishnan facilitated the client feedback session focusing on the beta version of our application. The client expressed overall satisfaction with the core functionality but highlighted several areas for improvement. The current color scheme was deemed too vibrant for their corporate branding requirements, necessitating a more subdued palette. Navigation flow received positive feedback, though users reported some confusion during the onboarding process. The export functionality was identified as a critical missing feature for their workflow integration. Performance metrics were discussed, with the client noting acceptable load times for most operations. Security features were praised, particularly the two-factor authentication implementation. The client requested additional customization options for dashboard widgets and improved mobile responsiveness. Integration capabilities with their existing CRM system were explored, revealing opportunities for enhanced data synchronization. The feedback session concluded with a clear roadmap for addressing the identified issues and a commitment to deliver updates within the agreed timeline.",
    tasks: [
      { task: "Update color scheme", assignee: "Meera Nair", deadline: "2024-01-16" },
      { task: "Add export functionality", assignee: "Amit Verma", deadline: "2024-01-18" }
    ],
    dates: [
      { event: "Final review meeting", date: "2024-01-28" }
    ]
  },
  {
    id: "4",
    title: "Technical Architecture - Deepak Mehta",
    date: "2024-01-08",
    time: "3:30 PM",
    duration: "1h",
    participants: 5,
    summary: "Deepak Mehta led the technical architecture review meeting, focusing on system scalability and performance optimization strategies. The current database schema was analyzed for potential bottlenecks, revealing opportunities for index optimization and query restructuring. Microservices architecture patterns were discussed as a solution for handling increased user load and improving system modularity. Cloud infrastructure requirements were evaluated, with recommendations for implementing auto-scaling groups and load balancers. The team reviewed data backup and disaster recovery procedures, ensuring compliance with industry standards. Security architecture components were examined, including API gateway configurations and encryption protocols. CI/CD pipeline enhancements were prioritized to reduce deployment times and improve code quality gates. Monitoring and logging strategies were refined to provide better visibility into system performance metrics. The discussion included evaluation of new technologies for improving development velocity while maintaining system reliability. Performance benchmarking results were presented, showing areas where optimization efforts would yield the highest impact on user experience.",
    tasks: [
      { task: "Database schema optimization", assignee: "Ravi Sharma", deadline: "2024-01-22" },
      { task: "Setup CI/CD pipeline", assignee: "Pooja Malhotra", deadline: "2024-01-20" }
    ],
    dates: [
      { event: "Architecture review", date: "2024-01-25" }
    ]
  }
];

export const getDummyMeeting = (id: string) => {
  return dummyMeetings.find(meeting => meeting.id === id);
};