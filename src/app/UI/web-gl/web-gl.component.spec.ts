import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebGlComponent } from './web-gl.component';

describe('WebGlComponent', () => {
  let component: WebGlComponent;
  let fixture: ComponentFixture<WebGlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebGlComponent]
    });
    fixture = TestBed.createComponent(WebGlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
