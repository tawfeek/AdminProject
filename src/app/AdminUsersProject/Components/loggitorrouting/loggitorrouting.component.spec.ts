import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggitorroutingComponent } from './loggitorrouting.component';

describe('LoggitorroutingComponent', () => {
  let component: LoggitorroutingComponent;
  let fixture: ComponentFixture<LoggitorroutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggitorroutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggitorroutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
