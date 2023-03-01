import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildADevComponent } from './build-a-dev.component';

describe('BuildADevComponent', () => {
  let component: BuildADevComponent;
  let fixture: ComponentFixture<BuildADevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildADevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildADevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
