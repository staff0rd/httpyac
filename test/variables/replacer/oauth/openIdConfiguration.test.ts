import {
  getOpenIdConfiguration,
  DEFAULT_CALLBACK_URI,
  OpenIdConfiguration,
} from '../../../../src/variables/replacer/oauth/openIdConfiguration';

describe('getOpenIdConfiguration', () => {
  describe('redirectUri', () => {
    it('should default when nothing passed', () => {
      const result = getOpenIdConfiguration('prefix', {}) as OpenIdConfiguration;
      expect(result.redirectUri.toString()).toEqual(DEFAULT_CALLBACK_URI);
    });

    it('should throw on bad url', () => {
      expect(() => getOpenIdConfiguration('prefix', { prefix_redirectUri: 'not-a-url' })).toThrow(
        'Expected a valid URL, but received not-a-url'
      );
    });

    it('should use valid url when passed', () => {
      const result = getOpenIdConfiguration('prefix', {
        prefix_redirectUri: 'http://my-url.com:1234',
      }) as OpenIdConfiguration;
      expect(result.redirectUri.toString()).toEqual('http://my-url.com:1234/');
    });
  });
});
