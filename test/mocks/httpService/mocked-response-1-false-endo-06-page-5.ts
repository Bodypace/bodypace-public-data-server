import { MockedNfzQueuesApiResponse } from './interfaces/mocked-response.interface';

export const mockedResponse: MockedNfzQueuesApiResponse = {
  query:
    'https://api.nfz.gov.pl/app-itl-api/queues?page=5&limit=25&format=json&case=1&province=06&benefit=endo',
  response: {
    meta: {
      context: 'https://api.nfz.gov.pl/app-itl-api/schemas/#queue',
      count: 142,
      title: 'queue',
      page: 5,
      url: 'https://api.nfz.gov.pl/app-itl-api/schema/queue',
      limit: 25,
      provider: 'Narodowy Fundusz Zdrowia',
      'date-published': '2019-02-26T10:49:23+01:00',
      'date-modified': '2023-09-13T19:29:15+02:00',
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
      prev: '/app-itl-api/queues?page=4&limit=25&format=json&case=1&province=06&benefit=endo',
      self: '/app-itl-api/queues?page=5&limit=25&format=json&case=1&province=06&benefit=endo',
      next: '/app-itl-api/queues?page=6&limit=25&format=json&case=1&province=06&benefit=endo',
      last: '/app-itl-api/queues?page=6&limit=25&format=json&case=1&province=06&benefit=endo',
    },
    data: [
      {
        type: 'queue',
        id: '0536bb68-5b3c-c09b-e063-b4200a0a37e6',
        attributes: {
          case: 1,
          benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
          'many-places': 'N',
          provider: 'CENTRUM PROMOCJI I OCHRONY ZDROWIA',
          'provider-code': '061/200625',
          'regon-provider': '351369012',
          'nip-provider': '6751031872',
          'teryt-provider': '1203022',
          place: 'PORADNIA ENDOKRYNOLOGICZNA',
          address: 'UL. GOŁĄBA 1',
          locality: 'BABICE',
          phone: '(032)613 41 01',
          'teryt-place': '1203022',
          'registry-number': '000000007113-W-12',
          'id-resort-part-VII': '032',
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
              awaiting: 42,
              removed: 8,
              'average-period': 103,
              update: '2023-08',
            },
            'computed-data': null,
          },
          dates: {
            applicable: true,
            date: '2024-11-20',
            'date-situation-as-at': '2023-09-11',
          },
          'benefits-provided': null,
        },
      },
      {
        type: 'queue',
        id: '0536bb68-7942-c09b-e063-b4200a0a37e6',
        attributes: {
          case: 1,
          benefit: 'ENDOPROTEZOPLASTYKA STAWU KOLANOWEGO',
          'many-places': 'N',
          provider:
            'SZPITAL SPECJALISTYCZNY IM. JĘDRZEJA ŚNIADECKIEGO W NOWYM SĄCZU',
          'provider-code': '063/100009',
          'regon-provider': '000306437',
          'nip-provider': '7342608458',
          'teryt-provider': '1262011',
          place: 'ODDZIAŁ CHIRURGII URAZOWO-ORTOPEDYCZNEJ',
          address: 'UL. MŁYŃSKA 5',
          locality: 'NOWY SĄCZ',
          phone: '(018)443 88 77',
          'teryt-place': '1262011',
          'registry-number': '000000006066-W-12',
          'id-resort-part-VII': '014',
          'id-resort-part-VIII': '4580',
          'benefits-for-children': null,
          'covid-19': 'N',
          toilet: 'N',
          ramp: 'Y',
          'car-park': 'Y',
          elevator: 'Y',
          latitude: 49.6187399,
          longitude: 20.7001229,
          statistics: {
            'provider-data': {
              awaiting: 83,
              removed: 3,
              'average-period': 439,
              update: '2023-08',
            },
            'computed-data': null,
          },
          dates: {
            applicable: true,
            date: '2024-11-20',
            'date-situation-as-at': '2023-09-12',
          },
          'benefits-provided': {
            'type-of-benefit': 1,
            year: 2022,
            amount: 76,
          },
        },
      },
      {
        type: 'queue',
        id: '0536bb68-793e-c09b-e063-b4200a0a37e6',
        attributes: {
          case: 1,
          benefit: 'ENDOPROTEZOPLASTYKA STAWU BIODROWEGO',
          'many-places': 'N',
          provider:
            'SZPITAL SPECJALISTYCZNY IM. JĘDRZEJA ŚNIADECKIEGO W NOWYM SĄCZU',
          'provider-code': '063/100009',
          'regon-provider': '000306437',
          'nip-provider': '7342608458',
          'teryt-provider': '1262011',
          place: 'ODDZIAŁ CHIRURGII URAZOWO-ORTOPEDYCZNEJ',
          address: 'UL. MŁYŃSKA 5',
          locality: 'NOWY SĄCZ',
          phone: '(018)443 88 77',
          'teryt-place': '1262011',
          'registry-number': '000000006066-W-12',
          'id-resort-part-VII': '014',
          'id-resort-part-VIII': '4580',
          'benefits-for-children': null,
          'covid-19': 'N',
          toilet: 'N',
          ramp: 'Y',
          'car-park': 'Y',
          elevator: 'Y',
          latitude: 49.6187399,
          longitude: 20.7001229,
          statistics: {
            'provider-data': {
              awaiting: 45,
              removed: 1,
              'average-period': 452,
              update: '2023-08',
            },
            'computed-data': null,
          },
          dates: {
            applicable: true,
            date: '2024-11-20',
            'date-situation-as-at': '2023-09-12',
          },
          'benefits-provided': {
            'type-of-benefit': 1,
            year: 2022,
            amount: 170,
          },
        },
      },
      {
        type: 'queue',
        id: '0536bb67-f492-c09b-e063-b4200a0a37e6',
        attributes: {
          case: 1,
          benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
          'many-places': 'Y',
          provider:
            'ZESPÓŁ PRZYCHODNI SPECJALISTYCZNYCH SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ',
          'provider-code': '065/100193',
          'regon-provider': '851800010',
          'nip-provider': '8733250820',
          'teryt-provider': '1263011',
          place: 'PORADNIA ENDOKRYNOLOGICZNA',
          address: 'UL. MARII SKŁODOWSKIEJ-CURIE 1',
          locality: 'TARNÓW',
          phone: '(014)631 02 84',
          'teryt-place': '1263011',
          'registry-number': '000000006533-W-12',
          'id-resort-part-VII': '013',
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
              awaiting: 845,
              removed: 26,
              'average-period': 496,
              update: '2023-08',
            },
            'computed-data': null,
          },
          dates: {
            applicable: true,
            date: '2024-11-25',
            'date-situation-as-at': '2023-09-12',
          },
          'benefits-provided': null,
        },
      },
      {
        type: 'queue',
        id: '0536bb67-eaf8-c09b-e063-b4200a0a37e6',
        attributes: {
          case: 1,
          benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
          'many-places': 'N',
          provider: 'SAMODZIELNY PUBLICZNY ZESPÓŁ OPIEKI ZDROWOTNEJ W BRZESKU',
          'provider-code': '065/100181',
          'regon-provider': '000304355',
          'nip-provider': '8691663456',
          'teryt-provider': '1202024',
          place: 'PORADNIA ENDOKRYNOLOGICZNA',
          address: 'UL. TADEUSZA KOŚCIUSZKI 68',
          locality: 'BRZESKO',
          phone: '(014)662 13 49',
          'teryt-place': '1202024',
          'registry-number': '000000005946-W-12',
          'id-resort-part-VII': '020',
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
              awaiting: 309,
              removed: 12,
              'average-period': 267,
              update: '2023-08',
            },
            'computed-data': null,
          },
          dates: {
            applicable: true,
            date: '2024-12-02',
            'date-situation-as-at': '2023-09-12',
          },
          'benefits-provided': null,
        },
      },
      {
        type: 'queue',
        id: '0536bb68-cb6c-c09b-e063-b4200a0a37e6',
        attributes: {
          case: 1,
          benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
          'many-places': 'N',
          provider:
            'NIEPUBLICZNY ZAKŁAD OPIEKI ZDROWOTNEJ DIAGMED SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ',
          'provider-code': '063/200281',
          'regon-provider': '492831435',
          'nip-provider': '7342933342',
          'teryt-provider': '1262011',
          place: 'PORADNIA ENDOKRYNOLOGICZNA',
          address: 'UL. LWOWSKA 20',
          locality: 'NOWY SĄCZ',
          phone: '(018)442 36 87',
          'teryt-place': '1262011',
          'registry-number': '000000006897-W-12',
          'id-resort-part-VII': '013',
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
              awaiting: 137,
              removed: 4,
              'average-period': 308,
              update: '2023-08',
            },
            'computed-data': null,
          },
          dates: {
            applicable: true,
            date: '2024-12-09',
            'date-situation-as-at': '2023-09-12',
          },
          'benefits-provided': null,
        },
      },
      {
        type: 'queue',
        id: '0536bb67-f760-c09b-e063-b4200a0a37e6',
        attributes: {
          case: 1,
          benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
          'many-places': 'N',
          provider:
            'SZPITAL SPECJALISTYCZNY CHORÓB PŁUC "ODRODZENIE" IM. KLARY JELSKIEJ',
          'provider-code': '064/100037',
          'regon-provider': '000295171',
          'nip-provider': '7361454134',
          'teryt-provider': '1217011',
          place: 'PORADNIA ENDOKRYNOLOGICZNA',
          address: 'UL. GŁADKIE 1',
          locality: 'ZAKOPANE',
          phone: '+48 18 201 50 45',
          'teryt-place': '1217011',
          'registry-number': '000000006064-W-12',
          'id-resort-part-VII': '023',
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
              awaiting: 235,
              removed: 23,
              'average-period': 156,
              update: '2023-08',
            },
            'computed-data': null,
          },
          dates: {
            applicable: true,
            date: '2024-12-11',
            'date-situation-as-at': '2023-09-12',
          },
          'benefits-provided': null,
        },
      },
      {
        type: 'queue',
        id: '0536bb68-1282-c09b-e063-b4200a0a37e6',
        attributes: {
          case: 1,
          benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
          'many-places': 'N',
          provider: 'UNIWERSYTECKI SZPITAL DZIECIĘCY W KRAKOWIE',
          'provider-code': '061/100203',
          'regon-provider': '351375886',
          'nip-provider': '6792525795',
          'teryt-provider': '1261011',
          place: 'PORADNIA ENDOKRYNOLOGICZNA DLA DZIECI I MŁODZIEŻY',
          address: 'UL. WIELICKA 265',
          locality: 'KRAKÓW-PODGÓRZE',
          phone: '(012)658 20 11',
          'teryt-place': '1261049',
          'registry-number': '000000018602-W-12',
          'id-resort-part-VII': '078',
          'id-resort-part-VIII': '1031',
          'benefits-for-children': null,
          'covid-19': 'N',
          toilet: 'Y',
          ramp: 'Y',
          'car-park': 'Y',
          elevator: 'Y',
          latitude: 50.0125589,
          longitude: 20.000072,
          statistics: {
            'provider-data': {
              awaiting: 570,
              removed: 44,
              'average-period': 212,
              update: '2023-08',
            },
            'computed-data': null,
          },
          dates: {
            applicable: true,
            date: '2024-12-18',
            'date-situation-as-at': '2023-09-12',
          },
          'benefits-provided': null,
        },
      },
      {
        type: 'queue',
        id: '0536bb67-e644-c09b-e063-b4200a0a37e6',
        attributes: {
          case: 1,
          benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
          'many-places': 'N',
          provider:
            'CENTRUM MEDYCYNY PROFILAKTYCZNEJ SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ',
          'provider-code': '061/200524',
          'regon-provider': '356537106',
          'nip-provider': '6772194473',
          'teryt-provider': '1261011',
          place: 'PORADNIA ENDOKRYNOLOGICZNA',
          address: 'UL. OLSZAŃSKA 5',
          locality: 'KRAKÓW-ŚRÓDMIEŚCIE',
          phone: '(012)294 47 33',
          'teryt-place': '1261059',
          'registry-number': '000000006889-W-12',
          'id-resort-part-VII': '082',
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
              awaiting: 238,
              removed: 20,
              'average-period': 115,
              update: '2023-08',
            },
            'computed-data': null,
          },
          dates: {
            applicable: true,
            date: '2024-12-19',
            'date-situation-as-at': '2023-09-12',
          },
          'benefits-provided': null,
        },
      },
      {
        type: 'queue',
        id: '0536bb68-cb62-c09b-e063-b4200a0a37e6',
        attributes: {
          case: 1,
          benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
          'many-places': 'N',
          provider: 'CENTRUM MEDYCZNE "KELLES"',
          'provider-code': '063/200278',
          'regon-provider': '492730645',
          'nip-provider': '7342890331',
          'teryt-provider': '1262011',
          place: 'PORADNIA ENDOKRYNOLOGICZNA KOCHANOWSKIEGO',
          address: 'UL. JANA KOCHANOWSKIEGO 2',
          locality: 'NOWY SĄCZ',
          phone: '(018)547 67 47',
          'teryt-place': '1262011',
          'registry-number': '000000006971-W-12',
          'id-resort-part-VII': '033',
          'id-resort-part-VIII': '1030',
          'benefits-for-children': null,
          'covid-19': 'N',
          toilet: 'Y',
          ramp: 'N',
          'car-park': 'N',
          elevator: 'Y',
          latitude: null,
          longitude: null,
          statistics: {
            'provider-data': {
              awaiting: 28,
              removed: 1,
              'average-period': 325,
              update: '2023-08',
            },
            'computed-data': null,
          },
          dates: {
            applicable: true,
            date: '2025-01-03',
            'date-situation-as-at': '2023-09-11',
          },
          'benefits-provided': null,
        },
      },
      {
        type: 'queue',
        id: '0536bb68-13e2-c09b-e063-b4200a0a37e6',
        attributes: {
          case: 1,
          benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
          'many-places': 'N',
          provider:
            'SAMODZIELNY PUBLICZNY ZAKŁAD OPIEKI ZDROWOTNEJ MINISTERSTWA SPRAW WEWNĘTRZNYCH I ADMINISTRACJI W KRAKOWIE',
          'provider-code': '061/100064',
          'regon-provider': '350995109',
          'nip-provider': '6772075248',
          'teryt-provider': '1261011',
          place: 'PORADNIA ENDOKRYNOLOGICZNA',
          address: 'UL. STANISŁAWA ŻÓŁKIEWSKIEGO 11',
          locality: 'NOWY SĄCZ',
          phone: '(018)547 57 81',
          'teryt-place': '1262011',
          'registry-number': '000000018685-W-12',
          'id-resort-part-VII': '052',
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
              awaiting: 61,
              removed: 6,
              'average-period': 356,
              update: '2023-08',
            },
            'computed-data': null,
          },
          dates: {
            applicable: true,
            date: '2025-01-17',
            'date-situation-as-at': '2023-09-12',
          },
          'benefits-provided': null,
        },
      },
      {
        type: 'queue',
        id: '0536bb68-1f08-c09b-e063-b4200a0a37e6',
        attributes: {
          case: 1,
          benefit: 'ENDOPROTEZOPLASTYKA STAWU BIODROWEGO',
          'many-places': 'N',
          provider: 'ZESPÓŁ OPIEKI ZDROWOTNEJ W OŚWIĘCIMIU',
          'provider-code': '061/100213',
          'regon-provider': '000304409',
          'nip-provider': '5491591851',
          'teryt-provider': '1213011',
          place: 'ODDZIAŁ CHIRURGII URAZOWO-ORTOPEDYCZNEJ',
          address: 'UL. WYSOKIE BRZEGI 4',
          locality: 'OŚWIĘCIM',
          phone: '(033)844 84 18',
          'teryt-place': '1213011',
          'registry-number': '000000006094-W-12',
          'id-resort-part-VII': '005',
          'id-resort-part-VIII': '4580',
          'benefits-for-children': null,
          'covid-19': 'N',
          toilet: 'Y',
          ramp: 'Y',
          'car-park': 'Y',
          elevator: 'Y',
          latitude: 50.040604,
          longitude: 19.2373442,
          statistics: {
            'provider-data': {
              awaiting: 75,
              removed: 3,
              'average-period': 380,
              update: '2023-08',
            },
            'computed-data': null,
          },
          dates: {
            applicable: true,
            date: '2025-01-17',
            'date-situation-as-at': '2023-09-11',
          },
          'benefits-provided': {
            'type-of-benefit': 1,
            year: 2022,
            amount: 168,
          },
        },
      },
      {
        type: 'queue',
        id: '0536bb68-19c4-c09b-e063-b4200a0a37e6',
        attributes: {
          case: 1,
          benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
          'many-places': 'N',
          provider: 'ZESPÓŁ OPIEKI ZDROWOTNEJ W OŚWIĘCIMIU',
          'provider-code': '061/100213',
          'regon-provider': '000304409',
          'nip-provider': '5491591851',
          'teryt-provider': '1213011',
          place: 'PORADNIA ENDOKRYNOLOGICZNA',
          address: 'UL. WYSOKIE BRZEGI 4',
          locality: 'OŚWIĘCIM',
          phone: '+48 33 844 82 86',
          'teryt-place': '1213011',
          'registry-number': '000000006094-W-12',
          'id-resort-part-VII': '057',
          'id-resort-part-VIII': '1030',
          'benefits-for-children': null,
          'covid-19': 'N',
          toilet: 'Y',
          ramp: 'Y',
          'car-park': 'Y',
          elevator: 'Y',
          latitude: 50.040604,
          longitude: 19.2373442,
          statistics: {
            'provider-data': {
              awaiting: 251,
              removed: 11,
              'average-period': 442,
              update: '2023-08',
            },
            'computed-data': null,
          },
          dates: {
            applicable: true,
            date: '2025-01-24',
            'date-situation-as-at': '2023-09-11',
          },
          'benefits-provided': null,
        },
      },
      {
        type: 'queue',
        id: '0536bb68-ff42-c09b-e063-b4200a0a37e6',
        attributes: {
          case: 1,
          benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
          'many-places': 'N',
          provider:
            'ZDROWIE RODZINY NIEPUBLICZNY ZAKŁAD OPIEKI ZDROWOTNEJ PRAKTYKA GRUPOWA LEKARZY SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ',
          'provider-code': '063/200002',
          'regon-provider': '491972582',
          'nip-provider': '7342691761',
          'teryt-provider': '1210142',
          place: 'PORADNIA ENDOKRYNOLOGICZNA',
          address: 'UL. PODEGRODZIE 255',
          locality: 'PODEGRODZIE',
          phone: '(018)445 90 12',
          'teryt-place': '1210142',
          'registry-number': '000000006202-W-12',
          'id-resort-part-VII': '021',
          'id-resort-part-VIII': '1030',
          'benefits-for-children': null,
          'covid-19': 'N',
          toilet: 'Y',
          ramp: 'N',
          'car-park': 'Y',
          elevator: 'N',
          latitude: null,
          longitude: null,
          statistics: {
            'provider-data': {
              awaiting: 0,
              removed: 0,
              'average-period': 37,
              update: '2023-08',
            },
            'computed-data': null,
          },
          dates: {
            applicable: true,
            date: '2025-02-11',
            'date-situation-as-at': '2023-09-12',
          },
          'benefits-provided': null,
        },
      },
      {
        type: 'queue',
        id: '0536bb68-5fe4-c09b-e063-b4200a0a37e6',
        attributes: {
          case: 1,
          benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
          'many-places': 'N',
          provider:
            'NIEPUBLICZNY ZAKŁAD OPIEKI ZDROWOTNEJ GRO-MEDICUS SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ',
          'provider-code': '061/200381',
          'regon-provider': '357067039',
          'nip-provider': '6762119174',
          'teryt-provider': '1261011',
          place: 'PORADNIA ENDOKRYNOLOGICZNA',
          address: 'UL. SZWEDZKA 27',
          locality: 'KRAKÓW',
          phone: '(012)267 23 65',
          'teryt-place': '1261011',
          'registry-number': '000000006655-W-12',
          'id-resort-part-VII': '004',
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
              awaiting: 308,
              removed: 8,
              'average-period': 191,
              update: '2023-08',
            },
            'computed-data': null,
          },
          dates: {
            applicable: true,
            date: '2025-02-19',
            'date-situation-as-at': '2023-09-11',
          },
          'benefits-provided': null,
        },
      },
      {
        type: 'queue',
        id: '0536bb68-0438-c09b-e063-b4200a0a37e6',
        attributes: {
          case: 1,
          benefit: 'ENDOPROTEZOPLASTYKA STAWU KOLANOWEGO',
          'many-places': 'N',
          provider: 'ZESPÓŁ OPIEKI ZDROWOTNEJ W DĄBROWIE TARNOWSKIEJ',
          'provider-code': '065/100019',
          'regon-provider': '000304361',
          'nip-provider': '8711536472',
          'teryt-provider': '1204024',
          place:
            'ODDZIAŁ CHIRURGII URAZOWO-ORTOPEDYCZNEJ Z PODODDZIAŁEM REHABILITACJI OGÓLNOUSTROJOWEJ',
          address: 'UL. SZPITALNA 1',
          locality: 'DĄBROWA TARNOWSKA',
          phone: '(014)644 32 22',
          'teryt-place': '1204024',
          'registry-number': '000000005912-W-12',
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
              awaiting: 69,
              removed: 2,
              'average-period': 617,
              update: '2023-08',
            },
            'computed-data': null,
          },
          dates: {
            applicable: true,
            date: '2025-02-21',
            'date-situation-as-at': '2023-09-12',
          },
          'benefits-provided': {
            'type-of-benefit': 1,
            year: 2022,
            amount: 101,
          },
        },
      },
      {
        type: 'queue',
        id: '0536bb68-025c-c09b-e063-b4200a0a37e6',
        attributes: {
          case: 1,
          benefit: 'REWIZJA PO ENDOPROTEZOPLASTYCE STAWU KOLANOWEGO',
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
              awaiting: 0,
              removed: 0,
              'average-period': 0,
              update: '2023-08',
            },
            'computed-data': null,
          },
          dates: {
            applicable: true,
            date: '2025-03-03',
            'date-situation-as-at': '2023-09-11',
          },
          'benefits-provided': {
            'type-of-benefit': 1,
            year: 2022,
            amount: 10,
          },
        },
      },
      {
        type: 'queue',
        id: '0536bb68-06ba-c09b-e063-b4200a0a37e6',
        attributes: {
          case: 1,
          benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
          'many-places': 'N',
          provider: 'SZPITAL POWIATOWY W CHRZANOWIE',
          'provider-code': '061/100007',
          'regon-provider': '000310108',
          'nip-provider': '6281916916',
          'teryt-provider': '1203034',
          place: 'PORADNIA ENDOKRYNOLOGICZNA',
          address: 'UL. TOPOLOWA 16',
          locality: 'CHRZANÓW',
          phone: '(032)624 75 36',
          'teryt-place': '1203034',
          'registry-number': '000000006129-W-12',
          'id-resort-part-VII': '036',
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
              awaiting: 101,
              removed: 5,
              'average-period': 193,
              update: '2023-08',
            },
            'computed-data': null,
          },
          dates: {
            applicable: true,
            date: '2025-03-03',
            'date-situation-as-at': '2023-09-11',
          },
          'benefits-provided': null,
        },
      },
      {
        type: 'queue',
        id: '0536bb69-69fc-c09b-e063-b4200a0a37e6',
        attributes: {
          case: 1,
          benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
          'many-places': 'N',
          provider: 'SPECJALMED SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ',
          'provider-code': '061/200240',
          'regon-provider': '120778092',
          'nip-provider': '6811989982',
          'teryt-provider': '1209014',
          place: 'PORADNIA ENDOKRYNOLOGICZNA',
          address: 'UL. ZARABIE 35C',
          locality: 'DOBCZYCE',
          phone: '(012)271 09 00',
          'teryt-place': '1209014',
          'registry-number': '000000022633-W-12',
          'id-resort-part-VII': '086',
          'id-resort-part-VIII': '1030',
          'benefits-for-children': null,
          'covid-19': 'N',
          toilet: 'Y',
          ramp: 'N',
          'car-park': 'Y',
          elevator: 'Y',
          latitude: null,
          longitude: null,
          statistics: {
            'provider-data': {
              awaiting: 501,
              removed: 24,
              'average-period': 315,
              update: '2023-08',
            },
            'computed-data': null,
          },
          dates: {
            applicable: true,
            date: '2025-03-28',
            'date-situation-as-at': '2023-09-12',
          },
          'benefits-provided': null,
        },
      },
      {
        type: 'queue',
        id: '0536bb66-0b7a-c09b-e063-b4200a0a37e6',
        attributes: {
          case: 1,
          benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
          'many-places': 'N',
          provider:
            '5 WOJSKOWY SZPITAL KLINICZNY Z POLIKLINIKĄ - SAMODZIELNY PUBLICZNY ZAKŁAD OPIEKI ZDROWOTNEJ W KRAKOWIE',
          'provider-code': '061/100019',
          'regon-provider': '351506868',
          'nip-provider': '6772081964',
          'teryt-provider': '1261011',
          place: 'PORADNIA ENDOKRYNOLOGICZNA',
          address: 'UL. WROCŁAWSKA 1-3',
          locality: 'KRAKÓW-KROWODRZA',
          phone: '+48 126 308 324',
          'teryt-place': '1261029',
          'registry-number': '000000018551-W-12',
          'id-resort-part-VII': '219',
          'id-resort-part-VIII': '1030',
          'benefits-for-children': null,
          'covid-19': 'N',
          toilet: 'N',
          ramp: 'N',
          'car-park': 'N',
          elevator: 'N',
          latitude: 50.075241,
          longitude: 19.9339635,
          statistics: {
            'provider-data': {
              awaiting: 76,
              removed: 7,
              'average-period': 160,
              update: '2023-08',
            },
            'computed-data': null,
          },
          dates: {
            applicable: true,
            date: '2025-04-08',
            'date-situation-as-at': '2023-09-12',
          },
          'benefits-provided': null,
        },
      },
      {
        type: 'queue',
        id: '0536bb67-eb74-c09b-e063-b4200a0a37e6',
        attributes: {
          case: 1,
          benefit: 'ENDOPROTEZOPLASTYKA STAWU KOLANOWEGO',
          'many-places': 'N',
          provider: 'ZESPÓŁ OPIEKI ZDROWOTNEJ W SUCHEJ BESKIDZKIEJ',
          'provider-code': '064/100021',
          'regon-provider': '000304415',
          'nip-provider': '5521274352',
          'teryt-provider': '1215021',
          place: 'ODDZIAŁ URAZOWO-ORTOPEDYCZNY',
          address: 'UL. SZPITALNA 22',
          locality: 'SUCHA BESKIDZKA',
          phone: '(033)872 31 00',
          'teryt-place': '1215021',
          'registry-number': '000000006091-W-12',
          'id-resort-part-VII': '010',
          'id-resort-part-VIII': '4580',
          'benefits-for-children': null,
          'covid-19': 'N',
          toilet: 'Y',
          ramp: 'Y',
          'car-park': 'Y',
          elevator: 'Y',
          latitude: 49.7365629,
          longitude: 19.6050049,
          statistics: {
            'provider-data': {
              awaiting: 201,
              removed: 0,
              'average-period': 7,
              update: '2023-08',
            },
            'computed-data': null,
          },
          dates: {
            applicable: true,
            date: '2025-04-28',
            'date-situation-as-at': '2023-09-12',
          },
          'benefits-provided': {
            'type-of-benefit': 1,
            year: 2022,
            amount: 185,
          },
        },
      },
      {
        type: 'queue',
        id: '0536bb68-6db4-c09b-e063-b4200a0a37e6',
        attributes: {
          case: 1,
          benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
          'many-places': 'N',
          provider:
            'NIEPUBLICZNY ZAKŁAD OPIEKI ZDROWOTNEJ KOZŁÓWEK SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ',
          'provider-code': '061/200465',
          'regon-provider': '357206363',
          'nip-provider': '6792642526',
          'teryt-provider': '1261011',
          place: 'PORADNIA ENDOKRYNOLOGICZNA',
          address: 'UL. NA KOZŁOWCE 29',
          locality: 'KRAKÓW',
          phone: '(012)658 35 19;(012)650 20 16',
          'teryt-place': '1261011',
          'registry-number': '000000006583-W-12',
          'id-resort-part-VII': '006',
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
              awaiting: 341,
              removed: 19,
              'average-period': 395,
              update: '2023-08',
            },
            'computed-data': null,
          },
          dates: {
            applicable: true,
            date: '2025-05-28',
            'date-situation-as-at': '2023-09-12',
          },
          'benefits-provided': null,
        },
      },
      {
        type: 'queue',
        id: '0536bb67-f496-c09b-e063-b4200a0a37e6',
        attributes: {
          case: 1,
          benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
          'many-places': 'Y',
          provider:
            'ZESPÓŁ PRZYCHODNI SPECJALISTYCZNYCH SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ',
          'provider-code': '065/100193',
          'regon-provider': '851800010',
          'nip-provider': '8733250820',
          'teryt-provider': '1263011',
          place: 'PORADNIA ENDOKRYNOLOGICZNA',
          address: 'UL. MOSTOWA 6',
          locality: 'TARNÓW',
          phone: '(014)632 42 21',
          'teryt-place': '1263011',
          'registry-number': '000000006533-W-12',
          'id-resort-part-VII': '053',
          'id-resort-part-VIII': '1031',
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
              awaiting: 192,
              removed: 3,
              'average-period': 507,
              update: '2023-08',
            },
            'computed-data': null,
          },
          dates: {
            applicable: true,
            date: '2025-06-09',
            'date-situation-as-at': '2023-09-12',
          },
          'benefits-provided': null,
        },
      },
      {
        type: 'queue',
        id: '0536bb67-e454-c09b-e063-b4200a0a37e6',
        attributes: {
          case: 1,
          benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
          'many-places': 'N',
          provider: 'ZESPÓŁ OPIEKI ZDROWOTNEJ W SUCHEJ BESKIDZKIEJ',
          'provider-code': '064/100021',
          'regon-provider': '000304415',
          'nip-provider': '5521274352',
          'teryt-provider': '1215021',
          place: 'PORADNIA ENDOKRYNOLOGICZNA',
          address: 'UL. SZPITALNA 22',
          locality: 'SUCHA BESKIDZKA',
          phone: '(033)872 31 04',
          'teryt-place': '1215021',
          'registry-number': '000000006091-W-12',
          'id-resort-part-VII': '025',
          'id-resort-part-VIII': '1030',
          'benefits-for-children': null,
          'covid-19': 'N',
          toilet: 'Y',
          ramp: 'Y',
          'car-park': 'Y',
          elevator: 'Y',
          latitude: 49.7365629,
          longitude: 19.6050049,
          statistics: {
            'provider-data': {
              awaiting: 156,
              removed: 10,
              'average-period': 358,
              update: '2023-08',
            },
            'computed-data': null,
          },
          dates: {
            applicable: true,
            date: '2025-06-24',
            'date-situation-as-at': '2023-09-12',
          },
          'benefits-provided': null,
        },
      },
      {
        type: 'queue',
        id: '0536bb68-fec4-c09b-e063-b4200a0a37e6',
        attributes: {
          case: 1,
          benefit: 'ENDOPROTEZOPLASTYKA STAWU KOLANOWEGO',
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
              awaiting: 875,
              removed: 18,
              'average-period': 234,
              update: '2023-08',
            },
            'computed-data': null,
          },
          dates: {
            applicable: true,
            date: '2025-08-05',
            'date-situation-as-at': '2023-09-11',
          },
          'benefits-provided': {
            'type-of-benefit': 1,
            year: 2022,
            amount: 381,
          },
        },
      },
    ],
  },
};
