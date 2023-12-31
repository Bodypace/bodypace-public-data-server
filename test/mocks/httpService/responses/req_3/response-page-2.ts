// this file was auto-generated at 2023-09-21T11:06:38.859Z, do not modify it
import { NfzQueuesApiResponse } from '../../../../../src/modules/nfz/modules/queues/modules/api-client/interfaces/response.interface';

export const req_3_page_2: NfzQueuesApiResponse = {
  meta: {
    context: 'https://api.nfz.gov.pl/app-itl-api/schemas/#queue',
    count: 57,
    title: 'queue',
    page: 2,
    url: 'https://api.nfz.gov.pl/app-itl-api/schema/queue',
    limit: 25,
    provider: 'Narodowy Fundusz Zdrowia',
    'date-published': '2019-02-26T10:49:23+01:00',
    'date-modified': '2023-09-21T13:06:46+02:00',
    description:
      'Zasób zwraca pierwszy dostępny termin leczenia dla każdego świadczenia medycznego zgodnie z wybranymi parametrami wyszukiwania. Odpowiedź zawiera szczegółowe informacje  oraz listę świadczeń medycznych we właściwej kolejności wyświetlania (według pierwszej dostępnego terminu leczenia)',
    keywords:
      'kolejki,terminy leczenia,Narodowy Fundusz Zdrowia,termin,lekarz,poradnia,przychodnia,leczenie,terminy,wolne terminy',
    language: 'PL',
    'content-type': 'application/json; charset=utf-8',
    'is-part-of': 'Terminy leczenia',
    message: null,
  },
  links: {
    first:
      '/app-itl-api/queues?page=1&limit=25&format=json&case=1&province=13&benefit=endo',
    prev: '/app-itl-api/queues?page=1&limit=25&format=json&case=1&province=13&benefit=endo',
    self: '/app-itl-api/queues?page=2&limit=25&format=json&case=1&province=13&benefit=endo',
    next: '/app-itl-api/queues?page=3&limit=25&format=json&case=1&province=13&benefit=endo',
    last: '/app-itl-api/queues?page=3&limit=25&format=json&case=1&province=13&benefit=endo',
  },
  data: [
    {
      type: 'queue',
      id: '05d7a464-31f4-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ENDOPROTEZOPLASTYKA STAWU KOLANOWEGO',
        'many-places': 'N',
        provider:
          'SAMODZIELNY PUBLICZNY ZESPÓŁ ZAKŁADÓW OPIEKI ZDROWOTNEJ W STASZOWIE',
        'provider-code': '130000200',
        'regon-provider': '000302391',
        'nip-provider': '8661455641',
        'teryt-provider': '2612074',
        place:
          'ODDZIAŁ CHIRURGII URAZOWO-ORTOPEDYCZNEJ Z PODODDZIAŁEM ENDOPROTEZ',
        address: '11 LISTOPADA 78',
        locality: 'STASZÓW',
        phone: '15 864 85 93',
        'teryt-place': '2612074',
        'registry-number': '000000014786-W-26',
        'id-resort-part-VII': '008',
        'id-resort-part-VIII': '4580',
        'benefits-for-children': null,
        'covid-19': 'N',
        toilet: 'Y',
        ramp: 'Y',
        'car-park': 'Y',
        elevator: 'Y',
        latitude: 50.5613759,
        longitude: 21.190723,
        statistics: {
          'provider-data': {
            awaiting: 68,
            removed: 3,
            'average-period': 269,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-02-29',
          'date-situation-as-at': '2023-09-18',
        },
        'benefits-provided': { 'type-of-benefit': 1, year: 2022, amount: 36 },
      },
    },
    {
      type: 'queue',
      id: '05d7a464-3490-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ENDOPROTEZOPLASTYKA STAWU KOLANOWEGO',
        'many-places': 'N',
        provider: 'POWIATOWY ZAKŁAD OPIEKI ZDROWOTNEJ',
        'provider-code': '130000124',
        'regon-provider': '291141752',
        'nip-provider': '6641873185',
        'teryt-provider': '2611011',
        place:
          'ODDZIA? CHIRURGII URAZOWO-ORTOPEDYCZNY Z PODODDZIAŁEM ENDOPROTEZOPLASTYKI',
        address: 'BATALIONÓW CHŁOPSKICH 6',
        locality: 'STARACHOWICE',
        phone: '41 273-99-19',
        'teryt-place': '2611011',
        'registry-number': '000000014630-W-26',
        'id-resort-part-VII': '002',
        'id-resort-part-VIII': '4580',
        'benefits-for-children': null,
        'covid-19': 'N',
        toilet: 'Y',
        ramp: 'Y',
        'car-park': 'Y',
        elevator: 'Y',
        latitude: null,
        longitude: null,
        statistics: {
          'provider-data': {
            awaiting: 47,
            removed: 3,
            'average-period': 141,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-03-21',
          'date-situation-as-at': '2023-09-19',
        },
        'benefits-provided': { 'type-of-benefit': 1, year: 2022, amount: 125 },
      },
    },
    {
      type: 'queue',
      id: '05d7a466-8392-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ENDOPROTEZOPLASTYKA STAWU KOLANOWEGO',
        'many-places': 'N',
        provider:
          'SZPITAL SPECJALISTYCZNY ARTMEDIK SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ',
        'provider-code': '130004894',
        'regon-provider': '383170610',
        'nip-provider': '6562338799',
        'teryt-provider': '2602024',
        place: 'ODDZIAŁ URAZOWO-ORTOPEDYCZNY',
        address: 'MAŁOGOSKA 25',
        locality: 'JĘDRZEJÓW',
        phone: '41 388 28 10',
        'teryt-place': '2602024',
        'registry-number': '000000210111-W-26',
        'id-resort-part-VII': '006',
        'id-resort-part-VIII': '4580',
        'benefits-for-children': null,
        'covid-19': 'N',
        toilet: 'Y',
        ramp: 'Y',
        'car-park': 'Y',
        elevator: 'Y',
        latitude: 50.6488974,
        longitude: 20.3027322,
        statistics: {
          'provider-data': {
            awaiting: 127,
            removed: 13,
            'average-period': 154,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-03-25',
          'date-situation-as-at': '2023-09-15',
        },
        'benefits-provided': { 'type-of-benefit': 1, year: 2022, amount: 142 },
      },
    },
    {
      type: 'queue',
      id: '05d7a464-b444-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
        'many-places': 'N',
        provider: 'VITAMED S.C.  WYJADŁOWSKI ANDRZEJ, SKOCZEŃ NIKODEM',
        'provider-code': '130002613',
        'regon-provider': '260223017',
        'nip-provider': '6612310226',
        'teryt-provider': '2607054',
        place: 'PORADNIA ENDOKRYNOLOGICZNA',
        address: 'WARSZAWSKA 46A',
        locality: 'KUNÓW',
        phone: '041-261-31-40',
        'teryt-place': '2607054',
        'registry-number': '000000022121-W-26',
        'id-resort-part-VII': '005',
        'id-resort-part-VIII': '1030',
        'benefits-for-children': 'Y',
        'covid-19': 'N',
        toilet: 'N',
        ramp: 'Y',
        'car-park': 'Y',
        elevator: 'N',
        latitude: 50.9578589,
        longitude: 21.2797329,
        statistics: {
          'provider-data': {
            awaiting: 5,
            removed: 2,
            'average-period': 127,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-03-27',
          'date-situation-as-at': '2023-09-19',
        },
        'benefits-provided': null,
      },
    },
    {
      type: 'queue',
      id: '05d7a464-348c-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ENDOPROTEZOPLASTYKA STAWU BIODROWEGO',
        'many-places': 'N',
        provider: 'POWIATOWY ZAKŁAD OPIEKI ZDROWOTNEJ',
        'provider-code': '130000124',
        'regon-provider': '291141752',
        'nip-provider': '6641873185',
        'teryt-provider': '2611011',
        place:
          'ODDZIA? CHIRURGII URAZOWO-ORTOPEDYCZNY Z PODODDZIAŁEM ENDOPROTEZOPLASTYKI',
        address: 'BATALIONÓW CHŁOPSKICH 6',
        locality: 'STARACHOWICE',
        phone: '41 273-99-19',
        'teryt-place': '2611011',
        'registry-number': '000000014630-W-26',
        'id-resort-part-VII': '002',
        'id-resort-part-VIII': '4580',
        'benefits-for-children': null,
        'covid-19': 'N',
        toilet: 'Y',
        ramp: 'Y',
        'car-park': 'Y',
        elevator: 'Y',
        latitude: null,
        longitude: null,
        statistics: {
          'provider-data': {
            awaiting: 57,
            removed: 3,
            'average-period': 105,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-04-28',
          'date-situation-as-at': '2023-09-19',
        },
        'benefits-provided': { 'type-of-benefit': 1, year: 2022, amount: 208 },
      },
    },
    {
      type: 'queue',
      id: '05d7a464-31f0-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ENDOPROTEZOPLASTYKA STAWU BIODROWEGO',
        'many-places': 'N',
        provider:
          'SAMODZIELNY PUBLICZNY ZESPÓŁ ZAKŁADÓW OPIEKI ZDROWOTNEJ W STASZOWIE',
        'provider-code': '130000200',
        'regon-provider': '000302391',
        'nip-provider': '8661455641',
        'teryt-provider': '2612074',
        place:
          'ODDZIAŁ CHIRURGII URAZOWO-ORTOPEDYCZNEJ Z PODODDZIAŁEM ENDOPROTEZ',
        address: '11 LISTOPADA 78',
        locality: 'STASZÓW',
        phone: '15 864 85 93',
        'teryt-place': '2612074',
        'registry-number': '000000014786-W-26',
        'id-resort-part-VII': '008',
        'id-resort-part-VIII': '4580',
        'benefits-for-children': null,
        'covid-19': 'N',
        toilet: 'Y',
        ramp: 'Y',
        'car-park': 'Y',
        elevator: 'Y',
        latitude: 50.5613759,
        longitude: 21.190723,
        statistics: {
          'provider-data': {
            awaiting: 64,
            removed: 1,
            'average-period': 578,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-05-15',
          'date-situation-as-at': '2023-09-18',
        },
        'benefits-provided': { 'type-of-benefit': 1, year: 2022, amount: 85 },
      },
    },
    {
      type: 'queue',
      id: '05d7a464-b40a-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ENDOPROTEZOPLASTYKA STAWU BIODROWEGO',
        'many-places': 'N',
        provider: 'WIELOSPECJALISTYCZNY SZPITAL W OSTROWCU ŚWIĘTOKRZYSKIM',
        'provider-code': '130000205',
        'regon-provider': '000311473',
        'nip-provider': '6611959864',
        'teryt-provider': '2607011',
        place: 'ODDZIAŁ CHIRURGII URAZOWO ORTOPEDYCZNEJ',
        address: 'SZYMANOWSKIEGO 11',
        locality: 'OSTROWIEC ŚWIĘTOKRZYSKI',
        phone: '041 247 80 00 WEW 243',
        'teryt-place': '2607011',
        'registry-number': '000000014595-W-26',
        'id-resort-part-VII': '011',
        'id-resort-part-VIII': '4580',
        'benefits-for-children': null,
        'covid-19': 'N',
        toilet: 'Y',
        ramp: 'Y',
        'car-park': 'Y',
        elevator: 'Y',
        latitude: 50.9527753,
        longitude: 21.3613314,
        statistics: {
          'provider-data': {
            awaiting: 71,
            removed: 6,
            'average-period': 115,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-05-28',
          'date-situation-as-at': '2023-09-20',
        },
        'benefits-provided': { 'type-of-benefit': 1, year: 2022, amount: 256 },
      },
    },
    {
      type: 'queue',
      id: '05d7a464-b40e-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ENDOPROTEZOPLASTYKA STAWU KOLANOWEGO',
        'many-places': 'N',
        provider: 'WIELOSPECJALISTYCZNY SZPITAL W OSTROWCU ŚWIĘTOKRZYSKIM',
        'provider-code': '130000205',
        'regon-provider': '000311473',
        'nip-provider': '6611959864',
        'teryt-provider': '2607011',
        place: 'ODDZIAŁ CHIRURGII URAZOWO ORTOPEDYCZNEJ',
        address: 'SZYMANOWSKIEGO 11',
        locality: 'OSTROWIEC ŚWIĘTOKRZYSKI',
        phone: '041 247 80 00 WEW 243',
        'teryt-place': '2607011',
        'registry-number': '000000014595-W-26',
        'id-resort-part-VII': '011',
        'id-resort-part-VIII': '4580',
        'benefits-for-children': null,
        'covid-19': 'N',
        toilet: 'Y',
        ramp: 'Y',
        'car-park': 'Y',
        elevator: 'Y',
        latitude: 50.9527753,
        longitude: 21.3613314,
        statistics: {
          'provider-data': {
            awaiting: 75,
            removed: 6,
            'average-period': 129,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-05-28',
          'date-situation-as-at': '2023-09-20',
        },
        'benefits-provided': { 'type-of-benefit': 1, year: 2022, amount: 98 },
      },
    },
    {
      type: 'queue',
      id: '05d7a466-838e-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ENDOPROTEZOPLASTYKA STAWU BIODROWEGO',
        'many-places': 'N',
        provider:
          'SZPITAL SPECJALISTYCZNY ARTMEDIK SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ',
        'provider-code': '130004894',
        'regon-provider': '383170610',
        'nip-provider': '6562338799',
        'teryt-provider': '2602024',
        place: 'ODDZIAŁ URAZOWO-ORTOPEDYCZNY',
        address: 'MAŁOGOSKA 25',
        locality: 'JĘDRZEJÓW',
        phone: '41 388 28 10',
        'teryt-place': '2602024',
        'registry-number': '000000210111-W-26',
        'id-resort-part-VII': '006',
        'id-resort-part-VIII': '4580',
        'benefits-for-children': null,
        'covid-19': 'N',
        toilet: 'Y',
        ramp: 'Y',
        'car-park': 'Y',
        elevator: 'Y',
        latitude: 50.6488974,
        longitude: 20.3027322,
        statistics: {
          'provider-data': {
            awaiting: 148,
            removed: 18,
            'average-period': 137,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-06-30',
          'date-situation-as-at': '2023-09-15',
        },
        'benefits-provided': { 'type-of-benefit': 1, year: 2022, amount: 269 },
      },
    },
    {
      type: 'queue',
      id: '05d7a462-fb9c-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ENDOPROTEZOPLASTYKA STAWU KOLANOWEGO',
        'many-places': 'Y',
        provider: '"UZDROWISKO BUSKO-ZDRÓJ" SPÓŁKA AKCYJNA',
        'provider-code': '130000898',
        'regon-provider': '000288165',
        'nip-provider': '6550000238',
        'teryt-provider': '2601014',
        place: 'II ODDZIAŁ CHIRURGII URAZOWO-ORTOPEDYCZNEJ - "GÓRKA"',
        address: 'DR SZYMONA STARKIEWICZA 1',
        locality: 'BUSKO-ZDRÓJ',
        phone: '413703400',
        'teryt-place': '2601014',
        'registry-number': '000000014745-W-26',
        'id-resort-part-VII': '069',
        'id-resort-part-VIII': '4580',
        'benefits-for-children': null,
        'covid-19': 'N',
        toilet: 'Y',
        ramp: 'Y',
        'car-park': 'N',
        elevator: 'Y',
        latitude: 50.4499071,
        longitude: 20.7176571,
        statistics: {
          'provider-data': {
            awaiting: 93,
            removed: 11,
            'average-period': 269,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-07-14',
          'date-situation-as-at': '2023-09-20',
        },
        'benefits-provided': { 'type-of-benefit': 1, year: 2022, amount: 243 },
      },
    },
    {
      type: 'queue',
      id: '05d7a466-719c-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
        'many-places': 'N',
        provider: '"MEDYK" B. NICIEJA, E. NICIEJA SPÓŁKA JAWNA',
        'provider-code': '130001272',
        'regon-provider': '291214971',
        'nip-provider': '6612073128',
        'teryt-provider': '2607011',
        place: 'PORADNIA ENDOKRYNOLOGICZNA',
        address: 'JANA PAWŁA II 7A',
        locality: 'OSTROWIEC ŚWIĘTOKRZYSKI',
        phone: '41 26 20 200',
        'teryt-place': '2607011',
        'registry-number': '000000014889-W-26',
        'id-resort-part-VII': '009',
        'id-resort-part-VIII': '1030',
        'benefits-for-children': null,
        'covid-19': 'N',
        toilet: 'N',
        ramp: 'Y',
        'car-park': 'Y',
        elevator: 'N',
        latitude: 50.9486269,
        longitude: 21.388206,
        statistics: {
          'provider-data': {
            awaiting: 198,
            removed: 12,
            'average-period': 206,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-07-23',
          'date-situation-as-at': '2023-09-20',
        },
        'benefits-provided': null,
      },
    },
    {
      type: 'queue',
      id: '05d7a464-3bb0-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
        'many-places': 'N',
        provider: 'ZESPÓŁ OPIEKI ZDROWOTNEJ W KOŃSKICH',
        'provider-code': '130000188',
        'regon-provider': '260076450',
        'nip-provider': '6581705655',
        'teryt-provider': '2605034',
        place: 'PORADNIA ENDOKRYNOLOGICZNA',
        address: 'GIMNAZJALNA 41B',
        locality: 'KOŃSKIE',
        phone: '413902279/242',
        'teryt-place': '2605034',
        'registry-number': '000000014586-W-26',
        'id-resort-part-VII': '032',
        'id-resort-part-VIII': '1030',
        'benefits-for-children': null,
        'covid-19': 'N',
        toilet: 'Y',
        ramp: 'Y',
        'car-park': 'N',
        elevator: 'Y',
        latitude: 51.190801,
        longitude: 20.391731,
        statistics: {
          'provider-data': {
            awaiting: 65,
            removed: 2,
            'average-period': 5,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-08-21',
          'date-situation-as-at': '2023-09-18',
        },
        'benefits-provided': null,
      },
    },
    {
      type: 'queue',
      id: '05d7a466-f45e-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
        'many-places': 'N',
        provider: 'WIELOSPECJALISTYCZNY SZPITAL W OSTROWCU ŚWIĘTOKRZYSKIM',
        'provider-code': '130000205',
        'regon-provider': '000311473',
        'nip-provider': '6611959864',
        'teryt-provider': '2607011',
        place: 'PORADNIA ENDOKRYNOLOGICZNA',
        address: 'SZYMANOWSKIEGO 11',
        locality: 'OSTROWIEC ŚWIĘTOKRZYSKI',
        phone: '41 26 13 456',
        'teryt-place': '2607011',
        'registry-number': '000000014595-W-26',
        'id-resort-part-VII': '103',
        'id-resort-part-VIII': '1030',
        'benefits-for-children': null,
        'covid-19': 'N',
        toilet: 'Y',
        ramp: 'Y',
        'car-park': 'Y',
        elevator: 'Y',
        latitude: 50.9527753,
        longitude: 21.3613314,
        statistics: {
          'provider-data': {
            awaiting: 81,
            removed: 46,
            'average-period': 156,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-08-27',
          'date-situation-as-at': '2023-09-20',
        },
        'benefits-provided': null,
      },
    },
    {
      type: 'queue',
      id: '05d7a466-08a2-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
        'many-places': 'N',
        provider: 'RODZINA P. STRĄCZYŃSKI SPÓŁKA JAWNA',
        'provider-code': '130003820',
        'regon-provider': '260700204',
        'nip-provider': '6572910516',
        'teryt-provider': '2661011',
        place: 'PORADNIA ENDOKRYNOLOGICZNA',
        address: 'OS NA STOKU 63A',
        locality: 'KIELCE',
        phone: '413327173;413327172',
        'teryt-place': '2661011',
        'registry-number': '000000159286-W-26',
        'id-resort-part-VII': '017',
        'id-resort-part-VIII': '1030',
        'benefits-for-children': null,
        'covid-19': 'N',
        toilet: 'Y',
        ramp: 'Y',
        'car-park': 'Y',
        elevator: 'Y',
        latitude: 50.8939645,
        longitude: 20.6630571,
        statistics: {
          'provider-data': {
            awaiting: 195,
            removed: 16,
            'average-period': 398,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-09-02',
          'date-situation-as-at': '2023-09-15',
        },
        'benefits-provided': null,
      },
    },
    {
      type: 'queue',
      id: '05d7a464-ac90-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
        'many-places': 'N',
        provider: 'POWIATOWY ZAKŁAD OPIEKI ZDROWOTNEJ',
        'provider-code': '130000124',
        'regon-provider': '291141752',
        'nip-provider': '6641873185',
        'teryt-provider': '2611011',
        place: 'PORADNIA ENDOKRYNOLOGICZNA',
        address: 'BATALIONÓW CHŁOPSKICH 6',
        locality: 'STARACHOWICE',
        phone: '(41) 273-91-02, (41) 273-91-06',
        'teryt-place': '2611011',
        'registry-number': '000000014630-W-26',
        'id-resort-part-VII': '019',
        'id-resort-part-VIII': '1030',
        'benefits-for-children': null,
        'covid-19': 'N',
        toilet: 'Y',
        ramp: 'Y',
        'car-park': 'Y',
        elevator: 'Y',
        latitude: null,
        longitude: null,
        statistics: {
          'provider-data': {
            awaiting: 101,
            removed: 2,
            'average-period': 22,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-09-04',
          'date-situation-as-at': '2023-09-19',
        },
        'benefits-provided': null,
      },
    },
    {
      type: 'queue',
      id: '05d7a465-efe4-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
        'many-places': 'N',
        provider:
          'NIEPUBLICZNY SPECJALISTYCZNY ZAKŁAD OPIEKI ZDROWOTNEJ "PULS-MED" ANNA BOGUSZ, AGNIESZKA MUSIELAK SPÓŁKA JAWNA',
        'provider-code': '130002116',
        'regon-provider': '260119372',
        'nip-provider': '6631801310',
        'teryt-provider': '2610011',
        place: 'PORADNIA ENDOKRYNOLOGICZNA',
        address: '1 MAJA 55',
        locality: 'SKARŻYSKO-KAMIENNA',
        phone: '41 2514903',
        'teryt-place': '2610011',
        'registry-number': '000000020909-W-26',
        'id-resort-part-VII': '019',
        'id-resort-part-VIII': '1030',
        'benefits-for-children': null,
        'covid-19': 'N',
        toilet: 'Y',
        ramp: 'Y',
        'car-park': 'Y',
        elevator: 'Y',
        latitude: 51.1167129,
        longitude: 20.891053,
        statistics: {
          'provider-data': {
            awaiting: 168,
            removed: 8,
            'average-period': 375,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-09-21',
          'date-situation-as-at': '2023-09-20',
        },
        'benefits-provided': null,
      },
    },
    {
      type: 'queue',
      id: '05d7a464-b1b8-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
        'many-places': 'Y',
        provider: 'POWIATOWE CENTRUM USŁUG MEDYCZNYCH W KIELCACH',
        'provider-code': '130000095',
        'regon-provider': '000985332',
        'nip-provider': '9591498969',
        'teryt-provider': '2661011',
        place: 'PORADNIA ENDOKRYNOLOGICZNA',
        address: 'ŻELAZNA 35',
        locality: 'KIELCE',
        phone: '41-34-70-356',
        'teryt-place': '2661011',
        'registry-number': '000000014612-W-26',
        'id-resort-part-VII': '021',
        'id-resort-part-VIII': '1030',
        'benefits-for-children': null,
        'covid-19': 'N',
        toilet: 'Y',
        ramp: 'Y',
        'car-park': 'Y',
        elevator: 'Y',
        latitude: 50.87271,
        longitude: 20.6190979,
        statistics: {
          'provider-data': {
            awaiting: 186,
            removed: 19,
            'average-period': 377,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-09-24',
          'date-situation-as-at': '2023-09-20',
        },
        'benefits-provided': null,
      },
    },
    {
      type: 'queue',
      id: '05d7a464-1c30-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ENDOPROTEZOPLASTYKA STAWU KOLANOWEGO',
        'many-places': 'N',
        provider: 'ZESPÓŁ OPIEKI ZDROWOTNEJ W BUSKU-ZDROJU',
        'provider-code': '130000121',
        'regon-provider': '000311467',
        'nip-provider': '6551662705',
        'teryt-provider': '2601014',
        place: 'ODDZIAŁ CHIRURGII URAZOWO-ORTOPEDYCZNEJ',
        address: 'BOHATERÓW WARSZAWY 67',
        locality: 'BUSKO-ZDRÓJ',
        phone: '0413782401w267',
        'teryt-place': '2601014',
        'registry-number': '000000014617-W-26',
        'id-resort-part-VII': '008',
        'id-resort-part-VIII': '4580',
        'benefits-for-children': null,
        'covid-19': 'N',
        toilet: 'Y',
        ramp: 'Y',
        'car-park': 'Y',
        elevator: 'Y',
        latitude: 50.4677502,
        longitude: 20.7040308,
        statistics: {
          'provider-data': {
            awaiting: 197,
            removed: 1,
            'average-period': 383,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-10-06',
          'date-situation-as-at': '2023-09-15',
        },
        'benefits-provided': { 'type-of-benefit': 1, year: 2022, amount: 254 },
      },
    },
    {
      type: 'queue',
      id: '05d7a464-300c-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
        'many-places': 'N',
        provider:
          'ŚWIĘTOKRZYSKIE CENTRUM ONKOLOGII SAMODZIELNY PUBLICZNY ZAKŁAD OPIEKI ZDROWOTNEJ W KIELCACH',
        'provider-code': '130000189',
        'regon-provider': '001263233',
        'nip-provider': '9591294907',
        'teryt-provider': '2661011',
        place: 'PORADNIA ENDOKRYNOLOGII',
        address: 'ARTWIŃSKIEGO 3',
        locality: 'KIELCE',
        phone: '41 36 74 208',
        'teryt-place': '2661011',
        'registry-number': '000000014611-W-26',
        'id-resort-part-VII': '031',
        'id-resort-part-VIII': '1030',
        'benefits-for-children': null,
        'covid-19': 'N',
        toilet: 'Y',
        ramp: 'Y',
        'car-park': 'Y',
        elevator: 'Y',
        latitude: 50.871607,
        longitude: 20.598483,
        statistics: {
          'provider-data': {
            awaiting: 0,
            removed: 0,
            'average-period': 0,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-10-07',
          'date-situation-as-at': '2023-09-14',
        },
        'benefits-provided': null,
      },
    },
    {
      type: 'queue',
      id: '05d7a465-bde2-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
        'many-places': 'N',
        provider: 'NIEPUBLICZNY ZAKŁAD OPIEKI ZDROWOTNEJ UNIMED W KIELCACH',
        'provider-code': '130002607',
        'regon-provider': '260195522',
        'nip-provider': '6572768219',
        'teryt-provider': '2661011',
        place: 'PORADNIA ENDOKRYNOLOGICZNA',
        address: 'WARSZAWSKA 166/42',
        locality: 'KIELCE',
        phone: '(41) 331 35 78',
        'teryt-place': '2661011',
        'registry-number': '000000022087-W-26',
        'id-resort-part-VII': '007',
        'id-resort-part-VIII': '1030',
        'benefits-for-children': null,
        'covid-19': 'N',
        toilet: 'Y',
        ramp: 'Y',
        'car-park': 'Y',
        elevator: 'N',
        latitude: 50.891177,
        longitude: 20.650619,
        statistics: {
          'provider-data': {
            awaiting: 113,
            removed: 8,
            'average-period': 128,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-10-11',
          'date-situation-as-at': '2023-09-20',
        },
        'benefits-provided': null,
      },
    },
    {
      type: 'queue',
      id: '05d7a464-3974-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ENDOPROTEZOPLASTYKA STAWU BIODROWEGO',
        'many-places': 'N',
        provider: 'ZESPÓŁ OPIEKI ZDROWOTNEJ W KOŃSKICH',
        'provider-code': '130000188',
        'regon-provider': '260076450',
        'nip-provider': '6581705655',
        'teryt-provider': '2605034',
        place: 'ODDZIAŁ CHIRURGII URAZOWO-ORTOPEDYCZNEJ',
        address: 'GIMNAZJALNA 41B',
        locality: 'KOŃSKIE',
        phone: '0413902209',
        'teryt-place': '2605034',
        'registry-number': '000000014586-W-26',
        'id-resort-part-VII': '009',
        'id-resort-part-VIII': '4580',
        'benefits-for-children': null,
        'covid-19': 'N',
        toilet: 'Y',
        ramp: 'Y',
        'car-park': 'N',
        elevator: 'Y',
        latitude: 51.190801,
        longitude: 20.391731,
        statistics: {
          'provider-data': {
            awaiting: 226,
            removed: 19,
            'average-period': 194,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-11-25',
          'date-situation-as-at': '2023-09-18',
        },
        'benefits-provided': { 'type-of-benefit': 1, year: 2022, amount: 249 },
      },
    },
    {
      type: 'queue',
      id: '05d7a464-3978-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ENDOPROTEZOPLASTYKA STAWU KOLANOWEGO',
        'many-places': 'N',
        provider: 'ZESPÓŁ OPIEKI ZDROWOTNEJ W KOŃSKICH',
        'provider-code': '130000188',
        'regon-provider': '260076450',
        'nip-provider': '6581705655',
        'teryt-provider': '2605034',
        place: 'ODDZIAŁ CHIRURGII URAZOWO-ORTOPEDYCZNEJ',
        address: 'GIMNAZJALNA 41B',
        locality: 'KOŃSKIE',
        phone: '0413902209',
        'teryt-place': '2605034',
        'registry-number': '000000014586-W-26',
        'id-resort-part-VII': '009',
        'id-resort-part-VIII': '4580',
        'benefits-for-children': null,
        'covid-19': 'N',
        toilet: 'Y',
        ramp: 'Y',
        'car-park': 'N',
        elevator: 'Y',
        latitude: 51.190801,
        longitude: 20.391731,
        statistics: {
          'provider-data': {
            awaiting: 216,
            removed: 15,
            'average-period': 214,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-11-25',
          'date-situation-as-at': '2023-09-18',
        },
        'benefits-provided': { 'type-of-benefit': 1, year: 2022, amount: 117 },
      },
    },
    {
      type: 'queue',
      id: '05d7a464-3702-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
        'many-places': 'N',
        provider: 'NIEPUBLICZNY ZAKŁAD OPIEKI ZDROWOTNEJ - "PROMED" W KIELCACH',
        'provider-code': '130001317',
        'regon-provider': '292819676',
        'nip-provider': '9591578929',
        'teryt-provider': '2661011',
        place: 'PORADNIA ENDOKRYNOLOGICZNA',
        address: 'KARCZÓWKOWSKA 36',
        locality: 'KIELCE',
        phone: '(41) 366 01 94, 509 932 259',
        'teryt-place': '2661011',
        'registry-number': '000000014903-W-26',
        'id-resort-part-VII': '024',
        'id-resort-part-VIII': '1030',
        'benefits-for-children': null,
        'covid-19': 'N',
        toilet: 'Y',
        ramp: 'Y',
        'car-park': 'Y',
        elevator: 'N',
        latitude: 50.868313,
        longitude: 20.607979,
        statistics: {
          'provider-data': {
            awaiting: 49,
            removed: 7,
            'average-period': 210,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-12-12',
          'date-situation-as-at': '2023-09-20',
        },
        'benefits-provided': null,
      },
    },
    {
      type: 'queue',
      id: '05d7a464-a396-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
        'many-places': 'N',
        provider: 'ZESPÓŁ OPIEKI ZDROWOTNEJ W BUSKU-ZDROJU',
        'provider-code': '130000121',
        'regon-provider': '000311467',
        'nip-provider': '6551662705',
        'teryt-provider': '2601014',
        place: 'PORADNIA ENDOKRYNOLOGICZNA',
        address: 'BOHATERÓW WARSZAWY 67',
        locality: 'BUSKO-ZDRÓJ',
        phone: '0413782401w292',
        'teryt-place': '2601014',
        'registry-number': '000000014617-W-26',
        'id-resort-part-VII': '015',
        'id-resort-part-VIII': '1030',
        'benefits-for-children': null,
        'covid-19': 'N',
        toilet: 'Y',
        ramp: 'Y',
        'car-park': 'Y',
        elevator: 'Y',
        latitude: 50.4677502,
        longitude: 20.7040308,
        statistics: {
          'provider-data': {
            awaiting: 78,
            removed: 8,
            'average-period': 398,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2025-06-10',
          'date-situation-as-at': '2023-09-20',
        },
        'benefits-provided': null,
      },
    },
    {
      type: 'queue',
      id: '05d7a464-aa8a-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
        'many-places': 'N',
        provider:
          'SAMODZIELNY PUBLICZNY ZESPÓŁ ZAKŁADÓW OPIEKI ZDROWOTNEJ W STASZOWIE',
        'provider-code': '130000200',
        'regon-provider': '000302391',
        'nip-provider': '8661455641',
        'teryt-provider': '2612074',
        place: 'PORADNIA ENDOKRYNOLOGICZNA',
        address: '11 LISTOPADA 78',
        locality: 'STASZÓW',
        phone: '15 864  85 74',
        'teryt-place': '2612074',
        'registry-number': '000000014786-W-26',
        'id-resort-part-VII': '016',
        'id-resort-part-VIII': '1030',
        'benefits-for-children': null,
        'covid-19': 'N',
        toilet: 'Y',
        ramp: 'Y',
        'car-park': 'Y',
        elevator: 'Y',
        latitude: 50.5613759,
        longitude: 21.190723,
        statistics: {
          'provider-data': {
            awaiting: 68,
            removed: 4,
            'average-period': 187,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2025-12-23',
          'date-situation-as-at': '2023-09-20',
        },
        'benefits-provided': null,
      },
    },
  ],
};
