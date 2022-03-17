import { Route } from '@angular/router';
import { FinanceResolver } from 'app/modules/admin/dashboards/finance/finance.resolvers';
import {DevicesDashboardComponent} from "./devices-dashboard.component";

export const devicesDashboardRoutes: Route[] = [
    {
        path     : '',
        component: DevicesDashboardComponent,
        resolve  : {
            data: FinanceResolver
        }
    }
];
