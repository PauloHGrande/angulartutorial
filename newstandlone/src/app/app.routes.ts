import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AddComponent } from './components/add/add.component';
import { StatusComponent } from './components/status/status.component';
import { authGuard } from './guard/auth.guard';
import { childauthGuard } from './guard/childauth.guard';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [
            authGuard
        ]
    },
    {
        path: 'about',
        component: AboutComponent,
        canActivate: [
            authGuard
        ]
    },
    {
        path: 'about/:submenu/:id',
        component: AboutComponent,
        canActivate: [
            authGuard
        ]
    },
    {
        path: 'contact',
        component: ContactComponent,
        canActivate: [
            authGuard
        ]    
    },
    {
        path: 'customer',
        component: CustomerComponent,
        canActivate: [
            authGuard
        ],
        canActivateChild: [
            childauthGuard
        ],
        children:[
            {
                path: 'add',
                component: AddComponent
            },
            {
                path: 'edit/:id',
                component: AddComponent
            }
         ]
    },
    {
        path: '**',
        component: StatusComponent
    }
];
