import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  static readonly SUM: string = '+';
  static readonly SUBTRACTION: string = '-';
  static readonly MULTIPLY: string = '*';
  static readonly DVISION: string = '/';

  constructor() { }

  /**
   * calculate
   * 
   * @param num1 number
   * @param num2 number
   * @param operation string type of operation (ex. sum)
   * @return number calculated number
   */
  calculate(num1: number, num2: number, operation: string): number {
    let result: number;

    switch (operation) {
      case CalculatorService.SUM:
        result = num1 + num2;
        break;
      case CalculatorService.SUBTRACTION:
        result = num1 - num2;
        break;
      case CalculatorService.MULTIPLY:
        result = num1 * num2;
        break;
      case CalculatorService.DVISION:
        result = num1 / num2;
        break;
      default:
        result = 0;
        break;
    }

    return result;
  }
}
