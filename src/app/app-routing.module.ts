import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {path: 'todo', component: ListComponent, data: {isActive: true}},
  {path: 'done', component: ListComponent, data: {isActive: false}},
  {path: 'edit/:id', component: EditComponent},
  {path: 'edit', component: EditComponent},
  {path: '', redirectTo: '/todo', pathMatch: 'full'},
  {path: '**', redirectTo: '/todo'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
