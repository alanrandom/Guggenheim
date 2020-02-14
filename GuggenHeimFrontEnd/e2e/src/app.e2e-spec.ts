import { AppPage } from './app.po';
import { browser, logging, by, element } from 'protractor';


describe('workspace-project App', () => {
  let page: AppPage;


  beforeEach(() => {
    page = new AppPage();

  });

  it('always correct', () => {
    expect('hi').toEqual('hi');
  });

  //tests for functionality
  it('test Functionality 1', function() {
    page.navigateTo();

    element(by.id('moreSix')).clear()
    element(by.id('lessSix')).clear()
    element(by.id('day')).clear()
    element(by.id('time')).clear()

    element(by.id('moreSix')).sendKeys("10");
    element(by.id('lessSix')).sendKeys("100");
    element(by.id('day')).sendKeys("1212-12-12");
    element(by.id('time')).sendKeys("10:10");
    
    element(by.buttonText('Get Price for Ride')).click();
    let output = element(by.css('.results'));

    expect(output.getText()).toBe("Total: $182.00");
  });

  it('test Functionality 2', function() {
    page.navigateTo();

    element(by.id('moreSix')).clear()
    element(by.id('lessSix')).clear()
    element(by.id('day')).clear()
    element(by.id('time')).clear()

    element(by.id('moreSix')).sendKeys("1");
    element(by.id('lessSix')).sendKeys("1");
    element(by.id('day')).sendKeys("1212-12-12");
    element(by.id('time')).sendKeys("10:10");
    
    element(by.buttonText('Get Price for Ride')).click();
    let output = element(by.css('.results'));

    expect(output.getText()).toBe("Total: $5.60");
  });

  it('test Functionality 3', function() {
    page.navigateTo();

    element(by.id('moreSix')).clear()
    element(by.id('lessSix')).clear()
    element(by.id('day')).clear()
    element(by.id('time')).clear()

    element(by.id('moreSix')).sendKeys("1");
    element(by.id('lessSix')).sendKeys("1");
    element(by.id('day')).sendKeys("1234-07-28");
    element(by.id('time')).sendKeys("16:49");
    
    element(by.buttonText('Get Price for Ride')).click();
    let output = element(by.css('.results'));

    expect(output.getText()).toBe("Total: $6.60");
  });


  //tests for failure
  it('test failure 1', function() {
    page.navigateTo();

    element(by.id('moreSix')).clear()
    element(by.id('lessSix')).clear()
    element(by.id('day')).clear()
    element(by.id('time')).clear()

    element(by.id('moreSix')).sendKeys("a");
    element(by.id('lessSix')).sendKeys("1");
    element(by.id('day')).sendKeys("1212-12-12");
    element(by.id('time')).sendKeys("10:10");
    
    element(by.buttonText('Get Price for Ride')).click();
    let output = element(by.css('.results'));

    expect(output.getText()).toBe(""); //should have no output due to ngif if it fails. 
  });

  it('test failure 2', function() {
    page.navigateTo();

    element(by.id('moreSix')).clear()
    element(by.id('lessSix')).clear()
    element(by.id('day')).clear()
    element(by.id('time')).clear()

    element(by.id('moreSix')).sendKeys("1");
    element(by.id('lessSix')).sendKeys("0.5");
    element(by.id('day')).sendKeys("1212-12-12");
    element(by.id('time')).sendKeys("10:10");
    
    element(by.buttonText('Get Price for Ride')).click();
    let output = element(by.css('.results'));

    expect(output.getText()).toBe(""); //should have no output due to ngif if it fails. 
  });

  it('test failure 3', function() {
    page.navigateTo();

    element(by.id('moreSix')).clear()
    element(by.id('lessSix')).clear()
    element(by.id('day')).clear()
    element(by.id('time')).clear()

    element(by.id('moreSix')).sendKeys("1");
    element(by.id('lessSix')).sendKeys("1");
    element(by.id('day')).sendKeys("1212-12-12asdf");
    element(by.id('time')).sendKeys("10:10");
    
    element(by.buttonText('Get Price for Ride')).click();
    let output = element(by.css('.results'));

    expect(output.getText()).toBe(""); //should have no output due to ngif if it fails. 
  });

  it('test failure 4', function() {
    page.navigateTo();

    element(by.id('moreSix')).clear()
    element(by.id('lessSix')).clear()
    element(by.id('day')).clear()
    element(by.id('time')).clear()

    element(by.id('moreSix')).sendKeys("1");
    element(by.id('lessSix')).sendKeys("1");
    element(by.id('day')).sendKeys("1212-12-12");
    element(by.id('time')).sendKeys("25:10");
    
    element(by.buttonText('Get Price for Ride')).click();
    let output = element(by.css('.results'));

    expect(output.getText()).toBe(""); //should have no output due to ngif if it fails. 
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
