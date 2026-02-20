import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Buildinghome } from './buildinghome';

describe('Buildinghome', () => {
  let component: Buildinghome;
  let fixture: ComponentFixture<Buildinghome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Buildinghome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Buildinghome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
