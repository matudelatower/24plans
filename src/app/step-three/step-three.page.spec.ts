import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StepThreePage } from './step-three.page';

describe('StepThreePage', () => {
  let component: StepThreePage;
  let fixture: ComponentFixture<StepThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StepThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
