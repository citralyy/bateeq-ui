import {inject, Lazy} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {RestService} from '../rest-service';
 
const serviceUri = 'http://bateeq-inventory-api.au-syd.mybluemix.net/v1/inventories/docs/efr-kb-fng'; 
const serviceUriStorages='http://bateeq-inventory-api.au-syd.mybluemix.net/v1/inventories/storages';
const serviceSearch = 'http://bateeq-inventory-api.au-syd.mybluemix.net/v1/inventories/docs/efr-kb-rtf';

 
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

  create(data)
  {
    var endpoint = `${serviceUri}`;
    return super.post(endpoint, data);
  } 
   
  getAllStorage()
  {
    var endpoint = `${serviceUriStorages}`;
    return super.get(endpoint);
  }
  
  getOutByCode(code) 
  {
      var endpoint = `${serviceSearch}?keyword=${code}`;
      return super.get(endpoint);
  }
}
