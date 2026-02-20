import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernSonglist } from './modernsonglist';

describe('ModernSonglist', () => {
  let component: ModernSonglist;
  let fixture: ComponentFixture<ModernSonglist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModernSonglist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModernSonglist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
