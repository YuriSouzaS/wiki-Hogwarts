import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarFooterComponent } from './bar-footer.component';

describe('BarFooterComponent', () => {
  let component: BarFooterComponent;
  let fixture: ComponentFixture<BarFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
