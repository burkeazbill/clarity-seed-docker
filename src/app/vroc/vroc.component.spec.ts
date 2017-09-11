import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { vROCComponent } from './vroc.component';

describe('vROCComponent', () => {
  let component: vROCComponent;
  let fixture: ComponentFixture<vROCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ vROCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(vROCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
