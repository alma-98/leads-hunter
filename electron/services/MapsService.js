import MapsScraper from "../scraper/MapsScraper.js";

const scraper = new MapsScraper();

export default class MapsService {

  start(data) {

    return scraper.start(
      data.keyword,
      data.location,
      data.limit
    );

  }

  stop() {

    return scraper.stop();

  }

}
