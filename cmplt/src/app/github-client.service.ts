import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map'



@Injectable()
export class GithubClientService {

  private _myId:string

  constructor(private _http:Http) { 
    console.log('Github Client Service Triggered')
    this._myId='nimasalehi39'
  }

  fncGetMyProfile(){
    return this._http.get('http://api.github.com/users/'+this._myId)
                     .map(res=>res.json()) 
  }
  fncGetMyProfileRepos(){
    return this._http.get('http://api.github.com/users/'+this._myId+'/repos')
                     .map(res=>res.json()) 
  }

}
