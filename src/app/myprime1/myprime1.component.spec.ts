import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Myprime1Component } from './myprime1.component';

describe('Myprime1Component', () => {
  let component: Myprime1Component;
  let fixture: ComponentFixture<Myprime1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Myprime1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Myprime1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
