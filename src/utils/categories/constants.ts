import { ChartLine, CreditCard, Gamepad2, HousePlus } from 'lucide-react';

export const stylesByCategory = {
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
