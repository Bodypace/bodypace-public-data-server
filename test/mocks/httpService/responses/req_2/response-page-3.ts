// this file was auto-generated at 2023-09-21T11:06:38.859Z, do not modify it
import { NfzQueuesApiResponse } from '../../../../../src/modules/nfz/modules/queues/modules/api-client/interfaces/response.interface';

export const req_2_page_3: NfzQueuesApiResponse = {
  meta: {
    context: 'https://api.nfz.gov.pl/app-itl-api/schemas/#queue',
    count: 142,
    title: 'queue',
    page: 3,
    url: 'https://api.nfz.gov.pl/app-itl-api/schema/queue',
    limit: 25,
    provider: 'Narodowy Fundusz Zdrowia',
    'date-published': '2019-02-26T10:49:23+01:00',
    'date-modified': '2023-09-21T13:06:42+02:00',
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
    prev: '/app-itl-api/queues?page=2&limit=25&format=json&case=1&province=06&benefit=endo',
    self: '/app-itl-api/queues?page=3&limit=25&format=json&case=1&province=06&benefit=endo',
    next: '/app-itl-api/queues?page=4&limit=25&format=json&case=1&province=06&benefit=endo',
    last: '/app-itl-api/queues?page=6&limit=25&format=json&case=1&province=06&benefit=endo',
  },
  data: [
    {
      type: 'queue',
      id: '05d7a467-1150-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
        'many-places': 'N',
        provider: 'SZPITAL MIEJSKI SPECJALISTYCZNY IM. GABRIELA NARUTOWICZA',
        'provider-code': '061/100009',
        'regon-provider': '357207664',
        'nip-provider': '9451932621',
        'teryt-provider': '1261011',
        place: 'PORADNIA ENDOKRYNOLOGICZNA',
        address: 'UL. PRĄDNICKA 35-37',
        locality: 'KRAKÓW-KROWODRZA',
        phone: '(012)257 82 62',
        'teryt-place': '1261029',
        'registry-number': '000000005594-W-12',
        'id-resort-part-VII': '036',
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
            awaiting: 129,
            removed: 26,
            'average-period': 119,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-01-15',
          'date-situation-as-at': '2023-09-20',
        },
        'benefits-provided': null,
      },
    },
    {
      type: 'queue',
      id: '05d7a465-46ec-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
        'many-places': 'N',
        provider:
          'ZESPÓŁ PRZYCHODNI I OŚRODKÓW ZDROWIA KRZESZOWICKIE CENTRUM ZDROWIA',
        'provider-code': '061/100231',
        'regon-provider': '357101150',
        'nip-provider': '9441857728',
        'teryt-provider': '1206064',
        place: 'PORADNIA ENDOKRYNOLOGICZNA',
        address: 'UL. KRAKOWSKA 8',
        locality: 'KRZESZOWICE',
        phone: '+48 12 282 12 63',
        'teryt-place': '1206064',
        'registry-number': '000000006418-W-12',
        'id-resort-part-VII': '036',
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
            awaiting: 248,
            removed: 37,
            'average-period': 171,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-01-16',
          'date-situation-as-at': '2023-09-20',
        },
        'benefits-provided': null,
      },
    },
    {
      type: 'queue',
      id: '05d7a465-4618-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
        'many-places': 'N',
        provider: '"DIABET" CENTRUM MEDYCZNE',
        'provider-code': '061/200226',
        'regon-provider': '851722668',
        'nip-provider': '6281940961',
        'teryt-provider': '1203034',
        place: 'PORADNIA ENDOKRYNOLOGICZNA',
        address: 'UL. KOŚCIUSZKI 18',
        locality: 'CHRZANÓW',
        phone: '(032)623 13 73w. 32',
        'teryt-place': '1203034',
        'registry-number': '000000006139-W-12',
        'id-resort-part-VII': '002',
        'id-resort-part-VIII': '1030',
        'benefits-for-children': 'Y',
        'covid-19': 'N',
        toilet: 'Y',
        ramp: 'Y',
        'car-park': 'Y',
        elevator: 'N',
        latitude: null,
        longitude: null,
        statistics: {
          'provider-data': {
            awaiting: 108,
            removed: 22,
            'average-period': 96,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-01-22',
          'date-situation-as-at': '2023-09-20',
        },
        'benefits-provided': null,
      },
    },
    {
      type: 'queue',
      id: '05d7a465-1f48-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ENDOPROTEZOPLASTYKA STAWU KOLANOWEGO',
        'many-places': 'N',
        provider: 'SZPITAL POWIATOWY W LIMANOWEJ IMIENIA MIŁOSIERDZIA BOŻEGO',
        'provider-code': '063/100006',
        'regon-provider': '000304378',
        'nip-provider': '7371741935',
        'teryt-provider': '1207011',
        place: 'ODDZIAŁ CHIRURGII URAZOWO-ORTOPEDYCZNEJ',
        address: 'UL. JÓZEFA PIŁSUDSKIEGO 61',
        locality: 'LIMANOWA',
        phone: '(018)330 17 95',
        'teryt-place': '1207011',
        'registry-number': '000000006061-W-12',
        'id-resort-part-VII': '027',
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
            awaiting: 25,
            removed: 4,
            'average-period': 122,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-01-22',
          'date-situation-as-at': '2023-09-20',
        },
        'benefits-provided': { 'type-of-benefit': 1, year: 2022, amount: 33 },
      },
    },
    {
      type: 'queue',
      id: '05d7a465-1f44-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ENDOPROTEZOPLASTYKA STAWU BIODROWEGO',
        'many-places': 'N',
        provider: 'SZPITAL POWIATOWY W LIMANOWEJ IMIENIA MIŁOSIERDZIA BOŻEGO',
        'provider-code': '063/100006',
        'regon-provider': '000304378',
        'nip-provider': '7371741935',
        'teryt-provider': '1207011',
        place: 'ODDZIAŁ CHIRURGII URAZOWO-ORTOPEDYCZNEJ',
        address: 'UL. JÓZEFA PIŁSUDSKIEGO 61',
        locality: 'LIMANOWA',
        phone: '(018)330 17 95',
        'teryt-place': '1207011',
        'registry-number': '000000006061-W-12',
        'id-resort-part-VII': '027',
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
            awaiting: 53,
            removed: 8,
            'average-period': 128,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-01-22',
          'date-situation-as-at': '2023-09-20',
        },
        'benefits-provided': { 'type-of-benefit': 1, year: 2022, amount: 99 },
      },
    },
    {
      type: 'queue',
      id: '05d7a467-01d0-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'REWIZJA PO ENDOPROTEZOPLASTYCE STAWU KOLANOWEGO',
        'many-places': 'N',
        provider:
          'SAMODZIELNY PUBLICZNY ZAKŁAD OPIEKI ZDROWOTNEJ SZPITAL UNIWERSYTECKI W KRAKOWIE',
        'provider-code': '061/100014',
        'regon-provider': '000288685',
        'nip-provider': '6751199442',
        'teryt-provider': '1261011',
        place: 'ODDZIAŁ KLINICZNY ORTOPEDII I TRAUMATOLOGII',
        address: 'UL. MACIEJA JAKUBOWSKIEGO 2',
        locality: 'KRAKÓW',
        phone: '(012)424 70 00',
        'teryt-place': '1261049',
        'registry-number': '000000018583-W-12',
        'id-resort-part-VII': '720',
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
          date: '2024-01-25',
          'date-situation-as-at': '2023-09-20',
        },
        'benefits-provided': { 'type-of-benefit': 1, year: 2022, amount: 4 },
      },
    },
    {
      type: 'queue',
      id: '05d7a466-02cc-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ENDOPROTEZOPLASTYKA STAWU BIODROWEGO',
        'many-places': 'N',
        provider: 'SAMODZIELNY PUBLICZNY ZESPÓŁ OPIEKI ZDROWOTNEJ W BRZESKU',
        'provider-code': '065/100181',
        'regon-provider': '000304355',
        'nip-provider': '8691663456',
        'teryt-provider': '1202024',
        place: 'ODDZIAŁ CHIRURGII URAZOWO-ORTOPEDYCZNEJ',
        address: 'UL. TADEUSZA KOŚCIUSZKI 68',
        locality: 'BRZESKO',
        phone: '(014)662 14 78',
        'teryt-place': '1202024',
        'registry-number': '000000005946-W-12',
        'id-resort-part-VII': '167',
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
            awaiting: 75,
            removed: 11,
            'average-period': 76,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-01-28',
          'date-situation-as-at': '2023-09-20',
        },
        'benefits-provided': { 'type-of-benefit': 1, year: 2022, amount: 224 },
      },
    },
    {
      type: 'queue',
      id: '05d7a465-2dce-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ODDZIAŁ ENDOKRYNOLOGICZNY DLA DZIECI',
        'many-places': 'N',
        provider: 'UNIWERSYTECKI SZPITAL DZIECIĘCY W KRAKOWIE',
        'provider-code': '061/100203',
        'regon-provider': '351375886',
        'nip-provider': '6792525795',
        'teryt-provider': '1261011',
        place: 'ODDZIAŁ ENDOKRYNOLOGII DZIECI I MŁODZIEŻY',
        address: 'UL. WIELICKA 265',
        locality: 'KRAKÓW-PODGÓRZE',
        phone: '(012)658 20 11',
        'teryt-place': '1261049',
        'registry-number': '000000018602-W-12',
        'id-resort-part-VII': '007',
        'id-resort-part-VIII': '4031',
        'benefits-for-children': 'Y',
        'covid-19': 'N',
        toilet: 'Y',
        ramp: 'Y',
        'car-park': 'Y',
        elevator: 'Y',
        latitude: 50.0125589,
        longitude: 20.000072,
        statistics: {
          'provider-data': {
            awaiting: 190,
            removed: 36,
            'average-period': 76,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-01-30',
          'date-situation-as-at': '2023-09-19',
        },
        'benefits-provided': null,
      },
    },
    {
      type: 'queue',
      id: '05d7a465-4e4c-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ENDOPROTEZOPLASTYKA STAWU KOLANOWEGO',
        'many-places': 'N',
        provider: 'SZPITAL MIEJSKI SPECJALISTYCZNY IM. GABRIELA NARUTOWICZA',
        'provider-code': '061/100009',
        'regon-provider': '357207664',
        'nip-provider': '9451932621',
        'teryt-provider': '1261011',
        place: 'ODDZIAŁ  URAZOWO-ORTOPEDYCZNY',
        address: 'UL. PRĄDNICKA 35-37',
        locality: 'KRAKÓW-KROWODRZA',
        phone: '(012)633 01 00',
        'teryt-place': '1261029',
        'registry-number': '000000005594-W-12',
        'id-resort-part-VII': '062',
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
            awaiting: 44,
            removed: 2,
            'average-period': 78,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-01-30',
          'date-situation-as-at': '2023-09-20',
        },
        'benefits-provided': { 'type-of-benefit': 1, year: 2022, amount: 129 },
      },
    },
    {
      type: 'queue',
      id: '05d7a467-01cc-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'REWIZJA PO ENDOPROTEZOPLASTYCE STAWU BIODROWEGO',
        'many-places': 'N',
        provider:
          'SAMODZIELNY PUBLICZNY ZAKŁAD OPIEKI ZDROWOTNEJ SZPITAL UNIWERSYTECKI W KRAKOWIE',
        'provider-code': '061/100014',
        'regon-provider': '000288685',
        'nip-provider': '6751199442',
        'teryt-provider': '1261011',
        place: 'ODDZIAŁ KLINICZNY ORTOPEDII I TRAUMATOLOGII',
        address: 'UL. MACIEJA JAKUBOWSKIEGO 2',
        locality: 'KRAKÓW',
        phone: '(012)424 70 00',
        'teryt-place': '1261049',
        'registry-number': '000000018583-W-12',
        'id-resort-part-VII': '720',
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
            awaiting: 2,
            removed: 0,
            'average-period': 0,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-01-31',
          'date-situation-as-at': '2023-09-20',
        },
        'benefits-provided': { 'type-of-benefit': 1, year: 2022, amount: 30 },
      },
    },
    {
      type: 'queue',
      id: '05d7a465-4e48-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ENDOPROTEZOPLASTYKA STAWU BIODROWEGO',
        'many-places': 'N',
        provider: 'SZPITAL MIEJSKI SPECJALISTYCZNY IM. GABRIELA NARUTOWICZA',
        'provider-code': '061/100009',
        'regon-provider': '357207664',
        'nip-provider': '9451932621',
        'teryt-provider': '1261011',
        place: 'ODDZIAŁ  URAZOWO-ORTOPEDYCZNY',
        address: 'UL. PRĄDNICKA 35-37',
        locality: 'KRAKÓW-KROWODRZA',
        phone: '(012)633 01 00',
        'teryt-place': '1261029',
        'registry-number': '000000005594-W-12',
        'id-resort-part-VII': '062',
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
            awaiting: 28,
            removed: 9,
            'average-period': 93,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-01-31',
          'date-situation-as-at': '2023-09-20',
        },
        'benefits-provided': { 'type-of-benefit': 1, year: 2022, amount: 198 },
      },
    },
    {
      type: 'queue',
      id: '05d7a465-0c7e-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
        'many-places': 'Y',
        provider:
          'CENTRUM MEDYCZNE "KOL-MED" SAMODZIELNY PUBLICZNY ZAKŁAD OPIEKI ZDROWOTNEJ W TARNOWIE',
        'provider-code': '065/100184',
        'regon-provider': '010649508',
        'nip-provider': '9930091869',
        'teryt-provider': '1263011',
        place: 'PORADNIA ENDOKRYNOLOGICZNA',
        address: 'UL. DWORCOWA 1',
        locality: 'BRZESKO',
        phone: '(014)663 16 60',
        'teryt-place': '1202024',
        'registry-number': '000000006712-W-12',
        'id-resort-part-VII': '061',
        'id-resort-part-VIII': '1030',
        'benefits-for-children': null,
        'covid-19': 'N',
        toilet: 'N',
        ramp: 'Y',
        'car-park': 'Y',
        elevator: 'Y',
        latitude: null,
        longitude: null,
        statistics: {
          'provider-data': {
            awaiting: 54,
            removed: 17,
            'average-period': 137,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-01-31',
          'date-situation-as-at': '2023-09-20',
        },
        'benefits-provided': null,
      },
    },
    {
      type: 'queue',
      id: '05d7a467-01ce-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ENDOPROTEZOPLASTYKA STAWU KOLANOWEGO',
        'many-places': 'N',
        provider:
          'SAMODZIELNY PUBLICZNY ZAKŁAD OPIEKI ZDROWOTNEJ SZPITAL UNIWERSYTECKI W KRAKOWIE',
        'provider-code': '061/100014',
        'regon-provider': '000288685',
        'nip-provider': '6751199442',
        'teryt-provider': '1261011',
        place: 'ODDZIAŁ KLINICZNY ORTOPEDII I TRAUMATOLOGII',
        address: 'UL. MACIEJA JAKUBOWSKIEGO 2',
        locality: 'KRAKÓW',
        phone: '(012)424 70 00',
        'teryt-place': '1261049',
        'registry-number': '000000018583-W-12',
        'id-resort-part-VII': '720',
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
            awaiting: 96,
            removed: 7,
            'average-period': 161,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-02-08',
          'date-situation-as-at': '2023-09-20',
        },
        'benefits-provided': { 'type-of-benefit': 1, year: 2022, amount: 198 },
      },
    },
    {
      type: 'queue',
      id: '05d7a467-01ca-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ENDOPROTEZOPLASTYKA STAWU BIODROWEGO',
        'many-places': 'N',
        provider:
          'SAMODZIELNY PUBLICZNY ZAKŁAD OPIEKI ZDROWOTNEJ SZPITAL UNIWERSYTECKI W KRAKOWIE',
        'provider-code': '061/100014',
        'regon-provider': '000288685',
        'nip-provider': '6751199442',
        'teryt-provider': '1261011',
        place: 'ODDZIAŁ KLINICZNY ORTOPEDII I TRAUMATOLOGII',
        address: 'UL. MACIEJA JAKUBOWSKIEGO 2',
        locality: 'KRAKÓW',
        phone: '(012)424 70 00',
        'teryt-place': '1261049',
        'registry-number': '000000018583-W-12',
        'id-resort-part-VII': '720',
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
            removed: 5,
            'average-period': 142,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-02-16',
          'date-situation-as-at': '2023-09-20',
        },
        'benefits-provided': { 'type-of-benefit': 1, year: 2022, amount: 299 },
      },
    },
    {
      type: 'queue',
      id: '05d7a465-0c82-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
        'many-places': 'Y',
        provider:
          'CENTRUM MEDYCZNE "KOL-MED" SAMODZIELNY PUBLICZNY ZAKŁAD OPIEKI ZDROWOTNEJ W TARNOWIE',
        'provider-code': '065/100184',
        'regon-provider': '010649508',
        'nip-provider': '9930091869',
        'teryt-provider': '1263011',
        place: 'PORADNIA ENDOKRYNOLOGICZNA',
        address: 'UL. PL. DWORCOWY 6',
        locality: 'TARNÓW',
        phone: '(014)688 60 40',
        'teryt-place': '1263011',
        'registry-number': '000000006712-W-12',
        'id-resort-part-VII': '007',
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
            awaiting: 66,
            removed: 11,
            'average-period': 247,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-02-21',
          'date-situation-as-at': '2023-09-20',
        },
        'benefits-provided': null,
      },
    },
    {
      type: 'queue',
      id: '05d7a465-2f4e-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ENDOPROTEZOPLASTYKA STAWU KOLANOWEGO',
        'many-places': 'N',
        provider: 'ZESPÓŁ ZAKŁADÓW OPIEKI ZDROWOTNEJ W WADOWICACH',
        'provider-code': '061/100026',
        'regon-provider': '000306466',
        'nip-provider': '5512124676',
        'teryt-provider': '1218094',
        place: 'ODDZIAŁ CHIRURGII URAZOWO-ORTOPEDYCZNEJ',
        address: 'UL. KARMELICKA 7B',
        locality: 'WADOWICE',
        phone: '(033)872 12 00',
        'teryt-place': '1218094',
        'registry-number': '000000006095-W-12',
        'id-resort-part-VII': '021',
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
            awaiting: 17,
            removed: 2,
            'average-period': 58,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-02-26',
          'date-situation-as-at': '2023-09-19',
        },
        'benefits-provided': { 'type-of-benefit': 1, year: 2022, amount: 111 },
      },
    },
    {
      type: 'queue',
      id: '05d7a465-46bc-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ENDOPROTEZOPLASTYKA STAWU BIODROWEGO',
        'many-places': 'N',
        provider: 'SZPITAL POWIATOWY W CHRZANOWIE',
        'provider-code': '061/100007',
        'regon-provider': '000310108',
        'nip-provider': '6281916916',
        'teryt-provider': '1203034',
        place: 'ODDZIAŁ CHIRURGII URAZOWO-ORTOPEDYCZNEJ',
        address: 'UL. TOPOLOWA 16',
        locality: 'CHRZANÓW',
        phone: '(032)624 72 37',
        'teryt-place': '1203034',
        'registry-number': '000000006129-W-12',
        'id-resort-part-VII': '004',
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
            awaiting: 54,
            removed: 1,
            'average-period': 146,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-03-11',
          'date-situation-as-at': '2023-09-19',
        },
        'benefits-provided': { 'type-of-benefit': 1, year: 2022, amount: 165 },
      },
    },
    {
      type: 'queue',
      id: '05d7a465-3940-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
        'many-places': 'N',
        provider:
          'ZAKŁAD LECZNICTWA AMBULATORYJNEGO W CHRZANOWIE SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ',
        'provider-code': '061/100043',
        'regon-provider': '276218481',
        'nip-provider': '6282259231',
        'teryt-provider': '1203034',
        place: 'PORADNIA ENDOKRYNOLOGICZNA',
        address: 'UL. SOKOŁA 19',
        locality: 'CHRZANÓW',
        phone: '(032)623 22 11;(032)623 22 12',
        'teryt-place': '1203034',
        'registry-number': '000000006130-W-12',
        'id-resort-part-VII': '041',
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
            awaiting: 157,
            removed: 60,
            'average-period': 78,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-03-19',
          'date-situation-as-at': '2023-09-19',
        },
        'benefits-provided': null,
      },
    },
    {
      type: 'queue',
      id: '05d7a465-3e8e-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
        'many-places': 'N',
        provider: 'NIEPUBLICZNY ZAKŁAD OPIEKI ZDROWOTNEJ EUROMED',
        'provider-code': '061/200167',
        'regon-provider': '350993122',
        'nip-provider': '6791040558',
        'teryt-provider': '1219054',
        place: 'PORADNIA ENDOKRYNOLOGICZNA',
        address: 'UL. BOLESŁAWA SZPUNARA 19',
        locality: 'WIELICZKA',
        phone: '+48 122 784 000',
        'teryt-place': '1219054',
        'registry-number': '000000020472-W-12',
        'id-resort-part-VII': '004',
        'id-resort-part-VIII': '1030',
        'benefits-for-children': 'Y',
        'covid-19': 'N',
        toilet: 'N',
        ramp: 'N',
        'car-park': 'N',
        elevator: 'N',
        latitude: null,
        longitude: null,
        statistics: {
          'provider-data': {
            awaiting: 258,
            removed: 23,
            'average-period': 204,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-03-21',
          'date-situation-as-at': '2023-09-20',
        },
        'benefits-provided': null,
      },
    },
    {
      type: 'queue',
      id: '05d7a465-1e1c-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ENDOPROTEZOPLASTYKA STAWU BIODROWEGO',
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
            awaiting: 22,
            removed: 3,
            'average-period': 267,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-03-22',
          'date-situation-as-at': '2023-09-20',
        },
        'benefits-provided': { 'type-of-benefit': 1, year: 2022, amount: 129 },
      },
    },
    {
      type: 'queue',
      id: '05d7a467-095a-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
        'many-places': 'N',
        provider:
          'CENTRUM MEDYCZNE VADIMED SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ',
        'provider-code': '061/200462',
        'regon-provider': '357409592',
        'nip-provider': '9451929731',
        'teryt-provider': '1261011',
        place: 'PORADNIA ENDOKRYNOLOGICZNA-UŁANÓW',
        address: 'UL. UŁANÓW 29 A',
        locality: 'KRAKÓW',
        phone: '+48 12 411 04 77',
        'teryt-place': '1261011',
        'registry-number': '000000006711-W-12',
        'id-resort-part-VII': '084',
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
            awaiting: 311,
            removed: 95,
            'average-period': 92,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-04-17',
          'date-situation-as-at': '2023-09-19',
        },
        'benefits-provided': null,
      },
    },
    {
      type: 'queue',
      id: '05d7a465-7b6a-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
        'many-places': 'N',
        provider:
          'MAŁOPOLSKI ZESPÓŁ PRZYCHODNI SPECJALISTYCZNYCH "BATOREGO 3" SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ',
        'provider-code': '061/200419',
        'regon-provider': '357153075',
        'nip-provider': '6762155419',
        'teryt-provider': '1261011',
        place: 'PORADNIA ENDOKRYNOLOGICZNA',
        address: 'UL. BATOREGO 3',
        locality: 'KRAKÓW-ŚRÓDMIEŚCIE',
        phone: '+48 12 632 80 39',
        'teryt-place': '1261059',
        'registry-number': '000000006507-W-12',
        'id-resort-part-VII': '003',
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
            awaiting: 178,
            removed: 8,
            'average-period': 123,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-05-06',
          'date-situation-as-at': '2023-09-19',
        },
        'benefits-provided': null,
      },
    },
    {
      type: 'queue',
      id: '05d7a467-0a6a-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
        'many-places': 'N',
        provider:
          'MOŚCICKIE CENTRUM MEDYCZNE SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ',
        'provider-code': '065/100183',
        'regon-provider': '851664020',
        'nip-provider': '9930651966',
        'teryt-provider': '1263011',
        place: 'PORADNIA ENDOKRYNOLOGICZNA',
        address: 'UL. EUGENIUSZA KWIATKOWSKIEGO 15',
        locality: 'TARNÓW',
        phone: '(014)688 05 50',
        'teryt-place': '1263011',
        'registry-number': '000000005920-W-12',
        'id-resort-part-VII': '076',
        'id-resort-part-VIII': '1030',
        'benefits-for-children': 'Y',
        'covid-19': 'N',
        toilet: 'Y',
        ramp: 'Y',
        'car-park': 'N',
        elevator: 'Y',
        latitude: null,
        longitude: null,
        statistics: {
          'provider-data': {
            awaiting: 156,
            removed: 12,
            'average-period': 130,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-05-07',
          'date-situation-as-at': '2023-09-20',
        },
        'benefits-provided': null,
      },
    },
    {
      type: 'queue',
      id: '05d7a465-3cbe-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
        'many-places': 'N',
        provider: 'SZPITAL SPECJALISTYCZNY IM.J.DIETLA W KRAKOWIE',
        'provider-code': '061/100005',
        'regon-provider': '351564179',
        'nip-provider': '6762083306',
        'teryt-provider': '1261011',
        place: 'PORADNIA ENDOKRYNOLOGICZNA',
        address: 'UL. AL. F. FOCHA 33',
        locality: 'KRAKÓW-KROWODRZA',
        phone: '(012)687 64 60',
        'teryt-place': '1261029',
        'registry-number': '000000005592-W-12',
        'id-resort-part-VII': '017',
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
            awaiting: 392,
            removed: 19,
            'average-period': 117,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-05-28',
          'date-situation-as-at': '2023-09-20',
        },
        'benefits-provided': null,
      },
    },
    {
      type: 'queue',
      id: '05d7a465-7d3a-aa0c-e063-b4200a0aa3b9',
      attributes: {
        case: 1,
        benefit: 'ŚWIADCZENIA Z ZAKRESU ENDOKRYNOLOGII',
        'many-places': 'N',
        provider:
          'ZESPÓŁ PRZYCHODNI SPECJALISTYCZNYCH DIAB-END-COR SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ',
        'provider-code': '061/200420',
        'regon-provider': '357059146',
        'nip-provider': '6762119168',
        'teryt-provider': '1261011',
        place: 'PORADNIA ENDOKRYNOLOGICZNA',
        address: 'UL. S. BATOREGO 3',
        locality: 'KRAKÓW-ŚRÓDMIEŚCIE',
        phone: '(012)633 19 48',
        'teryt-place': '1261059',
        'registry-number': '000000006457-W-12',
        'id-resort-part-VII': '002',
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
            awaiting: 195,
            removed: 36,
            'average-period': 144,
            update: '2023-08',
          },
          'computed-data': null,
        },
        dates: {
          applicable: true,
          date: '2024-05-28',
          'date-situation-as-at': '2023-09-20',
        },
        'benefits-provided': null,
      },
    },
  ],
};