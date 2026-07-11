export default class MapsScraper {

  constructor() {
    this.running = false;
  }

  async start(keyword, location, limit) {

    this.running = true;

    console.log("Search");

    console.log(keyword);

    console.log(location);

    console.log(limit);

    return {
      success: true,
      status: "running",
      total: 0
    };

  }

  stop() {

    this.running = false;

    return {
      success: true
    };

  }

}
