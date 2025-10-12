import Link from 'next/link';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary/50">
      <div className="container py-8 text-center text-muted-foreground">
        <div className="flex justify-center items-center mb-4">
          <Heart className="h-6 w-6 text-primary mr-2" />
          <Link href="/" className="text-2xl font-script text-primary">
            Joyeux
          </Link>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Joyeux – Wedding Planner & Events. All Rights Reserved.
        </p>
        <div className="flex justify-center gap-4 mt-4">
            <Link href="#" className="text-xs hover:text-primary transition-colors">Facebook</Link>
            <Link href="#" className="text-xs hover:text-primary transition-colors">Instagram</Link>
            <Link href="#" className="text-xs hover:text-primary transition-colors">Youtube</Link>
        </div>
      </div>
    </footer>
  );
}
