import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { PracticeMainModule } from './practice-main/practice-main.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TrackorderComponent } from './trackorder/trackorder.component';
import { StatusComponent } from './status/status.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccumulationChartModule,PieSeriesService, AccumulationDataLabelService,AccumulationLegendService } from '@syncfusion/ej2-angular-charts';
import {ChartModule, CategoryService, ColumnSeriesService} from '@syncfusion/ej2-angular-charts';
import { NgChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidebarComponent,
    TrackorderComponent,
    StatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PracticeMainModule,
    NgbModule,
    AccumulationChartModule,
    ChartModule,
    NgChartsModule,
    NgxChartsModule
    
  ],
  providers: [PieSeriesService, AccumulationDataLabelService,AccumulationDataLabelService,CategoryService,ColumnSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
