import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpCrudopsWebPartComponent } from './sp-crudops-web-part.component';

describe('SpCrudopsWebPartComponent', () => {
  let component: SpCrudopsWebPartComponent;
  let fixture: ComponentFixture<SpCrudopsWebPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpCrudopsWebPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpCrudopsWebPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
