export interface Goal {
  category: 'essential' | 'leisure' | 'investments' | 'cards';
  amount: number;
  currentAmount: number;
  progress: number;
}
