const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
import "../src/get-api-class.js";
import Fetch from "../src/get-api-class.js";
chai.use(spies);

describe("Fetch", function () {
  let fetchResponse;
  let fetchObject;
  beforeEach(() => {
    fetchResponse = {
      then: () => {
        return fetchResponse;
      },
      catch: () => {
        return fetchResponse;
      },
    };
    fetchObject = new Fetch();
    global.server = {};
    global.document = {};
    global.fetch = () => {
      return fetchResponse;
    };
    chai.spy.on(global, ["fetch"]);
  });
  it("should be a function", function () {
    expect(Fetch).to.be.a("function");
  });
  it("should create an instance of fetch", function () {
    expect(fetchObject).to.be.an.instanceof(Fetch);
  });
  it("fetchUserData should return an object", function () {
    let finishedFetch = fetchObject.fetchUserData();
    let fetchResponseType = typeof finishedFetch;

    expect(fetchResponseType).to.equal("object");
  });
  it("fetchRoomData should return an object", function () {
    let finishedFetch = fetchObject.fetchRoomData();
    let fetchResponseType = typeof finishedFetch;

    expect(fetchResponseType).to.equal("object");
  });
  it("getOnLoad should return an object", function () {
    let finishedFetch = fetchObject.getOnLoad();
    let fetchResponseType = typeof finishedFetch;

    expect(fetchResponseType).to.equal("object");
  });
});
