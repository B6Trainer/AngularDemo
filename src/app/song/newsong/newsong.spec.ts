import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newsong } from './newsong';

describe('Newsong', () => {
  let component: Newsong;
  let fixture: ComponentFixture<Newsong>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Newsong]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newsong);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
