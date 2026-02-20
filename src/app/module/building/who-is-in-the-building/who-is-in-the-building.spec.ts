import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoIsInTheBuilding } from './who-is-in-the-building';

describe('WhoIsInTheBuilding', () => {
  let component: WhoIsInTheBuilding;
  let fixture: ComponentFixture<WhoIsInTheBuilding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhoIsInTheBuilding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoIsInTheBuilding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
