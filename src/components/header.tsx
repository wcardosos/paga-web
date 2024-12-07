import { LogOut } from 'lucide-react';
import { Button } from './ui/button';
import { Logo } from './logo';
import { useNavigate } from 'react-router-dom';
import { logout } from '@/lib/auth';

export function Header() {
  const navigate = useNavigate();

  const onLogout = () => {
    logout();

    navigate('/login');
  };

  return (
    <header className="flex items-center justify-between py-6">
      <Logo />
      <Button size="icon" variant="ghost" onClick={onLogout}>
        <LogOut className="w-6 h-6 text-purple-400" />
      </Button>
    </header>
  );
}
