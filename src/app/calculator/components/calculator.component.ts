import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.sass']
})
export class CalculatorComponent implements OnInit {

  private num1: string;
  private num2: string;
  private result: number;
  private operation: string;

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
    this.clean();
  }

  /**
   * clean
   * 
   * @return void
   */
  clean(): void {
    this.num1 = '0';
    this.num2 = null;
    this.result = null;
    this.operation = null;
  }

  /**
   * addNumber
   * 
   * @return void
   */
  addNumber(num: string): void {
    if (this.operation) {
      this.num2 = this.concatNumber(this.num2, num);
    } else {
      this.num1 = this.concatNumber(this.num1, num);
    }
  }

  /**
   * concatNumber
   * 
   * @param val string
   * @param newVal string
   * @return string
   */
  concatNumber(val: string, newVal: string): string {
    if (val === '0' || !val) val = '';

  	if (newVal === '.' && val === '') return '0.';

  	if (newVal === '.' && val.indexOf('.') > -1) return val;

  	return val + newVal;
  }

  /**
   * defineOperation
   * 
   * @param operation string
   * @return void
   */
  defineOperation(operation: string): void {
    if (!this.operation) {
      this.operation = operation;
      return;
    }

    if (this.num2) {
      this.result = this.calculatorService.calculate(
        parseFloat(this.num1), 
        parseFloat(this.num2), 
        this.operation
      );

      this.operation = operation;
      this.num1 = this.result.toString();
      this.num2 = null;
      this.result = null;
    }
  }

  /**
   * calculate
   * 
   * @return void
   */
  calculate():void {
    if (!this.num2) return;

    this.result = this.calculatorService.calculate(
      parseFloat(this.num1), 
      parseFloat(this.num2), 
      this.operation
    );
  }

  /**
   * display
   * 
   * @return string
   */
  get display():string {
    if (this.result) return this.result.toString();
    if (this.num2) return this.num2;
    return this.num1;
  }
}
