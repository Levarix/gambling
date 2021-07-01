import { Component, OnInit } from "@angular/core"
import { MatDialog } from "@angular/material/dialog"
import { Router } from "@angular/router"
import { Team } from "src/app/models/team.model"
import { TeamService } from "src/app/services/team.service"
import { AddTeamModalComponent } from "../add-team-modal/add-team-modal.component"

@Component({
    selector: "app-teams-list",
    templateUrl: "./teams-list.component.html",
    styleUrls: ["./teams-list.component.scss"],
})
export class TeamsListComponent implements OnInit {
    teams: Team[] = []

    constructor(
        private readonly _teamsService: TeamService,
        private readonly _dialog: MatDialog,
        private readonly router: Router
    ) {}

    ngOnInit(): void {
        this._teamsService.getTeams().subscribe((response) => {
            this.teams = response
        })
    }

    addTeam(): void {
        const ref = this._dialog.open(AddTeamModalComponent, {
            width: "500px",
            autoFocus: false,
        })
        ref.afterClosed().subscribe((response) => {
            if (response) this.router.navigateByUrl(`/teams/${response}`)
        })
    }
}
