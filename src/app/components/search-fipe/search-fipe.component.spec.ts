import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFipeComponent } from './search-fipe.component';

describe('SearchFipeComponent', () => {
  let component: SearchFipeComponent;
  let fixture: ComponentFixture<SearchFipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchFipeComponent]
    });
    fixture = TestBed.createComponent(SearchFipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
