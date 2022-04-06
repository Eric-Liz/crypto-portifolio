import { DashboardComponent } from './template/dashboard/dashboard.component';
import { CurrenciesComponent } from './template/currencies/currencies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', pathMatch:'full',redirectTo: 'dashboard'},
  {
    path: 'items',
    loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
  },
  {path:"dashboard",
  component:DashboardComponent
  },
  {path:"currencies",
  component:CurrenciesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
