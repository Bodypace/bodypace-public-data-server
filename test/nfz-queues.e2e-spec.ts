import { Test, TestingModule } from '@nestjs/testing';
import { DataSource } from 'typeorm';
import { HttpService } from '@nestjs/axios';
import { INestApplication, LoggerService } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { req_1_page_1 } from './mocks/httpService/responses/req_1/response-page-1';
import { req_2_page_1 } from './mocks/httpService/responses/req_2/response-page-1';
import { req_2_page_2 } from './mocks/httpService/responses/req_2/response-page-2';
import { req_2_page_3 } from './mocks/httpService/responses/req_2/response-page-3';
import { req_2_page_4 } from './mocks/httpService/responses/req_2/response-page-4';
import { req_2_page_5 } from './mocks/httpService/responses/req_2/response-page-5';
import { req_2_page_6 } from './mocks/httpService/responses/req_2/response-page-6';
import { MockedHttpService } from './mocks/httpService/http.service.mock';
import { unlink, copyFile, constants } from 'node:fs/promises';

function MockedLogger() {
  const aggregator = jest.fn();
  return {
    aggregator: aggregator,
    log: jest.fn().mockImplementation((...args) => aggregator('log', ...args)),
    warn: jest
      .fn()
      .mockImplementation((...args) => aggregator('warn', ...args)),
    error: jest
      .fn()
      .mockImplementation((...args) => aggregator('error', ...args)),
  };
}

interface TestableLoggerService extends LoggerService {
  aggregator: (...args: any[]) => undefined;
}

