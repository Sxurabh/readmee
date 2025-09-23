import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware({
  // Make the root route public
  publicRoutes: ['/'],
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};