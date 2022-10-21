import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveapproachComponent } from './reactiveapproach.component';

describe('ReactiveapproachComponent', () => {
  let component: ReactiveapproachComponent;
  let fixture: ComponentFixture<ReactiveapproachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveapproachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveapproachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
