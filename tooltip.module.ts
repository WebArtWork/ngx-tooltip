import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { TooltipComponent } from './tooltip.component';

@NgModule({
	imports: [
		CoreModule
	],
	declarations: [
		TooltipComponent
	],
	providers: [],
	exports: [TooltipComponent]
})

export class TooltipModule { }
