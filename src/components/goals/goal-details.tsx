import { formatMoney } from '@/lib/formatter';
import { cn } from '@/lib/utils';
import { Goal } from '@/shared/models/goal';
import { Progress } from '../ui/progress';
import { LucideIcon } from 'lucide-react';

interface GoalDetailsProps {
  styles: {
    borderColor: string;
    textColor: string;
    indicatorColor: string;
    icon: LucideIcon;
    label: string;
  };
  goal: Goal;
}

export function GoalDetails({ styles, goal }: Readonly<GoalDetailsProps>) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <div
          className={cn(
            'border p-1 rounded-full',
            styles.borderColor,
            styles.textColor,
          )}
        >
          <styles.icon className="h-4 w-4" />
        </div>
        <span>
          {styles.label || goal.category} - {formatMoney(goal.amount)}
        </span>
      </div>
      <Progress
        value={goal.progress}
        className="bg-zinc-700 h-6 lg:h-8 text-xs"
        indicatorColor={styles.indicatorColor}
        indicatorLabel={`${goal.progress}% | ${formatMoney(goal.currentAmount)}`}
      />
    </div>
  );
}
