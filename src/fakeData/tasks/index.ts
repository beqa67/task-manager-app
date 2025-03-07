import {statuses} from "../../constants/constants";

export const tasks =  [
  {
    id: 11,
    title: "Buy groceries",
    description: "Milk, Bread, Cheese, and Vegetables",
    isCompleted: false,
    dueDate: "2025-01-21",
    status: statuses.IN_REVIEW
  },
  {
    id: 21,
    title: "Finish React project",
    description: "Complete the task manager app and test all features",
    isCompleted: false,
    dueDate: "2025-01-25",
    status: statuses.IN_TEST
  },
  {
    id: 31,
    title: "Call the bank",
    description: "Inquire about the new credit card offers",
    isCompleted: true,
    dueDate: "2025-01-18",
    status: statuses.IN_REVIEW
  },
  {
    id: 41,
    title: "Workout",
    description: "30-minute cardio session",
    isCompleted: false,
    dueDate: "2025-01-19",
    status: statuses.TO_DO
  },
  {
    id: 51,
    title: "Read a book",
    description: "Continue reading 'Atomic Habits' - Chapter 5",
    isCompleted: true,
    dueDate: "2025-01-20",
    status: statuses.TO_DO
  },
  {
    id: 1,
    title: "Grocery Shopping",
    description: "Buy vegetables, fruits, and milk from the store",
    isCompleted: false,
    dueDate: "2025-01-22",
    status: statuses.IN_PROGRESS
  },
  {
    id: 2,
    title: "Workout",
    description: "Complete a 30-minute cardio session at the gym",
    isCompleted: true,
    dueDate: "2025-01-20",
    status: statuses.DONE
  },
  {
    id: 3,
    title: "Team Meeting",
    description: "Discuss project updates with the team at 3 PM",
    isCompleted: false,
    dueDate: "2025-01-21",
    status: statuses.IN_PROGRESS
  },
  {
    id: 4,
    title: "Learn React Hooks",
    description: "Study useEffect and useReducer for advanced state management",
    isCompleted: false,
    dueDate: "2025-01-23",
    status: statuses.DONE
  },
  {
    id: 5,
    title: "Read a book",
    description: "Continue reading 'Atomic Habits' - Chapter 5",
    isCompleted: true,
    dueDate: "2025-01-20",
    status: statuses.TO_DO
  },
  {
    id: 6,
    title: "Submit Tax Documents",
    description: "Send all necessary tax forms to the accountant",
    isCompleted: false,
    dueDate: "2025-01-25",
    status: statuses.TO_DO
  },
  {
    id: 7,
    title: "Cook Dinner",
    description: "Prepare a healthy dinner with grilled chicken and vegetables",
    isCompleted: true,
    dueDate: "2025-01-19",
    status: statuses.TO_DO
  },
  {
    id: 8,
    title: "Write Blog Post",
    description: "Draft an article about JavaScript best practices",
    isCompleted: false,
    dueDate: "2025-01-27",
    status: statuses.TO_DO
  },
  {
    id: 9,
    title: "Plan Vacation",
    description: "Research and plan an itinerary for the spring break trip",
    isCompleted: false,
    dueDate: "2025-02-10",
    status: statuses.IN_PROGRESS
  },
  {
    id: 10,
    title: "Fix Bugs in App",
    description: "Resolve high-priority bugs reported in the task tracker",
    isCompleted: true,
    dueDate: "2025-01-18",
    status: statuses.IN_REVIEW
  },
];
