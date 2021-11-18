import { cli } from '../src';
// import * as utils from '../src/utils';

/*
 *  Fails with:
    TypeError: Cannot read property 'warn' of undefined

        67 |
        68 | export const log: LogHandler = new Logger({
        > 69 |   level: LogLevel.warn,
            |                   ^
        70 |   noTrace: true,
        71 | });
        72 |

        at Object.<anonymous> (src/io/logger.ts:69:19)
        at Object.<anonymous> (src/io/gotHttpClientFactory.ts:8:1)
*/
jest.mock('../src/utils');


describe('version', () => {
  it('should print version', async () => {
    /*
    * Fails with
    * TypeError: Cannot redefine property: parseJson
    *     at Function.defineProperty (<anonymous>)
    */
    // jest.spyOn(utils, 'parseJson').mockResolvedValue({ version: '1.2.3' });
    jest.spyOn(console, 'log');

    await cli.execute([
      '',
      '',
      '--version'
    ]);

    expect(console.log).toHaveBeenCalledWith('httpyac v1.2.3');
  });
});
