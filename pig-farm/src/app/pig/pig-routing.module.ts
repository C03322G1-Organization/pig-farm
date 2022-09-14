import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PigCreateComponent} from './pig-create/pig-create.component';
import {PigUpdateComponent} from './pig-update/pig-update.component';


const routes: Routes = [
  {
    path: 'pig/create', component: PigCreateComponent
  },
  {
    path: 'pig/update/:id', component: PigUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PigRoutingModule {
}
