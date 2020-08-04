const chai = require('chai')
const expect = chai.expect
const spies = require('chai-spies');
import '../src/indexClass.js';
import Index from '../src/indexClass.js';
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