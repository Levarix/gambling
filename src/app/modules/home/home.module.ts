import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { HomeComponent } from "./components/home/home.component"
import { MatchCardComponent } from "./components/match-card/match-card.component"
import { MaterialModule } from "../../material.module"
import { AddBetComponent } from "./components/add-bet/add-bet.component"
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TimePickerComponent } from './components/time-picker/time-picker.component'
import { TeamModule } from "../team/team.module"

@NgModule({
    declarations: [HomeComponent, MatchCardComponent, AddBetComponent, TimePickerComponent],
    imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, TeamModule],
})
export class HomeModule {}
