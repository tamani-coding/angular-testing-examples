import { Observable, of } from 'rxjs';
import { UserService } from './../../services/user.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    const userServiceMock = jasmine.createSpyObj<UserService>(['getUser']);
    // mock user service function
    userServiceMock.getUser.and.callFake(function () {
      return of({
        results: [
          {
            name: {
              title: 'Mr',
              first: 'Peter',
              last: 'Parker'
            }
          }
        ]
      });
    });

    await TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [
        {
          provide: UserService,
          useValue: userServiceMock
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
