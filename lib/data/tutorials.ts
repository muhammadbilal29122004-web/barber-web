/**
 * Tutorial Data Service
 * 
 * This file contains dummy data for tutorials.
 * When integrating real data, replace the functions below with API calls
 * or database queries.
 */

export interface Tutorial {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  author: {
    name: string;
    avatar: string;
  };
  duration: string;
  instructorId?: number;
  link?: string;
  videoUrl?: string;
  fullDescription?: string;
}

export interface Review {
  id: number;
  userId: number;
  userName: string;
  userAvatar: string;
  rating: number; // 1-5
  title: string;
  comment: string;
  date: string;
}

/**
 * Dummy data arrays - Replace with API calls when ready
 */
const DUMMY_TITLES = [
  "Classic Fade Technique",
  "Advanced Skin Fade Mastery",
  "Beard Trimming Fundamentals",
  "Scissor Over Comb Techniques",
  "Modern Pompadour Styling",
  "Clipper Maintenance and Care",
  "High Fade with Design",
  "Beard Line-Up Perfection",
  "Texturizing Techniques",
  "Razor Fade Mastery",
];

const DUMMY_DESCRIPTIONS = [
  "Master precise beard shaping and clean line-ups with easy-to-follow guidance.",
  "Learn advanced techniques for creating seamless skin fades with professional precision.",
  "Discover the fundamentals of beard trimming and styling for a polished look.",
  "Master the art of scissor over comb techniques for professional haircuts.",
  "Learn modern pompadour styling techniques for classic and contemporary looks.",
  "Essential guide to maintaining and caring for your clippers for optimal performance.",
  "Create stunning high fades with intricate designs and patterns.",
  "Perfect your beard line-up skills with step-by-step instructions.",
  "Learn texturizing techniques to add depth and movement to any haircut.",
  "Master razor fade techniques for the cleanest, sharpest fades possible.",
];

const DUMMY_AUTHORS = [
  { name: "Devonte Malia Mya", avatar: "/1.jpg" },
  { name: "John Wick", avatar: "/2.jpg" },
  { name: "Saira Jones", avatar: "/3.jpg" },
  { name: "Marvin Martinez", avatar: "/4.jpg" },
  { name: "Arlene McCoy", avatar: "/5.jpg" },
  { name: "Frank Castle", avatar: "/1.jpg" },
  { name: "James Will", avatar: "/2.jpg" },
  { name: "Michael Jack", avatar: "/3.jpg" },
  { name: "Saira Jones", avatar: "/1.jpg" },
];

const DUMMY_DURATIONS = ["6 min", "8 min", "10 min", "12 min", "15 min", "18 min", "20 min"];

const THUMBNAIL_IMAGES = [
  "/video/1.jpg",
  "/video/2.jpg",
  "/video/3.jpg",
  "/video/4.jpg",
  "/video/5.jpg",
  "/video/6.jpg",
];

/**
 * Fetches all tutorials synchronously
 */
export function getAllTutorials(): Tutorial[] {
  // Generate dummy data
  const totalTutorials = 100;
  return Array.from({ length: totalTutorials }, (_, i) => ({
    id: i + 1,
    title: DUMMY_TITLES[i % DUMMY_TITLES.length],
    description: DUMMY_DESCRIPTIONS[i % DUMMY_DESCRIPTIONS.length],
    thumbnail: THUMBNAIL_IMAGES[i % THUMBNAIL_IMAGES.length],
    author: DUMMY_AUTHORS[i % DUMMY_AUTHORS.length],
    duration: DUMMY_DURATIONS[i % DUMMY_DURATIONS.length],
    link: `/tutorials/${i + 1}`,
  }));
}

/**
 * Fetches tutorials by instructor ID synchronously
 */
export function getTutorialsByInstructor(
  instructorId: number
): Tutorial[] {
  const allTutorials = getAllTutorials();

  // For dummy data, assign tutorials to instructors
  // In real implementation, this would be filtered by instructorId
  return allTutorials.filter((_, index) => index % 10 < 4); // Return subset for demo
}

/**
 * Fetches a single tutorial by ID synchronously
 */
export function getTutorialById(id: number): Tutorial | null {
  const tutorials = getAllTutorials();
  const tutorial = tutorials.find((tutorial) => tutorial.id === id);

  if (!tutorial) return null;

  const defaultVideoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4";

  return {
    ...tutorial,
    fullDescription: "Learn the essential steps to blending a perfect skin fade. This comprehensive tutorial covers everything from setting your initial guidelines to the final clipper-over-comb detailing.",
    videoUrl: defaultVideoUrl,
  };
}

/**
 * Dummy reviews data
 */
const DUMMY_REVIEWS: Review[] = [
  {
    id: 1,
    userId: 1,
    userName: "John Doe",
    userAvatar: "/icons/user.jpg",
    rating: 5,
    title: "Very Good Product",
    comment: "This Supplement Delivers Explosive Energy And Noticeable Strength Gains With Every Workout. The Taste is Surprisingly Good And The Results Speak For Themselves After Just A Few Sessions.",
    date: "2024-01-15",
  },
  {
    id: 2,
    userId: 2,
    userName: "John Doe",
    userAvatar: "/icons/user.jpg",
    rating: 5,
    title: "Very Good Product",
    comment: "This Supplement Delivers Explosive Energy And Noticeable Strength Gains With Every Workout. The Taste is Surprisingly Good And The Results Speak For Themselves After Just A Few Sessions.",
    date: "2024-01-20",
  },
  {
    id: 3,
    userId: 3,
    userName: "Sarah Smith",
    userAvatar: "/icons/user.jpg",
    rating: 4,
    title: "Great Tutorial",
    comment: "Really helpful tutorial that breaks down the techniques step by step. The instructor is clear and the video quality is excellent.",
    date: "2024-01-18",
  },
  {
    id: 4,
    userId: 4,
    userName: "Mike Johnson",
    userAvatar: "/icons/user.jpg",
    rating: 5,
    title: "Excellent Content",
    comment: "This tutorial helped me improve my skills significantly. The explanations are thorough and easy to follow.",
    date: "2024-01-22",
  },
  {
    id: 5,
    userId: 5,
    userName: "Emily Davis",
    userAvatar: "/icons/user.jpg",
    rating: 4,
    title: "Very Informative",
    comment: "Great tutorial with practical tips. I've already applied some of these techniques in my work.",
    date: "2024-01-25",
  },
  {
    id: 6,
    userId: 6,
    userName: "David Wilson",
    userAvatar: "/icons/user.jpg",
    rating: 5,
    title: "Perfect for Beginners",
    comment: "As someone new to barbering, this tutorial was exactly what I needed. Clear instructions and great pacing.",
    date: "2024-01-28",
  },
];

/**
 * Fetches reviews for a tutorial synchronously
 */
export function getTutorialReviews(tutorialId: number): Review[] {
  return DUMMY_REVIEWS;
}

/**
 * Calculates average rating from reviews
 */
export function calculateAverageRating(reviews: Review[]): number {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return Number((sum / reviews.length).toFixed(2));
}

/**
 * Searches tutorials by query synchronously
 */
export function searchTutorials(query: string): Tutorial[] {
  const tutorials = getAllTutorials();

  if (!query.trim()) {
    return tutorials;
  }

  const lowerQuery = query.toLowerCase();
  return tutorials.filter(
    (tutorial) =>
      tutorial.title.toLowerCase().includes(lowerQuery) ||
      tutorial.description.toLowerCase().includes(lowerQuery) ||
      tutorial.author.name.toLowerCase().includes(lowerQuery)
  );
}
