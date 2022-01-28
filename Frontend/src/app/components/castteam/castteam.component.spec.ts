import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastteamComponent } from './castteam.component';

describe('CastteamComponent', () => {
  let component: CastteamComponent;
  let fixture: ComponentFixture<CastteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CastteamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CastteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
