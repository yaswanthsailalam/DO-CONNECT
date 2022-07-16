import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaisequestionComponent } from './raisequestion.component';

describe('RaisequestionComponent', () => {
  let component: RaisequestionComponent;
  let fixture: ComponentFixture<RaisequestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaisequestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaisequestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
