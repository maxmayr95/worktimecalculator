import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorktimeComponent } from './worktime/worktime.component';

const routes: Routes = [{ path: '', component: WorktimeComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
