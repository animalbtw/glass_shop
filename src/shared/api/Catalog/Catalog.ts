import axios from "axios";
export class Catalog {
  public getTypes() {
    try {
      return axios.get('/item-types')
    } catch (e) {
      console.error(e)
      return []
    }
  }

  public setTypes(type: any) {

  }
}

const catalog = new Catalog();

export default catalog;