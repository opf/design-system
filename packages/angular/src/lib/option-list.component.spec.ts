import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpOptionListComponent } from './option-list.component';

describe('OpOptionListComponent', () => {
  let component:OpOptionListComponent<any>;
  let fixture:ComponentFixture<OpOptionListComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpOptionListComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpOptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
