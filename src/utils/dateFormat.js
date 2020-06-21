import { format } from 'date-fns';

export default function formatter(date) {
  return format(new Date(date), 'dd/MM/yyyy');
}
