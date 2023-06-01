import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadmenuComponent } from './headmenu.component';

describe('HeadmenuComponent', () => {
  let component: HeadmenuComponent;
  let fixture: ComponentFixture<HeadmenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadmenuComponent]
    });
    fixture = TestBed.createComponent(HeadmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
