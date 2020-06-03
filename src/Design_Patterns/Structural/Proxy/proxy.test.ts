import { GeoCoder, GeoCoderProxy } from "./proxy";

describe("Proxy", () => {
  const geoCoder = new GeoCoder();
  const geoCoderProxy = new GeoCoderProxy(geoCoder);

  test("Should get geo codes from the real service directly", () => {
    expect(geoCoder.getCoordinates("Berlin")).toEqual([52.520008, 13.404954]);
    expect(geoCoder.getCoordinates("SIS Building")).toEqual([51.4872, 0.1245]);
  });

  test("Should check access, cache and log requests to GeoCoder service", () => {
    expect(geoCoderProxy.getCoordinates("Berlin")).toEqual([
      52.520008,
      13.404954,
    ]);

    expect(geoCoderProxy.getCoordinates("Paris")).toEqual([
      48.856613,
      2.352222,
    ]);

    expect(geoCoderProxy.getCoordinates("SIS Building")).toEqual(undefined);

    expect(geoCoderProxy.log).toEqual([
      "Read Berlin coordinates.",
      "Read Paris coordinates.",
    ]);
    expect(geoCoderProxy.getCacheSize()).toBe(2);
  });
});
