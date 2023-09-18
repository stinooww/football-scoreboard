import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballDetailComponent } from './football-detail.component';

describe('FootballDetailComponent', () => {
  let component: FootballDetailComponent;
  let fixture: ComponentFixture<FootballDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootballDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
