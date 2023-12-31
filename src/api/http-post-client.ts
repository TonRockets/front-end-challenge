import axios from 'axios';
import {
   type HttpPostClient,
   type HttpPostParams,
   type HttpResponse
} from './http/protocols/http-client';

export class HttPostClient implements HttpPostClient<any, any> {
   async post(params: HttpPostParams<any>): Promise<HttpResponse<any>> {
      const { data, status } = await axios.post(params.url, params.body);
      return {
         statusCode: status,
         body: data
      };
   }
}
