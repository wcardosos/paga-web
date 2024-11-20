import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select';

interface ReferenceMonthSelectProps {
  referenceMonths: string[];
  selectedMonth: string | null;
  updateSelectedMonth: (selectedMonth: string) => void;
}

export function ReferenceMonthSelect({
  referenceMonths,
  selectedMonth,
  updateSelectedMonth,
}: Readonly<ReferenceMonthSelectProps>) {
  return (
    <SelectGroup>
      <SelectLabel className="pl-0 font-normal">Mês de referência</SelectLabel>
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
  );
}
