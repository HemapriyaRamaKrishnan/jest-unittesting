import {AppComponent} from "./app.component"

describe('AppComponent',()=>{
	let component:AppComponent;

	beforeEach(()=>{
	component = new AppComponent();
})

it('should have a title',()=>{
expect(component.title).toEqual('jestSetup');
})

it('should return the sumValue' ,()=> {
  expect(component.sum(1,4)).toBe(5)
})

})
