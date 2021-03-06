import { Component, OnInit } from '@angular/core';

import { GithubClientService } from '../github-client.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user=['']
repos=['']
username:string
  constructor(private _githubService:GithubClientService) {
    this._githubService.fncGetMyProfile()
        .subscribe(
          user=>{
            console.log(user)
            this.user=user
          }
        )
    this._githubService.fncGetMyProfileRepos()
        .subscribe(
          repos=>{
            console.log(repos)
            this.repos=repos
          }
        )
   }
   searchUser(){
     console.log('works')
     this._githubService.updateUser(this.username);
       
       this._githubService.fncGetMyProfile().subscribe(user => {
            //console.log(user);
            this.user = user;
        })
        
        this._githubService.fncGetMyProfileRepos().subscribe(repos => {
            this.repos = repos;
        })

   }
  ngOnInit() {
  }

}
