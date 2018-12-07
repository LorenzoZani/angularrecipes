import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "abstract"
})
export class AbstractPipe implements PipeTransform {
  transform(value: string, limit: number = 50, suffix: any = "..."): any {
    const abstractString = value.substring(0, limit);
    return abstractString + suffix;
  }
}
