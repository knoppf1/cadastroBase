import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroBaseViewComponent } from './cadastro-base-view.component';

describe('CadastroBaseViewComponent', () => {
  let component: CadastroBaseViewComponent;
  let fixture: ComponentFixture<CadastroBaseViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroBaseViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroBaseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
