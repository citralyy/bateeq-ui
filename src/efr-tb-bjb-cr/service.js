import {inject, Lazy} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {RestService} from '../rest-service';
 
const serviceUri = 'http://bateeq-inventory-api.au-syd.mybluemix.net/v1/inventories/docs/efr-tb-bjb';
const serviceOutUri = 'http://bateeq-inventory-api.au-syd.mybluemix.net/v1/inventories/docs/efr-kb-fng'; 
 
export class Service extends RestService{

  constructor(http, aggregator) {
      super(http, aggregator);
  }

  search(keyword) {
      return super.get(serviceUri);
  }

  getById(id)
  {
      var endpoint = `${serviceUri}/${id}`;
      return super.get(endpoint);
  }

  getOutByCode(code) 
  {
      var endpoint = `${serviceOutUri}?keyword=${code}`;
      return super.get(endpoint);
  }
  
  create(data)
  {
      var endpoint = `${serviceUri}`;
      return super.post(endpoint, data);
  }  
  
}
