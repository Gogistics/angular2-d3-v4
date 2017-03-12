import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';

// components
import { HomeComponent }        from './home.component';
import { BarchartComponent }    from '../shared/barchart/barchart.component';
import { HeatmapComponent }     from '../shared/heatmap/heatmap.component';

// routing module
import { HomeRoutingModule }    from './home-routing.module'

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        BarchartComponent,
        HeatmapComponent
    ]
})
export class HomeModule { }
