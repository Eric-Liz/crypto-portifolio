import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items/items.component';
import { HeaderComponent } from './template/header/header.component';

const routes: Routes = [
  {path: '', pathMatch:'full',redirectTo: 'home'},
  {
    path: 'items',
    loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
  },
  {path:"home",
  component:HeaderComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
