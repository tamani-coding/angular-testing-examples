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
            },
            dob: {
              age: 25
            },
            picture: {
              thumbnail: 'test'
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

  it('should create', fakeAsync(() => {
    component.ngOnInit();
    tick();
    fixture.detectChanges();
    expect(component).toBeTruthy();

    expect(fixture.debugElement.query(By.css('#wrapper'))).toBeTruthy();

    expect(fixture.debugElement.query(By.css('#userName'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('#userName')).nativeNode.textContent).toBe('Peter Parker');

    expect(fixture.debugElement.query(By.css('#age'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('#age')).nativeElement.textContent).toBe('25');

    expect(fixture.debugElement.query(By.css('#picture'))).toBeTruthy();
  }));
});
