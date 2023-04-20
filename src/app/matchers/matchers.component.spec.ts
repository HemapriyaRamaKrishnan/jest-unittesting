import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersComponent } from './matchers.component';

describe('MatchersComponent', () => {
  let component: MatchersComponent;
  let fixture: ComponentFixture<MatchersComponent>;

  beforeEach(async () => {

    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
    await TestBed.configureTestingModule({
      declarations: [MatchersComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //check the exact value
  it('should sum two value', () => {
    expect(2 + 4).toBe(6);
  });

  //Object testing
  it('should create object values', () => {
    const data = {
      name: 'unitetesting'
    }
    expect(data).toEqual({ name: 'unitetesting' })
  })

  //Adding floating point numbers
  it('should sum two floating numbers', () => {
    const val = 0.3 + 0.5
    expect(val).toBeCloseTo(0.8);
  })

  //Array testing 
  it('should test array has milk', () => {
    const shpooingList = [
      'cookies',
      'Chips',
      'Dates',
      'Diaryproducts',
      'milk'
    ]
    expect(shpooingList).toContain('milk')
  })

  //Expection Handling
  it('should throws error', () => {
    expect(() => component.compileErrorCode()).toThrow();
    expect(() => component.compileErrorCode()).toThrow(Error);
    expect(() => component.compileErrorCode()).toThrow('You are using old version of angular');
  })

  it('should check the setTimeOut', () => {
    component.checkSetTimeOut();
    expect(component.timeOutVal).not.toBe('SetTimeOutCheck');
    jest.advanceTimersByTime(1000) //jest Execute the 1000 milliseconds
    // jest.runAllTimers(); // If we not mention the seconds we will use this jest,runAllTimers to execute the seconds.
    expect(component.timeOutVal).toBe('SetTimeOutCheck');
    expect(setTimeout).toHaveBeenCalled();
  })
});
