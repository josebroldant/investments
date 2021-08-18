import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailedSumComponent } from './components/detailed-sum/detailed-sum.component';
import { SummaryComponent } from './components/summary/summary.component';
import { WikiComponent } from './components/wiki/wiki.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { SumEtfsComponent } from './components/sum-etfs/sum-etfs.component';
import { DetSumEtfsComponent } from './components/det-sum-etfs/det-sum-etfs.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailedSumComponent,
    SummaryComponent,
    WikiComponent,
    NotfoundComponent,
    HomeComponent,
    SumEtfsComponent,
    DetSumEtfsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
