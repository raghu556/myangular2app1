import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'exponentialStrength'})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent: string): number {
    let exp = parseFloat(exponent);
    return Math.pow(value, exp);
  }
}

@Pipe({name: 'movieFilter'})
export class MovieFilterPipe implements PipeTransform {
    transform(value: any, args: string): any {
       let filter = args.toLocaleLowerCase(); 
       return filter ? value.filter(movie=> movie.director.toLocaleLowerCase().indexOf(args) != -1) : value; 
    } 
}