import { TestBed, inject } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(service).toBeTruthy();
  });

  it('should 1 + 4 = 5', inject([CalculatorService], (service: CalculatorService) => {
    let sum = service.calculate(1, 4, CalculatorService.SUM);
    expect(sum).toEqual(5);
  }));

  it('should 5 - 4 = 1', inject([CalculatorService], (service: CalculatorService) => {
    let sub = service.calculate(5, 4, CalculatorService.SUBTRACTION);
    expect(sub).toEqual(1);
  }));

  it('should 2 * 4 = 8', inject([CalculatorService], (service: CalculatorService) => {
    let mul = service.calculate(2, 4, CalculatorService.MULTIPLY);
    expect(mul).toEqual(8);
  }));

  it('should 8 / 4 = 2', inject([CalculatorService], (service: CalculatorService) => {
    let div = service.calculate(8, 4, CalculatorService.DVISION);
    expect(div).toEqual(2);
  }));
});
