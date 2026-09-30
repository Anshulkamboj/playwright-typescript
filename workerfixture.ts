import { test as base} from '@playwright/test';


type WorkerFixture={
    messageFixture : string;
};

export const test = base.extend<{}, WorkerFixture>({
    messageFixture:[async({},use)=>{

  console.log('workdr fixture setup');
  await use('shared worker resource');
  console.log('workder fixture teardown');
  }, {scope:'worker'}]
});

export {expect} from '@playwright/test';