import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsmComponent } from './osm.component';

describe('OsmComponent', () => {
  let component: OsmComponent;
  let fixture: ComponentFixture<OsmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OsmComponent]
    });
    fixture = TestBed.createComponent(OsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
