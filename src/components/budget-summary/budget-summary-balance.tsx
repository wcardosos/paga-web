import { Scale } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { formatMoney } from '@/lib/formatter';

interface BudgetSummaryBalanceProps {
  value: number;
}

export function BudgetSummaryBalance({
  value,
}: Readonly<BudgetSummaryBalanceProps>) {
  return (
    <Card className="bg-purple-300 text-zinc-800 shadow-md lg:h-fit">
      <CardHeader className="flex flex-row justify-between w-full items-center">
        <CardTitle className="text-xl font-medium">Balanço</CardTitle>
        <Scale className="h-6 w-6" />
      </CardHeader>
      <CardContent>
        <span className="text-[2.5rem]">{formatMoney(value)}</span>

        <div className="flex flex-col gap-2 pt-4">
          <Button className="w-min rounded-full px-6 py-3 font-medium h-min">
            Ir para despesas
          </Button>
          <Button
            className="w-min rounded-full px-6 py-3 font-medium h-min"
            variant="outline"
          >
            Ir para metas
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
