import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListVehicleComponent } from './item-list-vehicle.component';

describe('ItemListVehicleComponent', () => {
  let component: ItemListVehicleComponent;
  let fixture: ComponentFixture<ItemListVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemListVehicleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
