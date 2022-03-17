import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from 'app/shared/shared.module';
import { DevicesDashboardComponent } from './devices-dashboard.component';
import { devicesDashboardRoutes } from './devices-dashboard.routing';
import {FuseCardModule} from "../../../../../@fuse/components/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
    declarations: [
        DevicesDashboardComponent
    ],
    imports: [
        RouterModule.forChild(devicesDashboardRoutes),
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatProgressBarModule,
        MatSortModule,
        MatTableModule,
        NgApexchartsModule,
        SharedModule,
        FuseCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule
    ]
})
export class DevicesDashboardModule
{
}
