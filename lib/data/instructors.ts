/**
 * Instructor Data Service
 * 
 * This file contains dummy data for instructors.
 * When integrating real data, replace the functions below with API calls
 * or database queries.
 */

export interface Instructor {
  id: number;
  name: string;
  skills: string[];
  image: string;
}

/**
 * Dummy data arrays - Replace with API calls when ready
 */
const DUMMY_NAMES = [
  "Frank Castle", "John Wick", "James Will", "Michael Jack", "James",
  "David Smith", "Robert Johnson", "William Brown", "Richard Davis", "Joseph Miller",
  "Thomas Wilson", "Charles Moore", "Christopher Taylor", "Daniel Anderson", "Matthew Thomas",
  "Anthony Jackson", "Mark White", "Donald Harris", "Steven Martin", "Paul Thompson",
  "Andrew Garcia", "Joshua Martinez", "Kenneth Robinson", "Kevin Clark", "Brian Rodriguez",
  "George Lewis", "Edward Lee", "Ronald Walker", "Timothy Hall", "Jason Allen",
  "Jeffrey Young", "Ryan King", "Jacob Wright", "Gary Lopez", "Nicholas Hill",
  "Eric Scott", "Stephen Green", "Jonathan Adams", "Larry Baker", "Justin Gonzalez",
  "Raymond Nelson", "Samuel Carter", "Brandon Mitchell", "Alexander Perez", "Patrick Roberts",
  "Jack Turner", "Dennis Phillips", "Jerry Campbell", "Tyler Parker", "Aaron Evans",
  "Henry Edwards", "Douglas Collins", "Nathan Stewart", "Zachary Sanchez", "Adam Morris",
  "Peter Rogers", "Harold Reed", "Carl Cook", "Arthur Morgan", "Lawrence Bell",
  "Roger Murphy", "Keith Bailey", "Jeremy Rivera", "Terry Cooper", "Sean Richardson",
  "Ralph Cox", "Louis Howard", "Eugene Ward", "Wayne Torres", "Roy Peterson",
  "Ralph Gray", "Bobby Ramirez", "Johnny James", "Willie Watson", "Earl Brooks",
  "Billy Kelly", "Steve Sanders", "Albert Price", "Jimmy Bennett", "Harry Wood",
  "Wayne Barnes", "Alan Ross", "Juan Henderson", "Randy Coleman", "Philip Jenkins",
  "Bobby Perry", "Johnny Powell", "Willie Long", "Earl Patterson", "Billy Hughes",
  "Steve Flores", "Albert Washington", "Jimmy Butler", "Harry Simmons", "Wayne Foster"
];

const DUMMY_SKILL_SETS = [
  ["Fades", "Beard Shaping", "Clipper Control"],
  ["Classic Cuts", "Hair Styling", "Scissor Work"],
  ["Modern Fades", "Beard Design", "Precision Cutting"],
  ["Advanced Techniques", "Clipper Mastery", "Style Consultation"],
  ["Traditional Cuts", "Beard Grooming", "Customer Service"],
];

const DUMMY_IMAGES = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg"];

/**
 * Fetches all instructors
 * 
 * TODO: Replace with actual API call
 * Example: return await fetch('/api/instructors').then(res => res.json());
 */
export async function getAllInstructors(): Promise<Instructor[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 0));

  // Generate dummy data
  const totalInstructors = 100;
  return Array.from({ length: totalInstructors }, (_, i) => ({
    id: i + 1,
    name: DUMMY_NAMES[i % DUMMY_NAMES.length],
    skills: DUMMY_SKILL_SETS[i % DUMMY_SKILL_SETS.length],
    image: DUMMY_IMAGES[i % DUMMY_IMAGES.length],
  }));
}

/**
 * Fetches a single instructor by ID
 * 
 * TODO: Replace with actual API call
 * Example: return await fetch(`/api/instructors/${id}`).then(res => res.json());
 */
export async function getInstructorById(id: number): Promise<Instructor | null> {
  const instructors = await getAllInstructors();
  return instructors.find((instructor) => instructor.id === id) || null;
}

/**
 * Searches instructors by query
 * 
 * TODO: Replace with actual API call with server-side search
 * Example: return await fetch(`/api/instructors/search?q=${query}`).then(res => res.json());
 */
export async function searchInstructors(query: string): Promise<Instructor[]> {
  const instructors = await getAllInstructors();
  
  if (!query.trim()) {
    return instructors;
  }

  const lowerQuery = query.toLowerCase();
  return instructors.filter(
    (instructor) =>
      instructor.name.toLowerCase().includes(lowerQuery) ||
      instructor.skills.some((skill) => skill.toLowerCase().includes(lowerQuery))
  );
}

