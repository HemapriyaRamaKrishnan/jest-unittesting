import { of } from 'rxjs';
import { DataServiceService } from './data-service.service';

describe('DataServiceService', () => {
  let service: DataServiceService;
  let httpClientSpy : any //Create a mock varaible and pass it in dataservice argument
  beforeEach(() => {
    httpClientSpy = { //Create mock function (what are the services to create here we need to wrote mock functions)
      get: jest.fn(), //In jest we are using jest.fn() ,Why we are using get means we have the the get method in service so thatsy we use get in this line
      post: jest.fn()
    }
    service = new DataServiceService(httpClientSpy)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it ('should test getData method',() => {
    const response = 'test the get method';
    const url = 'https://jsonplaceholder.typicode.com/todos/1'
    jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(response));
    service.getData();
    expect(httpClientSpy.get).toBeCalledTimes(1);
    expect(httpClientSpy.get).toHaveBeenCalled();
    expect(httpClientSpy.get).toHaveBeenCalledWith(url);
  });

  it('should test postData method', () => {
    const post_data = 'test';
    const response = 'test the post method';
    const url = 'https://jsonplaceholder.typicode.com/todos/1'  
    jest.spyOn(httpClientSpy,'post').mockReturnValue(of(response));
    service.postData(post_data);
    expect(httpClientSpy.post).toBeCalledTimes(2);
    expect(httpClientSpy.post).toHaveBeenCalled();
  })
});
