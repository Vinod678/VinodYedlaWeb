/**
 * Application-wide constants
 */

export const SITE_CONFIG = {
  title: 'Vinod Yedla | Software Engineer',
  description:
    'Backend Software Engineer with 4+ years of experience in Java, Spring Boot, and cloud-native architectures at Infosys.',
  author: 'Vinod Yedla',
  url: 'https://vinodyedla.vercel.app',
};

export const NAVIGATION_ITEMS = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'];

export const TECH_ROLES = ['Tech-Maven', 'Tech-addict', 'Surfing', 'Debugger'];

export const SCROLL_ANIMATION_OFFSET = 400; // pixels
export const TYPING_ANIMATION_SPEED = 80; // milliseconds
export const NAME_TYPING_DELAY = 1500; // milliseconds
export const ROLE_ROTATION_DELAY = 2000; // milliseconds

// EmailJS Configuration
// Uses environment variables from .env.local
export const EMAILJS_CONFIG = {
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
  serviceID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  templateID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
};
