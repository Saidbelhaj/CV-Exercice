import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvlisteComponent } from './cvliste.component';

describe('CvlisteComponent', () => {
  let component: CvlisteComponent;
  let fixture: ComponentFixture<CvlisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvlisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
