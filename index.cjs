

const puppeteer = require('puppeteer');


(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto('https://exclusions.oig.hhs.gov/');
  
  await page.type('#ctl00_cpExclusions_txtSPLastName', 'Word')
  await page.type('#ctl00_cpExclusions_txtSPFirstName', 'James')
  
  await Promise.all([
    page.waitForNavigation(), 
    page.click('#ctl00_cpExclusions_ibSearchSP') 
  ]);
  await Promise.all([
    page.waitForNavigation(),
    page.click('#ctl00_cpExclusions_gvEmployees_ctl02_cmdVerify2')
  ])
  
  await page.type('#ctl00_cpExclusions_txtSSN', '111223333')
  page.click('#ctl00_cpExclusions_ibtnVerify');

await page.evaluate('#ctl00_cpExclusions_print_verification')
  
  const img = await page.evaluate(
    (el) => el.querySelector('#ctl00_cpExclusions_print_verification').getAttribute("src")
  
  );
  console.log(img);
    
    
  
  
  



  
  // await page.pdf({path:"output.pdf"});
  // const buffer = await page.pdf({format:'A4'});
  
  // const page.Base64 = "data:application/pdf;base64" + buffer.toString('base64');
  
})();










// (async () => {
//   const browser = await puppeteer.launch({headless:false});
//   const page = await browser.newPage();
//   await page.goto('https://exclusions.oig.hhs.gov/');
  
//   await page.type('#ctl00_cpExclusions_txtSPLastName', 'Word')
//   await page.type('#ctl00_cpExclusions_txtSPFirstName', 'James')
  
//   await Promise.all([
//     page.waitForNavigation(), 
//     page.click('#ctl00_cpExclusions_ibSearchSP') 
//   ]);
//   await Promise.all([
//     page.waitForNavigation(),
//     page.click('#ctl00_cpExclusions_gvEmployees_ctl02_cmdVerify2')
//   ]);
//   await page.type('#ctl00_cpExclusions_txtSSN', '111223333')
//   page.click('#ctl00_cpExclusions_ibtnVerify')
  
  
//   await Promise.all([
//     page.waitForNavigation(),
    
//   ]);
  
//   // const src = console.log('hello' + src)
//   // let image = await page.evaluateHandle(
//   //     () => document.querySelector('#ctl00_cpExclusions_print_verification')
//   //   )
    
//   //   console.log(image)
    
//   //   const n = await page.$("#ctl00_cpExclusions_print_verification");
//   //         let v = await page.$eval("img", n => n.getAttribute("src"));
//   //         console.log(v)
    
    
//   //     // () => document.querySelector('#ctl00_cpExclusions_print_verification');
//   //   let elements = await elementsHandles.getProperties();
//   //   let elements_arr = Array.from(elements.values());
//   //   console.log(await (await elements_arr[0].getProperty("innerText")).jsonValue())
    
    
//   //   console.log(page.$('#ctl00_cpExclusions_print_verification'))
    
//   //   page.waitForNavigation()
    
//   //   console.log(page.getElementById('ctl00_cpExclusions_print_verification').src)
    
   
// })();