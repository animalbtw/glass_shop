import axios from "@/shared/api/axios";

export class Catalog {
  public getTypes() {
    try {
      return axios.get('/item-types')
    } catch (e) {
      console.error(e)
      return []
    }
  }

  public setTypes(type) {

  }
}

const catalog = new Catalog();

export default catalog;