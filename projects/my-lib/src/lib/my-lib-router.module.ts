import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';


const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'my-lib',
        pathMatch: 'full',
        data: {
            breadcrumb: ''
        }
    },
    {
        path: 'my-lib',
        component: MyLibComponent,
        data: {
            breadcrumb: 'My Library'
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class MyLibRoutingModule { }