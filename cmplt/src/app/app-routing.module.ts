import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubClientService } from './github-client.service';


const routes: Routes = [
  {
    path: '',
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [GithubClientService]
})
export class AppRoutingModule { }
