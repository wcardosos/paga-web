import { LogOut } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  return (
    <header className="flex items-center justify-between py-6">
      <span className="font-bold text-purple-400 text-xl">paguei</span>
      <Button size="icon" variant="ghost">
        <LogOut className="w-6 h-6 text-purple-400" />
      </Button>
    </header>
  );
}
