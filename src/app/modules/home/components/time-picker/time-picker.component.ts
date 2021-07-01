import { Component, Input, OnInit } from "@angular/core"
import { FormGroup } from "@angular/forms"

@Component({
    selector: "home-time-picker",
    templateUrl: "./time-picker.component.html",
    styleUrls: ["./time-picker.component.scss"],
})
export class TimePickerComponent implements OnInit {
    @Input() form!: FormGroup
    constructor() {}

    ngOnInit(): void {}
}
