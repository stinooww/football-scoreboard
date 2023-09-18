import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballItemComponent } from './football-item.component';

describe('FootballItemComponent', () => {
  let component: FootballItemComponent;
  let fixture: ComponentFixture<FootballItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootballItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
