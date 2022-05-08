import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialViewComponent } from './inicial-view.component';

describe('InicialViewComponent', () => {
  let component: InicialViewComponent;
  let fixture: ComponentFixture<InicialViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicialViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicialViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
