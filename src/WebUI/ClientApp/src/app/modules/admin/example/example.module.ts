import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import {MatIconModule} from "@angular/material/icon";
import {CommonModule} from "@angular/common";
import {MatTooltipModule} from "@angular/material/tooltip";
import {FuseCardModule} from "../../../../@fuse/components/card";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {FuseNavigationModule} from "../../../../@fuse/components/navigation";

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: ExampleComponent
    }
];

@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports: [
        RouterModule.forChild(exampleRoutes),
        MatIconModule,
        CommonModule,
        MatTooltipModule,
        FuseCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule,
        FormsModule,
        MatSidenavModule,
        MatProgressBarModule,
        FuseNavigationModule
    ]
})
export class ExampleModule
{
}
