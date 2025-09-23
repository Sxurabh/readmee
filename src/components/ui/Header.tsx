import Link from 'next/link';
import { Button } from './button';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function Header() {
  return (
    <header className="bg-background border-b">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-bold">
          <Link href="/" className="hover:text-primary transition-colors">
            AI README Generator
          </Link>
        </div>
        <div>
          <SignedIn>
            {/* Mount the UserButton component */}
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            {/* Signed out users get a Sign In button */}
            <SignInButton mode="modal">
              <Button>Sign In</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
}