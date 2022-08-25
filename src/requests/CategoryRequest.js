import BaseRequest from './BaseRequest';

const schema = 'category';
/**
 * key base on host:port
 */
export default class CategoryRequest extends BaseRequest {

  create(params) {
    const url = `${schema}/create`;
    return this.post(url, params);
  }

  register(params) {
    const url = `auth/register`;
    return this.post(url, params);
  }

  getPermission(params) {
    const url = `permission/roles`;
    return this.get(url, params);
  }
}
