import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponentComponent } from './edit-component.component';

describe('EditComponentComponent', () => {
  let component: EditComponentComponent;
  let fixture: ComponentFixture<EditComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
