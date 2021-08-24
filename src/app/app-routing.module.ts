import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarchartComponent } from './charts/barchart/barchart.component';
import { RadarchartComponent } from './charts/radarchart/radarchart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoughnutchartComponent } from './charts/doughnutchart/doughnutchart.component';
import { PiechartComponent } from './charts/piechart/piechart.component';
import { BubblechartComponent } from './charts/bubblechart/bubblechart.component';


const routes: Routes = [
  { path: '', component: DashboardComponent  },
  { path: 'barchart', component: BarchartComponent },
  { path: 'radarchart', component: RadarchartComponent },
  { path: 'piechart', component: PiechartComponent },
  { path: 'doughnutchart', component: DoughnutchartComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'bubblechart', component: BubblechartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
