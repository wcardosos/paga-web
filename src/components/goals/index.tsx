import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Goal } from '@/shared/models/goal';
import { ChartLine, CreditCard, Gamepad2, HousePlus } from 'lucide-react';
import { GoalDetails } from './goal-details';

interface GoalsProps {
  goals: Goal[];
}

export function Goals({ goals }: Readonly<GoalsProps>) {
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
    <Card>
      <CardHeader>
        <CardTitle>Metas</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {goals?.map((goal) => {
          const styles = stylesByCategory[goal.category];

          return (
            <GoalDetails styles={styles} key={goal.category} goal={goal} />
          );
        })}
        {goals.length === 0 && (
          <span className="mx-auto">Sem metas para este mês</span>
        )}
      </CardContent>
    </Card>
  );
}
