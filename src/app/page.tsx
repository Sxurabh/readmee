import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { SignInButton } from '@clerk/nextjs';

export default async function Home() {
  const { userId } = await auth();

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold text-foreground leading-tight mb-4">
        Create Stunning <span className="text-primary">README</span> Files in Seconds
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
        Leverage the power of AI to generate professional, attractive, and informative READMEs for your open-source projects. 100% free and open-source.
      </p>
      
      <div className="flex justify-center">
        {userId ? (
          <Button asChild size="lg" className="text-lg">
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
        ) : (
          <SignInButton mode="modal">
            <Button size="lg" className="text-lg">Get Started for Free</Button>
          </SignInButton>
        )}
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🚀 AI-Powered
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Just provide your project details, and our AI will craft a complete, well-structured README for you.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🎨 Fully Customizable
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Tailor the style, add badges, include emojis, and preview the final output before downloading.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              💖 Open Source
            </CardTitle> {/* Corrected the closing tag here */}
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Completely free to use, with all code available on GitHub for you to fork, extend, and deploy yourself.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}