import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByexampleComponent } from './search-byexample.component';

describe('SearchByexampleComponent', () => {
  let component: SearchByexampleComponent;
  let fixture: ComponentFixture<SearchByexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
