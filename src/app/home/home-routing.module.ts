import { NgModule } 				   from '@angular/core';
import { RouterModule, Routes } 	   from '@angular/router';

// components
import { HomeComponent }               from './home.component';
import { BarchartComponent }               from '../shared/barchart/barchart.component';
import { HeatmapComponent }               from '../shared/heatmap/heatmap.component';

// route setting
const homeRoutes: Routes = [
	{
		path: '',
		component: HomeComponent,
		outlet: 'd3Charts',
		children: [
			{ path: 'barchart', component: BarchartComponent, outlet: 'd3Charts' },
			{ path: 'heatmap', component: HeatmapComponent, outlet: 'd3Charts' }
		]
	}
]

// module setting
@NgModule({
	imports: [
		RouterModule.forChild(homeRoutes)
	],
	exports: [
		RouterModule
	]
})
export class HomeRoutingModule {}