import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { StatusComponent } from './status/status.component';
import { TrackorderComponent } from './trackorder/trackorder.component';


const routes: Routes = [
  {
    path:"main",
    component:MainComponent
  },
  {
    path:"status",
    component:StatusComponent
  },
{
  path:"trackorder",
  component:TrackorderComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
