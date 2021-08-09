import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedSumComponent } from './components/detailed-sum/detailed-sum.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SummaryComponent } from './components/summary/summary.component';
import { WikiComponent } from './components/wiki/wiki.component';

const routes: Routes = [//DECLARING ALL ROUTES OF SITE
  {path: 'detailed-sum', component: DetailedSumComponent},
  {path: 'summary', component: SummaryComponent,},
  {path: 'wiki', component: WikiComponent},
  {path: 'notfound', component: NotfoundComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'notfound'}//Si no encuentra la ruta redirige a notfound
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
