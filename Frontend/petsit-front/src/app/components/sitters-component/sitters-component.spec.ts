import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SittersComponent } from './sitters-component';

describe('SittersComponent', () => {
  let component: SittersComponent;
  let fixture: ComponentFixture<SittersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SittersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SittersComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
