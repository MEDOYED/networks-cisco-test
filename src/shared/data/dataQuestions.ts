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
];
