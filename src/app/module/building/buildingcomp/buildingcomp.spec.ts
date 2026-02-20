import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Buildingcomp } from './buildingcomp';

describe('Buildingcomp', () => {
  let component: Buildingcomp;
  let fixture: ComponentFixture<Buildingcomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Buildingcomp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Buildingcomp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
