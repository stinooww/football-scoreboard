import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballHeaderComponent } from './football-header.component';

describe('HeaderComponent', () => {
  let component: FootballHeaderComponent;
  let fixture: ComponentFixture<FootballHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootballHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
