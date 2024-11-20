import { Scale } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

interface BudgetSummaryBalanceProps {
  value: number;
}

export function BudgetSummaryBalance({
  value,
}: Readonly<BudgetSummaryBalanceProps>) {
  return (
    <Card className="bg-purple-300 text-zinc-800 shadow-md rounded-3xl lg:h-fit">
      <CardHeader className="flex flex-row justify-between w-full items-center px-4 pb-4">
        <CardTitle className="text-xl font-medium">Balanço</CardTitle>
        <Scale className="h-6 w-6" />
      </CardHeader>
      <CardContent className="px-4">
        <span className="text-[2.5rem]">
          R${' '}
          {value.toLocaleString('pt-BR', {
            currency: 'BRL',
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          })}
        </span>

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
