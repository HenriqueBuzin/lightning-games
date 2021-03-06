// Models
import { Manufacture } from './manufacture';
import { Platform } from './platform';

export class Game {
    id: number;
    name: string;
    category: string;
    price: number;
    quantity: number;
    production: boolean;
    manufactureId: number;
    platform: number;
    manufacture: Manufacture;
    description: string;
}
