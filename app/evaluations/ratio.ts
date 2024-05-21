import { CoffeeType } from "@/types/coffeeType";

export function ratioEvaluation(ratio: number): CoffeeType {
    let evaluation = '';
    let result: CoffeeType;

    if (ratio <= 1.5) {
        result = CoffeeType.RISTRETTO;
    } else if (ratio > 3) {
        result = CoffeeType.LUNGO;
    } else {
        result = CoffeeType.ESPRESSO
    }

    return result;
}

export function findRatio(input: number, output: number): number {
    const currentRatio = (1 / input) * output;
    return Math.round(currentRatio * 100) / 100
}