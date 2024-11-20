import { LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { cn } from '@/lib/utils';
import { formatMoney } from '@/lib/formatter';

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
    <Card>
      <CardHeader
        className={cn(
          'flex flex-row justify-between w-full items-center',
          type === 'revenue' && 'text-green-400',
          type === 'expense' && 'text-red-400',
        )}
      >
        <CardTitle className="font-medium text-sm">{title}</CardTitle>
        <Icon className="h-4 w-4" />
      </CardHeader>
      <CardContent>
        <span>{formatMoney(value)}</span>
      </CardContent>
    </Card>
  );
}
