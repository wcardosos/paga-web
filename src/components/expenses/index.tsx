import { Expense } from '@/shared/models/expense';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ExpenseDetails } from './expense-details';
import { ChartLine, CreditCard, Gamepad2, HousePlus } from 'lucide-react';

interface ExpensesProps {
  expenses: Expense[];
}

export function Expenses({ expenses }: Readonly<ExpensesProps>) {
  const stylesByCategory = {
    essential: {
      label: 'Essencial',
      indicatorColor: 'bg-blue-400',
      borderColor: 'border-blue-400',
      textColor: 'text-blue-400',
      icon: HousePlus,
    },
    leisure: {
      label: 'Lazer',
      indicatorColor: 'bg-orange-400',
      borderColor: 'border-orange-400',
      textColor: 'text-orange-400',
      icon: Gamepad2,
    },
    investments: {
      label: 'Investimentos',
      indicatorColor: 'bg-yellow-600',
      borderColor: 'border-yellow-600',
      textColor: 'text-yellow-600',
      icon: ChartLine,
    },
    cards: {
      label: 'Cartões',
      indicatorColor: 'bg-purple-700',
      borderColor: 'border-purple-700',
      textColor: 'text-purple-700',
      icon: CreditCard,
    },
  };
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Saídas</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {expenses?.map((expense) => {
          const styles = stylesByCategory[expense.category];

          return (
            <ExpenseDetails
              key={expense.description}
              expense={expense}
              styles={styles}
            />
          );
        })}
        {expenses.length === 0 && (
          <span className="mx-auto">Sem despesas para este mês</span>
        )}
      </CardContent>
    </Card>
  );
}
