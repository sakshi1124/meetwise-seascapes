export const dummyMeetings = [
  {
    id: "1",
    title: "Team Discussion - Ramesh Sharma",
    date: "2024-01-15",
    time: "10:30 AM",
    duration: "45 min",
    participants: 6,
    summary: "Discussed quarterly goals, project timelines, and resource allocation for the upcoming product launch.",
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
    summary: "Sprint planning session covering user stories, task estimation, and sprint goals for the next two weeks.",
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
    summary: "Client feedback session on the beta version, addressing UI improvements and feature requests.",
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
    summary: "Technical discussion on system architecture, database design, and scalability considerations.",
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