import { UserService } from './../../services/user.service';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

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

  beforeEach(fakeAsync(() => {
    fixture = TestBed.createComponent(UserComponent);
    tick(5)
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();

    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#wrapper'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('#userName'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('#age'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('#picture'))).toBeTruthy();
  });
});
