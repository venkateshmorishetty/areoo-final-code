import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrabLinkComponent } from './grab-link.component';

describe('GrabLinkComponent', () => {
  let component: GrabLinkComponent;
  let fixture: ComponentFixture<GrabLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrabLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrabLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
