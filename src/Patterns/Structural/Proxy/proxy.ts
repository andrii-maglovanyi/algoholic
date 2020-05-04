interface Coder {
  getCoordinates(city: string): [number, number] | undefined;
}

type GeoEntry = { [key: string]: [number, number] };

export class GeoCoder implements Coder {
  private codes: GeoEntry = {
    London: [51.507351, -0.127758],
    Berlin: [52.520008, 13.404954],
    Paris: [48.856613, 2.352222],
    "SIS Building": [51.4872, 0.1245],
  };

  public getCoordinates(name: string) {
    return this.codes[name];
  }
}

export class GeoCoderProxy implements Coder {
  public log: string[] = [];

  private cache: GeoEntry = {};

  constructor(private geoCoder: GeoCoder) {}

  public getCoordinates(name: string) {
    if (this.checkAccess(name)) {
      if (!this.cache[name]) {
        this.cache[name] = this.geoCoder.getCoordinates(name);
      }
      this.logAccess(name);
      return this.cache[name];
    }
  }

  private checkAccess(name: string) {
    // Coordinates of SIS Building are classified
    return name !== "SIS Building";
  }

  private logAccess(name: string) {
    this.log.push(`Read ${name} coordinates.`);
  }

  public getCacheSize() {
    let count = 0;
    for (const i in this.cache) {
      count++;
    }
    return count;
  }
}
