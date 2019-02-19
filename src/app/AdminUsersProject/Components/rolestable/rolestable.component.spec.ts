import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolestableComponent } from './rolestable.component';

describe('RolestableComponent', () => {
  let component: RolestableComponent;
  let fixture: ComponentFixture<RolestableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolestableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolestableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