describe('NfzQueuesController (e2e)', () => {
  let app: INestApplication;
  let logger: TestableLoggerService;
  let httpService: HttpService;
  let dataSource: DataSource;
  let url: string;
  let url_1: string;
  let url_2: string;

  // TODO: network requests should be mocked in a different way
  // so that we can actually test the whole app
  // (e.g. request could be intercepted on the host and not leave the loopback network).

  beforeEach(async () => {
    await unlink('database.sqlite');
    await copyFile(
      'e2e-database.sqlite',
      'database.sqlite',
      constants.COPYFILE_EXCL,
    );

    logger = MockedLogger();
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(HttpService)
      .useValue(MockedHttpService())
      .setLogger(logger)
      .compile();

    app = moduleFixture.createNestApplication();
    httpService = app.get<HttpService>(HttpService);
    dataSource = app.get<DataSource>(DataSource);
    await app.init();
  });

  it('logger should be defined', () => {
    expect(logger).toBeDefined();
  });

  it('httpService should be defined', () => {
    expect(httpService).toBeDefined();
  });

  it('dataSource should be defined', () => {
    expect(dataSource).toBeDefined();
  });

  it('startup should log that dependencies are initialized (testing detail)', () => {
    expect(logger.log).toHaveBeenCalledTimes(14);
    expect(logger.log).toHaveBeenNthCalledWith(
      1,
      'RootTestModule dependencies initialized',
      'InstanceLoader',
    );
    expect(logger.log).toHaveBeenNthCalledWith(
      2,
      'AppModule dependencies initialized',
      'InstanceLoader',
    );
    expect(logger.log).toHaveBeenNthCalledWith(
      3,
      'TypeOrmModule dependencies initialized',
      'InstanceLoader',
    );
    expect(logger.log).toHaveBeenNthCalledWith(
      4,
      'GeocoderModule dependencies initialized',
      'InstanceLoader',
    );
    expect(logger.log).toHaveBeenNthCalledWith(
      5,
      'NfzModule dependencies initialized',
      'InstanceLoader',
    );
    expect(logger.log).toHaveBeenNthCalledWith(
      6,
      'HttpModule dependencies initialized',
      'InstanceLoader',
    );
    expect(logger.log).toHaveBeenNthCalledWith(
      7,
      'NfzQueuesApiClientModule dependencies initialized',
      'InstanceLoader',
    );
    expect(logger.log).toHaveBeenNthCalledWith(
      8,
      'TypeOrmCoreModule dependencies initialized',
      'InstanceLoader',
    );
    expect(logger.log).toHaveBeenNthCalledWith(
      9,
      'TypeOrmModule dependencies initialized',
      'InstanceLoader',
    );
    expect(logger.log).toHaveBeenNthCalledWith(
      10,
      'NfzQueuesCacheModule dependencies initialized',
      'InstanceLoader',
    );
    expect(logger.log).toHaveBeenNthCalledWith(
      11,
      'NfzQueuesModule dependencies initialized',
      'InstanceLoader',
    );
    expect(logger.log).toHaveBeenNthCalledWith(
      12,
      'NfzQueuesController {/nfz}:',
      'RoutesResolver',
    );
    expect(logger.log).toHaveBeenNthCalledWith(
      13,
      'Mapped {/nfz/queues, GET} route',
      'RouterExplorer',
    );
    expect(logger.log).toHaveBeenNthCalledWith(
      14,
      'Nest application successfully started',
      'NestApplication',
    );
  });

  describe('/nfz/queues (GET)', () => {
    describe('with query that is valid - case no. 1 (benefit = endokryno, province = 12, locality = KATOWICE)', () => {
      beforeEach(() => {
        url =
          '/nfz/queues?case=1&benefitForChildren=false&benefit=endokryno&province=12&locality=KATOWICE';
      });

      it('should return statusCode 200 and correct response', () => {
        return request(app.getHttpServer())
          .get(url)
          .expect(200)
          .expect(req_1_page_1.data);
      });

      it('should log that request handler and queues fetcher (from NFZ api server) were called', async () => {
        await request(app.getHttpServer())
          .get(url)
          .expect(200)
          .expect(req_1_page_1.data);

        expect(logger.log).toHaveBeenCalledTimes(19);
        expect(logger.log).toHaveBeenNthCalledWith(
          1,
          'RootTestModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          2,
          'AppModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          3,
          'TypeOrmModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          4,
          'GeocoderModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          5,
          'NfzModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          6,
          'HttpModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          7,
          'NfzQueuesApiClientModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          8,
          'TypeOrmCoreModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          9,
          'TypeOrmModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          10,
          'NfzQueuesCacheModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          11,
          'NfzQueuesModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          12,
          'NfzQueuesController {/nfz}:',
          'RoutesResolver',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          13,
          'Mapped {/nfz/queues, GET} route',
          'RouterExplorer',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          14,
          'Nest application successfully started',
          'NestApplication',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          15,
          '#findAll()',
          'NfzQueuesController',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          16,
          '#findAll() - cache miss',
          'NfzQueuesService',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          17,
          '#fetchAll() query = {"case":1,"benefitForChildren":"false","benefit":"endokryno","province":"12","locality":"KATOWICE"}',
          'NfzQueuesApiClientService',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          18,
          '#fetchAll() network request no. 1, url = https://api.nfz.gov.pl/app-itl-api/queues?format=json&api-version=1.3&page=1&limit=25&case=1&benefitForChildren=false&benefit=endokryno&province=12&locality=KATOWICE',
          'NfzQueuesApiClientService',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          19,
          '#fetchAll() all queues = 14, pages = 1',
          'NfzQueuesApiClientService',
        );
      });
    });

    describe('with query that is valid - case no. 1 (changed: benefitForChildren = "FalSe")', () => {
      beforeEach(() => {
        url =
          '/nfz/queues?case=1&benefitForChildren=FalSe&benefit=endokryno&province=12&locality=KATOWICE';
      });

      it('should return statusCode 200 and correct response', () => {
        return request(app.getHttpServer())
          .get(url)
          .expect(200)
          .expect(req_1_page_1.data);
      });

      it('should log that request handler and queues fetcher (from NFZ api server) were called', async () => {
        await request(app.getHttpServer())
          .get(url)
          .expect(200)
          .expect(req_1_page_1.data);

        expect(logger.log).toHaveBeenCalledTimes(19);
        expect(logger.log).toHaveBeenNthCalledWith(
          1,
          'RootTestModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          2,
          'AppModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          3,
          'TypeOrmModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          4,
          'GeocoderModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          5,
          'NfzModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          6,
          'HttpModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          7,
          'NfzQueuesApiClientModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          8,
          'TypeOrmCoreModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          9,
          'TypeOrmModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          10,
          'NfzQueuesCacheModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          11,
          'NfzQueuesModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          12,
          'NfzQueuesController {/nfz}:',
          'RoutesResolver',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          13,
          'Mapped {/nfz/queues, GET} route',
          'RouterExplorer',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          14,
          'Nest application successfully started',
          'NestApplication',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          15,
          '#findAll()',
          'NfzQueuesController',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          16,
          '#findAll() - cache miss',
          'NfzQueuesService',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          17,
          '#fetchAll() query = {"case":1,"benefitForChildren":"false","benefit":"endokryno","province":"12","locality":"KATOWICE"}',
          'NfzQueuesApiClientService',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          18,
          '#fetchAll() network request no. 1, url = https://api.nfz.gov.pl/app-itl-api/queues?format=json&api-version=1.3&page=1&limit=25&case=1&benefitForChildren=false&benefit=endokryno&province=12&locality=KATOWICE',
          'NfzQueuesApiClientService',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          19,
          '#fetchAll() all queues = 14, pages = 1',
          'NfzQueuesApiClientService',
        );
      });
    });

    describe('with query that is valid - case no. 2 (benefit = endo, province = 6)', () => {
      beforeEach(() => {
        url =
          '/nfz/queues?case=1&benefitForChildren=false&benefit=endo&province=6';
      });

      it('should return statusCode 200 and correct response', () => {
        return request(app.getHttpServer())
          .get(url)
          .expect(200)
          .expect([
            ...req_2_page_1.data,
            ...req_2_page_2.data,
            ...req_2_page_3.data,
            ...req_2_page_4.data,
            ...req_2_page_5.data,
            ...req_2_page_6.data,
          ]);
      });

      it('should log that request handler and queues fetcher (from NFZ api server) were called', async () => {
        await request(app.getHttpServer())
          .get(url)
          .expect(200)
          .expect([
            ...req_2_page_1.data,
            ...req_2_page_2.data,
            ...req_2_page_3.data,
            ...req_2_page_4.data,
            ...req_2_page_5.data,
            ...req_2_page_6.data,
          ]);

        expect(logger.log).toHaveBeenCalledTimes(24);
        expect(logger.log).toHaveBeenNthCalledWith(
          1,
          'RootTestModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          2,
          'AppModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          3,
          'TypeOrmModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          4,
          'GeocoderModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          5,
          'NfzModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          6,
          'HttpModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          7,
          'NfzQueuesApiClientModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          8,
          'TypeOrmCoreModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          9,
          'TypeOrmModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          10,
          'NfzQueuesCacheModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          11,
          'NfzQueuesModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          12,
          'NfzQueuesController {/nfz}:',
          'RoutesResolver',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          13,
          'Mapped {/nfz/queues, GET} route',
          'RouterExplorer',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          14,
          'Nest application successfully started',
          'NestApplication',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          15,
          '#findAll()',
          'NfzQueuesController',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          16,
          '#findAll() - cache miss',
          'NfzQueuesService',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          17,
          '#fetchAll() query = {"case":1,"benefitForChildren":"false","benefit":"endo","province":"6"}',
          'NfzQueuesApiClientService',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          18,
          '#fetchAll() network request no. 1, url = https://api.nfz.gov.pl/app-itl-api/queues?format=json&api-version=1.3&page=1&limit=25&case=1&benefitForChildren=false&benefit=endo&province=06',
          'NfzQueuesApiClientService',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          19,
          '#fetchAll() all queues = 142, pages = 6',
          'NfzQueuesApiClientService',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          20,
          '#fetchAll() network request no. 2, url = https://api.nfz.gov.pl/app-itl-api/queues?page=2&limit=25&format=json&case=1&province=06&benefit=endo',
          'NfzQueuesApiClientService',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          21,
          '#fetchAll() network request no. 3, url = https://api.nfz.gov.pl/app-itl-api/queues?page=3&limit=25&format=json&case=1&province=06&benefit=endo',
          'NfzQueuesApiClientService',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          22,
          '#fetchAll() network request no. 4, url = https://api.nfz.gov.pl/app-itl-api/queues?page=4&limit=25&format=json&case=1&province=06&benefit=endo',
          'NfzQueuesApiClientService',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          23,
          '#fetchAll() network request no. 5, url = https://api.nfz.gov.pl/app-itl-api/queues?page=5&limit=25&format=json&case=1&province=06&benefit=endo',
          'NfzQueuesApiClientService',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          24,
          '#fetchAll() network request no. 6, url = https://api.nfz.gov.pl/app-itl-api/queues?page=6&limit=25&format=json&case=1&province=06&benefit=endo',
          'NfzQueuesApiClientService',
        );
      });
    });

    describe('with query that is invalid - case is neither 1 nor 2', () => {
      beforeEach(() => {
        url =
          '/nfz/queues?case=3&benefitForChildren=false&benefit=endokryno&province=12&locality=KATOWICE';
      });

      it('should return statusCode 400 and response which explains that case is invalid', () => {
        return request(app.getHttpServer())
          .get(url)
          .expect(400)
          .expect({
            message: ['case must be one of the following values: 1, 2'],
            error: 'Bad Request',
            statusCode: 400,
          });
      });

      it('should not log that request handler was called', async () => {
        // NOTE: this behaviour is probably not correct, as it could be useful to log
        // that request was received with incorrect query. Maybe add it in the future.

        await request(app.getHttpServer())
          .get(url)
          .expect(400)
          .expect({
            message: ['case must be one of the following values: 1, 2'],
            error: 'Bad Request',
            statusCode: 400,
          });

        expect(logger.log).toHaveBeenCalledTimes(14);
        expect(logger.log).toHaveBeenNthCalledWith(
          1,
          'RootTestModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          2,
          'AppModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          3,
          'TypeOrmModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          4,
          'GeocoderModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          5,
          'NfzModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          6,
          'HttpModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          7,
          'NfzQueuesApiClientModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          8,
          'TypeOrmCoreModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          9,
          'TypeOrmModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          10,
          'NfzQueuesCacheModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          11,
          'NfzQueuesModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          12,
          'NfzQueuesController {/nfz}:',
          'RoutesResolver',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          13,
          'Mapped {/nfz/queues, GET} route',
          'RouterExplorer',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          14,
          'Nest application successfully started',
          'NestApplication',
        );
      });
    });

    describe('with query that is invalid - benefitForChildren is neither "true" nor "false"', () => {
      beforeEach(() => {
        url =
          '/nfz/queues?case=1&benefitForChildren=FalSee&benefit=endokryno&province=12&locality=KATOWICE';
      });

      it('should return statusCode 400 and response which explains that benefitForChildren is invalid', () => {
        return request(app.getHttpServer())
          .get(url)
          .expect(400)
          .expect({
            message: [
              'benefitForChildren must be one of the following values: true, false',
            ],
            error: 'Bad Request',
            statusCode: 400,
          });
      });

      it('should not log that request handler was called', async () => {
        // NOTE: this behaviour is probably not correct, as it could be useful to log
        // that request was received with incorrect query. Maybe add it in the future.

        await request(app.getHttpServer())
          .get(url)
          .expect(400)
          .expect({
            message: [
              'benefitForChildren must be one of the following values: true, false',
            ],
            error: 'Bad Request',
            statusCode: 400,
          });

        expect(logger.log).toHaveBeenCalledTimes(14);
        expect(logger.log).toHaveBeenNthCalledWith(
          1,
          'RootTestModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          2,
          'AppModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          3,
          'TypeOrmModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          4,
          'GeocoderModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          5,
          'NfzModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          6,
          'HttpModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          7,
          'NfzQueuesApiClientModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          8,
          'TypeOrmCoreModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          9,
          'TypeOrmModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          10,
          'NfzQueuesCacheModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          11,
          'NfzQueuesModule dependencies initialized',
          'InstanceLoader',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          12,
          'NfzQueuesController {/nfz}:',
          'RoutesResolver',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          13,
          'Mapped {/nfz/queues, GET} route',
          'RouterExplorer',
        );
        expect(logger.log).toHaveBeenNthCalledWith(
          14,
          'Nest application successfully started',
          'NestApplication',
        );
      });
    });

    describe('with two requests - both times query is valid and the same', () => {
      beforeEach(() => {
        url =
          '/nfz/queues?case=1&benefitForChildren=false&benefit=endokryno&province=12&locality=KATOWICE';
      });

      describe('with database accessible for the whole time', () => {
        it('should return statusCode 200 and correct response two times', async () => {
          await request(app.getHttpServer())
            .get(url)
            .expect(200)
            .expect(req_1_page_1.data);

          await request(app.getHttpServer())
            .get(url)
            .expect(200)
            .expect(req_1_page_1.data);
        });

        it('should first log one cache miss and data fetchinng, and then one cache hit and no data fetching', async () => {
          await request(app.getHttpServer())
            .get(url)
            .expect(200)
            .expect(req_1_page_1.data);

          await request(app.getHttpServer())
            .get(url)
            .expect(200)
            .expect(req_1_page_1.data);

          expect(logger.log).toHaveBeenCalledTimes(21);
          expect(logger.log).toHaveBeenNthCalledWith(
            1,
            'RootTestModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            2,
            'AppModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            3,
            'TypeOrmModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            4,
            'GeocoderModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            5,
            'NfzModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            6,
            'HttpModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            7,
            'NfzQueuesApiClientModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            8,
            'TypeOrmCoreModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            9,
            'TypeOrmModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            10,
            'NfzQueuesCacheModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            11,
            'NfzQueuesModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            12,
            'NfzQueuesController {/nfz}:',
            'RoutesResolver',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            13,
            'Mapped {/nfz/queues, GET} route',
            'RouterExplorer',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            14,
            'Nest application successfully started',
            'NestApplication',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            15,
            '#findAll()',
            'NfzQueuesController',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            16,
            '#findAll() - cache miss',
            'NfzQueuesService',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            17,
            '#fetchAll() query = {"case":1,"benefitForChildren":"false","benefit":"endokryno","province":"12","locality":"KATOWICE"}',
            'NfzQueuesApiClientService',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            18,
            '#fetchAll() network request no. 1, url = https://api.nfz.gov.pl/app-itl-api/queues?format=json&api-version=1.3&page=1&limit=25&case=1&benefitForChildren=false&benefit=endokryno&province=12&locality=KATOWICE',
            'NfzQueuesApiClientService',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            19,
            '#fetchAll() all queues = 14, pages = 1',
            'NfzQueuesApiClientService',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            20,
            '#findAll()',
            'NfzQueuesController',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            21,
            '#findAll() - cache hit',
            'NfzQueuesService',
          );
        });
      });

      describe('with database not accessible while performing second request', () => {
        it('should return statusCode 200 and correct response two times', async () => {
          await request(app.getHttpServer())
            .get(url)
            .expect(200)
            .expect(req_1_page_1.data);

          await dataSource.destroy();

          await request(app.getHttpServer())
            .get(url)
            .expect(200)
            .expect(req_1_page_1.data);
        });

        it('should first log one cache miss and data fetchinng, and then again cache miss with data fetching, and warnings about database read and write failures', async () => {
          await request(app.getHttpServer())
            .get(url)
            .expect(200)
            .expect(req_1_page_1.data);

          await dataSource.destroy();

          await request(app.getHttpServer())
            .get(url)
            .expect(200)
            .expect(req_1_page_1.data);

          expect(logger.aggregator).toHaveBeenCalledTimes(26);
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            1,
            'log',
            'RootTestModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            2,
            'log',
            'AppModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            3,
            'log',
            'TypeOrmModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            4,
            'GeocoderModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            5,
            'log',
            'NfzModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            6,
            'log',
            'HttpModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            7,
            'log',
            'NfzQueuesApiClientModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            8,
            'log',
            'TypeOrmCoreModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            9,
            'log',
            'TypeOrmModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            10,
            'log',
            'NfzQueuesCacheModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            11,
            'log',
            'NfzQueuesModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            12,
            'log',
            'NfzQueuesController {/nfz}:',
            'RoutesResolver',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            13,
            'log',
            'Mapped {/nfz/queues, GET} route',
            'RouterExplorer',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            14,
            'log',
            'Nest application successfully started',
            'NestApplication',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            15,
            'log',
            '#findAll()',
            'NfzQueuesController',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            16,
            'log',
            '#findAll() - cache miss',
            'NfzQueuesService',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            17,
            'log',
            '#fetchAll() query = {"case":1,"benefitForChildren":"false","benefit":"endokryno","province":"12","locality":"KATOWICE"}',
            'NfzQueuesApiClientService',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            18,
            'log',
            '#fetchAll() network request no. 1, url = https://api.nfz.gov.pl/app-itl-api/queues?format=json&api-version=1.3&page=1&limit=25&case=1&benefitForChildren=false&benefit=endokryno&province=12&locality=KATOWICE',
            'NfzQueuesApiClientService',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            19,
            'log',
            '#fetchAll() all queues = 14, pages = 1',
            'NfzQueuesApiClientService',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            20,
            'log',
            '#findAll()',
            'NfzQueuesController',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            21,
            'warn',
            'could not read data from database: Connection with sqlite database is not established. Check connection configuration.',
            'NfzQueuesCacheService',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            22,
            'log',
            '#findAll() - cache miss',
            'NfzQueuesService',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            23,
            'log',
            '#fetchAll() query = {"case":1,"benefitForChildren":"false","benefit":"endokryno","province":"12","locality":"KATOWICE"}',
            'NfzQueuesApiClientService',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            24,
            'log',
            '#fetchAll() network request no. 1, url = https://api.nfz.gov.pl/app-itl-api/queues?format=json&api-version=1.3&page=1&limit=25&case=1&benefitForChildren=false&benefit=endokryno&province=12&locality=KATOWICE',
            'NfzQueuesApiClientService',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            25,
            'log',
            '#fetchAll() all queues = 14, pages = 1',
            'NfzQueuesApiClientService',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            26,
            'warn',
            'could not create a transaction for database: Connection with sqlite database is not established. Check connection configuration.',
            'NfzQueuesCacheService',
          );
        });
      });
    });

    describe('with two requests - both times query is valid but different', () => {
      beforeEach(() => {
        url_1 =
          '/nfz/queues?case=1&benefitForChildren=false&benefit=endokryno&province=12&locality=KATOWICE';
        url_2 =
          '/nfz/queues?case=1&benefitForChildren=false&benefit=endo&province=6';
      });

      describe('with database accessible for the whole time', () => {
        it('should return statusCode 200 and correct response two times', async () => {
          await request(app.getHttpServer())
            .get(url_1)
            .expect(200)
            .expect(req_1_page_1.data);

          await request(app.getHttpServer())
            .get(url_2)
            .expect(200)
            .expect([
              ...req_2_page_1.data,
              ...req_2_page_2.data,
              ...req_2_page_3.data,
              ...req_2_page_4.data,
              ...req_2_page_5.data,
              ...req_2_page_6.data,
            ]);
        });

        it('should first log one cache miss and data fetchinng, and then again cache miss data fetching', async () => {
          await request(app.getHttpServer())
            .get(url_1)
            .expect(200)
            .expect(req_1_page_1.data);

          await request(app.getHttpServer())
            .get(url_2)
            .expect(200)
            .expect([
              ...req_2_page_1.data,
              ...req_2_page_2.data,
              ...req_2_page_3.data,
              ...req_2_page_4.data,
              ...req_2_page_5.data,
              ...req_2_page_6.data,
            ]);

          expect(logger.log).toHaveBeenCalledTimes(29);
          expect(logger.log).toHaveBeenNthCalledWith(
            1,
            'RootTestModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            2,
            'AppModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            3,
            'TypeOrmModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            4,
            'GeocoderModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            5,
            'NfzModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            6,
            'HttpModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            7,
            'NfzQueuesApiClientModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            8,
            'TypeOrmCoreModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            9,
            'TypeOrmModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            10,
            'NfzQueuesCacheModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            11,
            'NfzQueuesModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            12,
            'NfzQueuesController {/nfz}:',
            'RoutesResolver',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            13,
            'Mapped {/nfz/queues, GET} route',
            'RouterExplorer',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            14,
            'Nest application successfully started',
            'NestApplication',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            15,
            '#findAll()',
            'NfzQueuesController',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            16,
            '#findAll() - cache miss',
            'NfzQueuesService',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            17,
            '#fetchAll() query = {"case":1,"benefitForChildren":"false","benefit":"endokryno","province":"12","locality":"KATOWICE"}',
            'NfzQueuesApiClientService',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            18,
            '#fetchAll() network request no. 1, url = https://api.nfz.gov.pl/app-itl-api/queues?format=json&api-version=1.3&page=1&limit=25&case=1&benefitForChildren=false&benefit=endokryno&province=12&locality=KATOWICE',
            'NfzQueuesApiClientService',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            19,
            '#fetchAll() all queues = 14, pages = 1',
            'NfzQueuesApiClientService',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            20,
            '#findAll()',
            'NfzQueuesController',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            21,
            '#findAll() - cache miss',
            'NfzQueuesService',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            22,
            '#fetchAll() query = {"case":1,"benefitForChildren":"false","benefit":"endo","province":"6"}',
            'NfzQueuesApiClientService',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            23,
            '#fetchAll() network request no. 1, url = https://api.nfz.gov.pl/app-itl-api/queues?format=json&api-version=1.3&page=1&limit=25&case=1&benefitForChildren=false&benefit=endo&province=06',
            'NfzQueuesApiClientService',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            24,
            '#fetchAll() all queues = 142, pages = 6',
            'NfzQueuesApiClientService',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            25,
            '#fetchAll() network request no. 2, url = https://api.nfz.gov.pl/app-itl-api/queues?page=2&limit=25&format=json&case=1&province=06&benefit=endo',
            'NfzQueuesApiClientService',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            26,
            '#fetchAll() network request no. 3, url = https://api.nfz.gov.pl/app-itl-api/queues?page=3&limit=25&format=json&case=1&province=06&benefit=endo',
            'NfzQueuesApiClientService',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            27,
            '#fetchAll() network request no. 4, url = https://api.nfz.gov.pl/app-itl-api/queues?page=4&limit=25&format=json&case=1&province=06&benefit=endo',
            'NfzQueuesApiClientService',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            28,
            '#fetchAll() network request no. 5, url = https://api.nfz.gov.pl/app-itl-api/queues?page=5&limit=25&format=json&case=1&province=06&benefit=endo',
            'NfzQueuesApiClientService',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            29,
            '#fetchAll() network request no. 6, url = https://api.nfz.gov.pl/app-itl-api/queues?page=6&limit=25&format=json&case=1&province=06&benefit=endo',
            'NfzQueuesApiClientService',
          );
        });
      });

      describe('with database not accessible while performing second request', () => {
        it('should return statusCode 200 and correct response two times', async () => {
          await request(app.getHttpServer())
            .get(url_1)
            .expect(200)
            .expect(req_1_page_1.data);

          await dataSource.destroy();

          await request(app.getHttpServer())
            .get(url_2)
            .expect(200)
            .expect([
              ...req_2_page_1.data,
              ...req_2_page_2.data,
              ...req_2_page_3.data,
              ...req_2_page_4.data,
              ...req_2_page_5.data,
              ...req_2_page_6.data,
            ]);
        });

        it('should first log one cache miss and data fetchinng, and then again cache miss with data fetching and warnings about database read and write failures', async () => {
          await request(app.getHttpServer())
            .get(url_1)
            .expect(200)
            .expect(req_1_page_1.data);

          await dataSource.destroy();

          await request(app.getHttpServer())
            .get(url_2)
            .expect(200)
            .expect([
              ...req_2_page_1.data,
              ...req_2_page_2.data,
              ...req_2_page_3.data,
              ...req_2_page_4.data,
              ...req_2_page_5.data,
              ...req_2_page_6.data,
            ]);

          expect(logger.aggregator).toHaveBeenCalledTimes(31);
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            1,
            'log',
            'RootTestModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            2,
            'log',
            'AppModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            3,
            'log',
            'TypeOrmModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.log).toHaveBeenNthCalledWith(
            4,
            'GeocoderModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            5,
            'log',
            'NfzModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            6,
            'log',
            'HttpModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            7,
            'log',
            'NfzQueuesApiClientModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            8,
            'log',
            'TypeOrmCoreModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            9,
            'log',
            'TypeOrmModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            10,
            'log',
            'NfzQueuesCacheModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            11,
            'log',
            'NfzQueuesModule dependencies initialized',
            'InstanceLoader',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            12,
            'log',
            'NfzQueuesController {/nfz}:',
            'RoutesResolver',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            13,
            'log',
            'Mapped {/nfz/queues, GET} route',
            'RouterExplorer',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            14,
            'log',
            'Nest application successfully started',
            'NestApplication',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            15,
            'log',
            '#findAll()',
            'NfzQueuesController',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            16,
            'log',
            '#findAll() - cache miss',
            'NfzQueuesService',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            17,
            'log',
            '#fetchAll() query = {"case":1,"benefitForChildren":"false","benefit":"endokryno","province":"12","locality":"KATOWICE"}',
            'NfzQueuesApiClientService',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            18,
            'log',
            '#fetchAll() network request no. 1, url = https://api.nfz.gov.pl/app-itl-api/queues?format=json&api-version=1.3&page=1&limit=25&case=1&benefitForChildren=false&benefit=endokryno&province=12&locality=KATOWICE',
            'NfzQueuesApiClientService',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            19,
            'log',
            '#fetchAll() all queues = 14, pages = 1',
            'NfzQueuesApiClientService',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            20,
            'log',
            '#findAll()',
            'NfzQueuesController',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            21,
            'warn',
            'could not read data from database: Connection with sqlite database is not established. Check connection configuration.',
            'NfzQueuesCacheService',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            22,
            'log',
            '#findAll() - cache miss',
            'NfzQueuesService',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            23,
            'log',
            '#fetchAll() query = {"case":1,"benefitForChildren":"false","benefit":"endo","province":"6"}',
            'NfzQueuesApiClientService',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            24,
            'log',
            '#fetchAll() network request no. 1, url = https://api.nfz.gov.pl/app-itl-api/queues?format=json&api-version=1.3&page=1&limit=25&case=1&benefitForChildren=false&benefit=endo&province=06',
            'NfzQueuesApiClientService',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            25,
            'log',
            '#fetchAll() all queues = 142, pages = 6',
            'NfzQueuesApiClientService',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            26,
            'log',
            '#fetchAll() network request no. 2, url = https://api.nfz.gov.pl/app-itl-api/queues?page=2&limit=25&format=json&case=1&province=06&benefit=endo',
            'NfzQueuesApiClientService',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            27,
            'log',
            '#fetchAll() network request no. 3, url = https://api.nfz.gov.pl/app-itl-api/queues?page=3&limit=25&format=json&case=1&province=06&benefit=endo',
            'NfzQueuesApiClientService',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            28,
            'log',
            '#fetchAll() network request no. 4, url = https://api.nfz.gov.pl/app-itl-api/queues?page=4&limit=25&format=json&case=1&province=06&benefit=endo',
            'NfzQueuesApiClientService',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            29,
            'log',
            '#fetchAll() network request no. 5, url = https://api.nfz.gov.pl/app-itl-api/queues?page=5&limit=25&format=json&case=1&province=06&benefit=endo',
            'NfzQueuesApiClientService',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            30,
            'log',
            '#fetchAll() network request no. 6, url = https://api.nfz.gov.pl/app-itl-api/queues?page=6&limit=25&format=json&case=1&province=06&benefit=endo',
            'NfzQueuesApiClientService',
          );
          expect(logger.aggregator).toHaveBeenNthCalledWith(
            31,
            'warn',
            'could not create a transaction for database: Connection with sqlite database is not established. Check connection configuration.',
            'NfzQueuesCacheService',
          );
        });
      });
    });
  });
});
