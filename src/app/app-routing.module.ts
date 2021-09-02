import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetProjComponent } from './components/det-proj/det-proj.component';
import { DetSumEtfsComponent } from './components/det-sum-etfs/det-sum-etfs.component';
import { DetailedSumComponent } from './components/detailed-sum/detailed-sum.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SumEtfsComponent } from './components/sum-etfs/sum-etfs.component';
import { SummaryComponent } from './components/summary/summary.component';
import { WikiComponent } from './components/wiki/wiki.component';

const routes: Routes = [//DECLARING ALL ROUTES OF SITE
  {path: 'home', component: HomeComponent},
  {path: 'summary', component: SummaryComponent,},
  {path: 'detailed-sum', component: DetailedSumComponent},
  {path: 'sum-etfs', component: SumEtfsComponent,},
  {path: 'det-sum-etfs', component: DetSumEtfsComponent,},
  {path: 'wiki', component: WikiComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'det-proj', component: DetProjComponent},
  {path: 'notfound', component: NotfoundComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}//Si no encuentra la ruta redirige a home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
