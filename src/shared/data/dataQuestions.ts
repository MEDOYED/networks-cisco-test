import type { Question } from "../types/typesQuiz";

export const dataQuestions: Question[] = [
  {
    id: 1,
    question:
      "Które z poniższych to nazwa wszystkich komputerów podłączonych do sieci, które uczestniczą bezpośrednio w komunikacji sieciowej?",
    answers: [
      {
        option: "Serwery",
        correct: false,
      },
      {
        option: "Urządzenia pośredniczące",
        correct: false,
      },
      {
        option: "Hosty",
        correct: true,
      },
      {
        option: "Medium",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question:
      "Gdy dane są kodowane jako impulsy światła, które medium jest używane do przesyłania danych?",
    answers: [
      {
        option: "Bezprzewodowe",
        correct: false,
      },
      {
        option: "Kabel światłowodowy",
        correct: true,
      },
      {
        option: "Kabel miedziany",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: "Które dwa urządzenia są urządzeniami pośredniczącymi? (Wybierz dwie odpowiedzi.)",
    multi: true,
    answers: [
      {
        option: "Hosty",
        correct: false,
      },
      {
        option: "Routery",
        correct: true,
      },
      {
        option: "Serwery",
        correct: false,
      },
      {
        option: "Przełączniki",
        correct: true,
      },
    ],
  },

  // 1.3
  {
    id: 4,
    question: "Które połączenie fizycznie łączy urządzenie końcowe z siecią?",
    answers: [
      {
        option: "Port",
        correct: false,
      },
      {
        option: "Karta sieciowa",
        correct: true,
      },
      {
        option: "Interfejs",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question:
      "Które połączenia to specjalne porty w urządzeniu sieciowym, które łączą się z poszczególnymi sieciami?",
    answers: [
      {
        option: "Port",
        correct: false,
      },
      {
        option: "Karta sieciowa",
        correct: false,
      },
      {
        option: "Interfejs",
        correct: true,
      },
    ],
  },
  {
    id: 6,
    question:
      "Jaki rodzaj topologii sieci pozwala sprawdzić, które urządzenia końcowe są podłączone do urządzeń pośredniczących i jakie media są używane?",
    answers: [
      {
        option: "Topologia fizyczna",
        correct: false,
      },
      {
        option: "Topologia logiczna",
        correct: true,
      },
    ],
  },
  {
    id: 7,
    question:
      "Jaki rodzaj topologii sieci pozwala zobaczyć rzeczywistą lokalizację urządzeń pośredniczących i instalacji kabli?",
    answers: [
      {
        option: "Topologia fizyczna",
        correct: true,
      },
      {
        option: "Topologia logiczna",
        correct: false,
      },
    ],
  },

  // 1.4
  {
    id: 8,
    question:
      "Która infrastruktura sieciowa zapewnia dostęp do użytkowników i urządzeń końcowych na małym obszarze geograficznym, który jest zazwyczaj siecią w dziale przedsiębiorstwa, domu lub małej firmie?",
    answers: [
      {
        option: "Ekstranet",
        correct: false,
      },
      {
        option: "Intranet",
        correct: false,
      },
      {
        option: "LAN",
        correct: true,
      },
      {
        option: "WAN",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question:
      "Jaką infrastrukturę sieciową może wykorzystać organizacja w celu zapewnienia bezpiecznego dostępu osobom, które pracują dla innej organizacji, ale wymagają dostępu do danych organizacji?",
    answers: [
      {
        option: "Ekstranet",
        correct: true,
      },
      {
        option: "Intranet",
        correct: false,
      },
      {
        option: "LAN",
        correct: false,
      },
      {
        option: "WAN",
        correct: false,
      },
    ],
  },
  {
    id: 10,
    question:
      "Która infrastruktura sieciowa zapewnia dostęp do innych sieci na dużym obszarze geograficznym, który jest często własnością dostawcy usług telekomunikacyjnych i zarządzany przez niego?",
    answers: [
      {
        option: "Ekstranet",
        correct: false,
      },
      {
        option: "Intranet",
        correct: false,
      },
      {
        option: "LAN",
        correct: false,
      },
      {
        option: "WAN",
        correct: true,
      },
    ],
  },

  // 1.5 no test in this module

  //1.6
  {
    id: 11,
    question:
      "Kiedy projektanci przestrzegają przyjętych standardów i protokołów, która z czterech podstawowych cech architektury sieci jest osiągnięta?",
    answers: [
      {
        option: "Tolerancja błędu",
        correct: false,
      },
      {
        option: "Skalowalność",
        correct: true,
      },
      {
        option: "Jakość usług (QoS)",
        correct: false,
      },
      {
        option: "Bezpieczeństwo",
        correct: false,
      },
    ],
  },
  {
    id: 12,
    question:
      "Poufność, integralność i dostępność są wymaganiami, której z czterech podstawowych cech architektury sieci?",
    answers: [
      {
        option: "Tolerancja błędu",
        correct: false,
      },
      {
        option: "Skalowalność",
        correct: false,
      },
      {
        option: "Jakość usług (QoS)",
        correct: false,
      },
      {
        option: "Bezpieczeństwo",
        correct: true,
      },
    ],
  },
  {
    id: 13,
    question:
      "Za pomocą jakiego rodzaju polityki router może zarządzać przepływem danych i ruchu głosowego, nadając priorytet komunikacji głosowej, jeśli sieć doświadcza przeciążenia?",
    answers: [
      {
        option: "Tolerancja błędu",
        correct: false,
      },
      {
        option: "Skalowalność",
        correct: false,
      },
      {
        option: "Jakość usług (QoS)",
        correct: true,
      },
      {
        option: "Bezpieczeństwo",
        correct: false,
      },
    ],
  },
  {
    id: 14,
    question:
      "Posiadanie wielu ścieżek do miejsca przeznaczenia nazywamy nadmiarowością. Jest to przykład, której cechy architektury sieci?",
    answers: [
      {
        option: "Tolerancja błędu",
        correct: true,
      },
      {
        option: "Skalowalność",
        correct: false,
      },
      {
        option: "Jakość usług (QoS)",
        correct: false,
      },
      {
        option: "Bezpieczeństwo",
        correct: false,
      },
    ],
  },
  // {
  //   id: 15,
  //   question:
  //     "Użytkownik realizuje zabezpieczenia w małej sieci biurowej. Które dwa działania zapewniałyby minimalne wymagania bezpieczeństwa dla tej sieci? (Wybierz dwie odpowiedzi.)",
  //   multi: true,
  //   answers: [
  //     {
  //       option: "instalowanie oprogramowania antywirusowego",
  //       correct: true,
  //     },
  //     {
  //       option: "instalowanie sieci bezprzewodowej",
  //       correct: false,
  //     },
  //     {
  //       option: "implementacja zapory",
  //       correct: true,
  //     },
  //     {
  //       option: "system wykrywania włamań",
  //       correct: false,
  //     },
  //     {
  //       option: "dodanie dedykowanego urządzenia zapobiegającego włamaniom",
  //       correct: false,
  //     },
  //   ],
  // },
  {
    id: 16,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 17,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 18,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 19,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 20,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 21,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 22,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 23,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 24,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 25,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 26,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 27,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 28,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 29,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 30,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 31,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 32,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 33,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 34,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 35,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 36,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 37,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 38,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 39,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 40,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 41,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 42,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 43,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 44,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 45,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 46,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 47,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 48,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 49,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 50,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 51,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 52,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 53,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 54,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 55,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 56,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 57,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 58,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 59,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 60,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 61,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 62,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 63,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 64,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 65,
    question: "",
    //   multi: true,
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
 {
    id: 67,
    question: "",
    //   multi: true, 
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },

  //Pashka
  {
    id: 68,
    question: "",
    //   multi: true, 
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 69,
    question: "",
    //   multi: true, 
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 70,
    question: "",
    //   multi: true, 
    answers: [
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
]