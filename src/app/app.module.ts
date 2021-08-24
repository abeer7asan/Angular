import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarchartComponent } from './charts/barchart/barchart.component';
import { ChartsModule } from 'ng2-charts';
import { RadarchartComponent } from './charts/radarchart/radarchart.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoughnutchartComponent } from './charts/doughnutchart/doughnutchart.component';
import { PiechartComponent } from './charts/piechart/piechart.component';
import { BubblechartComponent } from './charts/bubblechart/bubblechart.component';


@NgModule({
  declarations: [
    AppComponent,
    BarchartComponent,
    RadarchartComponent,
    HeaderComponent,
    DashboardComponent,
    DoughnutchartComponent,
    PiechartComponent,
    BubblechartComponent,
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

