const chai = require('chai')
const expect = chai.expect
const spies = require('chai-spies');
import '../src/indexClass.js';
import Index from '../src/indexClass.js';
import Fetch from '../src/indexClass.js'
chai.use(spies);

describe('Index', function() {
  beforeEach(() => {
    global.document = {};
    chai.spy.on(document, ['querySelector', 'querySelectorAll'], () => {
      return { innerText: ''};
    })
  });
  it('should change inner text of navBar', () => {
    let indexTest = new Index();

    indexTest.testNavBar();

    expect(document.querySelector).to.have.been.called(1);
    expect(document.querySelector).to.have.been.called.with('.top-bar');
  })
  it("should change inner text of nameDisplay", () => {
    let indexTest = new Index();

    indexTest.testNameDisplay();

    expect(document.querySelector).to.have.been.called(1);
    expect(document.querySelector).to.have.been.called.with(".name-display");
  });
  it("should change inner text of displayDate", () => {
    let indexTest = new Index();

    indexTest.testDateDisplay();

    expect(document.querySelector).to.have.been.called(1);
    expect(document.querySelector).to.have.been.called.with(".display-date");
  });
});

describe("fetchUserData", function () {
  let fetchResponse;
  // let getOnLoadResponse;
  let fetchObject;
  beforeEach(() => {
    fetchResponse = {
      then: () => {
        return fetchResponse;
      },
      then: () => {
        return fetchResponse;
      },
      catch: () => {
        return fetchResponse;
      }
    }
    // getOnLoadResponse = {
    //   then: () => {
    //     return getOnLoadResponse;
    //   },
    //   catch: () => {
    //     return getOnLoadResponse;
    //   }
    // }
    // fetchObject = new Fetch();
    global.server = {};
    global.document = {};
    global.fetch = () => {
      return fetchResponse
    };
    chai.spy.on(global, ['fetch']);
  });
  // it('should be a function', function () {
  //   expect(Fetch).to.be.a('function');
  // })
  // it('should create an instance of fetch', function () {
  //   expect(fetchObject).to.be.an.instanceof(Fetch);
  // })
  it("fetchUserData should be a function", async function () {
    let spy = fetchUserData()
    expect(spy).to.have.been.called(1);
  });
  it("fetchUserData should return an object", function () {
    let finishedFetch = fetchObject.fetchUserData();
    let fetchResponseType = typeof finishedFetch;

    expect(fetchResponseType).to.equal('object');
  });
});