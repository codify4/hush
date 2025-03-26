import { LucideIcon, Moon, Sparkles, Timer } from "lucide-react-native";

interface Stat {
    id: number;
    name: string;
    icon: LucideIcon;
    days: number;
}

export const stats: Stat[] = [
    {
        id: 1,
        name: 'longest streak',
        icon: Moon,
        days: 10
    },
    {
        id: 2,
        name: 'current streak',
        icon: Timer,
        days: 101
    },
    {
        id: 3,
        name: 'total minutes',
        icon: Sparkles,
        days: 101
    }
]; 