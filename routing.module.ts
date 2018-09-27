import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { StartcheckinComponent } from './components/startcheckin/startcheckin.component';
import { CheckinComponent } from './components/checkin/checkin.component';

const routes:Routes =[
    {path:'',redirectTo:'',pathMatch:'full'},
    {
        path:'startCheckIn',
        component:StartcheckinComponent
    },
    {
        path:'checkIn',
        component:CheckinComponent
    },
    {
        path:'confirm',
        component:ConfirmComponent
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRouterModule{}