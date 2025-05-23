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
  {
    id: 15,
    question:
      "Która funkcja jest dobrym narzędziem konferencyjnym do wykorzystania z innymi, którzy znajdują się w innym miejscu w Twoim mieście, a nawet w innym kraju?",
    //   multi: true,
    answers: [
      {
        option: "BYOD",
        correct: false,
      },
      {
        option: "Komunikacja wideo",
        correct: true,
      },
      {
        option: "Przetwarzanie w chmurze",
        correct: false,
      },
    ],
  },
  {
    id: 16,
    question:
      "Która funkcja opisuje korzystanie z osobistych narzędzi do uzyskiwania dostępu do informacji i komunikowania się przez sieć biznesową lub kampusową?",
    //   multi: true,
    answers: [
      {
        option: "BYOD",
        correct: true,
      },
      {
        option: "Komunikacja wideo",
        correct: false,
      },
      {
        option: "Przetwarzanie w chmurze",
        correct: false,
      },
    ],
  },
  {
    id: 17,
    question:
      "Która funkcja zawiera opcje takie jak publiczne, prywatne, niestandardowe i hybrydowe?",
    //   multi: true,
    answers: [
      {
        option: "BYOD",
        correct: false,
      },
      {
        option: "Komunikacja wideo",
        correct: false,
      },
      {
        option: "Przetwarzanie w chmurze",
        correct: true,
      },
    ],
  },
  {
    id: 18,
    question:
      "Która funkcja jest używana podczas podłączania urządzenia do sieci za pomocą gniazdka elektrycznego?",
    //   multi: true,
    answers: [
      {
        option: "Technologia inteligentnego budynku",
        correct: false,
      },
      {
        option: "Technologia Powerline",
        correct: true,
      },
      {
        option: "Szerokopasmowa transmisja bezprzewodowa",
        correct: false,
      },
    ],
  },
  {
    id: 19,
    question: "Która funkcja wykorzystuje tę samą technologię komórkową co smartfon?",
    //   multi: true,
    answers: [
      {
        option: "Technologia inteligentnego budynku",
        correct: false,
      },
      {
        option: "Technologia Powerline",
        correct: false,
      },
      {
        option: "Szerokopasmowa transmisja bezprzewodowa",
        correct: true,
      },
    ],
  },
  {
    id: 20,
    question: "Który atak spowalnia lub powoduje awarię sprzętu i programów?",
    //   multi: true,
    answers: [
      {
        option: "Firewall",
        correct: false,
      },
      {
        option: "Wirus, robak, koń trojański",
        correct: false,
      },
      {
        option: "Zero-day lub zero-hour",
        correct: false,
      },
      {
        option: "Wirtualna sieć prywatna (VPN)",
        correct: false,
      },
      {
        option: "Odmowa usługi (DoS)",
        correct: true,
      },
    ],
  },
  {
    id: 21,
    question: "Która opcja tworzy bezpieczne połączenie dla pracowników zdalnych?",
    //   multi: true,
    answers: [
      {
        option: "Zapora",
        correct: false,
      },
      {
        option: "Wirus, robak, koń trojański",
        correct: false,
      },
      {
        option: "Zero-day lub zero-hour",
        correct: false,
      },
      {
        option: "Wirtualna sieć prywatna (VPN)",
        correct: true,
      },
      {
        option: "Odmowa usługi (DoS)",
        correct: false,
      },
    ],
  },
  {
    id: 22,
    question: "Która opcja blokuje nieautoryzowany dostęp do Twojej sieci?",
    //   multi: true,
    answers: [
      {
        option: "Zapora",
        correct: true,
      },
      {
        option: "Wirus, robak, koń trojański",
        correct: false,
      },
      {
        option: "Zero-day lub zero-hour",
        correct: false,
      },
      {
        option: "Wirtualna sieć prywatna (VPN)",
        correct: false,
      },
      {
        option: "Odmowa usługi (DoS)",
        correct: false,
      },
    ],
  },
  {
    id: 23,
    question:
      "Która opcja opisuje atak sieciowy, który ma miejsce pierwszego dnia po wykryciu luki w zabezpieczeniach?",
    //   multi: true,
    answers: [
      {
        option: "Zapora",
        correct: false,
      },
      {
        option: "Wirus, robak, koń trojański",
        correct: false,
      },
      {
        option: "Zero-day lub zero-hour",
        correct: true,
      },
      {
        option: "Wirtualna sieć prywatna (VPN)",
        correct: false,
      },
      {
        option: "Odmowa usługi (DoS)",
        correct: false,
      },
    ],
  },
  {
    id: 24,
    question: "Która opcja opisuje złośliwy kod działający na urządzeniach użytkownika?",
    //   multi: true,
    answers: [
      {
        option: "Firewall",
        correct: false,
      },
      {
        option: "Wirus, robak, koń trojański",
        correct: true,
      },
      {
        option: "Zero-day lub zero-hour",
        correct: false,
      },
      {
        option: "Wirtualna sieć prywatna (VPN)",
        correct: false,
      },
      {
        option: "Odmowa usługi (DoS)",
        correct: false,
      },
    ],
  },
  {
    id: 25,
    question:
      "Podczas rutynowej kontroli, technik odkrył, że oprogramowanie, które zostało zainstalowane na komputerze i potajemnie zbiera dane o stronach internetowych, które były odwiedzane przez użytkowników komputera.Jaki jest to rodzaj zagrożenia dotyczący tego komputera?",
    //   multi: true,
    answers: [
      {
        option: "Atak DoS",
        correct: false,
      },
      {
        option: "Kradzieży tożsamości",
        correct: false,
      },
      {
        option: "Oprogramowanie szpiegujące",
        correct: true,
      },
      {
        option: "Atak zero-day",
        correct: false,
      },
    ],
  },
  {
    id: 26,
    question:
      "Który termin odnosi się do sieci, która zapewnia bezpieczny dostęp do biur korporacyjnych przez dostawców, klientów i współpracowników?",
    //   multi: true,
    answers: [
      {
        option: "Internet",
        correct: false,
      },
      {
        option: "Intranet",
        correct: false,
      },
      {
        option: "Ekstranet",
        correct: true,
      },
      {
        option: "Rozszerzona sieć",
        correct: false,
      },
    ],
  },
  {
    id: 27,
    question:
      "Duża korporacja zmodyfikowała swoją sieć, aby umożliwić użytkownikom dostęp do zasobów sieciowych z ich osobistych laptopów i smartfonów. Który trend sieciowy to opisuje?",
    //   multi: true,
    answers: [
      {
        option: "Obliczenia w chmurze",
        correct: false,
      },
      {
        option: "Współpraca grupowa online",
        correct: false,
      },
      {
        option: "Bring Your Own Device",
        correct: true,
      },
      {
        option: "Konferencje video",
        correct: false,
      },
    ],
  },
  {
    id: 28,
    question: "Co to jest ISP?",
    //   multi: true,
    answers: [
      {
        option:
          "Jest to szkielet standardu opracowanego do tworzenia standardów okablowania dla sieci.",
        correct: false,
      },
      {
        option: "Jest to protokół, który określa jak komunikują się hosty w sieci lokalnej.",
        correct: false,
      },
      {
        option:
          "Jest to organizacja, która umożliwia osobom prywatnym i firmom łączność z Internetem.",
        correct: true,
      },
      {
        option: "Jest to urządzenie sieciowe, które łączy funkcjonalność wielu innych w jednym.",
        correct: false,
      },
    ],
  },
  {
    id: 29,
    question:
      "W którym scenariuszu zaleca się zastosowanie WISP (bezprzewodowy dostawca Internetu)?",
    //   multi: true,
    answers: [
      {
        option: "Kafejka internetowa w mieście",
        correct: false,
      },
      {
        option:
          "Gospodarstwo na obszarze wiejskim na którym nie ma przewodowego dostępu do łącza szerokopasmowego",
        correct: true,
      },
      {
        option: "Każdy dom z wieloma urządzeniami bezprzewodowymi",
        correct: false,
      },
      {
        option: "Mieszkanie w budynku z dostępem do internetu kablowego",
        correct: false,
      },
    ],
  },
  {
    id: 30,
    question:
      "Jaka cecha sieci umożliwia jej szybki rozwój w celu obsługi nowych użytkowników i aplikacji bez wpływu na wydajność usługi dostarczanej istniejącym użytkownikom?",
    //   multi: true,
    answers: [
      {
        option: "Niezawodność",
        correct: false,
      },
      {
        option: "Skalowalność",
        correct: true,
      },
      {
        option: "Jakość usług",
        correct: false,
      },
      {
        option: "Dostępność",
        correct: false,
      },
    ],
  },
  {
    id: 31,
    question:
      "Uczelnia buduje nowy akademik w kampusie. Pracownicy kopią w ziemi, aby zainstalować nową rurę wodną dla akademika. Pracownik przypadkowo uszkadza kabel światłowodowy, który łączy dwa istniejące akademiki z centrum danych kampusu. Chociaż kabel został odcięty, studenci w akademikach odczuwają tylko bardzo krótkiej przerwy w usługach sieciowych. Jaka charakterystyka sieci jest tutaj pokazana?",
    //   multi: true,
    answers: [
      {
        option: "Jakość usługi",
        correct: false,
      },
      {
        option: "Skalowalność",
        correct: false,
      },
      {
        option: "Bezpieczeństwo",
        correct: false,
      },
      {
        option: "Tolerancja błędu",
        correct: true,
      },
      {
        option: "Integralność",
        correct: false,
      },
    ],
  },
  {
    id: 32,
    question: "Jakie są dwie cechy skalowalnej sieci? (Wybierz dwie odpowiedzi.)",
    multi: true,
    answers: [
      {
        option: "Łatwiejsze przeciążenie wraz ze wzrostem ruchu",
        correct: false,
      },
      {
        option: "Rozwój bez wpływu na użytkowników",
        correct: true,
      },
      {
        option: "Nie jest niezawodna w małych sieciach",
        correct: false,
      },
      {
        option: "Właściwa dla urządzeń modularnych, które pozwalają na rozszerzanie",
        correct: true,
      },
      {
        option: "Oferuje ograniczoną liczbę aplikacji",
        correct: false,
      },
    ],
  },
  {
    id: 33,
    question:
      "Które urządzenie ustala ścieżkę, którą wiadomości powinny być przesyłane przez intersieci?",
    //   multi: true,
    answers: [
      {
        option: "Router",
        correct: true,
      },
      {
        option: "Zapora",
        correct: false,
      },
      {
        option: "Serwer WWW",
        correct: false,
      },
      {
        option: "Modem DSL",
        correct: false,
      },
    ],
  },
  {
    id: 34,
    question:
      "Które dwa rodzaje połączeń internetowych nie wymagają fizycznego podłączenia okablowania do budynku? (Wybierz dwie odpowiedzi.)",
    multi: true,
    answers: [
      {
        option: "DSL",
        correct: false,
      },
      {
        option: "Sieć komórkowa",
        correct: true,
      },
      {
        option: "Łącza satelitarne",
        correct: true,
      },
      {
        option: "Łącze telefoniczne (dial-up)",
        correct: false,
      },
      {
        option: "Dedykowane łącze dzierżawione",
        correct: false,
      },
    ],
  },
  {
    id: 35,
    question:
      "Do jakiego typu sieci musi mieć dostęp użytkownik domowy, aby móc zrobić zakupy online?",
    //   multi: true,
    answers: [
      {
        option: "Intranet",
        correct: false,
      },
      {
        option: "Internet",
        correct: true,
      },
      {
        option: "Extranet",
        correct: false,
      },
      {
        option: "Sieć lokalna (LAN)",
        correct: false,
      },
    ],
  },
  {
    id: 36,
    question: "W jaki sposób BYOD zmienia sposób, w jaki firmy wdrażają sieci?",
    //   multi: true,
    answers: [
      {
        option: "BYOD wymaga od organizacji zakupu laptopów zamiast komputerów stacjonarnych.",
        correct: false,
      },
      {
        option:
          "Użytkownicy BYOD są odpowiedzialni za własne bezpieczeństwo sieci, zmniejszając tym samym zapotrzebowanie na politykę bezpieczeństwa organizacji.",
        correct: false,
      },
      {
        option: "Urządzenia BYOD są droższe niż urządzenia zakupione przez organizację.",
        correct: false,
      },
      {
        option:
          "BYOD zapewnia elastyczność w zakresie tego, gdzie i w jaki sposób użytkownicy mogą uzyskać dostęp do zasobów sieciowych.",
        correct: true,
      },
    ],
  },
  {
    id: 37,
    question:
      "Pracownik chce uzyskać dostęp do sieci organizacji zdalnie, w najbezpieczniejszy możliwy sposób. Jaka funkcja sieciowa umożliwiłaby pracownikowi uzyskanie bezpiecznego zdalnego dostępu do sieci firmowej?",
    //   multi: true,
    answers: [
      {
        option: "Lista ACL",
        correct: false,
      },
      {
        option: "IPS",
        correct: false,
      },
      {
        option: "VPN",
        correct: true,
      },
      {
        option: "BYOD",
        correct: false,
      },
    ],
  },
  {
    id: 38,
    question: "Czym jest Internet?",
    //   multi: true,
    answers: [
      {
        option: "Jest to sieć oparta na technologii Ethernet.",
        correct: false,
      },
      {
        option: "Zapewnia dostęp do sieci dla urządzeń mobilnych.",
        correct: false,
      },
      {
        option: "Zapewnia połączenia za pośrednictwem połączonych sieci globalnych.",
        correct: true,
      },
      {
        option: "Jest to prywatna sieć dla organizacji z połączeniami LAN i WAN.",
        correct: false,
      },
    ],
  },
  {
    id: 39,
    question: "Jakie są dwie funkcje urządzeń końcowych w sieci? (Wybierz dwie odpowiedzi.)",
    multi: true,
    answers: [
      {
        option: "Wysyłają dane przepływające przez sieć.",
        correct: true,
      },
      {
        option: "Kierują dane na alternatywne ścieżki w przypadku awarii łącza.",
        correct: false,
      },
      {
        option: "Filtrują przepływ danych w celu zwiększenia bezpieczeństwa.",
        correct: false,
      },
      {
        option: "Tworzą interfejs pomiędzy ludźmi a siecią komunikacyjną.",
        correct: true,
      },
      {
        option: "Zapewniają kanał, którym przemieszcza się komunikat sieciowy.",
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
  {
    id: 71,
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
    id: 72,
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
    id: 73,
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
    id: 74,
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
    id: 75,
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
    id: 76,
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
    id: 77,
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
    id: 78,
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
    id: 79,
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
    id: 80,
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
    id: 81,
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
    id: 82,
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
    id: 83,
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
    id: 84,
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
    id: 85,
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
    id: 86,
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
    id: 87,
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
    id: 88,
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
    id: 89,
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
    id: 90,
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
    id: 91,
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
    id: 92,
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
    id: 93,
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
    id: 94,
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
    id: 95,
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
    id: 96,
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
    id: 97,
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
    id: 98,
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
    id: 99,
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
    id: 100,
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
    id: 101,
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
    id: 102,
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
    id: 103,
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
    id: 104,
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
    id: 105,
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
    id: 106,
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
    id: 107,
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
    id: 108,
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
    id: 109,
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
    id: 110,
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
    id: 111,
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
    id: 112,
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
    id: 113,
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
    id: 114,
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
    id: 115,
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
    id: 116,
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
    id: 117,
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
    id: 118,
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
    id: 119,
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
    id: 120,
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
    id: 121,
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
    id: 122,
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
    id: 123,
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
    id: 124,
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
    id: 125,
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
];
