// this file was auto-generated at 2023-09-19T11:47:20.345Z, do not modify it
import { NfzQueuesApiResponse } from '../../../../../src/modules/nfz/modules/queues/modules/api-client/interfaces/response.interface';

export const req_2_page_6: NfzQueuesApiResponse = {
  meta: {
    context: 'https://api.nfz.gov.pl/app-itl-api/schemas/#queue',
    count: 142,
    title: 'queue',
    page: 6,
    url: 'https://api.nfz.gov.pl/app-itl-api/schema/queue',
    limit: 25,
    provider: 'Narodowy Fundusz Zdrowia',
    'date-published': '2019-02-26T10:49:23+01:00',
    'date-modified': '2023-09-19T13:47:24+02:00',
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
      '/app-itl-api/queues?page=1&limit=25&format=json&case=1&province=06&benefit=endo',
    prev: '/app-itl-api/queues?page=5&limit=25&format=json&case=1&province=06&benefit=endo',
    self: '/app-itl-api/queues?page=6&limit=25&format=json&case=1&province=06&benefit=endo',
    next: null,
    last: '/app-itl-api/queues?page=6&limit=25&format=json&case=1&province=06&benefit=endo',
  },
  data: [
    {
      type: 'queue',
      id: '05af67e9-b46b-3029-e063-b4200a0af9d5',
      attributes: {
        case: 1,
        benefit: 'ENDOPROTEZOPLASTYKA STAWU BIODROWEGO',
        'many-places': 'N',
        provider: 'ORTOPEDICUM SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ',
        'provider-code': '061/200266',
        'regon-provider': '357031580',
        'nip-provider': '6772110766',
        'teryt-provider': '1261011',
        place: 'ODDZIAŁ ORTOPEDYCZNY',
        address: 'UL. KOŁO STRZELNICY 3',
        locality: 'KRAKÓW-KROWODRZA',
        phone: '+48 124 253 851',
        'teryt-place': '1261029',
        'registry-number': '000000007026-W-12',
        'id-resort-part-VII': '004',
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
            awaiting: 412,
            removed: 6,
            'average-period': 264,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2025-09-04',
          'date-situation-as-at': '2023-09-18',
        },
        'benefits-provided': { 'type-of-benefit': 1, year: 2022, amount: 351 },
      },
    },
    {
      type: 'queue',
      id: '05af67e8-e2bd-3029-e063-b4200a0af9d5',
      attributes: {
        case: 1,
        benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
        'many-places': 'N',
        provider: 'GMINNY ZAKŁAD OPIEKI ZDROWOTNEJ W KĘTACH',
        'provider-code': '061/100229',
        'regon-provider': '357029926',
        'nip-provider': '5492023132',
        'teryt-provider': '1213044',
        place: 'PORADNIA ENDOKRYNOLOGICZNA',
        address: 'UL. SOBIESKIEGO 35 A',
        locality: 'KĘTY',
        phone: '+48 33 845 29 26',
        'teryt-place': '1213044',
        'registry-number': '000000006167-W-12',
        'id-resort-part-VII': '038',
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
            awaiting: 58,
            removed: 5,
            'average-period': 824,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2025-09-10',
          'date-situation-as-at': '2023-09-15',
        },
        'benefits-provided': null,
      },
    },
    {
      type: 'queue',
      id: '05af67ea-85b7-3029-e063-b4200a0af9d5',
      attributes: {
        case: 1,
        benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
        'many-places': 'N',
        provider:
          'CENTRUM MEDYCZNE UJASTEK SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ',
        'provider-code': '061/200207',
        'regon-provider': '350887420',
        'nip-provider': '6781015576',
        'teryt-provider': '1261011',
        place: 'PORADNIA ENDOKRYNOLOGICZNA',
        address: 'UL. MARII I BOLESŁAWA WYSŁOUCHÓW 41A',
        locality: 'KRAKÓW',
        phone: '+48 12 654 04 02',
        'teryt-place': '1261049',
        'registry-number': '000000005776-W-12',
        'id-resort-part-VII': '062',
        'id-resort-part-VIII': '1030',
        'benefits-for-children': null,
        'covid-19': 'N',
        toilet: 'N',
        ramp: 'N',
        'car-park': 'N',
        elevator: 'N',
        latitude: null,
        longitude: null,
        statistics: {
          'provider-data': {
            awaiting: 144,
            removed: 10,
            'average-period': 78,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2025-10-27',
          'date-situation-as-at': '2023-09-18',
        },
        'benefits-provided': null,
      },
    },
    {
      type: 'queue',
      id: '05af67e8-b97d-3029-e063-b4200a0af9d5',
      attributes: {
        case: 1,
        benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
        'many-places': 'N',
        provider:
          'SZPITAL WOJEWÓDZKI IM.ŚW.ŁUKASZA SAMODZIELNY PUBLICZNY ZAKŁAD OPIEKI ZDROWOTNEJ W TARNOWIE',
        'provider-code': '065/100186',
        'regon-provider': '850052740',
        'nip-provider': '8732713732',
        'teryt-provider': '1263011',
        place: 'SPECJALISTYCZNA PORADNIA KONSULTACYJNA ENDOKRYNOLOGICZNA',
        address: 'UL. LWOWSKA 178A',
        locality: 'TARNÓW',
        phone: '(014)631 57 41',
        'teryt-place': '1263011',
        'registry-number': '000000005908-W-12',
        'id-resort-part-VII': '035',
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
            awaiting: 88,
            removed: 1,
            'average-period': 276,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2025-11-05',
          'date-situation-as-at': '2023-09-18',
        },
        'benefits-provided': null,
      },
    },
    {
      type: 'queue',
      id: '05af67ea-a141-3029-e063-b4200a0af9d5',
      attributes: {
        case: 1,
        benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
        'many-places': 'Y',
        provider:
          'SAMODZIELNY PUBLICZNY ZAKŁAD OPIEKI ZDROWOTNEJ SZPITAL UNIWERSYTECKI W KRAKOWIE',
        'provider-code': '061/100014',
        'regon-provider': '000288685',
        'nip-provider': '6751199442',
        'teryt-provider': '1261011',
        place: 'PORADNIA ENDOKRYNOLOGICZNA',
        address: 'UL. MACIEJA JAKUBOWSKIEGO 2',
        locality: 'KRAKÓW',
        phone: '(012)400 10 00',
        'teryt-place': '1261011',
        'registry-number': '000000018583-W-12',
        'id-resort-part-VII': '845',
        'id-resort-part-VIII': '1030',
        'benefits-for-children': null,
        'covid-19': 'N',
        toilet: 'N',
        ramp: 'N',
        'car-park': 'N',
        elevator: 'Y',
        latitude: null,
        longitude: null,
        statistics: {
          'provider-data': {
            awaiting: 314,
            removed: 32,
            'average-period': 163,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2025-11-25',
          'date-situation-as-at': '2023-09-18',
        },
        'benefits-provided': null,
      },
    },
    {
      type: 'queue',
      id: '05af67ea-8c83-3029-e063-b4200a0af9d5',
      attributes: {
        case: 1,
        benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
        'many-places': 'Y',
        provider:
          'SAMODZIELNY PUBLICZNY ZAKŁAD OPIEKI ZDROWOTNEJ SZPITAL UNIWERSYTECKI W KRAKOWIE',
        'provider-code': '061/100014',
        'regon-provider': '000288685',
        'nip-provider': '6751199442',
        'teryt-provider': '1261011',
        place: 'PORADNIA ENDOKRYNOLOGICZNA',
        address: 'UL. MACIEJA JAKUBOWSKIEGO 2',
        locality: 'KRAKÓW',
        phone: '(012)400 10 00',
        'teryt-place': '1261011',
        'registry-number': '000000018583-W-12',
        'id-resort-part-VII': '659',
        'id-resort-part-VIII': '1030',
        'benefits-for-children': null,
        'covid-19': 'N',
        toilet: 'N',
        ramp: 'N',
        'car-park': 'N',
        elevator: 'Y',
        latitude: null,
        longitude: null,
        statistics: {
          'provider-data': {
            awaiting: 54,
            removed: 3,
            'average-period': 502,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2025-11-25',
          'date-situation-as-at': '2023-09-18',
        },
        'benefits-provided': null,
      },
    },
    {
      type: 'queue',
      id: '05af67e8-de93-3029-e063-b4200a0af9d5',
      attributes: {
        case: 1,
        benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
        'many-places': 'N',
        provider: 'ZESPÓŁ ZAKŁADÓW OPIEKI ZDROWOTNEJ W WADOWICACH',
        'provider-code': '061/100026',
        'regon-provider': '000306466',
        'nip-provider': '5512124676',
        'teryt-provider': '1218094',
        place: 'PORADNIA ENDOKRYNOLOGICZNA',
        address: 'UL. KARMELICKA 5',
        locality: 'WADOWICE',
        phone: '(033)872 12 00',
        'teryt-place': '1218094',
        'registry-number': '000000006095-W-12',
        'id-resort-part-VII': '039',
        'id-resort-part-VIII': '1030',
        'benefits-for-children': null,
        'covid-19': 'N',
        toilet: 'Y',
        ramp: 'Y',
        'car-park': 'N',
        elevator: 'Y',
        latitude: null,
        longitude: null,
        statistics: {
          'provider-data': {
            awaiting: 599,
            removed: 21,
            'average-period': 268,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2025-11-26',
          'date-situation-as-at': '2023-09-17',
        },
        'benefits-provided': null,
      },
    },
    {
      type: 'queue',
      id: '05af67e8-aff1-3029-e063-b4200a0af9d5',
      attributes: {
        case: 1,
        benefit: 'ENDOPROTEZOPLASTYKA STAWU BIODROWEGO',
        'many-places': 'N',
        provider:
          'PODHALAŃSKI SZPITAL SPECJALISTYCZNY IM. JANA PAWŁA II W NOWYM TARGU',
        'provider-code': '064/100005',
        'regon-provider': '000308324',
        'nip-provider': '7352178657',
        'teryt-provider': '1211011',
        place: 'ODDZIAŁ CHIRURGII URAZOWO-ORTOPEDYCZNEJ',
        address: 'UL. SZPITALNA 14',
        locality: 'NOWY TARG',
        phone: '(018)263 33 56',
        'teryt-place': '1211011',
        'registry-number': '000000006068-W-12',
        'id-resort-part-VII': '011',
        'id-resort-part-VIII': '4580',
        'benefits-for-children': null,
        'covid-19': 'N',
        toilet: 'Y',
        ramp: 'Y',
        'car-park': 'Y',
        elevator: 'Y',
        latitude: 49.4897578,
        longitude: 20.0270743,
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
          date: '2026-02-02',
          'date-situation-as-at': '2023-09-15',
        },
        'benefits-provided': { 'type-of-benefit': 1, year: 2022, amount: 218 },
      },
    },
    {
      type: 'queue',
      id: '05af67e8-aff5-3029-e063-b4200a0af9d5',
      attributes: {
        case: 1,
        benefit: 'ENDOPROTEZOPLASTYKA STAWU KOLANOWEGO',
        'many-places': 'N',
        provider:
          'PODHALAŃSKI SZPITAL SPECJALISTYCZNY IM. JANA PAWŁA II W NOWYM TARGU',
        'provider-code': '064/100005',
        'regon-provider': '000308324',
        'nip-provider': '7352178657',
        'teryt-provider': '1211011',
        place: 'ODDZIAŁ CHIRURGII URAZOWO-ORTOPEDYCZNEJ',
        address: 'UL. SZPITALNA 14',
        locality: 'NOWY TARG',
        phone: '(018)263 33 56',
        'teryt-place': '1211011',
        'registry-number': '000000006068-W-12',
        'id-resort-part-VII': '011',
        'id-resort-part-VIII': '4580',
        'benefits-for-children': null,
        'covid-19': 'N',
        toilet: 'Y',
        ramp: 'Y',
        'car-park': 'Y',
        elevator: 'Y',
        latitude: 49.4897578,
        longitude: 20.0270743,
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
          date: '2026-02-02',
          'date-situation-as-at': '2023-09-15',
        },
        'benefits-provided': { 'type-of-benefit': 1, year: 2022, amount: 142 },
      },
    },
    {
      type: 'queue',
      id: '05af67e9-8ad1-3029-e063-b4200a0af9d5',
      attributes: {
        case: 1,
        benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
        'many-places': 'N',
        provider:
          'WOJEWÓDZKI SPECJALISTYCZNY SZPITAL DZIECIĘCY IM.ŚW. LUDWIKA W KRAKOWIE',
        'provider-code': '061/100001',
        'regon-provider': '000298583',
        'nip-provider': '6751199459',
        'teryt-provider': '1261011',
        place: 'PORADNIA ENDOKRYNOLOGICZNA',
        address: 'UL. STRZELECKA 2 - 2A',
        locality: 'KRAKÓW-ŚRÓDMIEŚCIE',
        phone: '+48 12 619 86 15',
        'teryt-place': '1261059',
        'registry-number': '000000005603-W-12',
        'id-resort-part-VII': '057',
        'id-resort-part-VIII': '1031',
        'benefits-for-children': null,
        'covid-19': 'N',
        toilet: 'Y',
        ramp: 'Y',
        'car-park': 'N',
        elevator: 'Y',
        latitude: null,
        longitude: null,
        statistics: {
          'provider-data': {
            awaiting: 378,
            removed: 54,
            'average-period': 233,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2026-02-03',
          'date-situation-as-at': '2023-09-15',
        },
        'benefits-provided': null,
      },
    },
    {
      type: 'queue',
      id: '05af67e8-b965-3029-e063-b4200a0af9d5',
      attributes: {
        case: 1,
        benefit: 'ENDOPROTEZOPLASTYKA STAWU KOLANOWEGO',
        'many-places': 'N',
        provider: 'SPECJALISTYCZNY SZPITAL IM. E. SZCZEKLIKA W TARNOWIE',
        'provider-code': '065/100185',
        'regon-provider': '000313408',
        'nip-provider': '8732714039',
        'teryt-provider': '1263011',
        place: 'ODDZIAŁ CHIRURGII URAZOWEJ I ORTOPEDII',
        address: 'UL. SZPITALNA 13',
        locality: 'TARNÓW',
        phone: '(014)631 03 12',
        'teryt-place': '1263011',
        'registry-number': '000000005909-W-12',
        'id-resort-part-VII': '012',
        'id-resort-part-VIII': '4580',
        'benefits-for-children': null,
        'covid-19': 'N',
        toilet: 'Y',
        ramp: 'Y',
        'car-park': 'N',
        elevator: 'Y',
        latitude: 50.0173519,
        longitude: 20.9947969,
        statistics: {
          'provider-data': {
            awaiting: 573,
            removed: 1,
            'average-period': 791,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2026-07-27',
          'date-situation-as-at': '2023-09-18',
        },
        'benefits-provided': { 'type-of-benefit': 1, year: 2022, amount: 226 },
      },
    },
    {
      type: 'queue',
      id: '05af67e8-b961-3029-e063-b4200a0af9d5',
      attributes: {
        case: 1,
        benefit: 'ENDOPROTEZOPLASTYKA STAWU BIODROWEGO',
        'many-places': 'N',
        provider: 'SPECJALISTYCZNY SZPITAL IM. E. SZCZEKLIKA W TARNOWIE',
        'provider-code': '065/100185',
        'regon-provider': '000313408',
        'nip-provider': '8732714039',
        'teryt-provider': '1263011',
        place: 'ODDZIAŁ CHIRURGII URAZOWEJ I ORTOPEDII',
        address: 'UL. SZPITALNA 13',
        locality: 'TARNÓW',
        phone: '(014)631 03 12',
        'teryt-place': '1263011',
        'registry-number': '000000005909-W-12',
        'id-resort-part-VII': '012',
        'id-resort-part-VIII': '4580',
        'benefits-for-children': null,
        'covid-19': 'N',
        toilet: 'Y',
        ramp: 'Y',
        'car-park': 'N',
        elevator: 'Y',
        latitude: 50.0173519,
        longitude: 20.9947969,
        statistics: {
          'provider-data': {
            awaiting: 390,
            removed: 7,
            'average-period': 914,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2026-07-27',
          'date-situation-as-at': '2023-09-18',
        },
        'benefits-provided': { 'type-of-benefit': 1, year: 2022, amount: 280 },
      },
    },
    {
      type: 'queue',
      id: '05af67e8-cc6f-3029-e063-b4200a0af9d5',
      attributes: {
        case: 1,
        benefit: 'ENDOPROTEZOPLASTYKA STAWU KOLANOWEGO',
        'many-places': 'N',
        provider:
          'SAMODZIELNY PUBLICZNY ZAKŁAD OPIEKI ZDROWOTNEJ W MYŚLENICACH',
        'provider-code': '061/100152',
        'regon-provider': '000300570',
        'nip-provider': '6811690668',
        'teryt-provider': '1209034',
        place: 'ODDZIAŁ CHIRURGII URAZOWO-ORTOPEDYCZNEJ',
        address: 'UL. UL. SZPITALNA 2',
        locality: 'MYŚLENICE',
        phone: '+48 12 273 02 91',
        'teryt-place': '1209034',
        'registry-number': '000000005588-W-12',
        'id-resort-part-VII': '051',
        'id-resort-part-VIII': '4580',
        'benefits-for-children': null,
        'covid-19': 'N',
        toilet: 'Y',
        ramp: 'Y',
        'car-park': 'N',
        elevator: 'Y',
        latitude: null,
        longitude: null,
        statistics: {
          'provider-data': {
            awaiting: 218,
            removed: 10,
            'average-period': 250,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2026-12-27',
          'date-situation-as-at': '2023-09-18',
        },
        'benefits-provided': { 'type-of-benefit': 1, year: 2022, amount: 122 },
      },
    },
    {
      type: 'queue',
      id: '05af67e6-a247-3029-e063-b4200a0af9d5',
      attributes: {
        case: 1,
        benefit: 'ENDOPROTEZOPLASTYKA STAWU BIODROWEGO',
        'many-places': 'N',
        provider: 'SZPITAL SPECJALISTYCZNY IM.J.DIETLA W KRAKOWIE',
        'provider-code': '061/100005',
        'regon-provider': '351564179',
        'nip-provider': '6762083306',
        'teryt-provider': '1261011',
        place: 'ODDZIAŁ ORTOPEDII',
        address: 'UL. AL. F. FOCHA 33',
        locality: 'KRAKÓW-KROWODRZA',
        phone: '(012)687 65 00',
        'teryt-place': '1261029',
        'registry-number': '000000005592-W-12',
        'id-resort-part-VII': '050',
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
            awaiting: 121,
            removed: 3,
            'average-period': 773,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2027-07-30',
          'date-situation-as-at': '2023-09-18',
        },
        'benefits-provided': { 'type-of-benefit': 1, year: 2022, amount: 162 },
      },
    },
    {
      type: 'queue',
      id: '05af67e8-b941-3029-e063-b4200a0af9d5',
      attributes: {
        case: 1,
        benefit: 'ENDOPROTEZOPLASTYKA STAWU KOLANOWEGO',
        'many-places': 'N',
        provider:
          'UNIWERSYTECKI SZPITAL ORTOPEDYCZNO-REHABILITACYJNY W ZAKOPANEM',
        'provider-code': '064/100016',
        'regon-provider': '000296377',
        'nip-provider': '7361459982',
        'teryt-provider': '1217011',
        place: 'KLINICZNY ODDZIAŁ ORTOPEDYCZNY',
        address: 'UL. OSWALDA BALZERA 15',
        locality: 'ZAKOPANE',
        phone: '+48 18 202 21 03',
        'teryt-place': '1217011',
        'registry-number': '000000018584-W-12',
        'id-resort-part-VII': '001',
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
            awaiting: 110,
            removed: 0,
            'average-period': 0,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2028-05-01',
          'date-situation-as-at': '2023-09-17',
        },
        'benefits-provided': { 'type-of-benefit': 1, year: 2022, amount: 101 },
      },
    },
    {
      type: 'queue',
      id: '05af67e8-b93d-3029-e063-b4200a0af9d5',
      attributes: {
        case: 1,
        benefit: 'ENDOPROTEZOPLASTYKA STAWU BIODROWEGO',
        'many-places': 'N',
        provider:
          'UNIWERSYTECKI SZPITAL ORTOPEDYCZNO-REHABILITACYJNY W ZAKOPANEM',
        'provider-code': '064/100016',
        'regon-provider': '000296377',
        'nip-provider': '7361459982',
        'teryt-provider': '1217011',
        place: 'KLINICZNY ODDZIAŁ ORTOPEDYCZNY',
        address: 'UL. OSWALDA BALZERA 15',
        locality: 'ZAKOPANE',
        phone: '+48 18 202 21 03',
        'teryt-place': '1217011',
        'registry-number': '000000018584-W-12',
        'id-resort-part-VII': '001',
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
            awaiting: 35,
            removed: 0,
            'average-period': 1479,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2028-10-02',
          'date-situation-as-at': '2023-09-17',
        },
        'benefits-provided': { 'type-of-benefit': 1, year: 2022, amount: 135 },
      },
    },
    {
      type: 'queue',
      id: '05af67e6-a24b-3029-e063-b4200a0af9d5',
      attributes: {
        case: 1,
        benefit: 'ENDOPROTEZOPLASTYKA STAWU KOLANOWEGO',
        'many-places': 'N',
        provider: 'SZPITAL SPECJALISTYCZNY IM.J.DIETLA W KRAKOWIE',
        'provider-code': '061/100005',
        'regon-provider': '351564179',
        'nip-provider': '6762083306',
        'teryt-provider': '1261011',
        place: 'ODDZIAŁ ORTOPEDII',
        address: 'UL. AL. F. FOCHA 33',
        locality: 'KRAKÓW-KROWODRZA',
        phone: '(012)687 65 00',
        'teryt-place': '1261029',
        'registry-number': '000000005592-W-12',
        'id-resort-part-VII': '050',
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
            awaiting: 275,
            removed: 1,
            'average-period': 826,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2028-10-13',
          'date-situation-as-at': '2023-09-18',
        },
        'benefits-provided': { 'type-of-benefit': 1, year: 2022, amount: 127 },
      },
    },
  ],
};
