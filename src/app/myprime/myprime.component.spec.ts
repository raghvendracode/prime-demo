import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprimeComponent } from './myprime.component';

describe('MyprimeComponent', () => {
  let component: MyprimeComponent;
  let fixture: ComponentFixture<MyprimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyprimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyprimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
