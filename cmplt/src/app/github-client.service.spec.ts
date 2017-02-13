/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GithubClientService } from './github-client.service';

describe('GithubClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubClientService]
    });
  });

  it('should ...', inject([GithubClientService], (service: GithubClientService) => {
    expect(service).toBeTruthy();
  }));
});
