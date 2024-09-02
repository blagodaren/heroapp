import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroEditModalComponent } from './hero-edit-modal.component';

describe('HeroEditModalComponent', () => {
  let component: HeroEditModalComponent;
  let fixture: ComponentFixture<HeroEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroEditModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
