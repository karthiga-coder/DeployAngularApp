import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactcreateComponent } from './contact-create.component';

describe('ContactcreateComponent', () => {
  let component: ContactcreateComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
