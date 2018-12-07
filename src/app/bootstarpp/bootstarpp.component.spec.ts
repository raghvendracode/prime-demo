import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstarppComponent } from './bootstarpp.component';

describe('BootstarppComponent', () => {
  let component: BootstarppComponent;
  let fixture: ComponentFixture<BootstarppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstarppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstarppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
