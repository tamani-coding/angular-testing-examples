import { API_URL } from './../interfaces/constants';
import { UsersResult } from './../interfaces/users';

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a user result', () => {
    const result: UsersResult = {
      results: [
        {
          name: {
            title: 'Mr',
            first: 'Peter',
            last: 'Parker'
          }
        }
      ]
    }

    service.getUser().subscribe(result => {
      expect(result).toBeTruthy();
      expect(result.results).toBeTruthy();
      expect(result.results.length).toEqual(1);
    })

    const req = httpMock.expectOne(API_URL);
    expect(req.request.method).toBe('GET');
    req.flush(result);
  });
});
