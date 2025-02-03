import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AddComponent } from './components/add/add.component';
import { StatusComponent } from './components/status/status.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'about/:submenu/:id',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent    
    },
    {
        path: 'customer',
        component: CustomerComponent,
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
