import { LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { cn } from '@/lib/utils';

interface BudgetSummaryItemProps {
  title: string;
  icon: LucideIcon;
  type?: 'revenue' | 'expense' | 'default';
  value: number;
}

export function BudgetSummaryItem({
  title,
  icon: Icon,
  type = 'default',
  value,
}: Readonly<BudgetSummaryItemProps>) {
  return (
    <Card className="bg-zinc-800 text-zinc-200 shadow-md border-none">
      <CardHeader
        className={cn(
          'flex flex-row justify-between w-full items-center px-4 pb-4',
          type === 'revenue' && 'text-green-400',
          type === 'expense' && 'text-red-400',
        )}
      >
        <CardTitle className="font-medium text-sm">{title}</CardTitle>
        <Icon className="h-4 w-4" />
      </CardHeader>
      <CardContent className="px-4">
        <span>
          R${' '}
          {value.toLocaleString('pt-BR', {
            currency: 'BRL',
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          })}
        </span>
      </CardContent>
    </Card>
  );
}
