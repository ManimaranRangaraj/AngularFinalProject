import { AbstractControl } from "@angular/forms";
import { ApiserviceService } from "../apiservice.service";
import { Department } from "../department";

export function departmentNameUnique(control: AbstractControl, depart: Department[]): {[key:string]:boolean} | null {
    console.log(control);
    const departName = control.value;

    return departName ? {'unique': true} : null;
}