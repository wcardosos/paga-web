import { BudgetSummary as BudgetSummaryComponent } from '@/components/budget-summary';
import { FailFeedback } from '@/components/fail-feedback';
import { Loading } from '@/components/loading';
import { ReferenceMonthSelect } from '@/components/reference-month-select';
import { BudgetSummary } from '@/shared/models/budget-summary';
import { useReferenceMonthStore } from '@/stores/reference-month';
import { fetchBudgetSummary } from '@/use-cases/fetch-budget-summary';
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
  const [budgetSummary, setBudgetSummary] = useState<BudgetSummary | null>(
    null,
  );

  useEffect(() => {
    fetchReferenceMonths()
      .then((response) => {
        setReferenceMonths(response.data);

        setInitialSelectedMonth();
      })
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (!selectedMonth) return;

    setIsLoading(true);

    fetchBudgetSummary(selectedMonth)
      .then((response) => setBudgetSummary(response.data))
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false));
  }, [selectedMonth]);

  if (isLoading) return <Loading />;
  if (hasError)
    return <FailFeedback>Erro ao tentar carregar os dados</FailFeedback>;

  return (
    <>
      <h1 className="text-3xl text-purple-400 font-bold">Dashboard</h1>
      <div className="pt-6 lg:w-80">
        <ReferenceMonthSelect
          referenceMonths={referenceMonths}
          selectedMonth={selectedMonth}
          updateSelectedMonth={updateSelectedMonth}
        />
      </div>

      {budgetSummary && (
        <BudgetSummaryComponent budgetSummary={budgetSummary} />
      )}
    </>
  );
}
