import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'exponentialStrength'})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent: string): number {
    let exp = parseFloat(exponent);
    return Math.pow(value, exp);
  }
}

@Pipe({name: 'myFilter'})
export class MyFilterPipe implements PipeTransform {
    transform(value: any, searchValue: string,criteriaValue: string): any {
      console.log(criteriaValue);
       let filter = searchValue.toLocaleLowerCase(); 
       return filter ? value.filter(user=> user[criteriaValue].toLocaleLowerCase().indexOf(searchValue) != -1) : value; 
    } 
}