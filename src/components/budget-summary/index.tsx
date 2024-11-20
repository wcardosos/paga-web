import {
  TrendingUp,
  TrendingDown,
  CheckCheck,
  DollarSign,
  Package2,
} from 'lucide-react';
import { BudgetSummaryBalance } from './budget-summary-balance';
import { BudgetSummaryItem } from './budget-summary-item';
import { BudgetSummary as BudgetSummaryInterface } from '@/shared/models/budget-summary';

interface BudgetSummaryProps {
  budgetSummary: BudgetSummaryInterface;
}

export function BudgetSummary({ budgetSummary }: Readonly<BudgetSummaryProps>) {
  return (
    <div className="pt-4 py-6 grid lg:grid-cols-2 gap-6">
      <BudgetSummaryBalance value={budgetSummary?.balance ?? 0} />

      <div className="grid grid-cols-2 gap-2 mt-2 lg:mt-0">
        <BudgetSummaryItem
          title="Receitas"
          icon={TrendingUp}
          value={budgetSummary?.income ?? 0}
          type="revenue"
        />
        <BudgetSummaryItem
          title="Despesas"
          icon={TrendingDown}
          value={budgetSummary?.expenses ?? 0}
          type="expense"
        />
        <BudgetSummaryItem
          title="Pago"
          icon={CheckCheck}
          value={budgetSummary?.paid ?? 0}
        />
        <BudgetSummaryItem
          title="A pagar"
          icon={DollarSign}
          value={budgetSummary?.unpaid ?? 0}
        />
        <BudgetSummaryItem
          title="Separado"
          icon={Package2}
          value={budgetSummary?.separated ?? 0}
        />
      </div>
    </div>
  );
}
