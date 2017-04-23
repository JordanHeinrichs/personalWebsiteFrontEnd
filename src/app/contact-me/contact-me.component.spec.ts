import { TestBed, async } from '@angular/core/testing';
import { ContactMeComponent } from './contact-me.component';

describe('ContactMeComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContactMeComponent
      ]
    });
  });

  it(`It should have title "Contact Infomation"`, async(() => {
    const fixture = TestBed.createComponent(ContactMeComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toEqual('Contact Information');
  }));

  it(`Should have 4 contact links`, async(() => {
    const fixture = TestBed.createComponent(ContactMeComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('ul.contactInfo li a').length).toEqual(4);
  }));
});
