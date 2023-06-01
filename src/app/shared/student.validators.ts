import { AbstractControl } from "@angular/forms";

export function percentageLimit(control: AbstractControl): {[key:string]:boolean} | null{
    const percentage = control.value;
    return percentage > 100 ? {['limitCross'] : true } : null;
}

export function department(control: AbstractControl): {[key:string]:boolean} | null{
    const dept = control.value;
    return dept == 0 ? {['invalid']:true} : null;
}

