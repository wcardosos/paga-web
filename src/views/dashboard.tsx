import { FailFeedback } from '@/components/fail-feedback';
import { Loading } from '@/components/loading';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useReferenceMonthStore } from '@/stores/reference-month';
import { fetchReferenceMonths } from '@/use-cases/fetch-reference-months';
import { useEffect, useState } from 'react';

export function Dashboard() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const {
    referenceMonths,
    selectedMonth,
    setInitialSelectedMonth,
    setReferenceMonths,
    updateSelectedMonth,
  } = useReferenceMonthStore();

  useEffect(() => {
    fetchReferenceMonths()
      .then((response) => {
        setReferenceMonths(response.data);

        setInitialSelectedMonth();
      })
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false));
  }, []);

  const DashboardContent = () => {
    if (isLoading) return <Loading />;
    if (hasError)
      return <FailFeedback>Erro ao tentar carregar os dados</FailFeedback>;

    return (
      <div className="pt-6">
        <SelectGroup>
          <SelectLabel className="pl-0 font-normal">
            Mês de referência
          </SelectLabel>
          <Select
            name="reference-month"
            onValueChange={updateSelectedMonth}
            defaultValue={selectedMonth ?? undefined}
            value={selectedMonth!}
          >
            <SelectTrigger className="w-full bg-transparent border-zinc-400">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {referenceMonths.map((referenceMonth) => (
                <SelectItem key={referenceMonth} value={referenceMonth}>
                  {referenceMonth}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </SelectGroup>
      </div>
    );
  };

  return (
    <>
      <h1 className="text-3xl text-purple-400 font-bold">Dashboard</h1>
      <DashboardContent />
    </>
  );
}
