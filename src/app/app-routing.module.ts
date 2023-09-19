import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { UserPageComponent } from './user-page/user-page.component';
import { BoardPanelComponent } from './user-page/board-panel/board-panel.component';
import { EditUserComponent } from './user-page/edit-user/edit-user.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
{path:'product',component:ProductComponent},
{path:'leftNav',component:LeftnavComponent},
{path:'UserPage',component:UserPageComponent},
{path:'board',component:BoardPanelComponent},
{path:'EditUser',component:EditUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
