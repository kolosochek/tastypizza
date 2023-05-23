export class DataAPI {
  public static APIUrl = 'http://localhost:4001/api/pizza'

  static fetchPizzaAll() {
    return fetch(this.APIUrl)
  }
}
