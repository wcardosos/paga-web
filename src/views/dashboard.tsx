/* eslint-disable @typescript-eslint/no-explicit-any */
import { BudgetSummary as BudgetSummaryComponent } from '@/components/budget-summary';
import { Expenses } from '@/components/expenses';
import { FailFeedback } from '@/components/fail-feedback';
import { Goals } from '@/components/goals';
import { Loading } from '@/components/loading';
import { ReferenceMonthSelect } from '@/components/reference-month-select';
import { logout } from '@/lib/auth';
import { BudgetSummary } from '@/shared/models/budget-summary';
import { Expense } from '@/shared/models/expense';
import { Goal } from '@/shared/models/goal';
import { useReferenceMonthStore } from '@/stores/reference-month';
import { fetchBudgetSummary } from '@/use-cases/fetch-budget-summary';
import { fetchExpenses } from '@/use-cases/fetch-expenses';
import { fetchGoals } from '@/use-cases/fetch-goals';
import { fetchReferenceMonths } from '@/use-cases/fetch-reference-months';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const [goals, setGoals] = useState<Goal[] | null>(null);
  const [expenses, setExpenses] = useState<Expense[] | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchReferenceMonths()
      .then((response) => {
        setReferenceMonths(response.data);

        setInitialSelectedMonth();
      })
      .catch((error: any) => {
        if (error.response.status === 401) {
          logout();
          navigate('/login');
        } else {
          setHasError(true);
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (!selectedMonth) return;

    setIsLoading(true);

    fetchBudgetSummary(selectedMonth)
      .then((response) => setBudgetSummary(response.data))
      .catch((error: any) => {
        if (error.response.status === 401) {
          logout();
          navigate('/login');
        } else {
          setHasError(true);
        }
      })
      .finally(() => setIsLoading(false));
  }, [selectedMonth, navigate]);

  useEffect(() => {
    if (!selectedMonth) return;

    setIsLoading(true);

    fetchGoals(selectedMonth)
      .then((response) => setGoals(response.data))
      .catch((error: any) => {
        if (error.response.status === 401) {
          logout();
          navigate('/login');
        } else {
          setHasError(true);
        }
      })
      .finally(() => setIsLoading(false));
  }, [selectedMonth, navigate]);

  useEffect(() => {
    if (!selectedMonth) return;

    setIsLoading(true);

    fetchExpenses(selectedMonth)
      .then((response) => setExpenses(response.data))
      .catch((error: any) => {
        if (error.response.status === 401) {
          logout();
          navigate('/login');
        } else {
          setHasError(true);
        }
      })
      .finally(() => setIsLoading(false));
  }, [selectedMonth, navigate]);

  if (isLoading) return <Loading />;
  if (hasError)
    return <FailFeedback>Erro ao tentar carregar os dados</FailFeedback>;

  return (
    <>
      <div className="px-6">
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

        {goals && <Goals goals={goals} />}
      </div>

      {expenses && <Expenses expenses={expenses} />}
    </>
  );
}
