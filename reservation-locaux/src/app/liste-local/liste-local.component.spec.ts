import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeLocalComponent } from './liste-local.component';

describe('ListeLocalComponent', () => {
  let component: ListeLocalComponent;
  let fixture: ComponentFixture<ListeLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeLocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
