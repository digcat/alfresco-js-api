/*global describe, it, beforeEach */

var expect = require('chai').expect;
var Oauth2Mock = require('../test/mockObjects/mockAlfrescoApi').Oauth2Mock.Auth;
var Oauth2Auth = require('../src/oauth2Auth');
var AlfrescoApi = require('../main');

describe('Ecm Auth test', function () {

    beforeEach(function () {
        this.hostOauth2 = 'http://127.0.0.1:9191';
        this.oauth2Mock = new Oauth2Mock(this.hostOauth2);
    });

    describe('With Authentication', function () {

        it('login should return the Token if is ok', function (done) {

            this.oauth2Mock.get200Response();
            this.oauth2Auth = new Oauth2Auth({
                hostOauth2: this.hostOauth2
            });

            this.oauth2Auth.login('admin', 'admin').then((data) => {
                expect(data.access_token).to.be.equal('5c37e781-40a7-4957-adcc-2b171c770a5c');
                expect(data.legacyToken).to.be.equal('LegacyToken{legacyTokenBpm=\'Basic YWRtaW46YWRtaW4=\', tokenId=\'null\', legacyTokenEcm=\'TICKET_bbead3a54dbe141f77e442e6703f7fa29671107a\'}');
                done();
            }, function () {
            });

        });

        it('isLoggedIn should return true if the api is logged in', function (done) {

            this.oauth2Mock.get200Response();
            this.oauth2Auth = new Oauth2Auth({
                hostOauth2: this.hostOauth2
            });

            this.oauth2Auth.login('admin', 'admin').then(() => {
                expect(this.oauth2Auth.isLoggedIn()).to.be.equal(true);
                done();
            }, function () {
            });
        });

        it('Access token should be delivered with any ECM call', function (done) {

            this.oauth2Mock.get200Response();

            this.alfrescoJsApi = new AlfrescoApi({
                hostOauth2: this.hostOauth2,
                provider: 'OAUTH'
            });

            this.alfrescoJsApi.login('admin', 'admin').then(() => {
                expect(this.alfrescoJsApi.ecmClient.authentications.basicAuth.accessToken).to.be.equal('5c37e781-40a7-4957-adcc-2b171c770a5c');
                done();
            });
        });

    });
});
