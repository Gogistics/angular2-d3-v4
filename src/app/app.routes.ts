import { ModuleWithProviders }         from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';

// components
import { HomeComponent }               from './home/home.component';
import { DefaultComponent }           from './shared/default/default.component';
import { NotFoundComponent }           from './not-found/not-found.component';

// route setting
const appRoutes: Routes = [
    { path: '', component: DefaultComponent, outlet: 'default' },
    { path: 'd3', loadChildren: 'app/home/home.module#HomeModule' },
    { path: '**', component: NotFoundComponent, outlet: 'default' } // page not found
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
