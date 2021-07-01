import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormGroup } from "@angular/forms"
import { MatDialogRef } from "@angular/material/dialog"
import { TeamService } from "src/app/services/team.service"
import { v4 } from "uuid"

@Component({
    selector: "app-add-team-modal",
    templateUrl: "./add-team-modal.component.html",
    styleUrls: ["./add-team-modal.component.scss"],
})
export class AddTeamModalComponent implements OnInit {
    teamForm: FormGroup

    constructor(
        private readonly dialogRef: MatDialogRef<AddTeamModalComponent>,
        private readonly teamService: TeamService,
        formBuilder: FormBuilder
    ) {
        this.teamForm = formBuilder.group({ name: "" })
    }

    ngOnInit(): void {}

    onClose(): void {
        this.dialogRef.close()
    }

    onSave(): void {
        const newId = v4()
        this.teamService.addSingleTeam({
            name: this.teamForm.get("name")?.value || "unknown",
            logoUrl: "",
            id: newId,
        })
        this.dialogRef.close(newId)
    }
}
