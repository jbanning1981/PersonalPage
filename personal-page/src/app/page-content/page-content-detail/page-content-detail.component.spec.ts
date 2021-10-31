import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContentDetailComponent } from './page-content-detail.component';

describe('PageContentDetailComponent', () => {
  let component: PageContentDetailComponent;
  let fixture: ComponentFixture<PageContentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageContentDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
