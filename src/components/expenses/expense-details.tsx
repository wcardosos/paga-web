import { cn } from '@/lib/utils';
import { Expense } from '@/shared/models/expense';
import { LucideIcon } from 'lucide-react';

interface ExpenseDetailsProps {
  styles: {
    borderColor: string;
    textColor: string;
    indicatorColor: string;
    icon: LucideIcon;
    label: string;
  };
  expense: Expense;
}

export function ExpenseDetails({
  expense,
  styles,
}: Readonly<ExpenseDetailsProps>) {
  const expenseStatusMapping = {
    paid: 'Pago',
    unpaid: 'A pagar',
    separated: 'Separado',
  };

  return (
    <div className="flex gap-2">
      <div
        className={cn(
          'border p-2 rounded-full',
          styles.borderColor,
          styles.textColor,
        )}
      >
        <styles.icon className="h-8 w-8" />
      </div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-2">
          <span className="font-medium">{expense.description}</span>
          <span className="text-sm text-zinc-400">
            {expenseStatusMapping[expense.status]}
          </span>
        </div>
        <div className="flex flex-col gap-2 items-end">
          <span className="font-medium">
            {expense.amount.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
          <span className="text-sm text-zinc-400">
            Vencimento: {expense.dueDay}
          </span>
        </div>
      </div>
    </div>
  );
}
