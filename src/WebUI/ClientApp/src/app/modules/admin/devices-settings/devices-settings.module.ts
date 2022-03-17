import { Route, RouterModule } from '@angular/router';
import {MatIconModule} from "@angular/material/icon";
import {CommonModule} from "@angular/common";
import {MatTooltipModule} from "@angular/material/tooltip";
import {NgModule} from "@angular/core";
import {DevicesSettingsComponent} from "./devices-settings.component";

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: DevicesSettingsComponent
    }
];

@NgModule({
    declarations: [
        DevicesSettingsComponent
    ],
    imports: [
        RouterModule.forChild(exampleRoutes),
        MatIconModule,
        CommonModule,
        MatTooltipModule
    ]
})
export class DevicesSettingsModule
{
}
