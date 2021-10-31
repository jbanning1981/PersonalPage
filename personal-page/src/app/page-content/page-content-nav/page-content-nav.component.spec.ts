import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContentNavComponent } from './page-content-nav.component';

describe('PageContentNavComponent', () => {
  let component: PageContentNavComponent;
  let fixture: ComponentFixture<PageContentNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageContentNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContentNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
