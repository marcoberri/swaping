import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListStarshipComponent } from './item-list-starship.component';

describe('ItemListStarshipComponent', () => {
  let component: ItemListStarshipComponent;
  let fixture: ComponentFixture<ItemListStarshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemListStarshipComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListStarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
