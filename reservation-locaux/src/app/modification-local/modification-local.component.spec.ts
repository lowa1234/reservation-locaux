import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationLocalComponent } from './modification-local.component';

describe('ModificationLocalComponent', () => {
  let component: ModificationLocalComponent;
  let fixture: ComponentFixture<ModificationLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificationLocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
