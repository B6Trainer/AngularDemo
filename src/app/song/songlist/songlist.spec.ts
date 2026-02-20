import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Songlist } from './songlist';

describe('Songlist', () => {
  let component: Songlist;
  let fixture: ComponentFixture<Songlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Songlist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Songlist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
