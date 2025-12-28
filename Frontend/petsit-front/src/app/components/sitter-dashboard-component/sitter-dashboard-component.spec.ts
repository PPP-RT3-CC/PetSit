import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitterDashboardComponent } from './sitter-dashboard-component';

describe('SitterDashboardComponent', () => {
  let component: SitterDashboardComponent;
  let fixture: ComponentFixture<SitterDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SitterDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SitterDashboardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
