import type { Question } from "../types/typesQuiz";

// MODULE 1   -->  id: 1-39
// MODULE 2   -->  id: 40-69
// MODULE 3   -->  id: 70-112
// MODULE 4   -->  id: 113-150
// MODULE 5   -->  id: 151-170
// MODULE 6   -->  id: 152-199
// MODULE 7   -->  id: 200-224
// MODULE 8   -->  id: 240-272
// MODULE 9   -->  id: 273-297
// MODULE 10  -->  id: 298-310
// MODULE 11  -->  id: 311-335
// MODULE 12  -->  id: 336-370
// MODULE 13  -->  id: 371-386
// MODULE 14  -->  id: 387-424
// MODULE 15  -->  id: 425-461
// MODULE 16  -->  id: 462-495
// MODULE 17  -->  id: 496-524

export const dataCiscoQuestions: Question[] = [
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
    question:
      "Która metoda dostępu byłaby najbardziej odpowiednia, gdybyś był w pomieszczeniu wyposażenia z nowym przełącznikiem, który musi zostać skonfigurowany?",
    answers: [
      {
        option: "Konsola",
        correct: true,
      },
      {
        option: "Telnet/SSH",
        correct: false,
      },
      {
        option: "Port AUX",
        correct: false,
      },
    ],
  },
  {
    id: 41,
    question:
      "Która metoda dostępu byłaby najbardziej odpowiednia, gdyby Twój menedżer dał ci specjalny kabel i kazał ci go użyć do skonfigurowania przełącznika?",
    answers: [
      {
        option: "Konsola",
        correct: true,
      },
      {
        option: "Telnet/SSH",
        correct: false,
      },
      {
        option: "Port AUX",
        correct: false,
      },
    ],
  },
  {
    id: 42,
    question:
      "Która metoda dostępu byłaby najbardziej odpowiednim dostępem w paśmie do IOS za pośrednictwem połączenia sieciowego?",
    answers: [
      {
        option: "Konsola",
        correct: false,
      },
      {
        option: "Telnet/SSH",
        correct: true,
      },
      {
        option: "Port AUX",
        correct: false,
      },
    ],
  },
  {
    id: 44,
    question: "Który tryb IOS umożliwia dostęp do wszystkich poleceń i funkcji?",
    answers: [
      {
        option: "Tryb konfiguracji globalnej",
        correct: false,
      },
      {
        option: "Tryb konfiguracji interfejsu",
        correct: false,
      },
      {
        option: "Tryb konfiguracji linii konsoli",
        correct: false,
      },
      {
        option: "Uprzywilejowany tryb EXEC",
        correct: true,
      },
      {
        option: "Tryb EXEC użytkownika",
        correct: false,
      },
    ],
  },
  {
    id: 45,
    question:
      "W którym trybie IOS jesteś, jeśli wyświetlany jest następujący znak zachęty Switch(config)#?",
    answers: [
      {
        option: "Tryb konfiguracji globalnej",
        correct: true,
      },
      {
        option: "Tryb konfiguracji interfejsu",
        correct: false,
      },
      {
        option: "Tryb konfiguracji linii konsoli",
        correct: false,
      },
      {
        option: "Uprzywilejowany tryb EXEC",
        correct: false,
      },
      {
        option: "Tryb EXEC użytkownika",
        correct: false,
      },
    ],
  },
  {
    id: 46,
    question:
      "W którym trybie IOS jesteś, jeśli wyświetlany jest nastepujący znak zachety Switch>?",
    answers: [
      {
        option: "Tryb konfiguracji globalnej",
        correct: false,
      },
      {
        option: "Tryb konfiguracji interfejsu",
        correct: false,
      },
      {
        option: "Tryb konfiguracji linii konsoli",
        correct: false,
      },
      {
        option: "Uprzywilejowany tryb EXEC",
        correct: false,
      },
      {
        option: "Tryb EXEC użytkownika",
        correct: true,
      },
    ],
  },
  {
    id: 47,
    question:
      "Które z dwóch poleceń zawróci Cię do uprzywilejowanego trybu EXEC niezależnie od trybu konfiguracji, w którym jesteś? (Wybierz dwie odpowiedzi.)",
    multi: true,
    answers: [
      {
        option: "CTRL+Z",
        correct: true,
      },
      {
        option: "disable",
        correct: false,
      },
      {
        option: "enable",
        correct: false,
      },
      {
        option: "end",
        correct: true,
      },
      {
        option: "exit",
        correct: false,
      },
    ],
  },
  {
    id: 48,
    question: "Jakie jest polecenie nadające nazwę „Sw-Floor-2” do przełącznikowi?",
    answers: [
      {
        option: "hostname Sw-Floor-2",
        correct: true,
      },
      {
        option: "host name Sw-Floor-2",
        correct: false,
      },
      {
        option: "name Sw-Floor-2",
        correct: false,
      },
    ],
  },
  {
    id: 49,
    question:
      "W jaki sposób dostęp do uprzywilejowanego trybu EXEC jest zabezpieczony na przełączniku?",
    answers: [
      {
        option: "enable class",
        correct: false,
      },
      {
        option: "secret class",
        correct: false,
      },
      {
        option: "enable secret class",
        correct: true,
      },
      {
        option: "service password-encryption",
        correct: false,
      },
    ],
  },
  {
    id: 50,
    question:
      "Które polecenie umożliwia uwierzytelnianie hasła w celu uzyskania dostępu do trybu EXEC użytkownika na przełączniku?",
    answers: [
      {
        option: "enable secret",
        correct: false,
      },
      {
        option: "login",
        correct: true,
      },
      {
        option: "secret",
        correct: false,
      },
      {
        option: "service password-encryption",
        correct: false,
      },
    ],
  },
  {
    id: 51,
    question:
      "Które polecenie szyfruje dostęp do wszystkich haseł w postaci zwykłego tekstu na przełączniku?",
    answers: [
      {
        option: "enable secret",
        correct: false,
      },
      {
        option: "login",
        correct: false,
      },
      {
        option: "secret",
        correct: false,
      },
      {
        option: "service password-encryption",
        correct: true,
      },
    ],
  },
  {
    id: 52,
    question:
      "Jakie jest polecenie konfigurujące baner, który ma być wyświetlany podczas łączenia się z przełącznikiem?",
    answers: [
      {
        option: "banner $ Keep out $",
        correct: false,
      },
      {
        option: "banner motd $ Keep out $",
        correct: true,
      },
      {
        option: "display $ Keep out $",
        correct: false,
      },
      {
        option: "login banner $ Keep out $",
        correct: false,
      },
    ],
  },
  {
    id: 53,
    question: "Jaka nazywana jest struktura adresu IPv4?",
    answers: [
      {
        option: "Format kropkowo-binarny",
        correct: false,
      },
      {
        option: "Format kropkowo-dziesiętny",
        correct: true,
      },
      {
        option: "Format kropkowo-szesnastkowy",
        correct: false,
      },
    ],
  },
  {
    id: 54,
    question: "Jak reprezentowany jest adres IPv4?",
    answers: [
      {
        option: "Cztery liczby binarne od 0 do 1 oddzielone dwukropkami.",
        correct: false,
      },
      {
        option: "Cztery liczby dziesiętne od 0 do 255 oddzielone kropkami.",
        correct: true,
      },
      {
        option: "Trzydzieści dwie liczby szesnastkowe oddzielone dwukropkami.",
        correct: false,
      },
      {
        option: "Trzydzieści dwie liczby szesnastkowe oddzielone kropkami.",
        correct: false,
      },
    ],
  },
  {
    id: 55,
    question: "Jaki typ interfejsu nie ma fizycznego portu z nim powiązanego?",
    answers: [
      {
        option: "Konsola",
        correct: false,
      },
      {
        option: "Ethernet",
        correct: false,
      },
      {
        option: "Szeregowy",
        correct: false,
      },
      {
        option: "Interfejs SVI",
        correct: true,
      },
    ],
  },
  {
    id: 56,
    question:
      "Które stwierdzenie jest prawdziwe odnośnie pliku konfiguracji bieżącej urządzenia Cisco IOS?",
    answers: [
      {
        option: "Ma wpływ na pracę urządzenia niezwłocznie po modyfikacji.",
        correct: true,
      },
      {
        option: "Jest przechowywany w pamięci NVRAM.",
        correct: false,
      },
      {
        option: "Powinien być kasowany z użyciem polecenia erase running-config.",
        correct: false,
      },
      {
        option: "Jest automatycznie zapisywany podczas ponownego uruchomienia routera.",
        correct: false,
      },
    ],
  },
  {
    id: 57,
    question:
      "Które dwa zdania są prawdziwe na temat trybu EXEC użytkownika? (Wybierz dwie odpowiedzi.)",
    multi: true,
    answers: [
      {
        option: "Dostępne są wszystkie polecenia routera.",
        correct: false,
      },
      {
        option: "Do trybu konfiguracji globalnej można wejść po wpisaniu polecenia enable.",
        correct: false,
      },
      {
        option: "Znak zachęty urządzenia dla tego trybu kończy się symbolem „>”.",
        correct: true,
      },
      {
        option: "W tym trybie można konfigurować interfejsy i protokoły routingu.",
        correct: false,
      },
      {
        option: "W tym trybie można wyświetlać tylko wybrane informacje o konfiguracji routera.",
        correct: true,
      },
    ],
  },
  {
    id: 58,
    question:
      "Jaki rodzaj dostępu jest zabezpieczony na routerze Cisco lub przełączniku za pomocą polecenia enable secret?",
    answers: [
      {
        option: "Linia wirtualnego terminala",
        correct: false,
      },
      {
        option: "Uprzywilejowany tryb EXEC",
        correct: true,
      },
      {
        option: "Port AUX",
        correct: false,
      },
      {
        option: "Konsola",
        correct: false,
      },
    ],
  },
  {
    id: 59,
    question: "Jaki jest domyślny interfejs SVI na przełączniku Cisco?",
    answers: [
      {
        option: "VLAN1",
        correct: true,
      },
      {
        option: "VLAN99",
        correct: false,
      },
      {
        option: "VLAN100",
        correct: false,
      },
      {
        option: "VLAN999",
        correct: false,
      },
    ],
  },
  {
    id: 60,
    question:
      "Gdy nazwa hosta jest skonfigurowana przez Cisco CLI, które trzy konwencje nazewnictwa są częścią wytycznych? (Wybierz trzy odpowiedzi).",
    multi: true,
    answers: [
      {
        option: "Nazwa hosta powinna mieć mniej niż 64 znaki długości",
        correct: true,
      },
      {
        option: "Nazwa hosta powinna być zapisana tylko małymi literami",
        correct: false,
      },
      {
        option: "Nazwa hosta nie powinna zawierać spacji",
        correct: true,
      },
      {
        option: "Nazwa hosta powinna kończyć się znakiem specjalnym",
        correct: false,
      },
      {
        option: "Nazwa hosta powinna zaczynać się od litery",
        correct: true,
      },
    ],
  },
  {
    id: 61,
    question: "Jaka jest funkcja powłoki w systemie operacyjnym?",
    answers: [
      {
        option: "Interakcja ze sprzętem urządzenia.",
        correct: false,
      },
      {
        option: "Interfejs między użytkownikami i jądrem.",
        correct: true,
      },
      {
        option: "Zapewnia dedykowane usługi zapory sieciowej.",
        correct: false,
      },
      {
        option: "Zapewnia usługi ochrony przed włamaniem do urządzenia.",
        correct: false,
      },
    ],
  },
  {
    id: 62,
    question:
      "Router z prawidłowym systemem operacyjnym zawiera plik konfiguracyjny zapisany w pamięci NVRAM. Plik konfiguracyjny zawiera włączone hasło enable secret, ale nie ma hasła konsoli. Jaki tryb jest wyświetlany w momencie uruchomienia routera?",
    answers: [
      {
        option: "Tryb konfiguracji globalnej",
        correct: false,
      },
      {
        option: "Tryb setup",
        correct: false,
      },
      {
        option: "Uprzywilejowany tryb EXEC",
        correct: false,
      },
      {
        option: "Tryb EXEC użytkownika",
        correct: true,
      },
    ],
  },
  {
    id: 63,
    question:
      "Administrator zmienił właśnie adres IP dla interfejsu w urządzeniu pracującym pod nadzorem systemu IOS. Co jeszcze należy zrobić w celu zastosowania tych zmian w urządzeniu?",
    answers: [
      {
        option: "Skopiować bieżącą konfigurację do startowego pliku konfiguracyjnego.",
        correct: true,
      },
      {
        option:
          "Skopiować informacje zawarte w startowym pliku konfiguracyjnym do bieżącej konfiguracji.",
        correct: false,
      },
      {
        option:
          "Przeładować urządzenie i wpisać yes , gdy pojawi się monit o zapisanie konfiguracji.",
        correct: false,
      },
      {
        option:
          "Nic nie musi być zrobione. Zmiany w konfiguracji urządzenia pracującego pod kontrolą systemu IOS zostaną wprowadzone natychmiast po poprawnym wpisaniu polecenia i naciśnięciu klawisza Enter.",
        correct: false,
      },
    ],
  },
  {
    id: 64,
    question:
      "Która lokalizacja pamięci na routerze Cisco lub przełączniku utraci całą zawartość po ponownym uruchomieniu urządzenia?",
    answers: [
      {
        option: "Pamięci ROM",
        correct: false,
      },
      {
        option: "Pamięć flash",
        correct: false,
      },
      {
        option: "Pamięć NVRAM",
        correct: false,
      },
      {
        option: "Pamięć RAM",
        correct: true,
      },
    ],
  },
  {
    id: 65,
    question: "Dlaczego technik miałby wprowadzać polecenie copy startup-config running-config?",
    answers: [
      {
        option: "Aby usunąć wszystkie konfiguracje z przełącznika",
        correct: false,
      },
      {
        option: "Aby zapisać aktualną konfigurację w pamięci NVRAM",
        correct: false,
      },
      {
        option: "Aby skopiować istniejącą konfigurację do pamięci RAM",
        correct: true,
      },
      {
        option: "Aby zmienić konfigurację na nową konfigurację początkową",
        correct: false,
      },
    ],
  },
  {
    id: 66,
    question: "Która z funkcji realizowana jest przez DHCP?",
    answers: [
      {
        option: "Automatyczne przypisywanie adresu IP do każdego hosta",
        correct: true,
      },
      {
        option: "Zdalne zarządzanie przełącznikami",
        correct: false,
      },
      {
        option: "Translacja nazw na adresy IP",
        correct: false,
      },
      {
        option: "Testowanie połączeń end-to-end",
        correct: false,
      },
    ],
  },
  {
    id: 67,
    question:
      "Jakie dwie funkcje dostarcza użytkownikom pomoc kontekstowa linii komend systemu CISCO IOS?(Wybierz dwie odpowiedzi.)",
    multi: true,
    answers: [
      {
        option: "Wyświetla komunikat o błędzie, gdy została wpisana zła komenda",
        correct: false,
      },
      {
        option: "Wyświetla listę wszystkich dostępnych komend w bieżącym trybie",
        correct: true,
      },
      {
        option:
          "Wykorzystując klawisz TAB umożliwia użytkownikowi uzupełnienie nazwy pozostałej części komendy",
        correct: true,
      },
      {
        option:
          "Pozwala określić która opcja, słowo kluczowe lub argument jest dostępny dla wprowadzonej komendy",
        correct: false,
      },
      {
        option: "Pozwala wybrać najlepszą komendę do wykonania zadania",
        correct: false,
      },
    ],
  },
  {
    id: 68,
    question:
      "Która lokalizacja pamięci na routerze Cisco lub przełączniku przechowuje plik konfiguracyjny uruchamiania?",
    answers: [
      {
        option: "Pamięć RAM",
        correct: false,
      },
      {
        option: "Pamięć ROM",
        correct: false,
      },
      {
        option: "Pamięć NVRAM",
        correct: true,
      },
      {
        option: "Pamięć flash",
        correct: false,
      },
    ],
  },
  {
    id: 69,
    question:
      "Do jakiej podsieci należy adres IP 10.1.100.50, jeśli używana jest maska podsieci w postaci 255.255.0.0?",
    answers: [
      {
        option: "10.1.0.0",
        correct: true,
      },
      {
        option: "10.0.0.0",
        correct: false,
      },
      {
        option: "10.1.100.32",
        correct: false,
      },
      {
        option: "10.1.100.0",
        correct: false,
      },
    ],
  },
  {
    id: 70,
    question: "Co jest procesem konwersji informacji do odpowiedniej formy do przesłania?",
    answers: [
      {
        option: "Formatowanie",
        correct: false,
      },
      {
        option: "Kodowanie",
        correct: true,
      },
      {
        option: "Enkapsulacja",
        correct: false,
      },
    ],
  },
  {
    id: 71,
    question:
      "Który etap procesu komunikacji dotyczy prawidłowej identyfikacji adresu nadawcy i odbiorcy?",
    answers: [
      {
        option: "Formatowanie",
        correct: true,
      },
      {
        option: "Kodowanie",
        correct: false,
      },
      {
        option: "Enkapsulacja",
        correct: true,
      },
    ],
  },
  {
    id: 72,
    question:
      "Które trzy elementy są składowe dotyczą zarządzania czasem wiadomości? (Wybierz trzy odpowiedzi).",
    multi: true,
    answers: [
      {
        option: "Kontrola przepływu",
        correct: true,
      },
      {
        option: "Numery sekwencyjne",
        correct: false,
      },
      {
        option: "Metoda dostępu",
        correct: true,
      },
      {
        option: "Czas retransmisji",
        correct: false,
      },
      {
        option: "Limit czasu odpowiedzi",
        correct: true,
      },
    ],
  },
  {
    id: 73,
    question:
      "Która metoda dostarczania służy do przesyłania informacji do jednego lub więcej urządzeń końcowych, ale nie do wszystkich urządzeń w sieci?",
    answers: [
      {
        option: "Unicast",
        correct: false,
      },
      {
        option: "Multicast",
        correct: true,
      },
      {
        option: "Broadcast",
        correct: false,
      },
    ],
  },
  {
    id: 74,
    question: "BGP i OSPF to przykłady, jakiego typu protokołu?",
    answers: [
      {
        option: "Komunikacji sieciowej",
        correct: false,
      },
      {
        option: "Bezpieczeństwa sieci",
        correct: false,
      },
      {
        option: "Routingu",
        correct: true,
      },
      {
        option: "Odnajdywania usług",
        correct: false,
      },
    ],
  },
  {
    id: 75,
    question: "Które dwa protokoły są protokołami odnajdywania usług? (Wybierz dwie odpowiedzi.)",
    multi: true,
    answers: [
      {
        option: "DNS",
        correct: true,
      },
      {
        option: "TCP",
        correct: false,
      },
      {
        option: "SSH",
        correct: false,
      },
      {
        option: "DHCP",
        correct: true,
      },
    ],
  },
  {
    id: 76,
    question: "Jaki jest cel funkcji sekwencjonowania w komunikacji sieciowej?",
    answers: [
      {
        option:
          "Jednoznacznie oznaczyć przesyłane segmenty danych dla właściwego ponownego scalania przez odbiorcę",
        correct: true,
      },
      {
        option: "Aby ustalić, czy dane są uszkodzone podczas transmisji",
        correct: false,
      },
      {
        option: "Dla zapewnienia przepływu danych w efektywnym tempie między nadawcą a odbiorcą",
        correct: false,
      },
      {
        option: "Aby zagwarantować dostarczenie danych",
        correct: false,
      },
    ],
  },
  {
    id: 77,
    question:
      "Protokół ten jest odpowiedzialny za zagwarantowanie niezawodnego dostarczania informacji.",
    answers: [
      {
        option: "TCP",
        correct: true,
      },
      {
        option: "IP",
        correct: false,
      },
      {
        option: "HTTP",
        correct: false,
      },
      {
        option: "Ethernet",
        correct: false,
      },
    ],
  },
  {
    id: 78,
    question: "Do której warstwy stosu TCP/IP należą UDP i TCP?",
    answers: [
      {
        option: "Aplikacji",
        correct: false,
      },
      {
        option: "Transportowej",
        correct: true,
      },
      {
        option: "Internetu",
        correct: false,
      },
      {
        option: "Dostępu do sieci",
        correct: false,
      },
    ],
  },
  {
    id: 79,
    question: "Które dwa protokoły należą do warstwy aplikacji modelu TCP/IP?",
    multi: true,
    answers: [
      {
        option: "EIGRP",
        correct: false,
      },
      {
        option: "DNS",
        correct: true,
      },
      {
        option: "OSPF",
        correct: false,
      },
      {
        option: "ICMP",
        correct: false,
      },
      {
        option: "DHCP",
        correct: true,
      },
    ],
  },
  {
    id: 80,
    question: "Który protokół działa w warstwie dostępu do sieci modelu TCP/IP?",
    answers: [
      {
        option: "HTTP",
        correct: false,
      },
      {
        option: "IP",
        correct: false,
      },
      {
        option: "DNS",
        correct: false,
      },
      {
        option: "Ethernet",
        correct: true,
      },
    ],
  },
  {
    id: 81,
    question:
      "Które z poniższych protokołów dostarczają informacje zwrotne od hosta docelowego do hosta źródłowego dotyczące błędów w dostarczaniu pakietów? (Wybierz dwie odpowiedzi.)",
    multi: true,
    answers: [
      {
        option: "IPv4",
        correct: false,
      },
      {
        option: "TCP",
        correct: false,
      },
      {
        option: "ICMPv4",
        correct: true,
      },
      {
        option: "IPv6",
        correct: false,
      },
      {
        option: "UDP",
        correct: false,
      },
      {
        option: "ICMPv6",
        correct: true,
      },
    ],
  },
  {
    id: 82,
    question:
      "Urządzenie odbiera ramkę łącza danych z danymi, przetwarza ją oraz usuwa informacje Ethernet. Jakie informacje będą następnie przetwarzane przez urządzenie odbiorcze?",
    answers: [
      {
        option: "HTTP w warstwie aplikacji",
        correct: false,
      },
      {
        option: "HTML na warstwie aplikacji",
        correct: false,
      },
      {
        option: "IP na warstwie internetowej",
        correct: true,
      },
      {
        option: "UDP w warstwie internetowej",
        correct: false,
      },
      {
        option: "TCP w warstwie transportowej",
        correct: false,
      },
    ],
  },
  {
    id: 83,
    question:
      "Jakie usługi zapewnia warstwa internetowa zestawu protokołów TCP/IP? (Wybierz trzy odpowiedzi).",
    multi: true,
    answers: [
      {
        option: "Przesyłanie plików",
        correct: false,
      },
      {
        option: "Odwzorowanie adresów",
        correct: false,
      },
      {
        option: "Protokoły routingu",
        correct: true,
      },
      {
        option: "Komunikaty",
        correct: true,
      },
      {
        option: "Ethernet",
        correct: false,
      },
      {
        option: "Protokół IP",
        correct: false,
      },
    ],
  },
  {
    id: 84,
    question:
      "Prawda czy fałsz. Organizacje normalizacyjne są zazwyczaj neutralne w stosunku od producentów.",
    answers: [
      {
        option: "Prawda",
        correct: true,
      },
      {
        option: "Fałsz",
        correct: false,
      },
    ],
  },
  {
    id: 85,
    question:
      "Ta organizacja normalizacyjna odpowiada za dokumenty Request for Comments (RFC), które określają nowe protokoły i aktualizują istniejące.",
    answers: [
      {
        option: "Internet Society (ISOC)",
        correct: false,
      },
      {
        option: "Internet Engineering Task Force (IETF)",
        correct: true,
      },
      {
        option: "Internet Architecture Board (IAB)",
        correct: false,
      },
      {
        option: "Internet Research Task Force (IRTF)",
        correct: false,
      },
    ],
  },
  {
    id: 86,
    question:
      "Ta organizacja normalizacyjna jest odpowiedzialna za przydzielanie adresów IP i zarządzanie nazwami domen.",
    answers: [
      {
        option: "Internet Society (ISOC)",
        correct: false,
      },
      {
        option: "Internet Engineering Task Force (IETF)",
        correct: false,
      },
      {
        option: "Internet Architecture Board (IAB)",
        correct: false,
      },
      {
        option: "Internet Assigned Numbers Authority (IANA)",
        correct: true,
      },
    ],
  },
  {
    id: 87,
    question:
      "Jakie rodzaje standardów są opracowywane przez Electronics Industries Alliance (EIA)?",
    answers: [
      {
        option: "Okablowanie elektryczne i złącza",
        correct: true,
      },
      {
        option: "Sprzęt radiowy i wieże komórkowe",
        correct: false,
      },
      {
        option: "Kompresja wideo i łączność szerokopasmowa",
        correct: false,
      },
      {
        option: "Voice over IP (VoIP) i komunikacja satelitarna",
        correct: false,
      },
    ],
  },
  {
    id: 88,
    question:
      "Który to proces dzielenia dużego strumienia danych na mniejsze kawałki przed transmisją?",
    answers: [
      {
        option: "Sekwencjonowanie",
        correct: false,
      },
      {
        option: "Dupleksowanie",
        correct: false,
      },
      {
        option: "Multipleksacja",
        correct: false,
      },
      {
        option: "Segmentacja",
        correct: true,
      },
    ],
  },
  {
    id: 89,
    question: "Co jest jednostką PDU związaną z warstwą transportową?",
    answers: [
      {
        option: "Segment",
        correct: true,
      },
      {
        option: "Pakiet",
        correct: false,
      },
      {
        option: "Bit",
        correct: false,
      },
      {
        option: "Ramka",
        correct: false,
      },
    ],
  },
  {
    id: 90,
    question: "Która warstwa stosu protokołów enkapsuluje dane w ramki?",
    answers: [
      {
        option: "Łącza danych",
        correct: true,
      },
      {
        option: "Transportowu",
        correct: false,
      },
      {
        option: "Sieci",
        correct: false,
      },
      {
        option: "Aplikacji",
        correct: false,
      },
    ],
  },
  {
    id: 91,
    question:
      "Jaka jest nazwa procesu dodawania informacji o protokole do danych, przy przetwarzaniu w dół stosu protokołów?",
    answers: [
      {
        option: "Dekapsulacja",
        correct: false,
      },
      {
        option: "Sekwencjonowanie",
        correct: false,
      },
      {
        option: "Segmentacja",
        correct: false,
      },
      {
        option: "Enkapsulacja",
        correct: true,
      },
    ],
  },
  {
    id: 92,
    question:
      "Prawda czy fałsz? Ramki wymieniane między urządzeniami w różnych sieciach IP muszą być przesyłane do bramy domyślnej.",
    answers: [
      {
        option: "Prawda",
        correct: true,
      },
      {
        option: "Fałsz",
        correct: false,
      },
    ],
  },
  {
    id: 93,
    question:
      "Prawda czy fałsz? Prawa część adresu IP służy do identyfikacji sieci, do której należy urządzenie.",
    answers: [
      {
        option: "Prawda",
        correct: false,
      },
      {
        option: "Fałsz",
        correct: true,
      },
    ],
  },
  {
    id: 94,
    question: "Co służy do określenia części sieciowej adresu IPv4?",
    answers: [
      {
        option: "Maska podsieci",
        correct: true,
      },
      {
        option: "Adres MAC",
        correct: false,
      },
      {
        option: "Prawa części adresu IP",
        correct: false,
      },
      {
        option: "Lewa część adresu MAC",
        correct: false,
      },
    ],
  },
  {
    id: 95,
    question:
      "Które z poniższych stwierdzeń są prawdziwe w odniesieniu do warstwy sieciowej i adresów warstwy łącza danych?",
    multi: true,
    answers: [
      {
        option:
          "Adresy warstwy sieciowej są logiczne a adresy łącza danych są wyrażone jako 12 cyfr szesnastkowych.",
        correct: false,
      },
      {
        option: "Adresy warstwy łącza danych są fizyczne i adresy warstwy sieciowej są logiczne.",
        correct: false,
      },
      {
        option: "Adresy warstwy sieciowej mają długość 32 lub 128 bitów.",
        correct: true,
      },
      {
        option: "Adresy warstwy łącza danych są logiczne i adresy warstwy sieciowej są fizyczne.",
        correct: true,
      },
      {
        option:
          "Adresy warstwy sieciowej są wyrażone jako 12 cyfr szesnastkowych, a adresy warstwy łącza danych są dziesiętne.",
        correct: true,
      },
      {
        option: "Adresy warstwy łącza danych mają długość 32 bitów.",
        correct: false,
      },
    ],
  },
  {
    id: 96,
    question: "Jaka jest kolejność dwóch adresów w ramce łącza danych?",
    answers: [
      {
        option: "Źródłowy MAC, docelowy MAC",
        correct: false,
      },
      {
        option: "Docelowy MAC, źródłowy IP",
        correct: false,
      },
      {
        option: "Docelowy IP, źródłowy IP",
        correct: false,
      },
      {
        option: "Docelowy MAC, źródłowy MAC",
        correct: true,
      },
      {
        option: "Źródłowy IP, docelowy IP",
        correct: false,
      },
    ],
  },
  {
    id: 97,
    question:
      "Prawda czy fałsz? Adresy łącza danych są fizyczne, więc nigdy nie zmieniają się w ramce łącza danych ze źródła do miejsca docelowego.",
    answers: [
      {
        option: "Prawda",
        correct: false,
      },
      {
        option: "Fałsz",
        correct: true,
      },
    ],
  },
  {
    id: 98,
    question: "Które trzy akronimy i inicjalizmy reprezentują organizacje normalizacyjne?",
    multi: true,
    answers: [
      { option: "IANA", correct: true },
      { option: "TCP/IP", correct: false },
      { option: "IEEE", correct: true },
      { option: "IETF", correct: true },
      { option: "OSI", correct: false },
      { option: "MAC", correct: false },
    ],
  },
  {
    id: 99,
    question: "Jaki rodzaj komunikacji wyśle wiadomość do wszystkich urządzeń w sieci lokalnej?",
    answers: [
      { option: "Broadcast", correct: true },
      { option: "Multicast", correct: false },
      { option: "Unicast", correct: false },
      { option: "Allcast", correct: false },
    ],
  },
  {
    id: 100,
    question: "W komunikacji komputerowej, jaki jest cel kodowania wiadomości?",
    answers: [
      {
        option: "Do konwersji informacji na odpowiedni format do przesyłania",
        correct: true,
      },
      { option: "By interpretować informacje", correct: false },
      {
        option: "By podzielić duże wiadomości na mniejsze ramki",
        correct: false,
      },
      {
        option: "Do wynegocjowania właściwego czasu dla udanej komunikacji",
        correct: false,
      },
    ],
  },
  {
    id: 101,
    question:
      "Która opcja dostarczania wiadomości jest stosowane w przypadku, gdy wszystkie urządzenia muszą otrzymać taką samą wiadomość jednocześnie?",
    answers: [
      { option: "Duplex", correct: false },
      { option: "Unicast", correct: false },
      { option: "Multicast", correct: false },
      { option: "Broadcast", correct: true },
    ],
  },
  {
    id: 102,
    question: "Jakie są dwie zalety korzystania z warstwowego modelu sieci?",
    multi: true,
    answers: [
      { option: "Pomaga w projektowaniu protokołów.", correct: true },
      { option: "Przyspiesza dostawę pakietów.", correct: false },
      {
        option: "Uniemożliwia projektantom tworzenie własnego modelu.",
        correct: false,
      },
      {
        option: "Zapobiega wpływowi technologii jednej warstwy na inne warstwy.",
        correct: true,
      },
      {
        option:
          "Zapewnia, że urządzenie z jednej warstwy może funkcjonować w następnej wyższej warstwie.",
        correct: false,
      },
    ],
  },
  {
    id: 103,
    question: "Jakie jest przeznaczenie protokołów transmisji danych?",
    answers: [
      {
        option: "Określanie przepustowości kanału lub medium dla każdego rodzaju komunikacji",
        correct: false,
      },
      {
        option: "Określanie systemów operacyjnych dla urządzeń, które obsługują komunikację",
        correct: false,
      },
      {
        option:
          "Dostarczenie reguł wymaganych dla konkretnego typu komunikacji, który może wystąpić",
        correct: true,
      },
      {
        option: "Dyktowanie treści wiadomości wysłanej podczas komunikacji",
        correct: false,
      },
    ],
  },
  {
    id: 104,
    question: "Który adres logiczny jest używany w celu dostarczenia danych do zdalnej sieci?",
    answers: [
      { option: "Docelowy adres MAC", correct: false },
      { option: "Docelowy adres IP", correct: true },
      { option: "Numer portu docelowego", correct: false },
      { option: "Źródłowego adresu MAC", correct: false },
      { option: "Źródłowy adres IP", correct: false },
    ],
  },
  {
    id: 105,
    question:
      "Jakie jest ogólne określenie, które stosowane jest do opisania elementu danych w każdej warstwie modelu sieci?",
    answers: [
      { option: "Ramka", correct: false },
      { option: "Pakiet", correct: false },
      { option: "Jednostka danych protokołu", correct: true },
      { option: "Segment", correct: false },
    ],
  },
  {
    id: 106,
    question: "Które dwa protokoły działają w warstwie internetowej?",
    multi: true,
    answers: [
      { option: "POP", correct: false },
      { option: "BOOTP", correct: false },
      { option: "ICMP", correct: true },
      { option: "IP", correct: true },
      { option: "PPP", correct: false },
    ],
  },
  {
    id: 107,
    question:
      "Która warstwa modelu OSI definiuje usługi segmentowania i ponownego scalania danych dla indywidualnej komunikacji między urządzeniami końcowymi?",
    answers: [
      { option: "Aplikacji", correct: false },
      { option: "Prezentacji", correct: false },
      { option: "Sesji", correct: false },
      { option: "Transportu", correct: true },
      { option: "Sieci", correct: false },
    ],
  },
  {
    id: 108,
    question: "Jaki rodzaj komunikacji wyśle wiadomość do grupy docelowych hostów jednocześnie?",
    answers: [
      { option: "Broadcast", correct: false },
      { option: "Multicast", correct: true },
      { option: "Unicast", correct: false },
      { option: "Anycast", correct: false },
    ],
  },
  {
    id: 109,
    question:
      "Jaki proces jest używany do odbierania przesyłanych danych i konwersji go do czytelnej wiadomości?",
    answers: [
      { option: "Kontrola dostępu", correct: false },
      { option: "Dekodowanie", correct: true },
      { option: "Enkapsulacja", correct: false },
      { option: "Kontrola przepływu", correct: false },
    ],
  },
  {
    id: 110,
    question: "Co się dzieje z pakietem IP, zanim zostanie on przekazany fizycznym medium?",
    answers: [
      {
        option: "Jest oznaczany informacjami gwarantującymi niezawodną dostawę.",
        correct: false,
      },
      {
        option: "Jest dzielony na mniejsze pojedyncze kawałki.",
        correct: false,
      },
      { option: "Jest enkapsulowany w segment TCP.", correct: false },
      { option: "Jest enkapsulowany w ramce warstwy 2.", correct: true },
    ],
  },
  {
    id: 111,
    question:
      "Jaki proces jest używany, aby umieścić jedną wiadomość wewnątrz innej wiadomości do transferu ze źródła do miejsca docelowego?",
    answers: [
      { option: "Kontrola dostępu", correct: false },
      { option: "Dekodowanie", correct: false },
      { option: "Enkapsulacja", correct: true },
      { option: "Kontrola przepływu", correct: false },
    ],
  },
  {
    id: 112,
    question:
      "Klient wysyła żądanie strony internetowej do serwera WWW. Z punktu widzenia klienta, jaka jest poprawna kolejność stosu protokołów, które użyte są do przygotowania żądania transmisji?",
    answers: [
      { option: "HTTP, IP, TCP, Ethernet", correct: false },
      { option: "HTTP, TCP, IP, Ethernet", correct: true },
      { option: "Ethernet, TCP, IP, HTTP", correct: false },
      { option: "Ethernet, IP, TCP, HTTP", correct: false },
    ],
  },
  {
    id: 113,
    question: "Prawda czy fałsz? Warstwa fizyczna dotyczy tylko przewodowych połączeń sieciowych.",
    answers: [
      {
        option: "Prawda",
        correct: false,
      },
      {
        option: "Fałsz",
        correct: true,
      },
    ],
  },
  {
    id: 114,
    question:
      "Prawda czy fałsz? Gdy ramka jest kodowana przez warstwę fizyczną, wszystkie bity są przesyłane przez nośnik w tym samym czasie.",
    answers: [
      {
        option: "Prawda",
        correct: false,
      },
      {
        option: "Fałsz",
        correct: true,
      },
    ],
  },
  {
    id: 115,
    question:
      "Warstwa fizyczna urządzenia odbiorczego przekazuje bity do której warstwy wyższego poziomu?",
    answers: [
      {
        option: "Aplikacji",
        correct: false,
      },
      {
        option: "Prezentacji",
        correct: false,
      },
      {
        option: "Sieci",
        correct: false,
      },
      {
        option: "Łącza danych",
        correct: true,
      },
    ],
  },
  {
    id: 116,
    question: "Jaka jednostka PDU jest odbierana przez warstwę fizyczną do kodowania i transmisji?",
    answers: [
      {
        option: "Ramka",
        correct: true,
      },
      {
        option: "Segment",
        correct: false,
      },
      {
        option: "Pakiet",
        correct: false,
      },
    ],
  },
  {
    id: 117,
    question: "Które media wykorzystują wzorce mikrofal do reprezentowania bitów?",
    answers: [
      {
        option: "Miedź",
        correct: false,
      },
      {
        option: "Bezprzewodowe",
        correct: true,
      },
      {
        option: "Światłowodowy",
        correct: false,
      },
    ],
  },
  {
    id: 118,
    question: "Które media używają wzorców światła do reprezentowania bitów?",
    answers: [
      {
        option: "Miedź",
        correct: false,
      },
      {
        option: "Bezprzewodowe",
        correct: false,
      },
      {
        option: "Światłowodowy",
        correct: true,
      },
    ],
  },
  {
    id: 119,
    question: "Które media wykorzystują impulsy elektryczne do reprezentowania bitów?",
    answers: [
      {
        option: "Miedź",
        correct: true,
      },
      {
        option: "Bezprzewodowe",
        correct: false,
      },
      {
        option: "Światłowodowy",
        correct: false,
      },
    ],
  },
  {
    id: 120,
    question: "Która z nich jest nazwą zdolności nośnika do przenoszenia danych?",
    answers: [
      {
        option: "Szerokość pasma",
        correct: true,
      },
      {
        option: "Przepustowość",
        correct: false,
      },
      {
        option: "Przepustowość efektywna",
        correct: false,
      },
    ],
  },
  {
    id: 121,
    question: "Które z nich jest miarą transferu bitów w mediach?",
    answers: [
      {
        option: "Szerokość pasma",
        correct: false,
      },
      {
        option: "Przepustowość",
        correct: true,
      },
      {
        option: "Przepustowość efektywna",
        correct: false,
      },
    ],
  },
  {
    id: 122,
    question:
      "Które z poniższych połączy anteny do urządzeń bezprzewodowych? Można go również połączyć z okablowaniem światłowodowym do dwukierunkowej transmisji danych.",
    answers: [
      {
        option: "UTP",
        correct: false,
      },
      {
        option: "STP",
        correct: false,
      },
      {
        option: "Kabel koncentryczny",
        correct: true,
      },
    ],
  },
  {
    id: 123,
    question:
      "Który z poniższych przeciwdziała EMI i RFI przy użyciu technik ekranowania i specjalnych złączy?",
    answers: [
      {
        option: "UTP",
        correct: false,
      },
      {
        option: "STP",
        correct: true,
      },
      {
        option: "Kabel koncentryczny",
        correct: false,
      },
    ],
  },
  {
    id: 124,
    question: "Który z poniższych jest najpopularniejszym nośnikiem sieciowym?",
    answers: [
      {
        option: "UTP",
        correct: true,
      },
      {
        option: "STP",
        correct: false,
      },
      {
        option: "Kabel koncentryczny",
        correct: false,
      },
    ],
  },
  {
    id: 125,
    question: "Które z poniższych zakończone jest złączami typu BNC, N i F?",
    answers: [
      {
        option: "UTP",
        correct: false,
      },
      {
        option: "STP",
        correct: false,
      },
      {
        option: "Kabel koncentryczny",
        correct: true,
      },
    ],
  },
  {
    id: 126,
    question:
      "Które z poniższych typów kabli światłowodowych mogą pomóc w transmisji danych na odległości około 500 metrów?",
    answers: [
      {
        option: "Wielomodowy",
        correct: true,
      },
      {
        option: "Jednomodowy",
        correct: false,
      },
    ],
  },
  {
    id: 127,
    question:
      "Które z poniższych typów kabli światłowodowych wykorzystują diody elektroluminescencyjne (diody LED) jako nadajnik źródła danych?",
    answers: [
      {
        option: "Wielomodowy",
        correct: true,
      },
      {
        option: "Jednomodowy",
        correct: false,
      },
    ],
  },
  {
    id: 128,
    question:
      "Które z poniższych typów kabli światłowodowych wykorzystują lasery jako transmitery pojedynczego promienia światła?",
    answers: [
      {
        option: "Wielomodowy",
        correct: false,
      },
      {
        option: "Jednomodowy",
        correct: true,
      },
    ],
  },
  {
    id: 129,
    question:
      "Który z poniższych rodzajów kabli światłowodowych jest używany do łączenia telefonii na duże odległości i w telewizji kablowej?",
    answers: [
      {
        option: "Wielomodowy",
        correct: false,
      },
      {
        option: "Jednomodowy",
        correct: true,
      },
    ],
  },
  {
    id: 130,
    question:
      "Które z poniższych typów kabli światłowodowych mogą przenościć sygnał na około 62,5 mil lub 100 km/100000 m?",
    answers: [
      {
        option: "Wielomodowy",
        correct: false,
      },
      {
        option: "Jednomodowy",
        correct: true,
      },
    ],
  },
  {
    id: 131,
    question: "Który z poniższych typów kabli światłowodowych jest używany w sieciach kampusowych?",
    answers: [
      {
        option: "Wielomodowy",
        correct: true,
      },
      {
        option: "Jednomodowy",
        correct: false,
      },
    ],
  },
  {
    id: 132,
    question: "Prawda czy fałsz. Technika bezprzewodowa nie nadaje się do sieci korporacyjnych.",
    answers: [
      {
        option: "Prawda",
        correct: false,
      },
      {
        option: "Fałsz",
        correct: true,
      },
    ],
  },
  {
    id: 133,
    question:
      "Prawda czy fałsz. Bezprzewodowe sieci LAN działają w pełnym duplesie, dzięki czemu wszystkie urządzenia mogą wysyłać lub odbierać dane w tym samym czasie, dzięki czemu liczba użytkowników nie wpływa na wydajność.",
    answers: [
      {
        option: "Prawda",
        correct: false,
      },
      {
        option: "Fałsz",
        correct: true,
      },
    ],
  },
  {
    id: 134,
    question:
      "Które z poniższych standardów bezprzewodowych najlepiej nadaje się do środowisk przemysłowych i IoT?",
    answers: [
      {
        option: "ZigBee",
        correct: true,
      },
      {
        option: "WiMAX",
        correct: false,
      },
      {
        option: "Wi-Fi",
        correct: false,
      },
      {
        option: "Bluetooth",
        correct: false,
      },
    ],
  },
  {
    id: 135,
    question:
      "Który z poniższych standardów bezprzewodowych są używane w sieciach osobistych (PAN) i umożliwiają urządzeniom komunikację na odległość od 1 do 100 metrów?",
    answers: [
      {
        option: "ZigBee",
        correct: false,
      },
      {
        option: "WiMAX",
        correct: false,
      },
      {
        option: "Wi-Fi",
        correct: false,
      },
      {
        option: "Bluetooth",
        correct: true,
      },
    ],
  },
  {
    id: 136,
    question:
      "Administrator sieci rozwiązuje problem z połączeniem na serwerze. Używając testera administrator stwierdza, że sygnały generowane przez kartę sieciową serwera są zniekształcone i bezużyteczne. Do której warstwy modelu OSI należy przyporządkować ten błąd?",
    answers: [
      {
        option: "Warstwa prezentacji",
        correct: false,
      },
      {
        option: "Warstwa sieci",
        correct: false,
      },
      {
        option: "Warstwa fizyczna",
        correct: true,
      },
      {
        option: "Warstwa łącza danych",
        correct: false,
      },
    ],
  },
  {
    id: 137,
    question:
      "Jaki rodzaj kabla służy do podłączenia portu szeregowego stacji roboczej do portu konsoli routera Cisco?",
    answers: [
      {
        option: "Kabel z przeplotem",
        correct: false,
      },
      {
        option: "Kabel rollover",
        correct: true,
      },
      {
        option: "Kabel prosty",
        correct: false,
      },
      {
        option: "Kabel koncentryczny",
        correct: false,
      },
    ],
  },
  {
    id: 138,
    question:
      "Dlaczego do pojedynczego połączenia światłowodowego wykorzystywane są dwie żyły światłowodu?",
    answers: [
      {
        option: "Dwie żyły pozwalają na bezproblemowe przesyłanie danych na długie dystanse.",
        correct: false,
      },
      {
        option: "Zapobiegają zakłóceniom powodowanym przez przesłuch w połączeniu.",
        correct: false,
      },
      {
        option: "Zwiększają szybkość z jaką mogą być przesyłane dane.",
        correct: false,
      },
      {
        option: "Pozwalają na połączenie full-duplex.",
        correct: true,
      },
    ],
  },
  {
    id: 139,
    question: "Która procedura jest używana do redukcji skutków przesłuchów w kablach miedzianych?",
    answers: [
      {
        option: "Wymaganie prawidłowego podłączenia uziemienia",
        correct: false,
      },
      {
        option: "Skręcanie ze sobą przeciwstawnych przewodów w pary",
        correct: true,
      },
      {
        option: "Zawijanie wiązki przewodów w ekran metalowy",
        correct: false,
      },
      {
        option: "Projektowanie infrastruktury okablowania tak, aby uniknąć przesłuchów",
        correct: false,
      },
      {
        option: "Unikanie ostrych załamań podczas instalacji",
        correct: false,
      },
    ],
  },
  {
    id: 140,
    question:
      "Jaka jest główna korzyść ze stosowania okablowania światłowodowego w stosunku do miedzianego?",
    answers: [
      {
        option: "Jest zazwyczaj tańsze niż okablowanie miedziane.",
        correct: false,
      },
      {
        option: "Może być zainstalowane wokół ostrych zakrzywień.",
        correct: false,
      },
      {
        option: "Jest łatwiejsze do zakańczania i instalacji niż okablowanie miedziane.",
        correct: false,
      },
      {
        option: "Jest w stanie przenosić sygnały znacznie dalej niż okablowanie miedziane",
        correct: true,
      },
    ],
  },
  {
    id: 141,
    question:
      "Administrator sieci projektuje nową infrastrukturę sieciową, która zawiera jednocześnie technologię przewodową i bezprzewodową. W jakiej sytuacji rekomendowane są połączenia bezprzewodowe?",
    answers: [
      {
        option: "Urządzenia użytkownika końcowego mają jedynie kartę Ethernet.",
        correct: false,
      },
      {
        option:
          "Urządzenie końcowe użytkownika wymaga dedykowanego połączenia ze względu na wymagania wydajności.",
        correct: false,
      },
      {
        option: "Urządzenie końcowe użytkownika potrzebuje mobilnego połączenia do sieci.",
        correct: true,
      },
      {
        option:
          "Obszar, w którym pracuje urządzenie końcowe użytkownika cechuje wysoka koncentracja RFI.",
        correct: false,
      },
    ],
  },
  {
    id: 142,
    question: "Jaki typ kabla UTP służy do podłączenia komputera do portu przełącznika?",
    answers: [
      {
        option: "Kabel konsolowy",
        correct: false,
      },
      {
        option: "Kabel rollover",
        correct: false,
      },
      {
        option: "Kabel z przeplotem",
        correct: false,
      },
      {
        option: "Kabel prosty",
        correct: true,
      },
    ],
  },
  {
    id: 143,
    question: "Która to definicja szerokości pasma?",
    answers: [
      {
        option: "Miara transferu bitów przez media w danym okresie czasu",
        correct: false,
      },
      {
        option: "Prędkość, z jaką bity podróżują w sieci",
        correct: false,
      },
      {
        option: "Ilość danych, które mogą przepływać z jednego miejsca do drugiego w danym czasie",
        correct: false,
      },
      {
        option: "Miara użytecznych danych przesyłanych w danym okresie czasu",
        correct: false,
      },
    ],
  },
  {
    id: 144,
    question: "Które stwierdzenie poprawnie opisuje kodowanie ramek?",
    answers: [
      {
        option: "Wykorzystuje charakterystykę jednej fali, aby zmodyfikować inną falę.",
        correct: false,
      },
      {
        option:
          "Przesyła sygnały danych wraz z sygnałem podstawy czasu, który realizowany jest w równomiernie rozłożonych okresach czasu.",
        correct: false,
      },
      {
        option:
          "Generuje sygnały elektryczne, optyczne lub bezprzewodowe reprezentujące liczby binarne ramki.",
        correct: false,
      },
      {
        option:
          "Konwertuje bity na predefiniowany kod w celu zapewnienia przewidywalnego wzorca, który pomaga odróżnić bity danych od bitów kontrolnych.",
        correct: true,
      },
    ],
  },
  {
    id: 145,
    question: "Co jest cechą okablowania UTP?",
    answers: [
      {
        option: "Znoszenie",
        correct: false,
      },
      {
        option: "Płaszcz",
        correct: false,
      },
      {
        option: "Odporność na porażenie prądem",
        correct: false,
      },
      {
        option: "Plecionki miedziane lub folia metaliczna",
        correct: false,
      },
    ],
  },
  {
    id: 146,
    question:
      "Bezprzewodowa sieci LAN jest wdrożona wewnątrz nowego pomieszczenia biurowego, zajmowanego przez strażnika w parku. Biuro znajduje się w najwyższej części parku narodowego. Po zakończeniu testowania sieci, technicy zgłaszają, że sygnał sieci bezprzewodowej LAN jest czasami zakłócany przez pewnego rodzaju interferencje. Jakie są dwie możliwe przyczyny zakłóceń sygnału?",
    // multi: true,
    answers: [
      {
        option: "Mikrofalówka",
        correct: false,
      },
      {
        option: "Wiele drzew, które otacza biuro",
        correct: true,
      },
      {
        option: "Podwyższone miejsce, w którym została zainstalowana bezprzewodowa sieć LAN",
        correct: false,
      },
      {
        option: "Jest w stanie przenosić sygnały znacznie dalej niż okablowanie miedziane",
        correct: false,
      },
    ],
  },
  {
    id: 147,
    question: "Co najlepiej opisuje cel warstwy fizycznej OSI?",
    answers: [
      {
        option: "Kontrolę dostępu do medium",
        correct: false,
      },
      {
        option: "Przesyłanie bitów w mediach lokalnych",
        correct: true,
      },
      {
        option: "Wykrywanie błędów w odebranych ramkach",
        correct: false,
      },
      {
        option: "Wymiana ramek między węzłami przez fizyczne media sieciowe",
        correct: false,
      },
    ],
  },
  {
    id: 148,
    question: "Która cecha opisuje przesłuch?",
    answers: [
      {
        option: "Zniekształcenie sygnału sieciowego z oświetlenia fluorescencyjnego",
        correct: false,
      },
      {
        option:
          "Zniekształcenie przesyłanych komunikatów z sygnałów przenoszonych w sąsiednich przewodach",
        correct: true,
      },
      {
        option: "Osłabienie sygnału sieciowego na długich odcinkach kabli",
        correct: false,
      },
      {
        option: "Utrata sygnału bezprzewodowego w nadmiernej odległości od punktu dostępowego",
        correct: false,
      },
    ],
  },
  {
    id: 149,
    question: "Co wskazuje termin przepustowość?",
    answers: [
      {
        option:
          "Gwarantowana szybkość transferu danych oferowana przez dostawcę usług internetowych",
        correct: false,
      },
      {
        option: "Zdolność danego nośnika do przenoszenia danych",
        correct: false,
      },
      {
        option: "Miara użytecznych danych przesyłanych przez media",
        correct: false,
      },
      {
        option: "Miara transferu bitów przez media w danym okresie czasu",
        correct: true,
      },
      {
        option: "The time it takes for a message to get from sender to receiver",
        correct: false,
      },
    ],
  },
  {
    id: 150,
    question:
      "Która organizacja normalizacyjna nadzoruje rozwój standardów bezprzewodowej sieci LAN?",
    answers: [
      {
        option: "IANA",
        correct: false,
      },
      {
        option: "IEEE",
        correct: true,
      },
      {
        option: "ISO",
        correct: false,
      },
      {
        option: "TIA",
        correct: false,
      },
    ],
  },
  {
    id: 151,
    question: "Który to binarny odpowiednik adresu IP 192.168.11.10?",
    answers: [
      {
        option: "11000000.11000000.00001011.00001010",
        correct: false,
      },
      {
        option: "11000000.10101000.00001011.00001010",
        correct: true,
      },
      {
        option: "11000000.10101000.00001010.00001011",
        correct: false,
      },
      {
        option: "11000000.10101000.00001011.00010010",
        correct: false,
      },
    ],
  },
  {
    id: 152,
    question: "Który z poniższych jest binarnym odpowiednikiem adresu IP 172.16.31.30?",
    answers: [
      {
        option: "11000000.00010000.00011111.00011110",
        correct: false,
      },
      {
        option: "10101000.00010000.00011111.00011110",
        correct: false,
      },
      {
        option: "10101100.00010000.00011110.00011110",
        correct: false,
      },
      {
        option: "10101100.00010000.00011111.00011110",
        correct: true,
      },
    ],
  },
  {
    id: 153,
    question: "Co jest szesnastkowym odpowiednikiem 202?",
    answers: [
      {
        option: "B10",
        correct: false,
      },
      {
        option: "BA",
        correct: false,
      },
      {
        option: "C10",
        correct: false,
      },
      {
        option: "CA",
        correct: true,
      },
    ],
  },
  {
    id: 154,
    question: "Co jest szesnastkowym odpowiednikiem 254?",
    answers: [
      {
        option: "EA",
        correct: false,
      },
      {
        option: "ED",
        correct: false,
      },
      {
        option: "FA",
        correct: false,
      },
      {
        option: "FE",
        correct: true,
      },
    ],
  },
  {
    id: 155,
    question: "Co jest dziesiętnym odpowiednikiem A9?",
    answers: [
      {
        option: "168",
        correct: false,
      },
      {
        option: "169",
        correct: true,
      },
      {
        option: "170",
        correct: false,
      },
      {
        option: "171",
        correct: false,
      },
    ],
  },
  {
    id: 156,
    question: "Które z poniższych jest dziesiętnym odpowiednikiem 7D?",
    answers: [
      {
        option: "124",
        correct: false,
      },
      {
        option: "125",
        correct: true,
      },
      {
        option: "126",
        correct: false,
      },
      {
        option: "127",
        correct: false,
      },
    ],
  },
  {
    id: 157,
    question: "Która z następujących liczb jest dwójkowym odpowiednikiem dziesiętnej liczby 173?",
    answers: [
      {
        option: "10100111",
        correct: false,
      },
      {
        option: "10100101",
        correct: false,
      },
      {
        option: "10101101",
        correct: true,
      },
      {
        option: "10110101",
        correct: false,
      },
    ],
  },
  {
    id: 158,
    question:
      "Biorąc pod uwagę adres binarny 11101100 00010001 00001100 00001010, który adres reprezentuje go w formacie dziesiętnym?",
    answers: [
      {
        option: "234.17.10.9",
        correct: false,
      },
      {
        option: "234.16.12.10",
        correct: false,
      },
      {
        option: "236.17.12.6",
        correct: false,
      },
      {
        option: "236.17.12.10",
        correct: true,
      },
    ],
  },
  {
    id: 159,
    question: "Ile cyfr binarnych (bitów) zawiera adres IPv6?",
    answers: [
      {
        option: "32",
        correct: false,
      },
      {
        option: "48",
        correct: false,
      },
      {
        option: "64",
        correct: false,
      },
      {
        option: "128",
        correct: true,
      },
      {
        option: "256",
        correct: false,
      },
    ],
  },
  {
    id: 160,
    question: "Jaki jest binarny odpowiednik liczby dziesiętnej 232?",
    answers: [
      {
        option: "11101000",
        correct: true,
      },
      {
        option: "11000110",
        correct: false,
      },
      {
        option: "10011000",
        correct: false,
      },
      {
        option: "11110010",
        correct: false,
      },
    ],
  },
  {
    id: 161,
    question: "Które dwa stwierdzenia o adresach IPv4 i IPv6 są prawidłowe?",
    multi: true,
    answers: [
      {
        option: "Adresy IPv6 są reprezentowane przez liczby szesnastkowe.",
        correct: true,
      },
      {
        option: "Adresy IPv4 są reprezentowane przez liczby szesnastkowe.",
        correct: false,
      },
      {
        option: "Adresy IPv6 mają długość 32 bity.",
        correct: false,
      },
      {
        option: "Adresy IPv4 mają długość 32 bity.",
        correct: true,
      },
      {
        option: "Adresy IPv4 mają długość 128 bitów.",
        correct: false,
      },
      {
        option: "Adresy IPv6 mają długość 64 bity.",
        correct: false,
      },
    ],
  },
  {
    id: 162,
    question:
      "Który format adresu IPv4 został stworzony dla łatwości obsługi przez ludzi i jest wyrażony jako 201.192.1.14?",
    answers: [
      {
        option: "Binarny",
        correct: false,
      },
      {
        option: "Notacja dziesiętna z kropkami",
        correct: true,
      },
      {
        option: "Szesnastkowy",
        correct: false,
      },
      {
        option: "ASCII",
        correct: false,
      },
    ],
  },
  {
    id: 163,
    question:
      "Jaka jest dziesiętna reprezentacja następującego adresu IPv4 - 11001011.00000000.01110001.11010011?",
    answers: [
      {
        option: "192.0.2.199",
        correct: false,
      },
      {
        option: "198.51.100.201",
        correct: false,
      },
      {
        option: "203.0.113.211",
        correct: true,
      },
      {
        option: "209.165.201.223",
        correct: false,
      },
    ],
  },
  {
    id: 164,
    question: "Jaki jest dziesiętny odpowiednik liczby binarnej 10010101?",
    answers: [
      {
        option: "149",
        correct: true,
      },
      {
        option: "157",
        correct: false,
      },
      {
        option: "168",
        correct: false,
      },
      {
        option: "192",
        correct: false,
      },
    ],
  },
  {
    id: 165,
    question: "Co jest odpowiednikiem dziesiętnym liczby szesnastkowej 0x3F?",
    answers: [
      {
        option: "63",
        correct: true,
      },
      {
        option: "77",
        correct: false,
      },
      {
        option: "87",
        correct: false,
      },
      {
        option: "93",
        correct: false,
      },
    ],
  },
  {
    id: 166,
    question:
      "Co jest dziesiętnym odpowiednikiem adresu IPv4, który jest reprezentowany jako ciąg binarny 00001010.01100100.00010101.00000001?",
    answers: [
      {
        option: "10.100.21.1",
        correct: true,
      },
      {
        option: "10.10.20.1",
        correct: false,
      },
      {
        option: "100.10.11.1",
        correct: false,
      },
      {
        option: "100.21.10.1",
        correct: false,
      },
    ],
  },
  {
    id: 167,
    question: "Co jest dziesiętnym odpowiednikiem 0xC9?",
    answers: [
      {
        option: "185",
        correct: false,
      },
      {
        option: "200",
        correct: false,
      },
      {
        option: "201",
        correct: true,
      },
      {
        option: "199",
        correct: false,
      },
    ],
  },
  {
    id: 168,
    question: "Która to poprawna liczba szesnastkowa?",
    answers: [
      {
        option: "F",
        correct: true,
      },
      {
        option: "G",
        correct: false,
      },
      {
        option: "H",
        correct: false,
      },
      {
        option: "J",
        correct: false,
      },
    ],
  },
  {
    id: 169,
    question: "Co jest binarną reprezentacja 0xCA?",
    answers: [
      {
        option: "10111010",
        correct: false,
      },
      {
        option: "11010101",
        correct: false,
      },
      {
        option: "11001010",
        correct: true,
      },
      {
        option: "11011010",
        correct: false,
      },
    ],
  },
  {
    id: 170,
    question: "Ile bitów występuje w adresie IPv4?",
    answers: [
      {
        option: "32",
        correct: true,
      },
      {
        option: "64",
        correct: false,
      },
      {
        option: "128",
        correct: false,
      },
      {
        option: "256",
        correct: false,
      },
    ],
  },
  {
    id: 171,
    question: "Jaka jest inna nazwa warstwy łącza danych OSI?",
    answers: [
      {
        option: "Warstwa 1",
        correct: false,
      },
      {
        option: "Warstwa 2",
        correct: true,
      },
      {
        option: "Warstwa 3",
        correct: false,
      },
      {
        option: "Warstwa 6",
        correct: false,
      },
    ],
  },
  {
    id: 172,
    question: "Warstwa łącza danych IEEE 802 LAN/MAN składa się z jakich dwóch podwarstw?",
    multi: true,
    answers: [
      {
        option: "Network Control Protocol",
        correct: false,
      },
      {
        option: "Logical Link Control",
        correct: true,
      },
      {
        option: "Media Access Control",
        correct: true,
      },
      {
        option: "Link Control Protocol",
        correct: false,
      },
    ],
  },
  {
    id: 173,
    question: "Jaka jest odpowiedzialność podwarstwy MAC?",
    answers: [
      {
        option: "Dodaje adresy warstwy 3 do ramki",
        correct: false,
      },
      {
        option: "Komunikuje się z warstwą sieciową (warstwa 3)",
        correct: false,
      },
      {
        option: "Udostępnia metodę propagowania ramki do i odbierania z medium",
        correct: true,
      },
      {
        option: "Przesyła bity w medium",
        correct: false,
      },
    ],
  },
  {
    id: 174,
    question: "Które funkcje warstwy 2 wykonuje router?",
    multi: true,
    answers: [
      {
        option: "Przejmuje ramkę z medium",
        correct: true,
      },
      {
        option: "Dokonuje dekapsulacji ramki",
        correct: true,
      },
      {
        option: "Odwołuje się do tabeli routingu warstwy 3 dla pasującej sieci docelowej",
        correct: false,
      },
      {
        option: "Ponownie enkapsuluje pakiet do nowej ramki",
        correct: true,
      },
    ],
  },
  {
    id: 175,
    question: "Zastosowana metoda kontroli dostępu do mediów zależy od których dwóch kryteriów?",
    multi: true,
    answers: [
      {
        option: "Protokół IP warstwy 3",
        correct: false,
      },
      {
        option: "Współdzielenie medium",
        correct: true,
      },
      {
        option: "Topologia",
        correct: true,
      },
      {
        option: "Protokół warstwy transportu",
        correct: false,
      },
      {
        option: "Rodzaj danych",
        correct: false,
      },
    ],
  },
  {
    id: 176,
    question:
      "Która organizacja definiuje standardy dla warstwy dostępu do sieci (tj. warstwy fizycznej OSI i łącza danych)?",
    answers: [
      {
        option: "Cisco",
        correct: false,
      },
      {
        option: "IANA",
        correct: false,
      },
      {
        option: "EEE",
        correct: false,
      },
      {
        option: "IETF",
        correct: false,
      },
    ],
  },
  {
    id: 177,
    question: "Która topologia wyświetla adresy IP warstwy sieciowej urządzeń?",
    answers: [
      {
        option: "Topologia lotnicza",
        correct: false,
      },
      {
        option: "Topologia adresacji IP",
        correct: false,
      },
      {
        option: "Topologia logiczna",
        correct: false,
      },
      {
        option: "Topologia fizyczna",
        correct: false,
      },
    ],
  },
  {
    id: 178,
    question:
      "Jakiego rodzaju sieć wykorzystuje topologie typu punkt-punkt, hub and spoke lub siatki?",
    answers: [
      {
        option: "PAN",
        correct: false,
      },
      {
        option: "LAN",
        correct: false,
      },
      {
        option: "WLAN",
        correct: false,
      },
      {
        option: "WAN",
        correct: true,
      },
    ],
  },
  {
    id: 179,
    question: "Która topologia sieci LAN jest topologią hybrydową?",
    answers: [
      {
        option: "Magistrali",
        correct: false,
      },
      {
        option: "Rozszerzonej gwiazdy",
        correct: true,
      },
      {
        option: "Pierścienia",
        correct: false,
      },
      {
        option: "Gwiazdy",
        correct: false,
      },
    ],
  },
  {
    id: 180,
    question: "Która metoda komunikacji duplex jest stosowana w sieci WLAN?",
    answers: [
      {
        option: "Pełny dupleks",
        correct: false,
      },
      {
        option: "Półdupleks",
        correct: true,
      },
      {
        option: "Simpleks",
        correct: false,
      },
    ],
  },
  {
    id: 181,
    question:
      "Która metoda kontroli dostępu do mediów jest stosowana w starszych sieciach sieciowych Ethernet?",
    answers: [
      {
        option: "Wielodostęp z wykrywaniem nośnej i złośliwymi kolizjami",
        correct: false,
      },
      {
        option: "Wielodostęp z wykrywaniem nośnej i unikaniem kolizji",
        correct: false,
      },
      {
        option: "Wielodostęp z wykrywaniem nośnej i detstrukcją kolizji",
        correct: false,
      },
      {
        option: "Wielodostęp z wykrywaniem nośnej i detekcją kolizji",
        correct: true,
      },
    ],
  },
  {
    id: 182,
    question:
      "Co dodaje warstwa łącza danych do pakietu warstwy 3, aby utworzyć ramkę? (Wybierz dwie odpowiedzi.)",
    multi: true,
    answers: [
      {
        option: "Flagi",
        correct: false,
      },
      {
        option: "Numer sekwencyjny",
        correct: false,
      },
      {
        option: "Nagłówek",
        correct: true,
      },
      {
        option: "Stopkę",
        correct: true,
      },
    ],
  },
  {
    id: 183,
    question: "Jaka jest funkcja ostatniego pola w ramce warstwy łącza danych?",
    answers: [
      {
        option: "Aby ustalić, czy w ramce wystąpiły błędy transmisji",
        correct: true,
      },
      {
        option:
          "Aby zidentyfikować specjalne usługi kontroli przepływu, takie jak jakość usług (QoS)",
        correct: false,
      },
      {
        option: "Aby zidentyfikować początkową i końcową granicę ramki",
        correct: false,
      },
      {
        option: "Aby zidentyfikować protokół warstwy 3 w polu danych",
        correct: false,
      },
    ],
  },
  {
    id: 184,
    question: "Która lista zawiera pola adresu warstwy 2 i warstwy 3 w odpowiedniej kolejności?",
    answers: [
      {
        option:
          "Docelowy adres karty sieciowej, źródłowy adres karty sieciowej, źródłowy adres IP, docelowy adres IP",
        correct: false,
      },
      {
        option:
          "Źródłowy adres karty sieciowej, docelowy adres karty sieciowej, źródłowy adres IP, docelowy adres IP",
        correct: false,
      },
      {
        option:
          "Docelowy adres karty sieciowej, źródłowy adres karty sieciowej, docelowy adres IP, źródłowy adres IP",
        correct: false,
      },
      {
        option:
          "Źródłowy adres karty sieciowej, docelowy adres karty sieciowej, docelowy adres IP, źródłowy adres IP",
        correct: false,
      },
    ],
  },
  {
    id: 185,
    question: "Które z poniższych są protokołami warstwy łącza danych? (Wybierz trzy odpowiedzi.)",
    multi: true,
    answers: [
      {
        option: "802.11",
        correct: true,
      },
      {
        option: "Ethernet",
        correct: true,
      },
      {
        option: "IP",
        correct: false,
      },
      {
        option: "PPP",
        correct: true,
      },
      {
        option: "UDP",
        correct: false,
      },
    ],
  },
  {
    id: 186,
    question:
      "Jaki identyfikator jest używany w warstwie łącza danych do jednoznacznej identyfikacji urządzenia Ethernet?",
    answers: [
      {
        option: "Adres IP",
        correct: false,
      },
      {
        option: "Adres MAC",
        correct: true,
      },
      {
        option: "Numer sekwencyjny",
        correct: false,
      },
      {
        option: "Numer portu TCP",
        correct: false,
      },
      {
        option: "Numery portu UDP",
        correct: false,
      },
    ],
  },
  {
    id: 187,
    question: "Jaki atrybut karty sieciowej jest umieszczany w warstwie łącza danych modelu OSI?",
    answers: [
      {
        option: "Dołączony kabel Ethernet",
        correct: false,
      },
      {
        option: "Adres IP",
        correct: false,
      },
      {
        option: "Adres MAC",
        correct: true,
      },
      {
        option: "Port RJ-45",
        correct: false,
      },
      {
        option: "Stos protokołó TCP/IP",
        correct: false,
      },
    ],
  },
  {
    id: 188,
    question:
      "Które dwie organizacje inżynierskie definiują otwarte standardy i protokoły, które mają zastosowanie do warstwy łącza danych? (Wybierz dwie odpowiedzi.)",
    multi: true,
    answers: [
      {
        option: "Institute of Electrical and Electronics Engineers (IEEE)",
        correct: true,
      },
      {
        option: "Internet Assigned Numbers Authority (IANA)",
        correct: false,
      },
      {
        option: "International Telecommunication Union (ITU)",
        correct: true,
      },
      {
        option: "Electronic Industries Alliance (EIA)",
        correct: false,
      },
      {
        option: "Internet Society (ISOC)",
        correct: false,
      },
    ],
  },
  {
    id: 189,
    question: "Wybierz prawdziwe zdanie dotyczące topologii logicznych i fizycznych?",
    answers: [
      {
        option: "Topologia logiczna jest zawsze taka sama jak topologia fizyczna.",
        correct: false,
      },
      {
        option: "Topologie fizyczne skupiają się na sposobie przesyłania ramek przez sieć.",
        correct: false,
      },
      {
        option: "Topologie fizyczne przedstawiają schemat adresowania IP każdej sieci.",
        correct: false,
      },
      {
        option: "Topologie logiczne odnoszą się do sposobu przesyłania danych między urządzeniami.",
        correct: true,
      },
    ],
  },
  {
    id: 190,
    question:
      "Która metoda jest używana do zarządzania dostępem do sieci bezprzewodowej opartej o rywalizację?",
    answers: [
      {
        option: "CSMA/CD",
        correct: false,
      },
      {
        option: "Kolejkowanie priorytetowe",
        correct: false,
      },
      {
        option: "CSMA/CA",
        correct: true,
      },
      {
        option: "Przekazywanie tokenu",
        correct: false,
      },
    ],
  },
  {
    id: 191,
    question:
      "Technik został poproszony o stworzenie fizycznej topologii sieci, która zapewni wysoki poziom nadmiarowości. Która topologia fizyczna wymaga, by każdy węzeł został połączony z każdym innym węzłem w sieci?",
    answers: [
      {
        option: "Magistrali",
        correct: false,
      },
      {
        option: "Hierarchiczna",
        correct: false,
      },
      {
        option: "Siatki",
        correct: true,
      },
      {
        option: "Pierścienia",
        correct: false,
      },
      {
        option: "Gwiazdy",
        correct: false,
      },
    ],
  },
  {
    id: 192,
    question: "Które stwierdzenie opisuje tryb półdupleksu w transmisji danych?",
    answers: [
      {
        option: "Dane przesyłane przez sieć mogą płynąć tylko w jednym kierunku.",
        correct: false,
      },
      {
        option: "Dane przesyłane przez sieć przepływają w jednym kierunku naraz.",
        correct: true,
      },
      {
        option:
          "Dane przesyłane przez sieć przepływają w jednym kierunku do wielu różnych miejsc jednocześnie.",
        correct: false,
      },
      {
        option: "Dane przesyłane przez sieć przepływają w obu kierunkach jednocześnie.",
        correct: false,
      },
    ],
  },
  {
    id: 193,
    question: "Jaką rolę pełni podwarstwa Logical Link Control (LLC)?",
    answers: [
      {
        option: "Definiowanie procesów dostępu do mediów, które są wykonywane przez sprzęt",
        correct: false,
      },
      {
        option: "Zapewnianie adresowania dla warstwy łącza danych",
        correct: false,
      },
      {
        option: "Określenie protokołu używanego przez warstwę sieciową",
        correct: true,
      },
      {
        option: "Akceptowanie segmentów i pakowanie ich do jednostek danych nazywanych pakietami",
        correct: false,
      },
    ],
  },
  {
    id: 194,
    question: "Której metody kontroli dostępu warstwy łącza danych używa Ethernet?",
    answers: [
      {
        option: "CSMA/CD",
        correct: true,
      },
      {
        option: "Deterministycznej",
        correct: false,
      },
      {
        option: "Włączania się",
        correct: false,
      },
      {
        option: "Przekazywanie tokenu",
        correct: false,
      },
    ],
  },
  {
    id: 195,
    question:
      "Jakie są dwie podwarstwy warstwy łącza danych modelu OSI? (Wybierz dwie odpowiedzi.)",
    multi: true,
    answers: [
      {
        option: "Internetu",
        correct: false,
      },
      {
        option: "Fizyczna",
        correct: false,
      },
      {
        option: "LLC",
        correct: true,
      },
      {
        option: "Transportu",
        correct: false,
      },
      {
        option: "MAC",
        correct: true,
      },
      {
        option: "Dostępu do sieci",
        correct: false,
      },
    ],
  },
  {
    id: 196,
    question:
      "Która warstwa modelu OSI odpowiedzialna jest za określenie metody enkapsulacji zastosowanej dla konkretnego rodzaju medium transmisji?",
    answers: [
      {
        option: "Aplikacji",
        correct: false,
      },
      {
        option: "Transportu",
        correct: false,
      },
      {
        option: "Łącza danych",
        correct: true,
      },
      {
        option: "Fizyczna",
        correct: false,
      },
    ],
  },
  {
    id: 197,
    question:
      "Jaki rodzaj fizycznej topologii można stworzyć poprzez podłączenie wszystkich kabli Ethernet do urządzenia centralnego?",
    answers: [
      {
        option: "Magistrali",
        correct: false,
      },
      {
        option: "Pierścienia",
        correct: false,
      },
      {
        option: "Gwiazdy",
        correct: true,
      },
      {
        option: "Siatki",
        correct: false,
      },
    ],
  },
  {
    id: 198,
    question:
      "Które to dwie usługi wykonywane przez warstwę łącza danych modelu OSI? (Wybierz dwie odpowiedzi.)",
    multi: true,
    answers: [
      {
        option: "Szyfruje dane.",
        correct: false,
      },
      {
        option: "Określa trasę do przesłania pakietów.",
        correct: false,
      },
      {
        option: "Akceptuje pakiety warstwy 3 i enkapsuluje je w ramki.",
        correct: true,
      },
      {
        option: "Zapewnia kontrolę dostępu do multimediów i wykrywa błędy.",
        correct: true,
      },
      {
        option: "It monitors the Layer 2 communication by building a MAC address table.",
        correct: false,
      },
    ],
  },
  {
    id: 199,
    question: "Jaki atrybut karty sieciowej jest umieszczany w warstwie łącza danych modelu OSI?",
    answers: [
      {
        option: "Dołączony kabel Ethernet",
        correct: false,
      },
      {
        option: "Adres IP",
        correct: false,
      },
      {
        option: "Adres MAC",
        correct: true,
      },
      {
        option: "Port RJ-45",
        correct: false,
      },
      {
        option: "Stos protokołó TCP/IP",
        correct: false,
      },
    ],
  },
  {
    id: 200,
    question:
      "Która część ramki Ethernet używa wypełnienia, aby zwiększyć pole ramki do co najmniej 64 bajtów?",
    answers: [
      {
        option: "EtherType",
        correct: false,
      },
      {
        option: "Preambuła",
        correct: false,
      },
      {
        option: "Znacznik początku ramki",
        correct: false,
      },
      {
        option: "Pole danych",
        correct: true,
      },
    ],
  },
  {
    id: 201,
    question: "Która część ramki Ethernet wykrywa błędy w ramce?",
    answers: [
      {
        option: "Preambuła",
        correct: false,
      },
      {
        option: "Znacznik początku ramki",
        correct: false,
      },
      {
        option: "Suma kontrolna ramki (FCS)",
        correct: true,
      },
    ],
  },
  {
    id: 202,
    question: "Która część ramki Ethernet opisuje protokół wyższej warstwy, który jest ładunkiem?",
    answers: [
      {
        option: "EtherType",
        correct: true,
      },
      {
        option: "Preambuła",
        correct: false,
      },
      {
        option: "Znacznik początku ramki",
        correct: false,
      },
      {
        option: "Suma kontrolna ramki (FCS)",
        correct: false,
      },
    ],
  },
  {
    id: 203,
    question:
      "Która część ramki Ethernet powiadamia odbiornik, aby przygotować się do nowej ramki?",
    answers: [
      {
        option: "Znacznik początku ramki",
        correct: false,
      },
      {
        option: "Suma kontrolna ramki (FCS)",
        correct: false,
      },
      {
        option: "Preambuła",
        correct: true,
      },
      {
        option: "Pole danych",
        correct: false,
      },
    ],
  },
  {
    id: 204,
    question: "Która podwarstwa łącza danych steruje interfejsem sieciowym poprzez sterowniki?",
    answers: [
      {
        option: "MAC",
        correct: false,
      },
      {
        option: "LLC",
        correct: true,
      },
    ],
  },
  {
    id: 205,
    question:
      "Która podwarstwa łącza danych współpracuje z górnymi warstwami w celu dodania informacji o aplikacji w celu dostarczenia danych do protokołów wyższego poziomu?",
    answers: [
      {
        option: "MAC",
        correct: false,
      },
      {
        option: "LLC",
        correct: true,
      },
    ],
  },
  {
    id: 206,
    question: "Jaka jest funkcja podwarstwy MAC? (Wybierz trzy odpowiedzi).",
    multi: true,
    answers: [
      {
        option: "Kontrola dostępu danych do medium",
        correct: true,
      },
      {
        option: "Sprawdza błędy w odebranych bitach",
        correct: true,
      },
      {
        option: "Wykorzystuje CSMA/CD lub CSMA/CA do obsługi technologii Ethernet",
        correct: true,
      },
      {
        option:
          "Komunikuje się między oprogramowaniem w wyższych warstwach a sprzętem urządzenia w niższych warstwach",
        correct: false,
      },
      {
        option:
          "Pozwala wielu protokołom warstwy 3 korzystać z tego samego interfejsu sieciowego i nośnika",
        correct: false,
      },
    ],
  },
  {
    id: 207,
    question:
      "Jakie są dwie metody przełączania danych między portami na przełączniku? (Wybierz dwie odpowiedzi.)",
    multi: true,
    answers: [
      {
        option: "Cut-off",
        correct: false,
      },
      {
        option: "Cut-through",
        correct: true,
      },
      {
        option: "Store-and-forward",
        correct: true,
      },
      {
        option: "Store-and-supply",
        correct: false,
      },
      {
        option: "Store-and-restore",
        correct: false,
      },
    ],
  },
  {
    id: 208,
    question:
      "Którą metodę przełączania można zaimplementować za pomocą przełączania fast-forward lub fragment-free?",
    answers: [
      {
        option: "Cut-off",
        correct: false,
      },
      {
        option: "Cut-through",
        correct: true,
      },
      {
        option: "Store-and-forward",
        correct: false,
      },
      {
        option: "Store-and-restore",
        correct: false,
      },
    ],
  },
  {
    id: 209,
    question:
      "Które dwa rodzaje technik buforowania pamięci są używane przez przełączniki? (Wybierz dwie odpowiedzi.)",
    multi: true,
    answers: [
      {
        option: "Buforowanie pamięci długoterminowej",
        correct: false,
      },
      {
        option: "Buforowanie oparte na portach",
        correct: true,
      },
      {
        option: "Buforowanie w pamięci współdzielonej",
        correct: true,
      },
      {
        option: "Buforowanie pamięci krótkoterminowej",
        correct: false,
      },
    ],
  },
  {
    id: 210,
    question:
      "Jaka funkcja automatycznie negocjuje najlepsze ustawienia prędkości i dupleksu między urządzeniami łączącymi?",
    answers: [
      {
        option: "Auto-MDIX",
        correct: false,
      },
      {
        option: "Autoboty",
        correct: false,
      },
      {
        option: "Autonegocjacja",
        correct: true,
      },
      {
        option: "Autotune",
        correct: false,
      },
    ],
  },
  {
    id: 211,
    question: "Które dwie cechy opisują technologię Ethernet? (Wybierz dwie odpowiedzi.)",
    multi: true,
    answers: [
      {
        option: "Jest wspierana przez standardy IEEE 802.3",
        correct: true,
      },
      {
        option: "Jest wspierana przez standardy IEEE 802.5",
        correct: false,
      },
      {
        option: "Zwykle używa średniej prędkości przesyłu danych równej 16 Mb/s",
        correct: false,
      },
      {
        option: "Stosuje metodę kontroli dostępu CSMA/CD",
        correct: true,
      },
      {
        option: "It uses a ring topology",
        correct: false,
      },
    ],
  },
  {
    id: 212,
    question: "Jakie stwierdzenie opisuje cechę adresów MAC?",
    answers: [
      {
        option: "Muszą być unikalne na całym świecie.",
        correct: true,
      },
      {
        option: "Są one routowane tylko w sieci prywatnej.",
        correct: false,
      },
      {
        option: "Są one dodawane jako część jedostki PDU warstwy 3.",
        correct: false,
      },
      {
        option: "Mają 32-bitową wartość binarną.",
        correct: false,
      },
    ],
  },
  {
    id: 213,
    question:
      "Jaka jest wartość specjalna przypisana do pierwszych 24 bitów multicastowego adresu MAC?",
    answers: [
      {
        option: "01-5E-00",
        correct: false,
      },
      {
        option: "FF-00-5E",
        correct: false,
      },
      {
        option: "FF-FF-FF",
        correct: false,
      },
      {
        option: "01-00-5E",
        correct: true,
      },
    ],
  },
  {
    id: 214,
    question:
      "Co zrobi host w sieci Ethernet jeżeli otrzyma ramkę z adresem MAC przeznaczenia (docelowym), który nie pasuje do jego własnego adresu MAC?",
    answers: [
      {
        option: "Odrzuci ramkę.",
        correct: true,
      },
      {
        option: "Przekaże ramkę do następnego hosta.",
        correct: false,
      },
      {
        option: "Usunie ramkę z medium.",
        correct: false,
      },
      {
        option: "Zdejmie ramkę łącza danych aby sprawdzić docelowy adres IP.",
        correct: false,
      },
    ],
  },
  {
    id: 215,
    question:
      "Które urządzenie sieciowe podejmuje decyzję o przekazaniu ramki na podstawie docelowego adresu MAC, który jest zawarty w ramce?",
    answers: [
      {
        option: "Wtórnik",
        correct: false,
      },
      {
        option: "Koncentrator",
        correct: false,
      },
      {
        option: "Przełącznik",
        correct: true,
      },
      {
        option: "Router",
        correct: false,
      },
    ],
  },
  {
    id: 216,
    question:
      "Które urządzenie sieciowe ma podstawową funkcję wysyłania danych do określonego miejsca docelowego na podstawie informacji znajdujących się w tablicy adresów MAC?",
    answers: [
      {
        option: "Koncentrator",
        correct: false,
      },
      {
        option: "Router",
        correct: false,
      },
      {
        option: "Przełącznik",
        correct: true,
      },
      {
        option: "Modem",
        correct: false,
      },
    ],
  },
  {
    id: 217,
    question: "Która funkcja lub operacja jest wykonywana przez podwarstwę LLC?",
    answers: [
      {
        option: "Wykonuje enkapsulację danych.",
        correct: false,
      },
      {
        option: "Komunikuje się z górnymi warstwami protokołu.",
        correct: true,
      },
      {
        option: "Jest ona odpowiedzialna za kontrolę dostępu do nośnika.",
        correct: false,
      },
      {
        option: "Dodaje nagłówek i stopkę w celu utworzenia jednostki PDU w warstwie 2 modelu OSI.",
        correct: false,
      },
    ],
  },
  {
    id: 218,
    question: "Co dzieje się z karłowatą ramką odbieraną przez przełącznik Cisco Ethernet?",
    answers: [
      {
        option: "Ramka jest odrzucona.",
        correct: true,
      },
      {
        option: "Rama jest zwracana do źródłowego urządzenia sieciowego.",
        correct: false,
      },
      {
        option: "Ramka jest rozgłaszana do wszystkich urządzeń w sieci.",
        correct: false,
      },
      {
        option: "Ramka jest wysyłana do bramy domyślnej.",
        correct: false,
      },
    ],
  },
  {
    id: 219,
    question:
      "Jakie informacje adresowe są rejestrowane przez przełącznik by zbudować swoją tablicę adresów MAC?",
    answers: [
      {
        option: "Docelowy adres warstwy 3 przychodzących pakietów",
        correct: false,
      },
      {
        option: "Docelowy adres warstwy 2 wychodzących ramek",
        correct: false,
      },
      {
        option: "Źródłowy adres warstwy 3 pakietów wychodzących",
        correct: false,
      },
      {
        option: "Źródłowy adres warstwy 2 przychodzących ramek",
        correct: true,
      },
    ],
  },
  {
    id: 220,
    question: "Co to jest Auto-MDIX?",
    answers: [
      {
        option: "Typ przełącznika Cisco",
        correct: false,
      },
      {
        option: "Typ złącza Ethernet",
        correct: false,
      },
      {
        option: "Typ portu na przełączniku Cisco",
        correct: false,
      },
      {
        option: "Funkcja wykrywająca typ kabla Ethernet",
        correct: false,
      },
    ],
  },
  {
    id: 221,
    question: "Co to za typ adresu adresu 01-00-5E-0A-00-02?",
    answers: [
      {
        option: "Adres, do którego mają dostęp wszystkie hosty wewnątrz lokalnej podsieci",
        correct: false,
      },
      {
        option: "Adres, do którego ma dostęp jeden host",
        correct: false,
      },
      {
        option: "Adres, do którego mają dostęp wszystkie hosty w sieci",
        correct: false,
      },
      {
        option: "Adres, do którego mają dostęp hosty należące do pewnej grupy hostów",
        correct: true,
      },
    ],
  },
  {
    id: 222,
    question: "Które stwierdzenie o adresach MAC jest prawdziwe?",
    answers: [
      {
        option: "Adresy MAC są implementowane przez oprogramowanie.",
        correct: false,
      },
      {
        option: "Karta sieciowa potrzebuje tylko adresu MAC, jeśli podłączona jest do sieci WAN.",
        correct: false,
      },
      {
        option: "Pierwsze trzy bajty użyte są przez producenta przypisującego identyfikator OUI.",
        correct: true,
      },
      {
        option: "Organizacja ISO odpowiedzialna jest za regulacje dotyczące adresów MAC.",
        correct: false,
      },
    ],
  },
  {
    id: 223,
    question:
      "Jakie są dwa rozmiary (minimalne i maksymalne) ramki Ethernet? (Wybierz dwie odpowiedzi.)",
    multi: true,
    answers: [
      {
        option: "56 bajty",
        correct: false,
      },
      {
        option: "64 bajty",
        correct: true,
      },
      {
        option: "128 bajty",
        correct: false,
      },
      {
        option: "1024 bajty",
        correct: false,
      },
      {
        option: "1518 bajty",
        correct: true,
      },
    ],
  },
  {
    id: 224,
    question:
      "Które dwie funkcje lub operacje są wykonywane przez podwarstwę MAC? (Wybierz dwie odpowiedzi.)",
    multi: true,
    answers: [
      {
        option: "Jest ona odpowiedzialna za kontrolę dostępu do nośnika.",
        correct: true,
      },
      {
        option: "Pełni funkcję oprogramowania sterownika karty sieciowej.",
        correct: false,
      },
      {
        option:
          "Dodaje nagłówek i pole końcowe (trailer) w celu utworzenia PDU w warstwie 2 modelu OSI.",
        correct: true,
      },
      {
        option: "Obsługuje komunikację pomiędzy górnymi i dolnymi warstwami.",
        correct: false,
      },
      {
        option: "Dodaje informacje sterujące do danych warstwy protokołu sieci.",
        correct: false,
      },
    ],
  },
  {
    id: 225,
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
    id: 226,
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
    id: 227,
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
    id: 228,
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
    id: 229,
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
    id: 230,
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
    id: 231,
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
    id: 232,
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
    id: 233,
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
    id: 234,
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
    id: 235,
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
    id: 236,
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
    id: 237,
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
    id: 238,
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
    id: 239,
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
    id: 240,
    question: "Która warstwa OSI wysyła segmenty do enkapsulacji w pakiecie IPv4 lub IPv6?",
    answers: [
      {
        option: "Warstwa łącza danych",
        correct: false,
      },
      {
        option: "Warstwa sieci",
        correct: false,
      },
      {
        option: "Warstwa transportowa",
        correct: true,
      },
      {
        option: "Warstwa sesji",
        correct: false,
      },
    ],
  },
  {
    id: 241,
    question:
      "Która warstwa jest odpowiedzialna za pobranie pakietu IP i przygotowanie go do transmisji za pośrednictwem medium komunikacyjnego?",
    answers: [
      {
        option: "Warstwa fizyczna",
        correct: false,
      },
      {
        option: "Warstwa sieci",
        correct: false,
      },
      {
        option: "Warstwa łącza danych",
        correct: true,
      },
      {
        option: "Warstwa transportowa",
        correct: false,
      },
    ],
  },
  {
    id: 242,
    question:
      "Który to termin podziału pakietu IP podczas przesyłania go z jednego nośnika do drugiego z mniejszym MTU?",
    answers: [
      {
        option: "Enkapsulacja",
        correct: false,
      },
      {
        option: "Fragmentacja",
        correct: true,
      },
      {
        option: "Segmentacja",
        correct: false,
      },
      {
        option: "Serializacja",
        correct: false,
      },
    ],
  },
  {
    id: 243,
    question:
      "Która metoda dostarczania nie gwarantuje, że pakiet zostanie dostarczony w całości bez błędów?",
    // multi: true,
    answers: [
      {
        option: "Bezpołączeniowa",
        correct: false,
      },
      {
        option: "Najlepszych starań (ang. best-effort)",
        correct: true,
      },
      {
        option: "Niezależna od mediów",
        correct: false,
      },
    ],
  },
  {
    id: 244,
    question:
      "Jakie są dwa najczęściej używane pola w nagłówku pakietu IPv4, które wskazują, skąd pakiet pochodzi i dokąd zmierza? (Wybierz dwie odpowiedzi.)",
    multi: true,
    answers: [
      {
        option: "Docelowy adres IP",
        correct: true,
      },
      {
        option: "Protokół",
        correct: false,
      },
      {
        option: "Czas życia",
        correct: false,
      },
      {
        option: "Źródłowy adres IP",
        correct: true,
      },
      {
        option: "DS",
        correct: false,
      },
    ],
  },
  {
    id: 245,
    question: "Które stwierdzenie jest poprawne o polach nagłówka pakietów IPv4?",
    answers: [
      {
        option:
          "Źródłowe i docelowe adresy IPv4 pozostają takie same podczas przesyłania ze źródła do miejsca docelowego.",
        correct: true,
      },
      {
        option: "Pole Czas życia służy do określenia priorytetu każdego pakietu.",
        correct: false,
      },
      {
        option:
          "Pola Długość całkowita i Suma kontrolna nagłówka służą do zmiany kolejności pofragmentowanego pakietu.",
        correct: false,
      },
      {
        option: "Pole Wersja identyfikuje protokół następnego poziomu.",
        correct: false,
      },
    ],
  },
  {
    id: 246,
    question: "Które pole służy do wykrywania uszkodzenia w nagłówku IPv4?",
    answers: [
      {
        option: "Suma kontrolna nagłówka",
        correct: true,
      },
      {
        option: "Czas życia",
        correct: false,
      },
      {
        option: "Protokół",
        correct: false,
      },
      {
        option: "DS",
        correct: false,
      },
    ],
  },
  {
    id: 247,
    question: "Które pole zawiera typowe wartości, takie jak ICMP (1), TCP (6) i UDP (17)?",
    answers: [
      {
        option: "Suma kontrolna nagłówka",
        correct: false,
      },
      {
        option: "Czas życia",
        correct: false,
      },
      {
        option: "Protokół",
        correct: true,
      },
      {
        option: "DS",
        correct: false,
      },
    ],
  },
  {
    id: 248,
    question:
      "Które trzy opcje są poważnymi problemami związanymi z IPv4? (Wybierz trzy odpowiedzi.)",
    multi: true,
    answers: [
      {
        option: "Wyczerpywanie się puli adresów IP",
        correct: true,
      },
      {
        option: "Zwiększona złożoność sieci i rozbudowa tablic routingu internetowego",
        correct: true,
      },
      {
        option: "Stałe połączenia",
        correct: false,
      },
      {
        option: "Brak połączeń typu koniec-koniec",
        correct: true,
      },
      {
        option: "Granice globalne i polityczne",
        correct: false,
      },
      {
        option: "Zbyt wiele adresów IPv4 dostępnych",
        correct: false,
      },
    ],
  },
  {
    id: 249,
    question:
      "Które dwie opcje to ulepszenia dostarczone przez IPv6 w porównaniu do IPv4? (Wybierz dwie odpowiedzi.)",
    multi: true,
    answers: [
      {
        option: "Nagłówek obsługuje dodatkowe pola dla złożonych pakietów",
        correct: false,
      },
      {
        option: "Zwiększona przestrzeń adresowa",
        correct: true,
      },
      {
        option: "Standaryzuje wykorzystanie NAT",
        correct: false,
      },
      {
        option: "Obsługuje sieci oparte na klasach",
        correct: false,
      },
      {
        option: "Używa prostszego nagłówka, aby zapewnić lepszą obsługę pakietów",
        correct: true,
      },
    ],
  },
  {
    id: 250,
    question: "Co jest prawdziwe o nagłówku IPv6?",
    answers: [
      {
        option: "Składa się z 20 oktetów",
        correct: false,
      },
      {
        option: "Składa się z 40 oktetów",
        correct: true,
      },
      {
        option: "Zawiera 8 pól nagłówka",
        correct: true,
      },
      {
        option: "Zawiera 12 pól nagłówka",
        correct: false,
      },
    ],
  },
  {
    id: 251,
    question: "Co jest prawdziwe o nagłówku pakietu IPv6?",
    answers: [
      {
        option: "Pole Limit przeskoków zastępuje pole Czas do życia z IPv4.",
        correct: true,
      },
      {
        option:
          "Źródłowe i docelowe adresy IPv6 zmieniają się podczas wędrówki ze źródła do miejsca docelowego.",
        correct: false,
      },
      {
        option: "Pole Czas życia zastępuje pole DiffServ.",
        correct: false,
      },
      {
        option: "Pole Wersja identyfikuje następny nagłówek.",
        correct: false,
      },
    ],
  },
  {
    id: 252,
    question: "Które stwierdzenie dotyczące decyzji hosta o przekazywaniu jest prawdziwe?",
    answers: [
      {
        option: "Host nie może sam siebie zweryfikować poleceniem ping.",
        correct: false,
      },
      {
        option: "Zdalny host docelowy znajduje się w tej samej sieci lokalnej co host wysyłający.",
        correct: false,
      },
      {
        option: "Lokalne hosty mogą osiągnąć siebie bez pośrednictwa routera.",
        correct: true,
      },
      {
        option:
          "Routing jest włączony na przełącznikach, aby odkryć najlepszą drogę do miejsca docelowego.",
        correct: false,
      },
    ],
  },
  {
    id: 253,
    question: "Które stwierdzenie o bramie domyślnej jest prawdziwe?",
    answers: [
      {
        option:
          "Brama domyślna jest wymagana do wysyłania pakietów do innych hostów w sieci lokalnej.",
        correct: false,
      },
      {
        option: "Adresem bramy domyślnej jest adres IP przełącznika w sieci zdalnej.",
        correct: false,
      },
      {
        option: "Adres bramy domyślnej jest adresem IP interfejsu routera w lokalnej sieci.",
        correct: true,
      },
      {
        option:
          "Ruch może być przesyłany dalej poza lokalną sieć tylko wtedy, gdy nie ma bramy domyślnej.",
        correct: false,
      },
    ],
  },
  {
    id: 254,
    question:
      "Które dwa polecenia można wprowadzić na hoście systemu Windows, aby wyświetlić tablicę routingu IPv4 i IPv6? (Wybierz dwie odpowiedzi.)",
    multi: true,
    answers: [
      {
        option: "netroute -l",
        correct: false,
      },
      {
        option: "netstat -r",
        correct: true,
      },
      {
        option: "print route",
        correct: false,
      },
      {
        option: "route print",
        correct: true,
      },
      {
        option: "print net",
        correct: false,
      },
    ],
  },
  {
    id: 255,
    question:
      "Jakie polecenie używane jest na routerze Cisco IOS, aby wyświetlić tablicę routingu?",
    answers: [
      {
        option: "netstart -r",
        correct: false,
      },
      {
        option: "route print",
        correct: false,
      },
      {
        option: "show ip route",
        correct: true,
      },
      {
        option: "show routing table",
        correct: false,
      },
    ],
  },
  {
    id: 256,
    question: "Co oznacza kod „O” obok trasy w tablicy routingu?",
    answers: [
      {
        option: "Bezpośrednio podłączona trasa",
        correct: false,
      },
      {
        option: "Trasa o odległością administracyjną 0",
        correct: false,
      },
      {
        option: "Brama ostatniej szansy",
        correct: false,
      },
      {
        option: "Trasa nauczona dynamicznie z OSPF",
        correct: true,
      },
    ],
  },
  {
    id: 257,
    question: "Ten typ trasy jest również znany jako brama ostatniej szansy.",
    answers: [
      {
        option: "Trasa statyczna",
        correct: false,
      },
      {
        option: "Trasach zdalna",
        correct: false,
      },
      {
        option: "Trasa domyślna",
        correct: true,
      },
      {
        option: "Trasa połączona bezpośrednio",
        correct: false,
      },
    ],
  },
  {
    id: 258,
    question: "Co jest cechą tras statycznych?",
    answers: [
      {
        option: "Są one ręcznie konfigurowane.",
        correct: true,
      },
      {
        option: "Trasy te są ogłaszane do bezpośrednio podłączonych sąsiadów.",
        correct: false,
      },
      {
        option: "Są odpowiednie, gdy istnieje wiele nadmiarowych łączy.",
        correct: false,
      },
      {
        option: "Automatycznie dostosowują się do zmiany topologii sieci.",
        correct: false,
      },
    ],
  },
  {
    id: 259,
    question:
      "Prawda czy fałsz? Router można skonfigurować za pomocą kombinacji obu tras, statycznyej i protokołu routingu dynamicznego.",
    answers: [
      {
        option: "Prawda",
        correct: true,
      },
      {
        option: "Fałsz",
        correct: false,
      },
    ],
  },
  {
    id: 260,
    question: "Które polecenie można użyć na hoście Windows do wyświetlenia tablicy routingu?",
    answers: [
      {
        option: "Source IP address",
        correct: false,
      },
      {
        option: "Destination IP address",
        correct: false,
      },
      {
        option: "Source data-link address",
        correct: true,
      },
      {
        option: "Destination data-link address",
        correct: false,
      },
    ],
  },
  {
    id: 261,
    question: "Które informacje są dodawane w trakcie enkapsulacji w warstwie 3 modelu OSI?",
    answers: [
      {
        option: "Źródłowy i docelowy adres MAC",
        correct: false,
      },
      {
        option: "Źródłowy i docelowy protokół warstwy aplikacji",
        correct: false,
      },
      {
        option: "Numer portu źródłowego i docelowego",
        correct: false,
      },
      {
        option: "Źródłowy i docelowy adres IP",
        correct: true,
      },
    ],
  },
  {
    id: 262,
    question: "Jak warstwa sieciowa używa wartości MTU?",
    answers: [
      {
        option: "Aby określić wartość MTU warstwa sieci używa warstw wyższego poziomu.",
        correct: false,
      },
      {
        option:
          "Aby ustawić wartość MTU oraz dostosować prędkość transmisji do liczby odbieranych danych, warstwa sieci korzysta z warstwy łącza danych.",
        correct: false,
      },
      {
        option:
          "Wartość pola MTU jest przekazywana do warstwy sieciowej poprzez warstwę łącza danych.",
        correct: true,
      },
      {
        option: "Aby zwiększyć szybkość dostarczania danych, warstwa sieci ignoruje MTU.",
        correct: false,
      },
    ],
  },
  {
    id: 263,
    question:
      "Router odbiera pakiet z interfejsu Gigabit 0/0 i określa, że pakiet musi zostać przekazany do interfejsu Gigabit 0/1. Co zrobi dalej router?",
    answers: [
      {
        option:
          "IPv6 addresses are based on 128-bit flat addressing as opposed to IPv4 which is based on 32-bit hierarchical addressing.",
        correct: false,
      },
      {
        option:
          "The IPv6 header is simpler than the IPv4 header is, which improves packet handling.",
        correct: true,
      },
      {
        option:
          "Both IPv4 and IPv6 support authentication, but only IPv6 supports privacy capabilities.",
        correct: false,
      },
      {
        option: "The IPv6 address space is four times bigger than the IPv4 address space.​",
        correct: false,
      },
    ],
  },
  {
    id: 264,
    question: "Które stwierdzenie dokładnie opisuje charakterystykę IPv4?",
    answers: [
      {
        option: "Wszystkie adresy IPv4 mogą być przypisane do hostów.",
        correct: false,
      },
      {
        option: "IPv4 ma 32-bitową przestrzeń adresową.",
        correct: true,
      },
      {
        option: "Nagłówek IPv4 ma mniej pól niż nagłówek IPv6.",
        correct: false,
      },
      {
        option: "IPv4 natywnie obsługuje protokół IPsec.",
        correct: false,
      },
    ],
  },
  {
    id: 265,
    question:
      "Gdy router odbiera pakiet, jakie informacje muszą zostać zbadane, aby pakiet został przekazany do odległego miejsca docelowego?",
    answers: [
      {
        option: "Docelowy adres MAC",
        correct: false,
      },
      {
        option: "Źródłowy adres IP",
        correct: false,
      },
      {
        option: "Docelowy adres IP",
        correct: true,
      },
      {
        option: "Źródłowego adresu MAC",
        correct: false,
      },
    ],
  },
  {
    id: 266,
    question:
      "Komputer musi wysłać pakiet do hosta docelowego w tej samej sieci LAN. Jak pakiet będzie wysłany?",
    answers: [
      {
        option:
          "Pakiet będzie najpierw wysyłany do bramy domyślnej, a potem w zależności od odpowiedzi z bramy może być przesyłany do docelowego hosta.",
        correct: false,
      },
      {
        option: "Pakiet zostanie wysłany bezpośrednio do hosta docelowego.",
        correct: true,
      },
      {
        option:
          "Pakiet zostanie najpierw przesłany do bramy domyślnej, a następnie z bramy domyślnej zostanie wysłany bezpośrednio do hosta docelowego.",
        correct: false,
      },
      {
        option: "Pakiet zostanie wysłany tylko do bramy domyślnej.",
        correct: false,
      },
    ],
  },
  {
    id: 267,
    question:
      "Który adres IPv4 może użyć host do sprawdzenia poleceniem ping interfejsu pętli zwrotnej?",
    answers: [
      {
        option:
          "The IPv6 header is simpler than the IPv4 header is, which improves packet handling.",
        correct: false,
      },
      {
        option:
          "IPv6 addresses are based on 128-bit flat addressing as opposed to IPv4 which is based on 32-bit hierarchical addressing.",
        correct: false,
      },
      {
        option:
          "Both IPv4 and IPv6 support authentication, but only IPv6 supports privacy capabilities.",
        correct: false,
      },
      {
        option: "The IPv6 address space is four times bigger than the IPv4 address space.​",
        correct: true,
      },
    ],
  },
  {
    id: 268,
    question:
      "Gdy protokół bezpołączeniowy jest używany w dolnej warstwie modelu OSI, w jaki sposób utrata danych jest wykrywana i ponownie przesyłana w razie potrzeby?",
    answers: [
      {
        option: "Potwierdzenia bezpołączeniowe służą do żądania ponownej transmisji.",
        correct: false,
      },
      {
        option:
          "Protokoły połączeniowe wyższej warstwy śledzą otrzymane dane i mogą żądać retransmisji z protokołów wyższego poziomu na hoście wysyłającym.",
        correct: true,
      },
      {
        option:
          "Protokoły IP warstwy sieciowej zarządzają sesjami komunikacyjnymi, jeśli usługi transportowe połączeniowe nie są dostępne.",
        correct: false,
      },
      {
        option:
          "Proces dostarczania według najlepszych starań gwarantuje, że wszystkie wysyłane pakiety są odbierane.",
        correct: false,
      },
    ],
  },
  {
    id: 269,
    question: "Jaki był powód tworzenia i wdrażania IPv6?",
    answers: [
      {
        option: "To make reading a 32-bit address easier",
        correct: false,
      },
      {
        option: "Aby złagodzić wyczerpanie adresu IPv4",
        correct: true,
      },
      {
        option: "Aby zapewnić więcej miejsca adresowego w rejestrze nazw internetowych",
        correct: false,
      },
      {
        option: "Aby umożliwić obsługę NAT dla adresowania prywatnego",
        correct: false,
      },
    ],
  },
  {
    id: 270,
    question:
      "Które informacje są wykorzystywane przez routery do przesyłania pakietów danych w kierunku jego miejsca docelowego?",
    answers: [
      {
        option: "Source IP address",
        correct: false,
      },
      {
        option: "Destination IP address",
        correct: true,
      },
      {
        option: "Source data-link address",
        correct: false,
      },
      {
        option: "Destination data-link address",
        correct: false,
      },
    ],
  },
  {
    id: 271,
    question: "Które pole w nagłówku IPv4 typowo pozostaje takie same podczas transmisji?",
    answers: [
      {
        option: "Flaga",
        correct: false,
      },
      {
        option: "Czas życia (TTL)",
        correct: false,
      },
      {
        option: "Długość pakietu",
        correct: false,
      },
      {
        option: "Adres docelowy",
        correct: true,
      },
    ],
  },
  {
    id: 272,
    question:
      "Które pole w pakiecie IPv6 jest używane przez router do określenia, czy pakiet wygasł i powinien zostać usunięty?",
    answers: [
      {
        option: "To make reading a 32-bit address easier",
        correct: false,
      },
      {
        option: "Limit przeskoków",
        correct: true,
      },
      {
        option: "Adres nieosiągalny",
        correct: false,
      },
      {
        option: "Brak trasy",
        correct: false,
      },
    ],
  },
  // modul 9
  {
    id: 273,
    question:
      "Jaki docelowy adres MAC zostanie uwzględniony w ramce wysłanej z urządzenia źródłowego do urządzenia docelowego w tej samej sieci lokalnej?",
    answers: [
      {
        option: "Adres rozgłoszeniowy MAC FF-FF-FF-FF-FF-FF",
        correct: false,
      },
      {
        option: "Adres MAC urządzenia docelowego",
        correct: true,
      },
      {
        option: "Adres MAC interfejsu routera lokalnego",
        correct: false,
      },
    ],
  },
  {
    id: 274,
    question:
      "Jaki docelowy adres MAC zostanie uwzględniony w ramce wysyłanej z urządzenia źródłowego do urządzenia docelowego w zdalnej sieci lokalnej?",
    answers: [
      {
        option: "Adres rozgłoszeniowy MAC FF-FF-FF-FF-FF-FF",
        correct: false,
      },
      {
        option: "Adres MAC urządzenia docelowego",
        correct: false,
      },
      {
        option: "Adres MAC interfejsu routera lokalnego",
        correct: true,
      },
    ],
  },
  {
    id: 275,
    question:
      "Jakie dwa protokoły są używane do określania adresu MAC znanego adresu IP urządzenia docelowego (IPv4 i IPv6)?",
    multi: true,
    answers: [
      {
        option: "DHCP",
        correct: false,
      },
      {
        option: "ARP",
        correct: true,
      },
      {
        option: "DNS",
        correct: false,
      },
      {
        option: "ND",
        correct: true,
      },
    ],
  },

  {
    id: 276,
    question: "Jakie dwie funkcje są zapewniane przez ARP? (Wybierz dwie odpowiedzi.)",
    multi: true,
    answers: [
      {
        option: "Utrzymuje tablicę przypisań adresów IPv4 do nazw domen",
        correct: false,
      },
      {
        option: "Utrzymuje tablicę mapowania IPv4 do MAC",
        correct: true,
      },
      {
        option: "Utrzymuje tablicę mapowania IPv6 do MAC",
        correct: false,
      },
      {
        option: "Odwzorowuje adresy IPv4 na nazwy domen",
        correct: false,
      },
      {
        option: "Odwzorowuje adresy IPv4 na adresy MAC",
        correct: true,
      },
      {
        option: "Odwzorowuje adresy IPv6 na adresy MAC",
        correct: false,
      },
    ],
  },
  {
    id: 277,
    question: "Gdzie jest przechowywana tabela ARP na urządzeniu?",
    answers: [
      {
        option: "Pamięci ROM",
        correct: false,
      },
      {
        option: "Pamięć flash",
        correct: false,
      },
      {
        option: "Pamięć NVRAM",
        correct: false,
      },
      {
        option: "Pamięć RAM",
        correct: true,
      },
    ],
  },
  {
    id: 278,
    question: "Które stwierdzenie jest prawdziwe o ARP?",
    answers: [
      {
        option: "Pamięć podręczna ARP nie może zostać ręcznie usunięta.",
        correct: false,
      },
      {
        option: "Wpisy ARP są buforowane na stałe.",
        correct: false,
      },
      {
        option: "Wpisy ARP są buforowane tymczasowo.",
        correct: true,
      },
    ],
  },
  {
    id: 279,
    question: "Które polecenie może być użyte na routerze Cisco do wyświetlenia tablicy ARP?",
    answers: [
      {
        option: "arp -a",
        correct: false,
      },
      {
        option: "arp -d",
        correct: false,
      },
      {
        option: "show arp table",
        correct: false,
      },
      {
        option: "show ip arp",
        correct: true,
      },
    ],
  },
  {
    id: 280,
    question: "Który to atak za pomocą ARP?",
    answers: [
      {
        option: "Broadcast ARP",
        correct: false,
      },
      {
        option: "Skoki ARP",
        correct: false,
      },
      {
        option: "Zatruwanie ARP",
        correct: true,
      },
      {
        option: "Zagłodzenie ARP",
        correct: false,
      },
    ],
  },

  {
    id: 281,
    question: "Które dwa komunikaty ICMPv6 są używane w SLAAC?",
    multi: true,
    answers: [
      {
        option: "Neighbor Advertisement",
        correct: false,
      },
      {
        option: "Neighbor Solicitation",
        correct: false,
      },
      {
        option: "Powiadomienie, że router jest",
        correct: true,
      },
      {
        option: "Router solicitation",
        correct: true,
      },
    ],
  },
  {
    id: 282,
    question:
      "Które dwa komunikaty ICMPv6 są używane w celu określenia adresu MAC znanego adresu IPv6?",
    multi: true,
    answers: [
      {
        option: "Neighbor Advertisement",
        correct: true,
      },
      {
        option: "Neighbor Solicitation",
        correct: true,
      },
      {
        option: "Router Advertisement",
        correct: false,
      },
      {
        option: "Router Solicitation",
        correct: false,
      },
    ],
  },
  {
    id: 283,
    question: "Na jaki adres wysyłane są komunikaty ICMPv6 NS?",
    answers: [
      {
        option: "Unicast",
        correct: false,
      },
      {
        option: "Multicast",
        correct: true,
      },
      {
        option: "Broadcast",
        correct: false,
      },
    ],
  },

  {
    id: 284,
    question:
      "Który element routera przechowuje tablicę routingu, pamięć podręczną ARP oraz plik konfiguracji bieżącej?",
    answers: [
      {
        option: "Pamięć RAM",
        correct: true,
      },
      {
        option: "It broadcasts the frame out of all ports on the switch.",
        correct: false,
      },
      {
        option: "Pamięć NVRAM",
        correct: false,
      },
      {
        option: "Pamięci ROM",
        correct: false,
      },
    ],
  },
  {
    id: 285,
    question: "Jaki rodzaj informacji znajduje się w tablicy ARP?",
    answers: [
      {
        option: "Porty przełącznika skojarzone z docelowymi adresami MAC",
        correct: false,
      },
      {
        option: "Mapowanie nazw domen na adresy IP",
        correct: false,
      },
      {
        option: "Trasy do dotarcia do sieci docelowych",
        correct: false,
      },
      {
        option: "Mapowanie adresów IP na adresy MAC",
        correct: true,
      },
    ],
  },
  {
    id: 286,
    question:
      "Komputer jest skonfigurowany do automatycznego uzyskiwania adresu IP z sieci 192.168.1.0/24. Administrator sieci wydaje polecenie arp -a i zauważa pozycję 192.168.1.255 ff-ff-ff-ff-ff-ff. Które stwierdzenie opisuje ten wpis?",
    answers: [
      {
        option: "To jest wpis statyczny.",
        correct: true,
      },
      {
        option: "To jest wpis dynamiczny.",
        correct: false, // no this
      },
      {
        option: "To jest wpis dodany przez PC samodzielnie.",
        correct: false, // no this
      },
      {
        option: "To jest wpis mapowania dla bramy domyślnej.",
        correct: false,
      },
    ],
  },
  {
    id: 287,
    question:
      "Analityk cyberbezpieczeństwa uważa, że atakujący fałszuje adres MAC bramy domyślnej, aby wykonać atak man-in-the-middle. Jakiego polecenia powinien użyć analityk, aby wyświetlić adres MAC, z którego korzysta host, aby dotrzeć do domyślnej bramy?",
    answers: [
      {
        option: "Obtaining an IPv4 address automatically",
        correct: false, // no this
      },
      {
        option: "Mapping a domain name to its IP address",
        correct: false,
      },
      {
        option: "Resolving an IPv4 address to a MAC address",
        correct: false, // no this
      },
      {
        option: "Maintaining a table of domain names with their resolved IP addresses",
        correct: false,
      },
    ],
  },
  {
    id: 288,
    question:
      "Co zrobi przełącznik warstwy drugiej jeżeli docelowy adres MAC w otrzymanej ramce nie znajduje się w tablicy MAC?",
    answers: [
      {
        option: "Zainicjuje zapytanie ARP.",
        correct: false,
      },
      {
        option: "It broadcasts the frame out of all ports on the switch.",
        correct: false,
      },
      {
        option: "Poinformuje hosta, który wysłał ramkę, że ramka nie zostanie dostarczona.",
        correct: false,
      },
      {
        option: "Przekaże ramkę na wszystkie porty z wyjątkiem portu na który otrzymał ramkę.",
        correct: true,
      },
    ],
  },
  {
    id: 289,
    question: "Co jest funkcją ARP?",
    multi: true,
    answers: [
      {
        option: "Odwzorowanie adresów MAC na adresy IPv4",
        correct: true,
      },
      {
        option: "Odwzorowanie adresów portów na adresy MAC",
        correct: false,
      },
      {
        option: "Odwzorowanie adresów MAC na adresy portów",
        correct: false, // no this
      },
      {
        option: "Odwzorowanie adresów IPv4 na adresy MAC",
        correct: true, // true 100%
      },
      {
        option: "Echo request",
        correct: false, // no this
      },
    ],
  },
  {
    id: 290,
    question: "W jaki sposób proces ARP wykorzystuje adres IP?",
    answers: [
      {
        option: "W celu ustalenia adresu MAC zdalnego hosta docelowego",
        correct: false,
      },
      {
        option: "W celu ustalenia adresu MAC urządzenia w tej samej sieci",
        correct: true,
      },
      {
        option:
          "Aby określić czas, jaki pakiet zajmuje podczas podróży ze źródła do miejsca docelowego",
        correct: false,
      },
      {
        option: "Aby określić numer sieci na podstawie liczby bitów w adresie IP",
        correct: false,
      },
    ],
  },
  {
    id: 291,
    question: "Jaka jest jedna funkcja protokołu ARP?",
    answers: [
      {
        option: "Obtaining an IPv4 address automatically",
        correct: false,
      },
      {
        option: "Mapping a domain name to its IP address",
        correct: false,
      },
      {
        option: "Resolving an IPv4 address to a MAC address",
        correct: true,
      },
      {
        option: "Maintaining a table of domain names with their resolved IP addresses",
        correct: false,
      },
    ],
  },
  {
    id: 292,
    question:
      "Jakie operacje wykona przełącznik warstwy 2, gdy odbierze ramkę rozgłoszeniową warstwy 2?",
    answers: [
      {
        option: "Odrzuca ramkę.",
        correct: false,
      },
      {
        option: "Wysyła ramkę do wszystkich portów z wyjątkiem portu, z którego otrzymał ramkę.",
        correct: true,
      },
      {
        option:
          "Wysyła ramkę do wszystkich portów, które są zarejestrowane dla przekazywania transmisji rozgłoszeniowych.",
        correct: false,
      },
      {
        option: "Wysyła ramkę do wszystkich portów.",
        correct: false,
      },
    ],
  },
  {
    id: 293,
    question: "Jakie adresy są mapowane przez ARP?",
    answers: [
      {
        option: "Docelowy adres MAC na docelowy adres IPv4",
        correct: true,
      },
      {
        option: "Docelowy adres IPv4 na źródłowy adres MAC",
        correct: false, // no this
      },
      {
        option: "Docelowy adres IPv4 na nazwę hosta docelowego",
        correct: false,
      },
      {
        option: "Docelowy adres MAC na adres źródłowy IPv4",
        correct: false,
      },
      {
        option: "Docelowy adres IPv4 na docelowy adres MAC",
        correct: false,
      },
    ],
  },
  {
    id: 294,
    question:
      "Gdy pakiet IP jest wysyłany do hosta w sieci zdalnej, jakie informacje są dostarczane przez ARP?",
    answers: [
      {
        option: "Adres IP hosta docelowego",
        correct: false,
      },
      {
        option: "Adres IP bramy domyślnej",
        correct: false,
      },
      {
        option: "Adres MAC interfejsu routera najbliżej hosta wysyłającego",
        correct: true,
      },
      {
        option: "Adres MAC portu przełącznika, który łączy się z hosta wysyłającego",
        correct: false,
      },
    ],
  },
  {
    id: 295,
    question: "Które dwa typy adresów odwzorowuje tablica ARP w przełączniku?",
    answers: [
      {
        option: "Adresy warstwy 3 na adresy warstwy2",
        correct: true,
      },
      {
        option: "Layer 3 address to a Layer 4 address",
        correct: false,
      },
      {
        option: "Layer 4 address to a Layer 2 address",
        correct: false,
      },
      {
        option: "Layer 2 address to a Layer 4 address",
        correct: false,
      },
    ],
  },
  {
    id: 296,
    question: "Jakie jest przeznaczenie ARP w sieci IPv4?",
    answers: [
      {
        option: "Aby dalej przesyłać dane na podstawie docelowego adresu IP",
        correct: false,
      },
      {
        option: "Aby uzyskać określony adres MAC, gdy znany jest adres IP",
        correct: true,
      },
      {
        option: "Aby dalej przesyłać dane na podstawie docelowego adresu MAC",
        correct: false,
      },
      {
        option: "Zbudować tabelę adresów MAC w przełączniku z informacji, które są gromadzone",
        correct: false,
      },
    ],
  },
  {
    id: 297,
    question: "Jaki adres docelowy jest używany w ramce żądania ARP?",
    answers: [
      {
        option: "0.0.0.0",
        correct: false,
      },
      {
        option: "Layer 3 address to a Layer 4 address",
        correct: false,
      },
      {
        option: "Layer 4 address to a Layer 2 address",
        correct: true,
      },
      {
        option: "Layer 2 address to a Layer 4 address",
        correct: false, // no this
      },
      {
        option: "01-00-5E-00-AA-23",
        correct: false, // no this
      },
    ],
  },
  {
    id: 298,
    question: "Router uruchamia się i przechodzi w tryb setup. Jaka jest tego przyczyna?",
    answers: [
      {
        option: "Obraz IOS jest uszkodzony.",
        correct: false,
      },
      {
        option: "Obraz systemu Cisco IOS nie istnieje w pamięci flash.",
        correct: false,
      },
      {
        option: "Plik konfiguracyjny nie istnieje w pamięci NVRAM.",
        correct: true,
      },
      {
        option: "Proces POST wykrył awarię sprzętu.",
        correct: false,
      },
    ],
  },
  {
    id: 299,
    question:
      "Które polecenie służy do szyfrowania wszystkich haseł w pliku konfiguracyjnym routera?",
    answers: [
      {
        option: "Router_A (config) # enable secret <password>",
        correct: false,
      },
      {
        option: "Router_A (config) # service password-encryption",
        correct: true,
      },
      {
        option: "Router_A (config) # enable password <password>",
        correct: false,
      },
      {
        option: "Router_A (config) # encrypt password",
        correct: false,
      },
    ],
  },
  {
    id: 300,
    question:
      "Zasady firmy wymagają użycia najbardziej bezpiecznej metody w celu zabezpieczenia dostępu do uprzywilejowanego trybu exec i konfiguracji routerów. Hasło trybu uprzywilejowanego EXEC to: trustknow1. Które z poniższych poleceń routera osiąga cel, jakim jest zapewnienie najwyższego poziomu bezpieczeństwa?",
    answers: [
      {
        option: "secret password trustknow1",
        correct: false,
      },
      {
        option: "enable password trustknow1",
        correct: false,
      },
      {
        option: "service password-encryption",
        correct: false,
      },
      {
        option: "enable secret trustknow1",
        correct: true,
      },
    ],
  },
  {
    id: 301,
    question:
      "Jaka będzie odpowiedź routera po wprowadzeniu polecenia router(config)# hostname portsmouth?",
    answers: [
      {
        option: "portsmouth#",
        correct: false,
      },
      {
        option: "portsmouth(config)#",
        correct: true,
      },
      {
        option: "invalid input detected",
        correct: false,
      },
      {
        option: "router(config-host)#",
        correct: false,
      },
    ],
  },
  {
    id: 302,
    question:
      "Administrator konfiguruje nowy router, aby zezwolić na dostęp do zarządzania poza pasmem. Który zestaw poleceń pozwoli na wymagane logowanie przy użyciu hasła cisco?",
    answers: [
      {
        option:
          "Router(config)# line vty 0 4\nRouter(config-line)# password manage\nRouter(config-line)# exit\nRouter(config)# enable password cisco",
        correct: false,
      },
      {
        option:
          "Router(config)# line vty 0 4\nRouter(config-line)# password cisco\nRouter(config-line)# login",
        correct: false, // no this
      },
      {
        option:
          "Router(config)# line console 0\nRouter(config-line)# password cisco\nRouter(config-line)# login",
        correct: false,
      },
      {
        option:
          "Router(config)# line console 0\nRouter(config-line)# password cisco\nRouter(config-line)# exit\nRouter(config)# service password-encryption",
        correct: false,
      },
    ],
  },

  {
    id: 303,
    question:
      "Które polecenie może być używane na routerze Cisco, aby wyświetlić wszystkie interfejsy, przypisane adresy IPv4 i aktualny stan?",
    answers: [
      {
        option: "show ip interface brief",
        correct: true,
      },
      {
        option: "ping",
        correct: false,
      },
      {
        option: "show ip route",
        correct: false,
      },
      {
        option: "show interface fa0/1",
        correct: false,
      },
    ],
  },
  {
    id: 304,
    question:
      "Który z trybów interfejsu wiersza poleceń (CLI) pozwala użytkownikowi na dostęp do wszystkich poleceń urządzenia takich jak polecenia do konfiguracji, zarządzania i rozwiązywania problemów?",
    answers: [
      {
        option: "Tryb EXEC użytkownika",
        correct: false,
      },
      {
        option: "Uprzywilejowany tryb EXEC",
        correct: true,
      },
      {
        option: "Tryb konfiguracji globalnej",
        correct: false,
      },
      {
        option: "Tryb konfiguracji interfejsu",
        correct: false,
      },
    ],
  },
  {
    id: 305,
    question: "Do czego służy plik konfiguracji startowej w routerze Cisco?",
    answers: [
      {
        option: "W celu ułatwienia podstawowej obsługi komponentów sprzętowych urządzenia",
        correct: false,
      },
      {
        option:
          "Zawiera polecenia używane do początkowej konfiguracji routera podczas uruchamiania",
        correct: true,
      },
      {
        option: "Zawiera polecenia konfiguracyjne, których obecnie używa router IOS",
        correct: false,
      },
      {
        option:
          "Aby zapewnić ograniczoną wersję kopii zapasowej IOS, na wypadek, gdyby router nie mógł załadować w pełni funkcjonalnego IOS",
        correct: false,
      },
    ],
  },
  {
    id: 306,
    question: "Która cecha opisuje domyślną bramę komputera?",
    answers: [
      {
        option: "Logiczny adres interfejsu routera w tej samej sieci co komputer",
        correct: true,
      },
      {
        option: "Fizyczny adres interfejsu przełącznika podłączonego do komputera",
        correct: false,
      },
      {
        option: "Fizyczny adres interfejsu routera w tej samej sieci co komputer",
        correct: false,
      },
      {
        option: "Logiczny adres przypisany do interfejsu przełącznika podłączonego do routera",
        correct: false,
      },
    ],
  },
  {
    id: 307,
    question: "Jaki jest cel stosowania polecenia banner motd?",
    answers: [
      {
        option:
          "Umożliwia ustawienie komunikatu, dzięki któremu użytkownicy sieci LAN będą mogli rozpoznawać dokumenty drukowane.",
        correct: false,
      },
      {
        option: "Jest to metoda używana przez routery do wymiany informacji o stanie łączy.",
        correct: false,
      },
      {
        option:
          "Jest to prosty sposób komunikacji z użytkownikami dołączonymi do sieci LAN routera.",
        correct: false,
      },
      {
        option: "Jest to metoda generowania ogłoszeń dla użytkowników logujących się do routera.",
        correct: true,
      },
    ],
  },
  {
    id: 308,
    question:
      "Technik konfiguruje router, aby umożliwić wszystkie formy dostępu do zarządzania. W ramach każdego rodzaju dostępu technik próbuje wpisać polecenie login.. Który tryb konfiguracji należy wprowadzić, aby wykonać to zadanie?",
    answers: [
      {
        option: "Tryb EXEC użytkownika",
        correct: false,
      },
      {
        option: "Tryb konfiguracji globalnej",
        correct: false,
      },
      {
        option: "Jakikolwiek tryb konfiguracji linii",
        correct: true,
      },
      {
        option: "Uprzywilejowany tryb EXEC",
        correct: false,
      },
    ],
  },
  {
    id: 309,
    question: "Co jest przechowywane w NVRAM routera Cisco?",
    answers: [
      {
        option: "The Cisco IOS",
        correct: false,
      },
      {
        option: "Bieżąca konfiguracja",
        correct: false,
      },
      {
        option: "Instrukcje procesu rozruchu",
        correct: false,
      },
      {
        option: "Konfiguracja startowa",
        correct: true,
      },
    ],
  },
  {
    id: 310,
    question: "Które stwierdzenie dotyczące polecenia service password-encryption jest prawdziwe?",
    answers: [
      {
        option: "Jest konfigurowane w trybie uprzywilejowanym EXEC.",
        correct: false,
      },
      {
        option: "Szyfruje tylko hasła linii.",
        correct: false,
      },
      {
        option:
          "Gdy tylko polecenie service password-encryption zostanie wprowadzone, wszystkie aktualnie ustawione hasła poprzednio wyświetlane w zwykłym tekście są szyfrowane.",
        correct: true,
      },
      {
        option:
          "Aby zobaczyć hasła zaszyfrowane przez poleceniem service password-encryption jako zwykły tekst, wydaj polecenie no service password-encryption.",
        correct: false,
      },
    ],
  },
  {
    id: 311,
    question:
      "Host-A has the IPv4 address and subnet mask 10.5.4.100 255.255.255.0. What is the network address of Host-A?",
    answers: [
      {
        option: "10.0.0.0",
        correct: false,
      },
      {
        option: "10.5.0.0",
        correct: false,
      },
      {
        option: "10.5.4.0",
        correct: true,
      },
      {
        option: "10.5.4.100",
        correct: false,
      },
    ],
  },
  {
    id: 312,
    question:
      "Host-A has the IPv4 address and subnet mask 172.16.4.100 255.255.0.0. What is the network address of Host-A?",
    answers: [
      {
        option: "172.0.0.0",
        correct: false,
      },
      {
        option: "172.16.0.0",
        correct: true,
      },
      {
        option: "172.16.4.0",
        correct: false,
      },
      {
        option: "172.16.4.100",
        correct: false,
      },
    ],
  },
  {
    id: 313,
    question:
      "Host-A has the IPv4 address and subnet mask 10.5.4.100 255.255.255.0. Which of the following IPv4 addresses would be on the same network as Host-A?",
    multi: true,
    answers: [
      {
        option: "10.5.4.1",
        correct: true,
      },
      {
        option: "10.5.0.1",
        correct: false,
      },
      {
        option: "10.5.4.99",
        correct: true,
      },
      {
        option: "10.0.0.98",
        correct: false,
      },
      {
        option: "10.5.100.4",
        correct: false,
      },
    ],
  },
  {
    id: 314,
    question:
      "Host-A has the IPv4 address and subnet mask 172.16.4.100 255.255.0.0. Which of the following IPv4 addresses would be on the same network as Host-A?",
    multi: true,
    answers: [
      {
        option: "172.16.4.99",
        correct: true,
      },
      {
        option: "172.16.0.1",
        correct: true,
      },
      {
        option: "172.17.4.99",
        correct: false,
      },
      {
        option: "172.17.4.1",
        correct: false,
      },
      {
        option: "172.18.4.1",
        correct: false,
      },
    ],
  },
  {
    id: 315,
    question:
      "Host-A has the IPv4 address and subnet mask 192.168.1.50 255.255.255.0. Which of the following IPv4 addresses would be on the same network as Host-A?",
    multi: true,
    answers: [
      {
        option: "192.168.0.1",
        correct: false,
      },
      {
        option: "192.168.0.100",
        correct: false,
      },
      {
        option: "192.168.1.1",
        correct: true,
      },
      {
        option: "192.168.1.100",
        correct: true,
      },
      {
        option: "192.168.2.1",
        correct: false,
      },
    ],
  },

  {
    id: 316,
    question:
      "Które dwa stwierdzenia dotyczące prywatnych adresów IPv4 są poprawne? (Wybierz dwie odpowiedzi.)",
    multi: true,
    answers: [
      {
        option:
          "Prywatne adresy IPv4 są przypisywane do urządzeń w sieci intranetowej organizacji (sieci wewnętrznej).",
        correct: true,
      },
      {
        option:
          "Routery internetowe zazwyczaj przesyłają dowolny pakiet z adresem docelowym, który jest prywatnym adresem IPv4.",
        correct: false,
      },
      {
        option: "172.99.1.1 jest prywatnym adresem IPv4.",
        correct: false,
      },
      {
        option: "Każda organizacja (dom, szkoła, biuro, firma) może korzystać z adresu 10.0.0.0/8.",
        correct: true,
      },
    ],
  },
  {
    id: 317,
    question:
      "Które dwa stwierdzenia dotyczące publicznych adresów IPv4 są poprawne? (Wybierz dwie odpowiedzi.)",
    multi: true,
    answers: [
      {
        option:
          "Publiczne adresy IPv4 mogą być przypisane do urządzeń w sieci intranetowej organizacji (wewnętrznej sieci).",
        correct: false,
      },
      {
        option:
          "Aby uzyskać dostęp do urządzenia z Internetu, docelowy adres IPv4 musi być adresem publicznym.",
        correct: true,
      },
      {
        option: "192.168.1.10 jest publicznym adresem IPv4.",
        correct: false,
      },
      {
        option:
          "Wyczerpanie publicznego adresu IPv4 jest powodem, dla którego istnieje prywatny adres IPv4 i dlatego organizacje przechodzą na IPv6.",
        correct: true,
      },
    ],
  },
  {
    id: 318,
    question:
      "Która organizacja lub grupa organizacji otrzymuje adresy IP od IANA i jest odpowiedzialna za przydzielanie tych adresów do ISP i niektórym organizacjom?",
    answers: [
      {
        option: "IETF",
        correct: false,
      },
      {
        option: "EEE",
        correct: false,
      },
      {
        option: "RIR",
        correct: true,
      },
      {
        option: "ISP poziomu 1",
        correct: false,
      },
    ],
  },
  {
    id: 319,
    question: "Które urządzenia nie będą przesyłać domyślnie pakietu rozgłoszeniowego IPv4?",
    answers: [
      {
        option: "Przełącznik Ethernet",
        correct: false,
      },
      {
        option: "Router",
        correct: true,
      },
      {
        option: "PC z systemem Windows",
        correct: false,
      },
      {
        option:
          "Żadne z powyższych wszystkie urządzenia przesyłają domyślnie pakiety rozgłoszeniowe IPv4.",
        correct: false,
      },
    ],
  },
  {
    id: 320,
    question:
      "Które dwie sytuacje są wynikiem nadmiernego ruchu rozgłoszeniowego? (Wybierz dwie odpowiedzi.)",
    multi: true,
    answers: [
      {
        option: "Powolne działanie sieci",
        correct: true,
      },
      {
        option: "Powolne działanie urządzeń",
        correct: true,
      },
      {
        option: "Gdy dotyczy to urządzeń we wszystkich sąsiednich sieciach",
        correct: false,
      },
      {
        option: "Gdy router musi przesłać nadmierną liczbę pakietów",
        correct: false,
      },
    ],
  },

  {
    id: 321,
    question: "Jaka jest długość prefiksu dla maski podsieci 255.255.255.224?",
    answers: [
      {
        option: "/25",
        correct: false,
      },
      {
        option: "/26",
        correct: false,
      },
      {
        option: "/27",
        correct: true,
      },
      {
        option: "/28",
        correct: false,
      },
    ],
  },
  {
    id: 322,
    question:
      "Ile poprawnych adresów hostów jest dostępnych w podsieci IPv4 skonfigurowanej za pomocą maski /26?",
    answers: [
      {
        option: "254",
        correct: false,
      },
      {
        option: "190",
        correct: false,
      },
      {
        option: "192",
        correct: false,
      },
      {
        option: "62",
        correct: true,
      },
      {
        option: "64",
        correct: false,
      },
    ],
  },
  {
    id: 323,
    question: "Która maska podsieci będzie używana, jeśli 5 bitów hosta będzie dostępne?",
    answers: [
      {
        option: "255.255.255.0",
        correct: false,
      },
      {
        option: "255.255.255.128",
        correct: false,
      },
      {
        option: "255.255.255.224",
        correct: false,
      },
      {
        option: "255.255.255.240",
        correct: false, // no this
      },
    ],
  },
  {
    id: 324,
    question:
      "Administrator sieci tworzy podsieci z 192.168.10.0/24 na podsieci z maskami /26. Ile utworzonych podsieci o równej wielkości?",
    answers: [
      {
        option: "1",
        correct: false,
      },
      {
        option: "2",
        correct: false,
      },
      {
        option: "4",
        correct: true,
      },
      {
        option: "8",
        correct: false,
      },
      {
        option: "16",
        correct: false,
      },
      {
        option: "64",
        correct: false,
      },
    ],
  },
  {
    id: 325,
    question: "Jaką maskę podsieci reprezentuje notacja /20?",
    answers: [
      {
        option: "255.255.255.248",
        correct: false,
      },
      {
        option: "255.255.224.0",
        correct: false,
      },
      {
        option: "255.255.240.0",
        correct: true,
      },
      {
        option: "255.255.255.0",
        correct: false,
      },
      {
        option: "255.255.255.192",
        correct: false,
      },
    ],
  },
  {
    id: 326,
    question: "Które stwierdzenie jest prawdziwe o podziale o zmiennej długości maski?",
    answers: [
      {
        option: "Każda z podsieci posiada taki sam rozmiar.",
        correct: false,
      },
      {
        option: "Wielkość każdej podsieci może być różna, w zależności od wymagań.",
        correct: true,
      },
      {
        option: "Podsieci mogą być podzielone na podsieci tylko jeden dodatkowy raz.",
        correct: false,
      },
      {
        option: "Bity są zwracane, a nie pożyczane, aby utworzyć dodatkowe podsieci.",
        correct: false,
      },
    ],
  },
  {
    id: 327,
    question:
      "Dlaczego urządzenie warstwy 3 wykonuje operację AND na docelowym adresie IP i masce podsieci?",
    answers: [
      {
        option: "Aby zidentyfikować adres rozgłoszeniowy sieci docelowej",
        correct: false,
      },
      {
        option: "W celu identyfikacji adresu hosta docelowego",
        correct: false,
      },
      {
        option: "Aby zidentyfikować wadliwe ramki",
        correct: false,
      },
      {
        option: "Aby zidentyfikować adres sieci docelowej",
        correct: true,
      },
    ],
  },
  {
    id: 328,
    question: "Ile użytecznych adresów IP jest dostępnych w sieci 192.168.1.0/27?",
    answers: [
      {
        option: "256",
        correct: false,
      },
      {
        option: "254",
        correct: false,
      },
      {
        option: "62",
        correct: false,
      },
      {
        option: "30",
        correct: true,
      },
      {
        option: "16",
        correct: false,
      },
      {
        option: "32",
        correct: false,
      },
    ],
  },
  {
    id: 329,
    question: "Która maska podsieci będzie używana, jeśli dokładnie 4 bity hosta są dostępne?",
    answers: [
      {
        option: "255.255.255.224",
        correct: false,
      },
      {
        option: "255.255.255.128",
        correct: false,
      },
      {
        option: "255.255.255.240",
        correct: true,
      },
      {
        option: "255.255.255.248",
        correct: false,
      },
    ],
  },
  {
    id: 330,
    question: "Które dwie części są składnikami adresu IPv4? (Wybierz dwie odpowiedzi.)",
    multi: true,
    answers: [
      {
        option: "Część identyfikująca podsieć",
        correct: false,
      },
      {
        option: "Część identyfikująca sieć",
        correct: true,
      },
      {
        option: "Fragment logiczny",
        correct: false,
      },
      {
        option: "Część identyfikująca hosta",
        correct: true,
      },
      {
        option: "Część fizyczna",
        correct: false,
      },
      {
        option: "Część rozgłoszeniowa",
        correct: false,
      },
    ],
  },

  {
    id: 331,
    question:
      "Jeśli urządzenie sieciowe ma maskę /26, ile adresów IP jest dostępnych dla hostów w tej sieci?",
    answers: [
      {
        option: "64",
        correct: false,
      },
      {
        option: "30",
        correct: false,
      },
      {
        option: "62",
        correct: true,
      },
      {
        option: "32",
        correct: false,
      },
      {
        option: "16",
        correct: false,
      },
      {
        option: "14",
        correct: false,
      },
    ],
  },
  {
    id: 332,
    question: "Co reprezentuje adres IP 172.17.4.250/24?",
    answers: [
      {
        option: "Adres sieci",
        correct: false,
      },
      {
        option: "Adres grupowy",
        correct: false,
      },
      {
        option: "Adres hosta",
        correct: true,
      },
      {
        option: "Adres rozgłoszeniowy",
        correct: false,
      },
    ],
  },
  {
    id: 333,
    question:
      "Jeśli urządzenie sieciowe ma maskę /28, ile adresów IP jest dostępnych dla hostów w tej sieci?",
    answers: [
      {
        option: "256",
        correct: false,
      },
      {
        option: "254",
        correct: false,
      },
      {
        option: "62",
        correct: false,
      },
      {
        option: "32",
        correct: false,
      },
      {
        option: "16",
        correct: false,
      },
      {
        option: "14",
        correct: true,
      },
    ],
  },
  {
    id: 334,
    question: "Jaki jest cel maski podsieci w połączeniu z adresem IP?",
    answers: [
      {
        option: "Aby jednoznacznie zidentyfikować hosta w sieci",
        correct: false,
      },
      {
        option: "W celu ustalenia, czy adres jest publiczny czy prywatny",
        correct: false,
      },
      {
        option: "Aby określić podsieć, do której należy host",
        correct: true,
      },
      {
        option: "Aby zamaskować adres IP dla osób z zewnątrz",
        correct: false,
      },
    ],
  },
  {
    id: 335,
    question:
      "Administrator sieci podzielił sieć na podsieci ze zmienną długością maski. Najmniejsza podsieć ma maskę 255.255.255.224. Ile użytecznych adresów hosta zapewni ta podsieć?",
    answers: [
      {
        option: "2",
        correct: false,
      },
      {
        option: "6",
        correct: false,
      },
      {
        option: "14",
        correct: false,
      },
      {
        option: "30",
        correct: true,
      },
      {
        option: "62",
        correct: false,
      },
    ],
  },
  {
    id: 336,
    question: "Jaki jest najważniejszy czynnik motywujący do przejścia do IPv6?",
    answers: [
      {
        option: "Lepsza wydajność z IPv6",
        correct: false,
      },
      {
        option: "Adresy IPv6, z którymi łatwiej pracować",
        correct: false,
      },
      {
        option: "Lepsze bezpieczeństwo z IPv6",
        correct: false,
      },
      {
        option: "Wyczerpanie adresów IPv4",
        correct: true,
      },
    ],
  },
  {
    id: 337,
    question:
      "Prawda lub fałsz: 4 na 5 RIP nie mają już wystarczającej ilości adresów IPv4, aby regularnie przydzielać je klientom.",
    answers: [
      {
        option: "Prawda",
        correct: false,
      },
      {
        option: "Fałsz",
        correct: true,
      },
    ],
  },
  {
    id: 338,
    question: "Która z poniższych technik używa natywnej łączności IPv6?",
    answers: [
      {
        option: "Podwójny stos",
        correct: true,
      },
      {
        option: "Tunelowanie",
        correct: false, // no this
      },
      {
        option: "Translacja",
        correct: false,
      },
      {
        option: "Wszystkie powyższe",
        correct: false,
      },
    ],
  },
  {
    id: 339,
    question: "Jaki jest najważniejszy czynnik motywujący do przejścia do IPv6?",
    answers: [
      {
        option: "Lepsza wydajność z IPv6",
        correct: false,
      },
      {
        option: "Adresy IPv6, z którymi łatwiej pracować",
        correct: false,
      },
      {
        option: "Lepsze bezpieczeństwo z IPv6",
        correct: false,
      },
      {
        option: "Wyczerpanie adresów IPv4",
        correct: true,
      },
    ],
  },
  {
    id: 340,
    question:
      "Prawda lub fałsz: 4 na 5 RIP nie mają już wystarczającej ilości adresów IPv4, aby regularnie przydzielać je klientom.",
    answers: [
      {
        option: "Prawda",
        correct: true,
      },
      {
        option: "Fałsz",
        correct: false,
      },
    ],
  },
  {
    id: 341,
    question: "Która z poniższych technik używa natywnej łączności IPv6?",
    answers: [
      {
        option: "Podwójny stos",
        correct: true,
      },
      {
        option: "Tunelowanie",
        correct: false,
      },
      {
        option: "Translacja",
        correct: false,
      },
      {
        option: "Wszystkie powyższe",
        correct: false,
      },
    ],
  },
  {
    id: 342,
    question: "Jaka jest zalecana długość prefiksu dla większości podsieci IPv6?",
    answers: [
      {
        option: "/32",
        correct: false,
      },
      {
        option: "/48",
        correct: false,
      },
      {
        option: "/64",
        correct: true,
      },
      {
        option: "/128",
        correct: false,
      },
    ],
  },
  {
    id: 343,
    question: "Która część adresu GUA jest przypisana przez dostawcę usług internetowych?",
    answers: [
      {
        option: "Prefiks routingu globalnego",
        correct: true,
      },
      {
        option: "Prefiks routingu globalnego i identyfikator podsieci",
        correct: false,
      },
      {
        option: "Prefiks",
        correct: false,
      },
      {
        option: "Prefiks RIR",
        correct: false,
      },
    ],
  },
  {
    id: 344,
    question: "Jaki typ adresu IPv6 unicast nie jest routowany między sieciami?",
    answers: [
      {
        option: "Unikalny adres lokalny",
        correct: false, // no this
      },
      {
        option: "GUA",
        correct: false,
      },
      {
        option: "Wbudowany adres IPv4",
        correct: false,
      },
      {
        option: "LLA",
        correct: true,
      },
    ],
  },
  {
    id: 345,
    question:
      "Prawda lub False: Pole identyfikatora podsieci w GUA musi pożyczyć bity z identyfikatora interfejsu.",
    answers: [
      {
        option: "Prawda",
        correct: false,
      },
      {
        option: "Fałsz",
        correct: true,
      },
    ],
  },
  {
    id: 346,
    question: "Jaki typ adresu IPv6 zaczyna się od fe80?",
    answers: [
      {
        option: "GUA",
        correct: false,
      },
      {
        option: "LLA",
        correct: true,
      },
      {
        option: "Adres multicast",
        correct: false,
      },
      {
        option: "Brak. Adres IPv6 musi zaczynać się od 2001",
        correct: false,
      },
    ],
  },
  {
    id: 347,
    question:
      "Prawda czy fałsz. Wiadomości RA są wysyłane do wszystkich routerów IPv6 przez hosty żądające informacji adresowych.",
    answers: [
      {
        option: "Prawda",
        correct: false,
      },
      {
        option: "Fałsz",
        correct: true,
      },
    ],
  },
  {
    id: 348,
    question:
      "Która dynamiczna metoda adresowania GUA jest tą, w której urządzenia polegają wyłącznie na zawartości komunikatu RA dla swoich informacji adresowych?",
    answers: [
      {
        option: "Metoda 1: SLAAC",
        correct: true,
      },
      {
        option: "Metoda 2: SLAAC i bezstanowy DHCPv6",
        correct: false,
      },
      {
        option: "Metoda 3: Stanowy DHCPv6",
        correct: false,
      },
    ],
  },
  {
    id: 349,
    question:
      "Która dynamiczna metoda adresowania GUA jest tą, w której urządzenia polegają wyłącznie na serwerze DHCPv6 dla swoich informacji adresowych?",
    answers: [
      {
        option: "Metoda 1: SLAAC",
        correct: false,
      },
      {
        option: "Metoda 2: SLAAC i bezstanowy DHCPv6",
        correct: false,
      },
      {
        option: "Metoda 3: Stanowy DHCPv6",
        correct: true,
      },
    ],
  },
  {
    id: 350,
    question:
      "Która dynamiczna metoda adresowania GUA jest tą, w której urządzenia otrzymują konfigurację IPv6 w komunikacie RA i żądają informacji DNS z serwera DHCPv6?",
    answers: [
      {
        option: "Metoda 1: SLAAC",
        correct: false,
      },
      {
        option: "Metoda 2: SLAAC i bezstanowy DHCPv6",
        correct: true,
      },
      {
        option: "Metoda 3: Stanowy DHCPv6",
        correct: false,
      },
    ],
  },
  {
    id: 351,
    question:
      "Jakie są dwie metody, które urządzenie może wykorzystać do generowania własnego identyfikatora interfejsu IPv6?",
    multi: true,
    answers: [
      {
        option: "SLAAC",
        correct: false,
      },
      {
        option: "Bezstanowe DHCPv6",
        correct: false,
      },
      {
        option: "Stanowe DHCPv6",
        correct: false,
      },
      {
        option: "EUI-64",
        correct: true,
      },
      {
        option: "Generowany losowo",
        correct: true,
      },
    ],
  },
  {
    id: 352,
    question: "Prawda czy fałsz? IPv6 został zaprojektowany z myślą o tworzeniu podsieci.",
    answers: [
      {
        option: "Prawda",
        correct: true,
      },
      {
        option: "Fałsz",
        correct: false,
      },
    ],
  },
  {
    id: 353,
    question: "Które pole w GUA IPv6 służy do tworzenia podsieci?",
    answers: [
      {
        option: "Prefiks",
        correct: false,
      },
      {
        option: "Sieć",
        correct: false,
      },
      {
        option: "Prefiks routingu globalnego",
        correct: false,
      },
      {
        option: "Identyfikator podsieci",
        correct: true,
      },
      {
        option: "Identyfikator interfejsu",
        correct: false,
      },
    ],
  },
  {
    id: 354,
    question:
      "Biorąc pod uwagę prefiks routingu globalnego /48 i przedrostek /64, jaka jest część podsieci następującego adresu: 2001:db8:cafe:1111:2222:33:4444:5555",
    answers: [
      {
        option: "Café",
        correct: false,
      },
      {
        option: "1111",
        correct: true,
      },
      {
        option: "2222",
        correct: false,
      },
      {
        option: "3333",
        correct: false,
      },
      {
        option: "4444",
        correct: false,
      },
    ],
  },
  {
    id: 355,
    question:
      "Biorąc pod uwagę /32 jako prefiks routingu globalnego i /64 jako prefiks, ile bitów zostanie przydzielonych do identyfikatora podsieci?",
    answers: [
      {
        option: "8",
        correct: false,
      },
      {
        option: "16",
        correct: false,
      },
      {
        option: "32",
        correct: true,
      },
      {
        option: "48",
        correct: false,
      },
      {
        option: "64",
        correct: false,
      },
    ],
  },
  {
    id: 356,
    question:
      "Jaki jest prawidłowy najbardziej skompresowany format adresu IPv6 2001:0DB8:0000:AB00:0000:0000:1234?",
    answers: [
      {
        option: "2001::/64",
        correct: true,
      },
      {
        option: "2001:DB8::/64​",
        correct: false, // no this
      },
      {
        option: "2001:DB8:AA04::/64​",
        correct: false,
      },
      {
        option: "2001:DB8:AA04:B5::/64​",
        correct: false,
      },
    ],
  },
  {
    id: 357,
    question: "Jaki jest prefiks związany z adresem IPv6 2001:CA48:D15:EA:CC44::1/64?",
    answers: [
      {
        option: "2001::/64",
        correct: false, // no this
      },
      {
        option: "2001:DB8::/64​",
        correct: false, // no this
      },
      {
        option: "2001:DB8:D15:EA::/64​",
        correct: false,
      },
      {
        option: "2001:DB8:D15:EA:CC44::/64​",
        correct: false,
      },
    ],
  },
  {
    id: 358,
    question:
      "Jaki typ adresu jest automatycznie przypisywany do interfejsu, gdy protokół IPv6 jest włączony na tym interfejsie?",
    answers: [
      {
        option: "The host is cabled properly.",
        correct: false, // no this
      },
      {
        option: "The default gateway address is correctly configured.",
        correct: false,
      },
      {
        option: "Pętla zwrotna.",
        correct: false,
      },
      {
        option: "The link-local address is correctly configured.",
        correct: false, // no this
      },
    ],
  },
  {
    id: 359,
    question:
      "Który prefiks sieci IPv6 jest przeznaczony tylko dla lokalnych połączeń i nie może być routowany?",
    answers: [
      {
        option: "2001::/3",
        correct: false,
      },
      {
        option: "FC00::/7",
        correct: false, // no this
      },
      {
        option: "2001:0db8:abcd::0001",
        correct: true,
      },
      {
        option: "2001:0db8:0000:abcd::1",
        correct: false,
      },
    ],
  },
  {
    id: 360,
    question: "Jaki jest cel stosowania polecenia ping ::1?",
    answers: [
      {
        option: "It tests the internal configuration of an IPv6 host.",
        correct: true,
      },
      {
        option: "It tests the broadcast capability of all hosts on the subnet.",
        correct: false,
      },
      {
        option: "It tests the multicast connectivity to all hosts on the subnet.",
        correct: false,
      },
      {
        option: "It tests the reachability of the default gateway for the network.",
        correct: false,
      },
    ],
  },
  {
    id: 361,
    question:
      "Jaki jest identyfikator interfejsu adresu IPv6 2001:DB8::1000:A9CD:47FF:FE57:FE94/64?",
    answers: [
      {
        option: "It tests the internal configuration of an IPv6 host.",
        correct: false, // no this
      },
      {
        option: "It tests the broadcast capability of all hosts on the subnet.",
        correct: false,
      },
      {
        option: "It tests the multicast connectivity to all hosts on the subnet.",
        correct: false,
      },
      {
        option: "It tests the reachability of the default gateway for the network.",
        correct: false,
      },
      {
        option: "1000:A9CD:47FF:FE57:FE94",
        correct: false, // no this
      },
    ],
  },
  {
    id: 362,
    question: "Jaki jest adres podsieci dla adresu IPv6 2001:D12:AA04:B5::1/64?",
    answers: [
      {
        option: "2001::/64",
        correct: false,
      },
      {
        option: "2001:DB8::/64​",
        correct: false,
      },
      {
        option: "2001:DB8:AA04::/64​",
        correct: false,
      },
      {
        option: "2001:DB8:AA04:B5::/64​",
        correct: true,
      },
    ],
  },
  {
    id: 363,
    question: "Jaki typ adresu nie istnieje w wersji IPv6?",
    answers: [
      {
        option: "Private",
        correct: false,
      },
      {
        option: "Multicast",
        correct: false,
      },
      {
        option: "Unicast",
        correct: false,
      },
      {
        option: "Broadcast",
        correct: true,
      },
    ],
  },
  {
    id: 364,
    question: "Co oznacza pozytywne wykonanie ping do adresu ::1 IPv6?",
    answers: [
      {
        option: "The host is cabled properly.",
        correct: false,
      },
      {
        option: "The default gateway address is correctly configured.",
        correct: false,
      },
      {
        option: "Wszystkie hosty na lokalnym łączu są dostępne.",
        correct: false,
      },
      {
        option: "The link-local address is correctly configured.",
        correct: false,
      },
      {
        option: "IP is properly installed on the host.",
        correct: true,
      },
    ],
  },
  {
    id: 365,
    question:
      "Jak wygląda najbardziej skompresowana postać adresu IPv6 2001:0000:0000:abcd:0000:0000:0000:0001?",
    answers: [
      {
        option: "2001:0db8:abcd::1",
        correct: false,
      },
      {
        option: "2001:db8:0:abcd::1",
        correct: false,
      },
      {
        option: "2001:0db8:abcd::0001",
        correct: true,
      },
      {
        option: "2001:0db8:0000:abcd::1",
        correct: false,
      },
      {
        option: "2001:db8::abcd:0:1",
        correct: false, // no this
      },
    ],
  },
  {
    id: 366,
    question:
      "Jaka jest minimalna konfiguracja interfejsu routera, który uczestniczy w routingu IPv6?",
    answers: [
      {
        option: "To have a link-local IPv6 address",
        correct: true,
      },
      {
        option: "To have both an IPv4 and an IPv6 address",
        correct: false,
      },
      {
        option: "To have a self-generated loopback address",
        correct: false,
      },
      {
        option: "To have both a link-local and a global unicast IPv6 address",
        correct: false,
      },
    ],
  },
  {
    id: 367,
    question: "Jaki adres jest wymagany, co najmniej, na interfejsach obsługujących protokół IPv6?",
    answers: [
      {
        option: "Link-local",
        correct: true,
      },
      {
        option: "Unique local",
        correct: false,
      },
      {
        option: "Site local",
        correct: false,
      },
      {
        option: "Global unicast",
        correct: false,
      },
    ],
  },
  {
    id: 368,
    question: "Jakie są trzy części globalnego adresu unicast IPv6? (Wybierz trzy odpowiedzi).",
    answers: [
      {
        option:
          "Identyfikator interfejsu, który jest używany do identyfikacji sieci lokalnej dla określonego hosta",
        correct: false,
      },
      {
        option:
          "Prefiks routingu globalnego, który jest używany do identyfikacji części adresu sieci, przydzielonego przez ISP",
        correct: true,
      },
      {
        option:
          "Identyfikator podsieci, który jest używany do identyfikacji sieci wewnątrz przedsiębiorstwa",
        correct: true,
      },
      {
        option:
          "Prefiks routingu globalnego, który jest używany do identyfikacji części adresu sieciowego dostarczonego przez lokalnego administratora",
        correct: false,
      },
      {
        option:
          "Identyfikator interfejsu, który jest używany do identyfikacji lokalnego hosta w sieci",
        correct: true,
      },
    ],
    multi: true,
  },
  {
    id: 369,
    question:
      "Dla Twojej organizacji został przydzielony przez usługodawcę prefiks IPv6 2001:0000:130F::/48. Przy pomocy tego prefiksu, ile bitów jest dostępnych dla twojej organizacji do tworzenia podsieci, jeśli bity identyfikatora interfejsu nie są pożyczone?",
    answers: [
      {
        option: "To have a link-local IPv6 address",
        correct: false,
      },
      {
        option: "16",
        correct: true,
      },
      {
        option: "80",
        correct: false,
      },
      {
        option: "128",
        correct: false,
      },
    ],
  },
  {
    id: 370,
    question:
      "Jaki typ adresu IPv6 nie jest routowalny i wykorzystywany jest tylko do komunikacji w lokalnej podsieci?",
    answers: [
      {
        option: "GUA",
        correct: false,
      },
      {
        option: "LLA",
        correct: true,
      },
      {
        option: "Adres pętli zwrotnej",
        correct: false,
      },
      {
        option: "ULA",
        correct: false,
      },
      {
        option: "Adres nieokreślony",
        correct: false,
      },
    ],
  },
  {
    id: 371,
    question:
      "Jakie dwa typy komunikatów ICMP są wspólne dla ICMPv4 i ICMPv6? (Wybierz dwie odpowiedzi.)",
    answers: [
      {
        option: "Przeznaczenie lub usługa niedostępna",
        correct: true,
      },
      {
        option: "Odwzorowanie hosta",
        correct: false,
      },
      {
        option: "Konfiguracja IP",
        correct: false,
      },
      {
        option: "Źródło nieosiągalne",
        correct: false, // no this
      },
      {
        option: "Przekroczenie czasu",
        correct: true,
      },
    ],
    multi: true,
  },

  {
    id: 372,
    question:
      "Jaki typ komunikatu ICMPv6 wysyła host w celu uzyskania konfiguracji IPv6 podczas uruchamiania?",
    answers: [
      {
        option: "Komunikat Neighbor Advertisement (NA)",
        correct: false,
      },
      {
        option: "Komunikat Neighbor Solicitation (NS)",
        correct: false,
      },
      {
        option: "Komunikat Router Advertisement (RA)",
        correct: false,
      },
      {
        option: "Komunikat Router Solicitation (RS)",
        correct: true,
      },
    ],
  },

  {
    id: 373,
    question:
      "Technik rozwiązuje problem z siecią. Podejrzewa się, że uszkodzony węzeł w ścieżce sieciowej powoduje odrzucanie pakietów. Technik ma tylko adres IP urządzenia końcowego i nie ma żadnych informacji o urządzeniach pośredniczących. Którego polecenia może technik użyć do identyfikacji uszkodzonego węzła?",
    answers: [
      {
        option: "The PC can access the network. The problem exists beyond the local network.",
        correct: true,
      },
      {
        option: "The IP address obtained from the DHCP server is correct.",
        correct: false,
      },
      {
        option: "The PC can access the Internet. However, the web browser may not work.",
        correct: false,
      },
      {
        option: "The TCP/IP implementation is functional.",
        correct: false,
      },
    ],
  },
  {
    id: 374,
    question:
      "Użytkownik, który nie jest w stanie połączyć się z serwerem plików kontaktuje się z działem pomocy. Pracownik działu pomocy prosi użytkownika, aby użył polecenia ping, aby zbadać dostępność adresu IP bramy domyślnej, która jest skonfigurowana na stacji roboczej. Jaki jest cel użycia polecenia ping?",
    answers: [
      {
        option: "To obtain a dynamic IP address from the server",
        correct: false,
      },
      {
        option: "To request that gateway forward the connection request to the file server",
        correct: false,
      },
      {
        option: "To test that the host has the capability to reach hosts on other networks",
        correct: true,
      },
      {
        option: "To resolve the domain name of the file server to its IP address",
        correct: false,
      },
    ],
  },
  {
    id: 375,
    question:
      "Jaka jest funkcja polecenia tracert, które różni się od polecenia ping, gdy są używane na stacji roboczej?",
    answers: [
      {
        option: "Polecenie tracert dociera do celu szybciej.",
        correct: false,
      },
      {
        option: "Polecenie tracert pokazuje informacje o routerach na ścieżce.",
        correct: true,
      },
      {
        option: "Polecenie tracert wysyła jeden komunikat ICMP do każdego skoku na ścieżce.",
        correct: false,
      },
      {
        option: "Polecenie tracert służy do testowania połączenia między hostami.",
        correct: false,
      },
    ],
  },
  {
    id: 376,
    question:
      "Która wiadomość ICMP jest używana przez narzędzie traceroute podczas procesu znajdowania ścieżki między dwoma hostami końcowymi?",
    answers: [
      {
        option: "Redirect",
        correct: false,
      },
      {
        option: "Ping",
        correct: false,
      },
      {
        option: "Time exceeded",
        correct: true,
      },
      {
        option: "Destination unreachable",
        correct: false,
      },
    ],
  },
  {
    id: 377,
    question: "Które narzędzie korzysta z protokołu ICMP (Internet Control Messaging Protocol)?",
    answers: [
      {
        option: "RIP",
        correct: false,
      },
      {
        option: "DNS",
        correct: false,
      },
      {
        option: "Ping",
        correct: true,
      },
      {
        option: "NTP",
        correct: false,
      },
    ],
  },
  {
    id: 378,
    question:
      "Który protokół jest używany przez IPv4 i IPv6 do dostarczania komunikatów o błędach?",
    answers: [
      {
        option: "ICMP",
        correct: true,
      },
      {
        option: "NDP",
        correct: false,
      },
      {
        option: "ARP",
        correct: false,
      },
      {
        option: "DHCP",
        correct: false,
      },
    ],
  },
  {
    id: 379,
    question: "Które stwierdzenie opisuje własności narzędzia traceroute?",
    answers: [
      {
        option: "!",
        correct: false,
      },
      {
        option: ".",
        correct: false,
      },
      {
        option: "U",
        correct: false, // no this
      },
      {
        option: "$",
        correct: false,
      },
    ],
  },
  {
    id: 380,
    question:
      "Które dwie rzeczy można ustalić na podstawie polecenia ping? (Wybierz dwie odpowiedzi.)",
    answers: [
      {
        option: "Liczbę routerów pomiędzy urządzeniem źródłowym i docelowym",
        correct: false,
      },
      {
        option: "Adres IP routera położonego jak najbliżej urządzenia docelowego",
        correct: false,
      },
      {
        option: "Średni czas przejścia pakietu do celu oraz powrotu odpowiedzi do źródła",
        correct: true,
      },
      {
        option: "Osiągalność urządzenia docelowego w sieci",
        correct: true,
      },
      {
        option:
          "The average time it takes each router in the path between source and destination to respond",
        correct: false,
      },
    ],
    multi: true,
  },
  {
    id: 381,
    question:
      "Użytkownik dzwoni, aby zgłosić, że komputer nie może uzyskać dostępu do Internetu. Technik sieciowy prosi użytkownika o wydanie polecenia ping 127.0.0.1 w oknie wiersza polecenia. Użytkownik zgłasza, że wynikiem są cztery pozytywne odpowiedzi. Jaki wniosek można wyciągnąć na podstawie tego testu łączności?",
    answers: [
      {
        option: "The PC can access the network. The problem exists beyond the local network.",
        correct: false,
      },
      {
        option: "The IP address obtained from the DHCP server is correct.",
        correct: false,
      },
      {
        option: "The PC can access the Internet. However, the web browser may not work.",
        correct: false,
      },
      {
        option: "The TCP/IP implementation is functional.",
        correct: true,
      },
    ],
  },
  {
    id: 382,
    question:
      "Które polecenie może być używane do testowania łączności między dwoma urządzeniami za pomocą żądania echa i echa wiadomości odpowiedzi?",
    answers: [
      {
        option: "To obtain a dynamic IP address from the server",
        correct: false,
      },
      {
        option: "To request that gateway forward the connection request to the file server",
        correct: false,
      },
      {
        option: "To test that the host has the capability to reach hosts on other networks",
        correct: false, // no this
      },
      {
        option: "To resolve the domain name of the file server to its IP address",
        correct: false,
      },
    ],
  },
  {
    id: 383,
    question: "Jaka zawartość pola jest używana przez ICMPv6 do stwierdzenia, że pakiet wygasł?",
    answers: [
      {
        option: "Pole TTL",
        correct: false,
      },
      {
        option: "Pole CRC",
        correct: false,
      },
      {
        option: "Pole limit przeskoków",
        correct: true,
      },
      {
        option: "Pole przekroczenie czasu",
        correct: false,
      },
    ],
  },
  {
    id: 384,
    question:
      "Który protokół zapewnia hostowi źródłowemu informację zwrotną na temat błędów w dostarczaniu pakietów?",
    answers: [
      {
        option: "Redirect",
        correct: false,
      },
      {
        option: "BOOTP",
        correct: false,
      },
      {
        option: "Time exceeded",
        correct: false,
      },
      {
        option: "Destination unreachable",
        correct: true,
      },
    ],
  },
  {
    id: 385,
    question:
      "Administrator sieci może wykonać polecenie ping w kierunku serwera www.cisco.com, natomiast nie może w kierunku serwera www przedsiębiorstwa umieszczonego u dostawcy usług internetowych (ISP) w innym mieście. Jakim narzędziem lub poleceniem może określić router w którym pakiet jest tracony albo usuwany?",
    answers: [
      {
        option: "ICMP",
        correct: true,
      },
      {
        option: "NDP",
        correct: false,
      },
      {
        option: "ARP",
        correct: false,
      },
      {
        option: "DHCP",
        correct: false,
      },
    ],
  },
  {
    id: 386,
    question:
      "Jaka wiadomość jest wysyłana przez hosta, aby sprawdzić unikalność adresu IPv6 przed użyciem tego adresu?",
    answers: [
      {
        option: "Wywołanie sąsiada",
        correct: true,
      },
      {
        option: "Żądanie ARP",
        correct: false,
      },
      {
        option: "Żądanie echa",
        correct: false,
      },
      {
        option: "Wywoływanie routera",
        correct: false,
      },
    ],
  },
  {
    id: 387,
    question:
      "Która warstwa jest odpowiedzialna za ustanowienie tymczasowej sesji komunikacji między źródłowymi i docelowymi aplikacjami hosta?",
    answers: [
      {
        option: "Warstwa aplikacji",
        correct: false,
      },
      {
        option: "Warstwa łącza danych",
        correct: false,
      },
      {
        option: "Warstwa sieci",
        correct: false,
      },
      {
        option: "Warstwa fizyczna",
        correct: false,
      },
      {
        option: "Warstwa transportowa",
        correct: true,
      },
    ],
  },
  {
    id: 388,
    question: "Które trzy są zadaniami warstwy transportowej? (Wybierz trzy odpowiedzi.)",
    answers: [
      {
        option: "Multipleksowanie konwersacji",
        correct: true,
      },
      {
        option: "Identyfikowanie ramki",
        correct: false,
      },
      {
        option: "Identyfikowanie informacji o routingu",
        correct: false,
      },
      {
        option: "Segmentacja i powtórne składanie segmentów",
        correct: true,
      },
      {
        option: "Śledzenie indywidualnych konwersacji",
        correct: true,
      },
    ],
    multi: true,
  },
  {
    id: 389,
    question: "Które stwierdzenie o protokołach warstwy transportowej jest prawdziwe?",
    answers: [
      {
        option: "TCP ma mniej pól niż UDP.",
        correct: false,
      },
      {
        option: "TCP jest szybszy niż UDP.",
        correct: false,
      },
      {
        option: "UDP jest definiowany jako protokół best-effort.",
        correct: true,
      },
      {
        option: "UDP zapewnia niezawodność.",
        correct: false,
      },
    ],
  },
  {
    id: 390,
    question: "Który protokół warstwy transportowej będzie używany do aplikacji VoIP?",
    answers: [
      {
        option: "Session Information Protocol (SIP)",
        correct: false,
      },
      {
        option: "Transmission Control Protocol (TCP)",
        correct: false,
      },
      {
        option: "User Datagram Protocol (UDP)",
        correct: true,
      },
      {
        option: "VoIP Transfer Protocol",
        correct: false,
      },
    ],
  },
  {
    id: 391,
    question:
      "Który protokół warstwy transportowej zapewnia niezawodne dostarczanie z zachowaniem kolejności?",
    answers: [
      {
        option: "ICMP",
        correct: false,
      },
      {
        option: "IP",
        correct: false,
      },
      {
        option: "TCP",
        correct: true,
      },
      {
        option: "UDP",
        correct: false,
      },
    ],
  },
  {
    id: 392,
    question: "Które stwierdzenie o nagłówku TCP jest prawdziwe?",
    answers: [
      {
        option: "Składa się z 4 pól w nagłówku 8-bajtowym.",
        correct: false,
      },
      {
        option: "Składa się z 8 pól w 10-bajtowym nagłówku.",
        correct: false,
      },
      {
        option: "Składa się z 10 pól w 20-bajtowym nagłówku.",
        correct: true,
      },
      {
        option: "Składa się z 20 pól w 40-bajtowym nagłówku.",
        correct: false,
      },
    ],
  },
  {
    id: 393,
    question:
      "Które dwie aplikacje wykorzystałyby protokół warstwy transportowej TCP? (Wybierz dwie odpowiedzi.)",
    answers: [
      {
        option: "FTP",
        correct: true,
      },
      {
        option: "HTTP",
        correct: true,
      },
      {
        option: "ICMP",
        correct: false,
      },
      {
        option: "TFTP",
        correct: false,
      },
      {
        option: "VoIP",
        correct: false,
      },
    ],
    multi: true,
  },
  {
    id: 394,
    question:
      "Który z poniższych jest bezstanowym protokołem warstwy transportowej dostarczania wg. najlepszych starań?",
    answers: [
      {
        option: "ICMP",
        correct: false,
      },
      {
        option: "IP",
        correct: false,
      },
      {
        option: "TCP",
        correct: false,
      },
      {
        option: "UDP",
        correct: true,
      },
    ],
  },
  {
    id: 395,
    question: "Które stwierdzenie dotyczące nagłówka UDP jest prawdziwe?",
    answers: [
      {
        option: "Składa się z 4 pól w nagłówku 8-bajtowym.",
        correct: true,
      },
      {
        option: "Składa się z 8 pól w 10-bajtowym nagłówku.",
        correct: false,
      },
      {
        option: "Składa się z 10 pól w 20-bajtowym nagłówku.",
        correct: false,
      },
      {
        option: "Składa się z 20 pól w 40-bajtowym nagłówku.",
        correct: false,
      },
    ],
  },
  {
    id: 396,
    question:
      "Które dwie aplikacje wykorzystałyby protokół warstwy transportowej UDP? (Wybierz dwie odpowiedzi.)",
    answers: [
      {
        option: "FTP",
        correct: false,
      },
      {
        option: "HTTP",
        correct: false,
      },
      {
        option: "ICMP",
        correct: false,
      },
      {
        option: "TFTP",
        correct: true,
      },
      {
        option: "VoIP",
        correct: true,
      },
    ],
    multi: true,
  },
  {
    id: 397,
    question: "Które dwa pola są takie same w nagłówku TCP i UDP? (Wybierz dwie odpowiedzi.)",
    answers: [
      {
        option: "Bity kontrolne",
        correct: false,
      },
      {
        option: "Numer portu docelowego",
        correct: true,
      },
      {
        option: "Numer sekwencyjny",
        correct: false,
      },
      {
        option: "Numer portu źródłowego",
        correct: true,
      },
      {
        option: "Dobrze znane porty",
        correct: false,
      },
    ],
    multi: true,
  },
  {
    id: 398,
    question:
      "Załóżmy, że host z adresem IP 10.1.1.10 chce żądać usług internetowych z serwera na 10.1.1.254. Które z poniższych jest poprawną parą gniazd?",
    answers: [
      {
        option: "1099:10.1.1.10, 80:10.1.1.254",
        correct: false,
      },
      {
        option: "10.1.1.10:80, 10.1.1.254:1099",
        correct: false,
      },
      {
        option: "10.1.1.10:1099, 10.1.1.254:80",
        correct: true,
      },
      {
        option: "80:10.1.1.10, 1099:10.1.1.254",
        correct: false,
      },
    ],
  },
  {
    id: 399,
    question: "Która grupa portów zawiera numery portów dla aplikacji FTP, HTTP i TFTP?",
    answers: [
      {
        option: "Porty dynamiczne",
        correct: false,
      },
      {
        option: "Porty prywatne",
        correct: false,
      },
      {
        option: "Porty zarejestrowane",
        correct: false,
      },
      {
        option: "Dobrze znane porty",
        correct: true,
      },
    ],
  },
  {
    id: 400,
    question:
      "Które polecenie systemu Windows wyświetli używane protokoły, adres lokalny i numery portów, adres zdalny i numery portów oraz stan połączenia?",
    answers: [
      {
        option: "Ipconfig /all",
        correct: false,
      },
      {
        option: "Ping",
        correct: false,
      },
      {
        option: "Netstat",
        correct: true,
      },
      {
        option: "Traceroute",
        correct: false,
      },
    ],
  },
  {
    id: 401,
    question:
      "Które z poniższych byłyby poprawnymi portami źródłowymi i docelowymi dla hosta łączącego się z serwerem e-mail?",
    answers: [
      {
        option: "Źródło: 25, Miejsce przeznaczenia: 49152",
        correct: false,
      },
      {
        option: "Źródło: 80, Miejsce przeznaczenia: 49152",
        correct: false,
      },
      {
        option: "Źródło: 49152, Miejsce przeznaczenia: 25",
        correct: true,
      },
      {
        option: "Źródło: 49152, Miejsce przeznaczenia: 80",
        correct: false,
      },
    ],
  },
  {
    id: 402,
    question: "Które flagi bitów kontrolnych są używane podczas trójetapowego uzgadniania?",
    answers: [
      {
        option: "ACK i FIN",
        correct: false,
      },
      {
        option: "FIN i RESET",
        correct: false,
      },
      {
        option: "RESET i SYN",
        correct: false,
      },
      {
        option: "SYN i ACK",
        correct: true,
      },
    ],
  },
  {
    id: 403,
    question: "Ile wymian jest potrzebnych do zakończenia obu sesji między dwoma hostami?",
    answers: [
      {
        option: "Jedna wymiana",
        correct: false,
      },
      {
        option: "Dwie wymiany",
        correct: false,
      },
      {
        option: "Trzy wymiany",
        correct: false,
      },
      {
        option: "Cztery wymiany",
        correct: true,
      },
      {
        option: "Pięć wymian",
        correct: false,
      },
    ],
  },
  {
    id: 404,
    question:
      "Jakie pole jest używane przez hosta docelowego do ponownego złożenia segmentów w oryginalnej kolejności?",
    answers: [
      {
        option: "Bity kontrolne",
        correct: false,
      },
      {
        option: "Port docelowy",
        correct: false,
      },
      {
        option: "Numer sekwencyjny",
        correct: true,
      },
      {
        option: "Port źródłowy",
        correct: false,
      },
      {
        option: "Rozmiar okna",
        correct: false,
      },
    ],
  },
  {
    id: 405,
    question: "Jakie pole służy do zapewnienia kontroli przepływu?",
    answers: [
      {
        option: "Bity kontrolne",
        correct: false,
      },
      {
        option: "Port docelowy",
        correct: false,
      },
      {
        option: "Numer sekwencyjny",
        correct: false,
      },
      {
        option: "Port źródłowy",
        correct: false,
      },
      {
        option: "Rozmiar okna",
        correct: true,
      },
    ],
  },
  {
    id: 406,
    question: "Co się stanie, gdy host wysyłający stwierdzi zatory?",
    answers: [
      {
        option:
          "Host odbierający zwiększa liczbę bajtów, które wysyła przed otrzymaniem potwierdzenia z hosta wysyłającego.",
        correct: false,
      },
      {
        option:
          "Host odbierający zmniejsza liczbę bajtów, które wysyła przed otrzymaniem potwierdzenia z hosta wysyłającego.",
        correct: false,
      },
      {
        option:
          "Host wysyłający zwiększa liczbę bajtów, które wysyła przed otrzymaniem potwierdzenia z hosta docelowego.",
        correct: false,
      },
      {
        option:
          "Host wysyłający zmniejsza liczbę bajtów, które wysyła przed otrzymaniem potwierdzenia z hosta docelowego.",
        correct: true,
      },
    ],
  },
  {
    id: 407,
    question:
      "Dlaczego protokół UDP jest pożądany w przypadku protokołów wykonujących proste żądania i odpowiedzi?",
    answers: [
      {
        option: "Kontrola przepływu",
        correct: false,
      },
      {
        option: "Mały narzut",
        correct: true,
      },
      {
        option: "Niezawodność",
        correct: false,
      },
      {
        option: "Dostarczanie w odpowiedniej kolejności",
        correct: false,
      },
    ],
  },
  {
    id: 408,
    question: "Które stwierdzenie dotyczące ponownego składania datagramu UDP jest prawdziwe?",
    answers: [
      {
        option: "UDP nie scala ponownie danych.",
        correct: false, // no this
      },
      {
        option: "UDP scala dane w kolejności, w jakiej zostały odebrane.",
        correct: true,
      },
      {
        option: "UDP scala dane za pomocą bitów kontrolnych.",
        correct: false,
      },
      {
        option: "UDP scala dane za pomocą numerów sekwencyjnych.",
        correct: false,
      },
    ],
  },
  {
    id: 409,
    question:
      "Które z poniższych byłyby poprawnymi portami źródłowymi i docelowymi dla hosta łączącego się z serwerem DNS?",
    answers: [
      {
        option: "Źródło: 53, Miejsce przeznaczenia: 49152",
        correct: false,
      },
      {
        option: "Źródło: 1812, Miejsce przeznaczenia: 49152",
        correct: false,
      },
      {
        option: "Źródło: 49152, Miejsce przeznaczenia: 53",
        correct: true,
      },
      {
        option: "Źródło: 49152, Miejsce przeznaczenia: 1812",
        correct: false,
      },
    ],
  },
  {
    id: 410,
    question:
      "Która funkcja warstwy transportowej jest używana do zagwarantowania ustanowienia sesji?",
    answers: [
      {
        option: "Flaga ACK w UDP",
        correct: false,
      },
      {
        option: "Uzgadnianie trójetapowe TCP",
        correct: true,
      },
      {
        option: "Numer sekwencji UDP",
        correct: false,
      },
      {
        option: "Numer portu TCP",
        correct: false,
      },
    ],
  },
  {
    id: 411,
    question: "Jaki jest pełny zakres dobrze znanych portów TCP i UDP?",
    answers: [
      {
        option: "Od 0 do 255",
        correct: false,
      },
      {
        option: "Od 0 do 1023",
        correct: true,
      },
      {
        option: "Od 256 do 1023",
        correct: false,
      },
      {
        option: "Od 1024 do 49151",
        correct: false,
      },
    ],
  },
  {
    id: 412,
    question: "Co to jest gniazdo (ang.socket)?",
    answers: [
      {
        option:
          "Połączenie źródłowego i docelowego adresu IP oraz źródłowego i docelowego adresu Ethernetowego",
        correct: false,
      },
      {
        option:
          "Połączenie źródłowego adresu IP i numeru portu lub docelowego adresu IP i numeru portu",
        correct: true,
      },
      {
        option: "Połączenie źródłowych i docelowych numerów sekwencji i potwierdzeń",
        correct: false,
      },
      {
        option: "Połączenie źródłowych i docelowych numerów sekwencji i numerów portów",
        correct: false,
      },
    ],
  },
  {
    id: 413,
    question: "Jak serwer sieciowy zarządza żądaniami od wielu klientów dla różnych usług?",
    answers: [
      {
        option: "Serwer wysyła wszystkie żądania przez bramę domyślną.",
        correct: false,
      },
      {
        option: "Każdemu żądaniu przypisany jest numer portu źródłowego i docelowego.",
        correct: true,
      },
      {
        option: "Serwer wykorzystuje adresy IP do identyfikacji różnych usług.",
        correct: false,
      },
      {
        option: "Każde żądanie śledzone jest za pomocą fizycznego adresu klienta.",
        correct: false,
      },
    ],
  },
  {
    id: 414,
    question:
      "Co stanie się, gdy część wiadomości FTP nie zostanie dostarczona do hosta docelowego?",
    answers: [
      {
        option:
          "Wiadomość zostanie utracona, ponieważ FTP nie używa metody potwierdzenia skutecznego dostarczenia danych.",
        correct: false,
      },
      {
        option: "Host źródłowy FTP wysyła zapytanie do hosta docelowego.",
        correct: false,
      },
      {
        option: "Część wiadomości FTP, która została utracona jest ponownie wysyłana.",
        correct: true,
      },
      {
        option: "Cała wiadomość FTP jest ponownie wysyłana.",
        correct: false,
      },
    ],
  },
  {
    id: 415,
    question: "Jakie aplikacje najlepiej nadają się do korzystania z UDP?",
    answers: [
      {
        option: "Applications that are sensitive to delay",
        correct: true,
      },
      {
        option: "Applications that need reliable delivery",
        correct: false,
      },
      {
        option: "Aplikacje, które wymagają retransmisji utraconych segmentów",
        correct: false,
      },
      {
        option: "Applications that are sensitive to packet loss",
        correct: false,
      },
    ],
  },
  {
    id: 416,
    question:
      "Przeciążenie sieci spowodowało, że źródło poznało utratę segmentów TCP wysłanych do miejsca docelowego. W jaki sposób protokół TCP rozwiązuje ten problem?",
    answers: [
      {
        option:
          "Źródło zmniejsza ilość danych, które przesyła, zanim otrzyma potwierdzenie z miejsca docelowego.",
        correct: true,
      },
      {
        option:
          "Źródło zmniejsza rozmiar okna, aby zmniejszyć szybkość transmisji z miejsca docelowego.",
        correct: false,
      },
      {
        option: "Miejsce docelowe zmniejsza rozmiar okna.",
        correct: false,
      },
      {
        option:
          "Miejsce docelowe wysyła mniej komunikatów potwierdzających w celu zachowania przepustowości.",
        correct: false,
      },
    ],
  },
  {
    id: 417,
    question:
      "Które dwie operacje są oferowane przez TCP, ale nie przez UDP? (Wybierz dwie odpowiedzi.)",
    answers: [
      {
        option: "Identifying the applications",
        correct: false,
      },
      {
        option: "Acknowledging received data",
        correct: true,
      },
      {
        option: "Identifying individual conversations",
        correct: false,
      },
      {
        option: "Retransmitting any unacknowledged data",
        correct: true,
      },
      {
        option: "Reconstructing data in the order received",
        correct: false,
      },
    ],
    multi: true,
  },
  {
    id: 418,
    question: "Jaki jest cel użycia numeru portu źródłowego w komunikacji TCP?",
    answers: [
      {
        option: "To notify the remote device that the conversation is over",
        correct: false,
      },
      {
        option: "To assemble the segments that arrived out of order",
        correct: false,
      },
      {
        option: "To keep track of multiple conversations between devices",
        correct: true,
      },
      {
        option: "To inquire for a nonreceived segment",
        correct: false,
      },
    ],
  },
  {
    id: 419,
    question:
      "Które dwie flagi w nagłówku TCP są używane przy trójetapowym uzgadnianiu aby ustanowić połączenie między dwoma urządzeniami sieciowymi? (Wybierz dwie odpowiedzi.)",
    answers: [
      {
        option: "ACK",
        correct: true,
      },
      {
        option: "FIN",
        correct: false,
      },
      {
        option: "PSH",
        correct: false,
      },
      {
        option: "RST",
        correct: false,
      },
      {
        option: "SYN",
        correct: true,
      },
      {
        option: "URG",
        correct: false,
      },
    ],
    multi: true,
  },
  {
    id: 420,
    question: "Jakiego mechanizmu TCP używa się do unikania zatorów?",
    answers: [
      {
        option: "Uzgadnianie trójetapowe",
        correct: false,
      },
      {
        option: "Para gniazd",
        correct: false,
      },
      {
        option: "Używa dwuetapowego uzgadniania",
        correct: false,
      },
      {
        option: "Okno przesuwne",
        correct: true,
      },
    ],
  },
  {
    id: 421,
    question:
      "Jakie działania są podejmowane po stronie klienta podczas ustanawiania komunikacji z serwerem przy zastosowaniu protokołu UDP w warstwie transportowej?",
    answers: [
      {
        option: "Klient ustawia rozmiar okna dla sesji.",
        correct: false,
      },
      {
        option: "Klient wysyła ISN do serwera, aby rozpocząć proces trójetapowego uzgadniania.",
        correct: false,
      },
      {
        option: "Klient wybiera losowo numer portu źródłowego.",
        correct: true,
      },
      {
        option: "Klient wysyła segment synchronizacji, aby rozpocząć sesję.",
        correct: false,
      },
    ],
  },
  {
    id: 422,
    question:
      "Które dwie usługi lub protokoły używają preferowanego protokołu UDP do szybkiej transmisji i niskiego narzutu? (Wybierz dwie odpowiedzi.)",
    answers: [
      {
        option: "FTP",
        correct: false,
      },
      {
        option: "DNS",
        correct: true,
      },
      {
        option: "HTTP",
        correct: false,
      },
      {
        option: "POP3",
        correct: false,
      },
      {
        option: "VoIP",
        correct: true,
      },
    ],
    multi: true,
  },
  {
    id: 423,
    question: "Których liczba lub zestaw liczb reprezentuje gniazdo (ang. socket)?",
    answers: [
      {
        option: "01-23-45-67-89-AB",
        correct: false,
      },
      {
        option: "21",
        correct: false,
      },
      {
        option: "192.168.1.1:80",
        correct: true,
      },
      {
        option: "10.1.1.15",
        correct: false,
      },
    ],
  },
  {
    id: 424,
    question: "Co jest zadaniem protokołów warstwy transportu?",
    answers: [
      {
        option: "Zapewnienie dostępu do sieci",
        correct: false,
      },
      {
        option: "Śledzenie indywidualnych konwersacji",
        correct: true,
      },
      {
        option: "Określenie trasy do przesłania pakietu",
        correct: false,
      },
      {
        option: "Tłumaczenie prywatnych adresów IP na publiczne adresy IP",
        correct: false,
      },
    ],
  },
  {
    id: 425,
    question:
      "Ta warstwa modelu OSI dotyczy protokołów, które wymieniają dane między programami działającymi na hostach.",
    answers: [
      {
        option: "Aplikacji",
        correct: true,
      },
      {
        option: "Transportu",
        correct: false,
      },
      {
        option: "Sieci",
        correct: false,
      },
      {
        option: "Fizyczna",
        correct: false,
      },
    ],
  },
  {
    id: 426,
    question: "Która warstwa OSI jest powiązana ze standardami MKV, GIF i JPG?",
    answers: [
      {
        option: "Aplikacji",
        correct: false,
      },
      {
        option: "Prezentacji",
        correct: true,
      },
      {
        option: "Sesji",
        correct: false,
      },
      {
        option: "Transportu",
        correct: false,
      },
    ],
  },
  {
    id: 427,
    question: "Te trzy warstwy OSI definiują te same funkcje co warstwa aplikacji modelu TCP/IP.",
    multi: true,
    answers: [
      {
        option: "Aplikacji",
        correct: true,
      },
      {
        option: "Prezentacji",
        correct: true,
      },
      {
        option: "Sesji",
        correct: true,
      },
      {
        option: "Transportu",
        correct: false,
      },
      {
        option: "Sieci",
        correct: false,
      },
      {
        option: "Łącza danych",
        correct: false,
      },
    ],
  },
  {
    id: 428,
    question: "Które dwa są protokołami należącymi do warstwy aplikacji OSI?",
    multi: true,
    answers: [
      {
        option: "PNG",
        correct: false,
      },
      {
        option: "DNS",
        correct: true,
      },
      {
        option: "SMTP",
        correct: true,
      },
      {
        option: "QuickTime",
        correct: false,
      },
    ],
  },
  {
    id: 429,
    question: "Jest to funkcja warstwy sesji modelu OSI.",
    answers: [
      {
        option: "Kompresji i dekompresji danych",
        correct: false,
      },
      {
        option: "Zapewnia interfejs między aplikacjami",
        correct: false,
      },
      {
        option: "Format danych dla warstwy aplikacji",
        correct: false,
      },
      {
        option: "Wymiana informacji w celu zainicjowania dialogu między hostami",
        correct: true,
      },
    ],
  },
  {
    id: 430,
    question:
      "Prawda czy fałsz? Model sieci peer-to-peer wymaga wdrożenia dedykowanego serwera dostępu do danych.",
    answers: [
      {
        option: "Prawda",
        correct: false,
      },
      {
        option: "Fałsz",
        correct: true,
      },
    ],
  },
  {
    id: 431,
    question:
      "Prawda czy fałsz? W środowisku sieciowym peer-to-peer każdy równorzędny węzeł może funkcjonować zarówno jako klient, jak i serwer.",
    answers: [
      {
        option: "Prawda",
        correct: true,
      },
      {
        option: "Fałsz",
        correct: false,
      },
    ],
  },
  {
    id: 432,
    question:
      "Która aplikacja peer-to-peer pozwala użytkownikom dzielić fragmenty wielu plików ze sobą w tym samym czasie?",
    answers: [
      {
        option: "Hybrid",
        correct: false,
      },
      {
        option: "Gnutella",
        correct: false,
      },
      {
        option: "BitTorrent",
        correct: true,
      },
    ],
  },
  {
    id: 433,
    question: "Które z poniższych stwierdzeń jest cechą protokołu Gnutella?",
    answers: [
      {
        option: "Użytkownicy mogą udostępniać całe pliki innym użytkownikom.",
        correct: true,
      },
      {
        option: "Użytkownicy mogą udostępniać fragmenty plików innym użytkownikom.",
        correct: false,
      },
      {
        option:
          "Użytkownicy mogą uzyskać dostęp do serwera indeksu, aby uzyskać lokalizację zasobów udostępnionych przez innych użytkowników.",
        correct: false,
      },
    ],
  },
  {
    id: 434,
    question: "Ten typ wiadomości jest używany podczas przesyłania plików danych do serwera WWW.",
    answers: [
      {
        option: "GET",
        correct: false,
      },
      {
        option: "POST",
        correct: false,
      },
      {
        option: "PUT",
        correct: false, // not this
      },
    ],
  },
  {
    id: 435,
    question:
      "Protokół ten jest używany przez przeglądarkę internetową w celu nawiązania połączenia z serwerem WWW.",
    answers: [
      {
        option: "HTTP",
        correct: true,
      },
      {
        option: "SSL",
        correct: false,
      },
      {
        option: "IMAP",
        correct: false,
      },
      {
        option: "SMTP",
        correct: false,
      },
    ],
  },
  {
    id: 436,
    question:
      "Protokół ten jest używany przez klienta do wysyłania wiadomości e-mail do serwera poczty.",
    answers: [
      {
        option: "POP",
        correct: false,
      },
      {
        option: "SMTP",
        correct: true,
      },
      {
        option: "IMAP",
        correct: false,
      },
      {
        option: "HTTP",
        correct: false,
      },
    ],
  },
  {
    id: 437,
    question: "Co jest cechą IMAP?",
    answers: [
      {
        option: "Przesyła wiadomości e-mail do serwera.",
        correct: false,
      },
      {
        option: "Nasłuchuje pasywnie na porcie 110 żądań klientów.",
        correct: false,
      },
      {
        option: "Pobiera kopię wiadomości e-mail pozostawiając oryginał na serwerze.",
        correct: true,
      },
    ],
  },
  {
    id: 438,
    question: "Prawda czy fałsz? HTTP jest bezpiecznym protokołem.",
    answers: [
      {
        option: "Prawda",
        correct: false,
      },
      {
        option: "Fałsz",
        correct: true,
      },
    ],
  },
  {
    id: 439,
    question: "Który z poniższych typów rekordów DNS jest używany do odwzorowania adresów IPv6?",
    answers: [
      {
        option: "A",
        correct: false,
      },
      {
        option: "NS",
        correct: false,
      },
      {
        option: "AAAA",
        correct: true,
      },
      {
        option: "MX",
        correct: false,
      },
    ],
  },
  {
    id: 440,
    question:
      "Prawda czy fałsz? Serwer DNS, który odbierze żądanie rozpoznania nazwy, które nie znajduje się w strefie DNS, wyśle komunikat o błędzie do żądającego klienta.",
    answers: [
      {
        option: "Prawda",
        correct: false,
      },
      {
        option: "Fałsz",
        correct: true,
      },
    ],
  },
  {
    id: 441,
    question: "Które z poniższych jest wyświetlane przez narzędzie nslookup?",
    answers: [
      {
        option: "Skonfigurowany domyślny serwer DNS",
        correct: true,
      },
      {
        option: "Adres IP urządzenia końcowego",
        correct: false,
      },
      {
        option: "Wszystkie wpisy DNS w pamięci podręcznej",
        correct: false,
      },
    ],
  },
  {
    id: 442,
    question:
      "Który z poniższych typów rekordów zasobów DNS rozpoznaje autorytatywne serwery nazw?",
    answers: [
      {
        option: "NS",
        correct: true,
      },
      {
        option: "A",
        correct: false,
      },
      {
        option: "MX",
        correct: false,
      },
      {
        option: "AAAA",
        correct: false,
      },
    ],
  },
  {
    id: 443,
    question: "Ile połączeń jest wymaganych przez FTP między klientem a serwerem?",
    answers: [
      {
        option: "1",
        correct: false,
      },
      {
        option: "2",
        correct: true,
      },
      {
        option: "3",
        correct: false,
      },
      {
        option: "4",
        correct: false,
      },
    ],
  },
  {
    id: 444,
    question:
      "Prawda czy fałsz? Transfer danych FTP odbywa się z klienta na serwer (push) i z serwera do klienta (pull).",
    answers: [
      {
        option: "Prawda",
        correct: true,
      },
      {
        option: "Fałsz",
        correct: false,
      },
    ],
  },
  {
    id: 445,
    question: "Które z tych portów są używane przez FTP? (Wybierz dwie odpowiedzi.)",
    multi: true,
    answers: [
      {
        option: "20",
        correct: true,
      },
      {
        option: "21",
        correct: true,
      },
      {
        option: "25",
        correct: false,
      },
      {
        option: "110",
        correct: false,
      },
    ],
  },
  {
    id: 446,
    question:
      "Prawda czy fałsz? Udostępnianie zasobów przez SMB jest obsługiwane tylko w systemach operacyjnych firmy Microsoft.",
    answers: [
      {
        option: "Prawda",
        correct: false,
      },
      {
        option: "Fałsz",
        correct: true,
      },
    ],
  },
  {
    id: 447,
    question:
      "Które urządzenie najprawdopodobniej zapewni dynamiczne adresowanie IP klientom w sieci domowej?",
    answers: [
      {
        option: "A dedicated file server",
        correct: false,
      },
      {
        option: "A home router",
        correct: true,
      },
      {
        option: "An ISP DHCP server",
        correct: false,
      },
      {
        option: "A DNS server",
        correct: false,
      },
    ],
  },
  {
    id: 448,
    question:
      "Jaka część adresu URL, http://www.cisco.com/index.html, reprezentuje domenę DNS najwyższego poziomu?",
    answers: [
      {
        option: ".com",
        correct: true,
      },
      {
        option: "Www",
        correct: false,
      },
      {
        option: "Http",
        correct: false,
      },
      {
        option: "Index",
        correct: false,
      },
    ],
  },
  {
    id: 449,
    question: "Które to dwie cechy warstwy aplikacji modelu TCP/IP? (Wybierz dwie odpowiedzi.)",
    multi: true,
    answers: [
      {
        option: "Responsibility for logical addressing",
        correct: false,
      },
      {
        option: "Responsibility for physical addressing",
        correct: false,
      },
      {
        option:
          "The creation and maintenance of dialogue between source and destination applications",
        correct: true,
      },
      {
        option: "Closest to the end user",
        correct: true,
      },
    ],
  },
  {
    id: 450,
    question:
      "Jaki typ wiadomości jest używany przez klienta HTTP do żądania danych z serwera WWW?",
    answers: [
      {
        option: "Providing IP addresses to local hosts",
        correct: true,
      },
      {
        option: "POST",
        correct: false, // not this
      },
      {
        option: "Mapping name-to-IP addresses for internal hosts",
        correct: false,
      },
      {
        option: "Forwarding name resolution requests between servers",
        correct: false,
      },
    ],
  },
  {
    id: 451,
    question:
      "Który protokół może być używany do przesyłania wiadomości z serwera poczty e-mail do klienta poczty e-mail?",
    answers: [
      {
        option: "A dedicated file server",
        correct: false,
      },
      {
        option: "A home router",
        correct: false,
      },
      {
        option: "An ISP DHCP server",
        correct: false, // not this
      },
      {
        option: "A DNS server",
        correct: false, // not this
      },
    ],
  },
  {
    id: 452,
    question:
      "Który protokół warstwy aplikacji służy do udostępniania aplikacji i usług drukowania dla aplikacji Microsoft?",
    answers: [
      {
        option: "HTTP",
        correct: false,
      },
      {
        option: "SMTP",
        correct: false,
      },
      {
        option: "DHCP",
        correct: false,
      },
      {
        option: "SMB",
        correct: true,
      },
    ],
  },
  {
    id: 453,
    question:
      "Które trzy protokoły lub standardy są używane w warstwie aplikacji modelu TCP/IP? (Wybierz trzy odpowiedzi)",
    multi: true,
    answers: [
      {
        option: "TCP",
        correct: false,
      },
      {
        option: "HTTP",
        correct: true,
      },
      {
        option: "MPEG",
        correct: true,
      },
      {
        option: "GIF",
        correct: true,
      },
      {
        option: "IP",
        correct: false,
      },
      {
        option: "UDP",
        correct: false,
      },
    ],
  },
  {
    id: 454,
    question: "Dlaczego DHCP jest rekomendowany do stosowania w dużych sieciach?",
    answers: [
      {
        option:
          "Large networks send more requests for domain to IP address resolution than do smaller networks.",
        correct: false,
      },
      {
        option: "DHCP uses a reliable transport layer protocol.",
        correct: false,
      },
      {
        option: "It prevents sharing of files that are copyrighted.",
        correct: false,
      },
      {
        option:
          "It is a more efficient way to manage IPv4 addresses than static address assignment is.",
        correct: true,
      },
      {
        option:
          "Hosts on large networks require more IPv4 addressing configuration settings than do hosts on small networks.",
        correct: false,
      },
    ],
  },
  {
    id: 455,
    question:
      "Autor wysyła jeden dokument rozdziału z komputera osobistego na serwer plików wydawcy książek. Jaką rolę odgrywa komputer osobisty w tym modelu sieci?",
    answers: [
      {
        option: "Client",
        correct: true,
      },
      {
        option: "Master",
        correct: false,
      },
      {
        option: "Server",
        correct: false,
      },
      {
        option: "Slave",
        correct: false,
      },
      {
        option: "Transient",
        correct: false,
      },
    ],
  },
  {
    id: 456,
    question: "Które zdanie na temat implementacji FTP jest prawdziwe?",
    answers: [
      {
        option: "Klient może wybrać, czy FTP ustanowi jedno czy dwa połączenia z serwerem.",
        correct: false,
      },
      {
        option: "Klient może pobierać dane z serwera lub przesyłać dane do serwera.",
        correct: true,
      },
      {
        option: "FTP jest aplikacją typu peer-to-peer.",
        correct: false,
      },
      {
        option: "FTP nie zapewnia niezawodności podczas transmisji danych.",
        correct: false,
      },
    ],
  },
  {
    id: 457,
    question:
      "Bezprzewodowy host musi zażądać adresu IP. Jaki protokół będzie używany do przetwarzania żądania?",
    answers: [
      {
        option: "HTTP",
        correct: false,
      },
      {
        option: "SMTP",
        correct: false,
      },
      {
        option: "DHCP",
        correct: true,
      },
      {
        option: "SMB",
        correct: false,
      },
      {
        option: "SNMP",
        correct: false,
      },
    ],
  },
  {
    id: 458,
    question: "Która warstwa modelu TCP/IP jest najbliżej użytkownika końcowego?",
    answers: [
      {
        option: "Aplikacji",
        correct: true,
      },
      {
        option: "Internetu",
        correct: false,
      },
      {
        option: "Dostępu do sieci",
        correct: false,
      },
      {
        option: "Transportu",
        correct: false,
      },
    ],
  },
  {
    id: 459,
    question:
      "Podczas pobierania wiadomości e-mail, który protokół pozwala na łatwe, scentralizowane przechowywanie i tworzenie kopii zapasowych e-maili, który byłyby wskazany dla małych i średnich przedsiębiorstw?",
    answers: [
      {
        option: "IMAP",
        correct: true,
      },
      {
        option: "POP",
        correct: false,
      },
      {
        option: "SMTP",
        correct: false,
      },
      {
        option: "HTTPS",
        correct: false,
      },
    ],
  },
  {
    id: 460,
    question: "Który protokół używa szyfrowania?",
    answers: [
      {
        option: "Client",
        correct: false, // not this
      },
      {
        option: "Master",
        correct: false, // not this
      },
      {
        option: "Server",
        correct: false,
      },
      {
        option: "Slave",
        correct: false,
      },
    ],
  },
  {
    id: 461,
    question:
      "Które dwa zadania mogą być wykonywane przez lokalny serwer DNS? (Wybierz dwie odpowiedzi.)",
    multi: true,
    answers: [
      {
        option: "Providing IP addresses to local hosts",
        correct: false, // not this
      },
      {
        option: "Allowing data transfer between two network devices",
        correct: false,
      },
      {
        option: "Mapping name-to-IP addresses for internal hosts",
        correct: true,
      },
      {
        option: "Forwarding name resolution requests between servers",
        correct: true,
      },
      {
        option: "Retrieving email messages",
        correct: false,
      },
    ],
  },
  {
    id: 462,
    question:
      "Jakie zagrożenie jest opisane, gdy podmiot zagrożeń wysyła wirusa, który może sformatować dysk twardy?",
    answers: [
      {
        option: "Utrata danych lub manipulacja",
        correct: true,
      },
      {
        option: "Zakłócenie usług",
        correct: false,
      },
      {
        option: "Kradzież tożsamości",
        correct: false,
      },
      {
        option: "Kradzież informacji",
        correct: false,
      },
    ],
  },
  {
    id: 463,
    question:
      "Jakie zagrożenie jest opisane, gdy podmiot zagrażający dokonuje nielegalnych zakupów online przy użyciu skradzionych informacji kredytowych?",
    answers: [
      {
        option: "Utrata danych lub manipulacja",
        correct: false,
      },
      {
        option: "Zakłócenie usług",
        correct: false,
      },
      {
        option: "Kradzież tożsamości",
        correct: true,
      },
      {
        option: "Kradzież informacji",
        correct: false,
      },
    ],
  },
  {
    id: 464,
    question:
      "Jakiego rodzaju zagrożenie opisano, gdy podmiot zagrożenia uniemożliwia użytkownikom uprawnionym dostęp do usług danych?",
    answers: [
      {
        option: "Utrata danych lub manipulacja",
        correct: false,
      },
      {
        option: "Zakłócenie usług",
        correct: true,
      },
      {
        option: "Kradzież tożsamości",
        correct: false,
      },
      {
        option: "Kradzież informacji",
        correct: false,
      },
    ],
  },
  {
    id: 465,
    question:
      "Jakie zagrożenie jest opisane, gdy podmiot zagrożenia kradnie dane z badań naukowych?",
    answers: [
      {
        option: "Utrata danych lub manipulacja",
        correct: false,
      },
      {
        option: "Zakłócenie usług",
        correct: false,
      },
      {
        option: "Kradzież tożsamości",
        correct: false,
      },
      {
        option: "Kradzież informacji",
        correct: true,
      },
    ],
  },
  {
    id: 466,
    question:
      "Jakie zagrożenie jest opisane, gdy podmiot zagrożeń przeciąża sieć, aby odmówiła innym użytkownikom dostępu do niej?",
    answers: [
      {
        option: "Utrata danych lub manipulacja",
        correct: false,
      },
      {
        option: "Zakłócenie usług",
        correct: true,
      },
      {
        option: "Kradzież tożsamości",
        correct: false,
      },
      {
        option: "Kradzież informacji",
        correct: false,
      },
    ],
  },
  {
    id: 467,
    question: "Jakie zagrożenie jest opisane, gdy podmiot zagrożenia zmienia rekordy danych?",
    answers: [
      {
        option: "Utrata danych lub manipulacja",
        correct: true,
      },
      {
        option: "Zakłócenie usług",
        correct: false,
      },
      {
        option: "Kradzież tożsamości",
        correct: false,
      },
      {
        option: "Kradzież informacji",
        correct: false,
      },
    ],
  },
  {
    id: 468,
    question:
      "Jakie zagrożenie jest opisane, gdy podmiot zagrożenia kradnie bazę danych użytkowników firmy?",
    answers: [
      {
        option: "Utrata danych lub manipulacja",
        correct: false,
      },
      {
        option: "Zakłócenie usług",
        correct: false,
      },
      {
        option: "Kradzież tożsamości",
        correct: false,
      },
      {
        option: "Kradzież informacji",
        correct: true,
      },
    ],
  },
  {
    id: 469,
    question:
      "Jakiego rodzaju zagrożenie opisano, gdy podmiot zagrażający podszywa się pod inną osobę w celu uzyskania informacji kredytowej o tej osobie?",
    answers: [
      {
        option: "Utrata danych lub manipulacja",
        correct: false,
      },
      {
        option: "Zakłócenie usług",
        correct: false,
      },
      {
        option: "Kradzież tożsamości",
        correct: true,
      },
      {
        option: "Kradzież informacji",
        correct: false,
      },
    ],
  },
  {
    id: 470,
    question:
      "Angela, pracownik IT w ACME Inc., zauważa, że komunikacja z serwerem firmy jest bardzo powolna. Po zbadaniu, ustali, że przyczyną powolnej reakcji jest komputer w Internecie wysyłający bardzo dużą liczbę zniekształconych żądań na serwer WWW ACME. Jaki rodzaj ataku opisano w tym scenariuszu?",
    answers: [
      {
        option: "Atak w celu uzyskania dostępu",
        correct: false,
      },
      {
        option: "Atak odmowy usługi (DoS)",
        correct: true,
      },
      {
        option: "Atak ze strony złośliwego oprogramowania",
        correct: false,
      },
      {
        option: "Ataki rozpoznania",
        correct: false,
      },
    ],
  },
  {
    id: 471,
    question:
      "George musiał udostępnić wideo współpracownikowi. Ze względu na duży rozmiar pliku wideo postanowił uruchomić prosty serwer FTP na swojej stacji roboczej, aby udostępnić plik wideo swojemu współpracownikowi. Aby sobie ułatwić, George utworzył konto z prostym hasłem „plik” i dostarczył je swojemu współpracownikowi w piątek. Bez odpowiednich środków bezpieczeństwa i silnego hasła personel IT nie zdziwił się, gdy dowiedział się w poniedziałek, że stacja robocza George'a została przejęta i próbuje przesłać dokumenty związane z pracą do Internetu. Jaki rodzaj ataku opisano w tym scenariuszu?",
    answers: [
      {
        option: "Atak w celu uzyskania dostępu",
        correct: true,
      },
      {
        option: "Atak odmowy usługi (DoS)",
        correct: false,
      },
      {
        option: "Atak ze strony złośliwego oprogramowania",
        correct: false,
      },
      {
        option: "Ataki rozpoznania",
        correct: false,
      },
    ],
  },
  {
    id: 472,
    question:
      "Jeremiasz przeglądał internet ze swojego komputera, kiedy przypadkowa strona oferowała darmowy program do czyszczenia systemu. Po pobraniu i uruchomieniu pliku wykonywalnego system operacyjny uległ awarii. Najważniejsze pliki związane z systemem operacyjnym zostały uszkodzone, a komputer Jeremiasza wymagał pełnego formatu dysku i ponownej instalacji systemu operacyjnego. Jaki rodzaj ataku opisano w tym scenariuszu?",
    answers: [
      {
        option: "Atak w celu uzyskania dostępu",
        correct: false,
      },
      {
        option: "Atak odmowy usługi (DoS)",
        correct: false,
      },
      {
        option: "Atak ze strony złośliwego oprogramowania",
        correct: true,
      },
      {
        option: "Ataki rozpoznania",
        correct: false,
      },
    ],
  },
  {
    id: 473,
    question:
      "Arianna znalazła dysk flash leżący na chodniku parkingu w centrum handlowym. Pytała wokół, ale nie mogła znaleźć właściciela. Postanowiła go zatrzymać i podłączyć do laptopa, tylko po to, aby znaleźć folder ze zdjęciami. Czując ciekawość, Arianna otworzyła kilka zdjęć przed sformatowaniem dysku flash na własny użytek. Następnie Arianna zauważyła, że jej kamera laptopa jest aktywna. Jaki rodzaj ataku opisano w tym scenariuszu?",
    answers: [
      {
        option: "Atak w celu uzyskania dostępu",
        correct: false,
      },
      {
        option: "Atak odmowy usługi (DoS)",
        correct: false,
      },
      {
        option: "Atak ze strony złośliwego oprogramowania",
        correct: true,
      },
      {
        option: "Ataki rozpoznania",
        correct: false,
      },
    ],
  },
  {
    id: 474,
    question:
      "Komputer jest używany jako serwer druku dla firmy ACME Inc. Pracownicy IT nie zastosowali aktualizacji zabezpieczeń na tym komputerze przez ponad 60 dni. Teraz serwer wydruku działa powoli i wysyła dużą liczbę złośliwych pakietów ze swojej karty sieciowej. Jaki rodzaj ataku opisano w tym scenariuszu?",
    answers: [
      {
        option: "Atak w celu uzyskania dostępu",
        correct: false,
      },
      {
        option: "Atak odmowy usługi (DoS)",
        correct: false,
      },
      {
        option: "Atak ze strony złośliwego oprogramowania",
        correct: false, // not this
      },
      {
        option: "Ataki rozpoznania",
        correct: false,
      },
    ],
  },
  {
    id: 475,
    question:
      "Sharon, stażystka IT w ACME Inc., zauważyła dziwne pakiety podczas przeglądania dzienników zabezpieczeń generowanych przez zaporę. Kilka adresów IP w internecie wysyłało znieksztalcone pakiety na kilka różnych adresów IP, pod różnymi losowymi numerami portów wewnątrz ACME Inc. Jaki rodzaj ataku opisano w tym scenariuszu?",
    answers: [
      {
        option: "Atak w celu uzyskania dostępu",
        correct: false,
      },
      {
        option: "Atak odmowy usługi (DoS)",
        correct: false,
      },
      {
        option: "Atak ze strony złośliwego oprogramowania",
        correct: false,
      },
      {
        option: "Ataki rozpoznania",
        correct: true,
      },
    ],
  },
  {
    id: 476,
    question:
      "Które urządzenie kontroluje ruch między dwiema lub więcej sieciami, aby zapobiec nieautoryzowanemu dostępowi?",
    answers: [
      {
        option: "Serwer AAA",
        correct: false,
      },
      {
        option: "Zapora",
        correct: true,
      },
      {
        option: "ESA/WSA",
        correct: false,
      },
      {
        option: "IPS",
        correct: false,
      },
    ],
  },
  {
    id: 477,
    question:
      "Które urządzenie jest używane przez inne urządzenia sieciowe do uwierzytelniania i autoryzacji dostępu do zarządzania?",
    answers: [
      {
        option: "Serwer AAA",
        correct: true,
      },
      {
        option: "Zapora",
        correct: false,
      },
      {
        option: "ESA/WSA",
        correct: false,
      },
      {
        option: "IPS",
        correct: false,
      },
    ],
  },
  {
    id: 478,
    question:
      "Które zasady tworzenia kopii zapasowych dotyczą używania silnych haseł do ochrony kopii zapasowych i przywracania danych?",
    answers: [
      {
        option: "Częstotliwość",
        correct: false,
      },
      {
        option: "Przechowywanie",
        correct: false,
      },
      {
        option: "Zabezpieczenia",
        correct: true,
      },
      {
        option: "Walidacja",
        correct: false,
      },
    ],
  },
  {
    id: 479,
    question:
      "Ta strefa służy do umeszczania serwerów, które powinny być dostępne dla użytkowników zewnętrznych.",
    answers: [
      {
        option: "Wewnętrzna",
        correct: false,
      },
      {
        option: "Zewnętrzna",
        correct: false,
      },
      {
        option: "Internet",
        correct: false,
      },
      {
        option: "DMZ",
        correct: true,
      },
    ],
  },
  {
    id: 480,
    question: "Co jest odpowiednie dla zapewnienia bezpieczeństwa punktów końcowych?",
    answers: [
      {
        option: "Serwer AAA",
        correct: false,
      },
      {
        option: "Oprogramowanie antywirusowe",
        correct: true,
      },
      {
        option: "Zapora serwerowa",
        correct: false,
      },
      {
        option: "ESA/WSA",
        correct: false,
      },
    ],
  },
  {
    id: 481,
    question: "Który komponent ma chronić przed nieautoryzowaną komunikacją do i z komputera?",
    answers: [
      {
        option: "Centrum zabezpieczeń",
        correct: false,
      },
      {
        option: "Skaner portów",
        correct: false,
      },
      {
        option: "Antymalware",
        correct: false,
      },
      {
        option: "Program antywirusowy",
        correct: false,
      },
      {
        option: "Zapora",
        correct: true,
      },
    ],
  },
  {
    id: 482,
    question:
      "Które polecenie spowoduje zablokowanie prób logowania na RouterA przez okres 30 sekund, jeśli w ciągu 10 sekund wykonano dwie nieudane próby logowania?",
    answers: [
      {
        option: "RouterA(config)# login block-for 10 attempts 2 within 30",
        correct: false,
      },
      {
        option: "RouterA(config)# login block-for 30 attempts 2 within 10",
        correct: true,
      },
      {
        option: "RouterA(config)# login block-for 2 attempts 30 within 10",
        correct: false,
      },
      {
        option: "RouterA(config)# login block-for 30 attempts 10 within 2",
        correct: false,
      },
    ],
  },
  {
    id: 483,
    question: "Jaki może być cel ewidencjonowania jako funkcji bezpieczeństwa sieciowego?",
    answers: [
      {
        option: "Wymaga od użytkowników aby udowodnili, że są tymi za których się podają",
        correct: false,
      },
      {
        option: "Do określenia, do których zasobów użytkownicy mają mieć dostęp",
        correct: false,
      },
      {
        option: "Do śledzenia działań użytkownika",
        correct: true,
      },
      {
        option: "Do dostarczenia funkcjonalności pytań i odpowiedzi",
        correct: false,
      },
    ],
  },
  {
    id: 484,
    question:
      "Jaki rodzaj ataku może wiązać się z wykorzystaniem narzędzi, takich jak nslookup i fping?",
    answers: [
      {
        option: "Atak w celu uzyskania dostępu",
        correct: false,
      },
      {
        option: "Ataki rozpoznania",
        correct: true,
      },
      {
        option: "Odmowa usługi (DoS)",
        correct: false,
      },
      {
        option: "Atak robaka",
        correct: false,
      },
    ],
  },
  {
    id: 485,
    question:
      "Jaka jest zaleta SSH w porównaniu z Telnet w przypadku zdalnego zarządzania routerem?",
    answers: [
      {
        option: "Szyfrowanie",
        correct: true,
      },
      {
        option: "Wykorzystanie protokołu TCP",
        correct: false,
      },
      {
        option: "Autoryzacja",
        correct: false,
      },
      {
        option: "Połączenia przez wiele linii VTY",
        correct: false,
      },
    ],
  },
  {
    id: 486,
    question:
      "Co jest jednym z najskuteczniejszych dostępnych narzędzi bezpieczeństwa do ochrony użytkowników przed zagrożeniami zewnętrznymi?",
    answers: [
      {
        option: "Zapory",
        correct: true,
      },
      {
        option: "Router, który uruchamia usługi AAA",
        correct: false,
      },
      {
        option: "Serwery patch",
        correct: false,
      },
      {
        option: "Techniki szyfrowania hasła",
        correct: false,
      },
    ],
  },
  {
    id: 487,
    question:
      "Jaki rodzaj zagrożenia sieciowego ma na celu uniemożliwienie autoryzowanym użytkownikom dostępu do zasobów?",
    answers: [
      {
        option: "Atak typu DoS",
        correct: true,
      },
      {
        option: "Ataki w celu uzyskania dostępu",
        correct: false,
      },
      {
        option: "Ataki rozpoznania",
        correct: false,
      },
      {
        option: "Wykorzystanie zaufania",
        correct: false,
      },
    ],
  },
  {
    id: 488,
    question: "Które trzy usługi świadczone są w ramach AAA? (Wybierz trzy odpowiedzi.)",
    multi: true,
    answers: [
      {
        option: "Ewidencjonowanie",
        correct: true,
      },
      {
        option: "Automatyzacja",
        correct: false,
      },
      {
        option: "Autoryzacja",
        correct: true,
      },
      {
        option: "Uwierzytelnianie",
        correct: true,
      },
      {
        option: "Wyważanie",
        correct: false,
      },
      {
        option: "Automatyczna konfiguracja",
        correct: false,
      },
    ],
  },
  {
    id: 489,
    question:
      "Który atak złośliwego kodu jest samodzielny i próbuje wykorzystać konkretną lukę w atakowanym systemie?",
    answers: [
      {
        option: "Wirus",
        correct: false,
      },
      {
        option: "Robak",
        correct: true,
      },
      {
        option: "Koń trojański",
        correct: false,
      },
      {
        option: "Atak socjotechniczny",
        correct: false,
      },
    ],
  },
  {
    id: 490,
    question:
      "Niektóre routery i przełączniki w pomieszczeniu sieciowym działały nieprawidłowo po awarii klimatyzatora. Jaki rodzaj zagrożenia opisuje ta sytuacja?",
    answers: [
      {
        option: "Konfiguracyjne",
        correct: false,
      },
      {
        option: "Środowiskowe",
        correct: true,
      },
      {
        option: "Elektryczne",
        correct: false,
      },
      {
        option: "Konserwacji",
        correct: false,
      },
    ],
  },
  {
    id: 491,
    question: "Co oznacza termin podatność?",
    answers: [
      {
        option: "Słaby punkt, który sprawia, że cel jest podatny na atak",
        correct: true,
      },
      {
        option: "Komputer zawierający poufne informacje",
        correct: false,
      },
      {
        option: "Metoda ataku w celu wykorzystania celu",
        correct: false,
      },
      {
        option: "Znany cel lub maszyna ofiary",
        correct: false,
      },
      {
        option: "Potencjalne zagrożenie, które tworzy haker",
        correct: false,
      },
    ],
  },
  {
    id: 492,
    question:
      "Jakie trzy kroki konfiguracyjne muszą być wykonane, aby wdrożyć dostęp SSH do routera? (Wybierz trzy odpowiedzi.)",
    multi: true,
    answers: [
      {
        option: "Hasło na linii konsoli",
        correct: false,
      },
      {
        option: "Nazwa domeny IP",
        correct: true,
      },
      {
        option: "Konto użytkownika",
        correct: true,
      },
      {
        option: "Hasło trybu uprzywilejowanego",
        correct: false,
      },
      {
        option: "Unikalna nazwa hosta",
        correct: true,
      },
      {
        option: "Jakieś unikalne hasło",
        correct: false,
      },
    ],
  },
  {
    id: 493,
    question: "Jaki jest cel ataku rozpoznania sieci?",
    answers: [
      {
        option: "Odkrywanie i mapowanie systemów",
        correct: true,
      },
      {
        option: "Nieautoryzowana manipulacja danymi",
        correct: false,
      },
      {
        option: "Wyłączanie systemów lub usług sieciowych",
        correct: false,
      },
      {
        option: "Odmawianie dostępu do zasobów przez uprawnionych użytkowników",
        correct: false,
      },
    ],
  },
  {
    id: 494,
    question:
      "Ze względów bezpieczeństwa administrator sieci musi zagwarantować, że lokalne komputery nie mogą komunikować się ze sobą za pomocą pakietów ping. Które ustawienia pomogą wykonać to zadanie?",
    answers: [
      {
        option: "Ustawienia kart elektronicznych",
        correct: false,
      },
      {
        option: "Ustawienia zapory",
        correct: true,
      },
      {
        option: "Ustawienia adresów MAC",
        correct: false,
      },
      {
        option: "Ustawienia systemu plików",
        correct: false,
      },
    ],
  },
  {
    id: 495,
    question:
      "Administrator sieci ustanawia połączenie z przełącznikiem przez SSH. Jaka cecha jednoznacznie opisuje połączenie SSH?",
    answers: [
      {
        option:
          "Dostęp poza pasmem do przełącznika za pomocą wirtualnego terminala z uwierzytelnianiem hasłem",
        correct: false,
      },
      {
        option: "Zdalny dostęp do przełącznika za pomocą połączenia telefonicznego",
        correct: false,
      },
      {
        option:
          "Dostęp do przełącznika za pomocą bezpośrednio podłączonego komputera i kabla konsoli",
        correct: false,
      },
      {
        option: "Zdalny dostęp do przełącznika, w którym dane są szyfrowane podczas sesji",
        correct: true,
      },
      {
        option: "Bezpośredni dostęp do przełącznika za pomocą programu emulacji terminala",
        correct: false,
      },
    ],
  },
  {
    id: 496,
    question: "Które stwierdzenie poprawnie odnosi się do małej sieci?",
    answers: [
      {
        option: "Małe sieci są skomplikowane.",
        correct: false,
      },
      {
        option: "Małe sieci wymagają działu IT do utrzymania.",
        correct: false,
      },
      {
        option: "Większość przedsiębiorstw to małe firmy.",
        correct: true,
      },
    ],
  },
  {
    id: 497,
    question: "Który czynnik należy wziąć pod uwagę przy wyborze urządzeń sieciowych?",
    answers: [
      {
        option: "Kolor",
        correct: false,
      },
      {
        option: "Połączenie konsoli",
        correct: false,
      },
      {
        option: "Koszt",
        correct: true,
      },
      {
        option: "Elastyczność",
        correct: false,
      },
    ],
  },
  {
    id: 498,
    question: "Co jest konieczne do zaplanowania i użycia podczas wdrażania sieci?",
    answers: [
      {
        option: "Nazwy urządzeń",
        correct: false,
      },
      {
        option: "Schemat adresowania IP",
        correct: true,
      },
      {
        option: "Schemat adresacji MAC",
        correct: false,
      },
      {
        option: "Lokalizacja drukarki",
        correct: false,
      },
    ],
  },
  {
    id: 499,
    question:
      "Co jest wymagane, aby utrzymać wysoki stopień niezawodności i wyeliminować pojedyncze punkty awarii?",
    answers: [
      {
        option: "Dostępność",
        correct: false,
      },
      {
        option: "Możliwość rozbudowy",
        correct: false,
      },
      {
        option: "Integralność",
        correct: false,
      },
      {
        option: "Nadmiarowość",
        correct: true,
      },
    ],
  },
  {
    id: 500,
    question: "Co jest wymagane, aby sklasyfikować ruch zgodnie z priorytetem?",
    answers: [
      {
        option: "Schemat adresowania IP",
        correct: false,
      },
      {
        option: "Jakość usług (QoS)",
        correct: true,
      },
      {
        option: "Routing",
        correct: false,
      },
      {
        option: "Przełączanie",
        correct: false,
      },
    ],
  },
  {
    id: 501,
    question:
      "Jakie są dwie formy programów lub procesów, które zapewniają dostęp do sieci? (Wybierz dwie odpowiedzi.)",
    multi: true,
    answers: [
      {
        option: "Oprogramowanie antywirusowe",
        correct: false,
      },
      {
        option: "Usługi warstwy aplikacji",
        correct: true,
      },
      {
        option: "Oprogramowanie do gier",
        correct: false,
      },
      {
        option: "Aplikacje sieciowe",
        correct: true,
      },
      {
        option: "Oprogramowanie produktywności",
        correct: false,
      },
      {
        option: "Maszyna wirtualna",
        correct: false,
      },
    ],
  },
  {
    id: 502,
    question:
      "Które dwa protokoły sieciowe są używane do ustanowienia połączenia sieciowego dostępu zdalnego z urządzeniem? (Wybierz dwie odpowiedzi.)",
    multi: true,
    answers: [
      {
        option: "File Transfer Protocol (FTP)",
        correct: false,
      },
      {
        option: "Hypertext Transfer Protocol (HTTP)",
        correct: false,
      },
      {
        option: "Remote Connect (RC)",
        correct: false,
      },
      {
        option: "Secure Shell (SSH)",
        correct: true,
      },
      {
        option: "Simple Mail Transfer Protocol (SMTP)",
        correct: false,
      },
      {
        option: "Telnet",
        correct: true,
      },
    ],
  },
  {
    id: 503,
    question:
      "Jakie elementy są wymagane do skalowania do większej sieci? (Wybierz dwie odpowiedzi.)",
    multi: true,
    answers: [
      {
        option: "Budżet",
        correct: true,
      },
      {
        option: "Konfiguracja urządzenia",
        correct: false,
      },
      {
        option: "Zwiększenie szerokości pasma",
        correct: false,
      },
      {
        option: "Dokumentacja sieci",
        correct: true,
      },
      {
        option: "Hosty Windows",
        correct: false,
      },
    ],
  },
  {
    id: 504,
    question:
      "Które oprogramowanie zainstalowane na kluczowych hostach może ujawnić rodzaje ruchu sieciowego przepływającego przez sieć?",
    answers: [
      {
        option: "Linux",
        correct: false,
      },
      {
        option: "MacOS",
        correct: false,
      },
      {
        option: "SSH",
        correct: false,
      },
      {
        option: "Windows",
        correct: false,
      },
      {
        option: "Wireshark",
        correct: true,
      },
    ],
  },
  {
    id: 505,
    question:
      "Jakie narzędzie systemu Windows 10 jest przydatne do określenia, które aplikacje korzystają z usług sieciowych na hoście?",
    answers: [
      {
        option: "Panel sterowania",
        correct: false,
      },
      {
        option: "Zużycie danych",
        correct: true,
      },
      {
        option: "Menedżer plików",
        correct: false,
      },
      {
        option: "Zapora Windows Defender",
        correct: false,
      },
      {
        option: "Eksplorator Windows",
        correct: false,
      },
    ],
  },
  {
    id: 506,
    question:
      "Technik rozwiązuje problem z siecią i właśnie ustalił hipotezę prawdopodobnych przyczyn. Jaki będzie następny krok w procesie rozwiązywania problemów?",
    answers: [
      {
        option: "Dokumentowanie spostrzeżeń, działań i wyników",
        correct: false,
      },
      {
        option: "Stworzenie planu działania i wdrożenia rozwiązania",
        correct: false,
      },
      {
        option: "Identyfikacja problemu",
        correct: false,
      },
      {
        option: "Sprawdzanie hipotezy w celu ustalenia przyczyny",
        correct: true,
      },
      {
        option: "Weryfikacja rozwiązania i wdrożenie środków zapobiegawczych",
        correct: false,
      },
    ],
  },
  {
    id: 507,
    question:
      "Technik rozwiązuje problem z siecią. Po rozwiązaniu problemu technik stwierdza, że przełącznik powinien zostać wymieniony. Co następnie technik powinien zrobić?",
    answers: [
      {
        option:
          "Wyślij e-mail wszystkich użytkowników, aby dać im znać, że przełącznik zostanie wymieniony.",
        correct: false,
      },
      {
        option: "Eskaluj zgłoszenie problemów do menedżera, aby zatwierdzić wymianę.",
        correct: true,
      },
      {
        option: "Kup nowy przełącznik i wymień wadliwy.",
        correct: false,
      },
      {
        option: "Rozwiąż problem.",
        correct: false,
      },
    ],
  },
  {
    id: 508,
    question:
      "Technik używa polecenia debug ip icmp uprzywilejowanego trybu EXEC do przechwytywania wyjścia routera na żywo. Które polecenia zatrzymają działanie polecenia debug na routerze Cisco? (Wybierz dwie odpowiedzi.)",
    multi: true,
    answers: [
      {
        option: "debug ip icmp off",
        correct: false,
      },
      {
        option: "no debug debug ip icmp",
        correct: false,
      },
      {
        option: "no debug ip icmp",
        correct: true,
      },
      {
        option: "undebug all",
        correct: true,
      },
      {
        option: "undebug debug ip icmp",
        correct: false,
      },
    ],
  },
  {
    id: 509,
    question:
      "Technik ustanowił zdalne połączenie z routerem R1 aby obserwować wyjście debug. Technik wydaje polecenie debug ip icmp, a następnie wykonuje ping na odległy cel. Jednak nie jest wyświetlany żaden wynik. Które polecenie musiałby wprowadzić technik, aby wyświetlać komunikaty dziennika (logi) na zdalnym połączeniu?",
    answers: [
      {
        option: "monitor debug output",
        correct: false,
      },
      {
        option: "monitor terminal",
        correct: false,
      },
      {
        option: "terminal monitor",
        correct: true,
      },
      {
        option: "terminal monitor debug",
        correct: false,
      },
    ],
  },
  {
    id: 510,
    question:
      "Jaki czynnik podczas projektowania sieci będzie ważniejszy dla dużej korporacji niż dla małej firmy?",
    answers: [
      {
        option: "Router internetowy",
        correct: false,
      },
      {
        option: "Zapora",
        correct: false,
      },
      {
        option: "Niskie zagęszczenie portów",
        correct: false,
      },
      {
        option: "Nadmiarowość",
        correct: true,
      },
    ],
  },
  {
    id: 511,
    question:
      "Nowo zatrudniony technik sieciowy ma zadanie zamawiania nowego sprzętu dla małej firmy z dużą prognozą wzrostu. Jaki podstawowy czynnik powinien mieć technik na uwadze przy wyborze nowych urządzeń?",
    answers: [
      {
        option: "Urządzenia o stałej liczbie i typie interfejsów",
        correct: false,
      },
      {
        option: "Urządzenia, które obsługują monitorowanie sieci",
        correct: false,
      },
      {
        option: "Nadmiarowe urządzenia",
        correct: false,
      },
      {
        option: "Urządzenia modularne",
        correct: true,
      },
    ],
  },
  {
    id: 512,
    question: "Jaki rodzaj ruchu najprawdopodobniej miałby najwyższy priorytet w sieci?",
    answers: [
      {
        option: "FTP",
        correct: false,
      },
      {
        option: "Wiadomośći błyskawiczne",
        correct: false,
      },
      {
        option: "Głos",
        correct: true,
      },
      {
        option: "SNMP",
        correct: false,
      },
    ],
  },
  {
    id: 513,
    question:
      "Technik sieciowy bada łączność sieciową z komputera do zdalnego hosta pod adresem 10.1.1.5. Które polecenie, po wydaniu na komputerze z systemem Windows, wyświetli ścieżkę do zdalnego hosta?",
    answers: [
      {
        option: "trace 10.1.1.5",
        correct: false,
      },
      {
        option: "traceroute 10.1.1.5",
        correct: false,
      },
      {
        option: "tracert 10.1.1.5",
        correct: true,
      },
      {
        option: "ping 10.1.1.5",
        correct: false,
      },
    ],
  },
  {
    id: 514,
    question:
      "Użytkownik nie może otworzyć strony internetowej wpisując http://www.cisco.com w przeglądarce internetowej, ale może ją otworzyć wpisując http://72.163.4.161. Na czym polega problem?",
    answers: [
      {
        option: "Brama domyślna",
        correct: false,
      },
      {
        option: "DHCP",
        correct: false,
      },
      {
        option: "DNS",
        correct: true,
      },
      {
        option: "Stos protokołów TCP/IP",
        correct: false,
      },
    ],
  },
  {
    id: 515,
    question: "Gdzie są domyślnie wysyłane komunikaty wyjściowe debugowania Cisco IOS?",
    answers: [
      {
        option: "Buforowane w pamięci",
        correct: false,
      },
      {
        option: "Na linie vty",
        correct: false,
      },
      {
        option: "Na serwer syslog",
        correct: false,
      },
      {
        option: "Na konsolę",
        correct: true,
      },
    ],
  },
  {
    id: 516,
    question:
      "Który element skalowania sieci polega na identyfikacji topologii fizycznej i logicznej?",
    answers: [
      {
        option: "Analiza ruchu",
        correct: false,
      },
      {
        option: "Dokumentacja sieci",
        correct: true,
      },
      {
        option: "Inwentaryzacja urządzeń",
        correct: false,
      },
      {
        option: "Analiza kosztów",
        correct: false,
      },
    ],
  },
  {
    id: 517,
    question:
      "Jaki mechanizm można wdrożyć w małej sieci, aby zminimalizować opóźnienia sieci dla aplikacji strumieniowania w czasie rzeczywistym?",
    answers: [
      {
        option: "Jakość usług (QoS)",
        correct: true,
      },
      {
        option: "PoE",
        correct: false,
      },
      {
        option: "AAA",
        correct: false,
      },
      {
        option: "ICMP",
        correct: false,
      },
    ],
  },
  {
    id: 518,
    question:
      "Który proces nie powiódł się, jeśli komputer nie może uzyskać dostępu do Internetu i otrzymał adres IP 169.254.142.5?",
    answers: [
      {
        option: "IP",
        correct: false,
      },
      {
        option: "DNS",
        correct: false,
      },
      {
        option: "DHCP",
        correct: true,
      },
      {
        option: "HTTP",
        correct: false,
      },
    ],
  },
  {
    id: 519,
    question:
      "Mała firma ma tylko jeden router, który jest jej punktem wyjścia do ISP. Jakie rozwiązanie może być zastosowane w celu utrzymania łączności, jeśli zawiedzie sam router lub jego połączenie z dostawcą usług internetowych ISP?",
    answers: [
      {
        option:
          "Aktywacja innego interfejsu routera, który jest połączony z ISP, aby ruch mógł przepływać przez ten interfejs.",
        correct: false,
      },
      {
        option: "Posiadanie drugiego routera, który jest połączony z innym ISP.",
        correct: true,
      },
      {
        option: "Zakup drugiego najtańszego łącza od innego ISP do połączenia z tym routerem.",
        correct: false,
      },
      {
        option: "Dodanie kilku interfejsów do routera, który jest podłączony do sieci wewnętrznej.",
        correct: false,
      },
    ],
  },
  {
    id: 520,
    question: "Kiedy administrator powinien ustalić stan odniesienia sieci?",
    answers: [
      {
        option: "Gdy ruch w sieci osiąga szczytową wartość",
        correct: false,
      },
      {
        option: "Gdy jest nagły spadek ruchu",
        correct: false,
      },
      {
        option: "Gdy ruch w sieci osiąga najmniejszą wartość",
        correct: false,
      },
      {
        option: "W regularnych odstępach okresu czasu",
        correct: true,
      },
    ],
  },
  {
    id: 521,
    question:
      "Które dwa rodzaje ruchu są wrażliwe na opóźnienia przy przesyłaniu? (Wybierz dwie odpowiedzi.)",
    // multi: true
    multi: true,
    answers: [
      {
        option: "E-mail",
        correct: false,
      },
      {
        option: "WWW",
        correct: false,
      },
      {
        option: "FTP",
        correct: false,
      },
      {
        option: "Głos",
        correct: true,
      },
      {
        option: "Wideo",
        correct: true,
      },
    ],
  },
  {
    id: 522,
    question:
      "Technik sieciowy podejrzewa, że pewne połączenie sieciowe między dwoma przełącznikami Cisco ma niedopasowanie dupleksu. Które polecenie użyłby technik, aby zobaczyć szczegóły warstwy 1 i warstwy 2 portu przełącznika?",
    answers: [
      {
        option: "show interfaces",
        correct: true,
      },
      {
        option: "show running-config",
        correct: false,
      },
      {
        option: "show ip interface brief",
        correct: false,
      },
      {
        option: "show mac-address-table",
        correct: false,
      },
    ],
  },
  {
    id: 523,
    question: "Które stwierdzenie o użyciu CDP w urządzeniu firmy Cisco jest prawdziwe?",
    answers: [
      {
        option:
          "Polecenie show cdp neighbor detail ujawni adres IP sąsiada tylko wtedy, gdy istnieje łączność warstwy 3.",
        correct: false,
      },
      {
        option:
          "Aby wyłączyć CDP globalnie, należy użyć polecenia no cdp enable w trybie konfiguracji interfejsu.",
        correct: false,
      },
      {
        option: "Protokół CDP może być wyłączony globalnie lub na konkretnym interfejsie.",
        correct: true,
      },
      {
        option:
          "Protokół CDP może być stosowany tylko w przełącznikach, ponieważ działa w warstwie łącza danych.",
        correct: false,
      },
    ],
  },
  {
    id: 524,
    question:
      "Jaki czynnik należy wziąć pod uwagę przy projektowaniu małej sieci przy wyborze urządzeń?",
    answers: [
      {
        option: "Koszt urządzeń",
        correct: true,
      },
      {
        option: "Nadmiarowość",
        correct: false,
      },
      {
        option: "Analiza ruchu",
        correct: false,
      },
      {
        option: "Dostawca usług internetowych (ISP)",
        correct: false,
      },
    ],
  },
  {
    id: 525,
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
    id: 526,
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
    id: 527,
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
    id: 528,
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
    id: 529,
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
    id: 530,
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
    id: 531,
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
    id: 532,
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
    id: 533,
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
    id: 534,
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
    id: 535,
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
    id: 536,
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
    id: 537,
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
    id: 538,
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
    id: 539,
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
    id: 540,
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
    id: 541,
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
    id: 542,
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
    id: 543,
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
    id: 544,
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
    id: 545,
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
    id: 546,
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
    id: 547,
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
    id: 548,
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
    id: 549,
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
    id: 550,
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
    id: 551,
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
    id: 552,
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
    id: 553,
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
    id: 554,
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
    id: 555,
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
    id: 556,
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
    id: 557,
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
    id: 558,
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
    id: 559,
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
    id: 560,
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
    id: 561,
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
    id: 562,
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
    id: 563,
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
    id: 564,
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
    id: 565,
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
    id: 566,
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
    id: 567,
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
    id: 568,
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
    id: 569,
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
    id: 570,
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
    id: 571,
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
    id: 572,
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
    id: 573,
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
    id: 574,
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
    id: 575,
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
    id: 576,
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
    id: 577,
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
    id: 578,
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
    id: 579,
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
    id: 580,
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
    id: 581,
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
    id: 582,
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
    id: 583,
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
    id: 584,
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
    id: 585,
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
    id: 586,
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
    id: 587,
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
    id: 588,
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
    id: 589,
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
    id: 590,
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
    id: 591,
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
    id: 592,
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
    id: 593,
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
    id: 594,
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
    id: 595,
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
    id: 596,
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
    id: 597,
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
    id: 598,
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
    id: 599,
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
    id: 600,
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
    id: 601,
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
    id: 602,
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
    id: 603,
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
    id: 604,
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
    id: 605,
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
    id: 606,
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
    id: 607,
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
    id: 608,
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
    id: 609,
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
    id: 610,
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
    id: 611,
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
    id: 612,
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
    id: 613,
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
    id: 614,
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
    id: 615,
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
    id: 616,
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
    id: 617,
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
    id: 618,
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
    id: 619,
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
    id: 620,
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
    id: 621,
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
    id: 622,
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
    id: 623,
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
    id: 624,
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
    id: 625,
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
    id: 626,
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
    id: 627,
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
    id: 628,
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
    id: 629,
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
    id: 630,
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
    id: 631,
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
    id: 632,
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
    id: 633,
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
    id: 634,
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
    id: 635,
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
    id: 636,
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
    id: 637,
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
    id: 638,
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
    id: 639,
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
    id: 640,
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
    id: 641,
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
    id: 642,
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
    id: 643,
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
    id: 644,
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
    id: 645,
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
    id: 646,
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
    id: 647,
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
    id: 648,
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
    id: 649,
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
    id: 650,
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
    id: 651,
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
    id: 652,
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
    id: 653,
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
    id: 654,
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
    id: 655,
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
    id: 656,
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
    id: 657,
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
    id: 658,
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
    id: 659,
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
    id: 660,
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
    id: 661,
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
    id: 662,
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
    id: 663,
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
    id: 664,
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
    id: 665,
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
    id: 666,
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
    id: 667,
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
    id: 668,
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
    id: 669,
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
    id: 670,
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
    id: 671,
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
    id: 672,
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
    id: 673,
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
    id: 674,
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
    id: 675,
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
    id: 676,
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
    id: 677,
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
    id: 678,
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
    id: 679,
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
    id: 680,
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
    id: 681,
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
    id: 682,
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
    id: 683,
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
    id: 684,
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
    id: 685,
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
    id: 686,
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
    id: 687,
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
    id: 688,
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
    id: 689,
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
    id: 690,
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
    id: 691,
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
    id: 692,
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
    id: 693,
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
    id: 694,
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
    id: 695,
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
    id: 696,
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
    id: 697,
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
    id: 698,
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
    id: 699,
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
    id: 700,
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
    id: 701,
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
    id: 702,
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
    id: 703,
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
    id: 704,
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
    id: 705,
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
    id: 706,
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
    id: 707,
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
    id: 708,
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
    id: 709,
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
    id: 710,
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
    id: 711,
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
    id: 712,
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
    id: 713,
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
    id: 714,
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
    id: 715,
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
    id: 716,
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
    id: 717,
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
    id: 718,
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
    id: 719,
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
    id: 720,
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
    id: 721,
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
    id: 722,
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
    id: 723,
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
    id: 724,
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
    id: 725,
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
    id: 726,
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
    id: 727,
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
    id: 728,
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
    id: 729,
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
    id: 730,
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
    id: 731,
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
    id: 732,
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
    id: 733,
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
    id: 734,
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
    id: 735,
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
    id: 736,
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
    id: 737,
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
    id: 738,
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
    id: 739,
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
    id: 740,
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
    id: 741,
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
    id: 742,
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
    id: 743,
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
    id: 744,
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
    id: 745,
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
    id: 746,
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
    id: 747,
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
    id: 748,
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
    id: 749,
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
    id: 750,
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
    id: 751,
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
    id: 752,
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
    id: 753,
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
    id: 754,
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
    id: 755,
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
    id: 756,
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
    id: 757,
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
    id: 758,
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
    id: 759,
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
    id: 760,
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
    id: 761,
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
    id: 762,
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
    id: 763,
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
    id: 764,
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
    id: 765,
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
    id: 766,
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
    id: 767,
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
    id: 768,
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
    id: 769,
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
    id: 770,
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
    id: 771,
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
    id: 772,
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
    id: 773,
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
    id: 774,
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
    id: 775,
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
    id: 776,
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
    id: 777,
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
    id: 778,
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
    id: 779,
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
    id: 780,
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
    id: 781,
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
    id: 782,
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
    id: 783,
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
    id: 784,
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
    id: 785,
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
    id: 786,
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
    id: 787,
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
    id: 788,
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
    id: 789,
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
    id: 790,
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
    id: 791,
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
    id: 792,
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
    id: 793,
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
    id: 794,
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
    id: 795,
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
    id: 796,
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
    id: 797,
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
    id: 798,
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
    id: 799,
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
    id: 800,
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
    id: 801,
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
    id: 802,
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
    id: 803,
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
    id: 804,
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
    id: 805,
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
    id: 806,
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
    id: 807,
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
    id: 808,
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
    id: 809,
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
    id: 810,
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
    id: 811,
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
    id: 812,
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
    id: 813,
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
    id: 814,
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
    id: 815,
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
    id: 816,
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
    id: 817,
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
    id: 818,
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
    id: 819,
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
    id: 820,
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
    id: 821,
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
    id: 822,
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
    id: 823,
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
    id: 824,
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
    id: 825,
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
    id: 826,
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
    id: 827,
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
    id: 828,
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
    id: 829,
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
    id: 830,
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
    id: 831,
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
    id: 832,
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
    id: 833,
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
    id: 834,
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
    id: 835,
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
    id: 836,
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
    id: 837,
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
    id: 838,
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
    id: 839,
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
    id: 840,
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
    id: 841,
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
    id: 842,
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
    id: 843,
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
    id: 844,
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
    id: 845,
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
    id: 846,
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
    id: 847,
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
    id: 848,
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
    id: 849,
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
    id: 850,
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
    id: 851,
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
    id: 852,
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
    id: 853,
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
    id: 854,
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
    id: 855,
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
    id: 856,
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
    id: 857,
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
    id: 858,
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
    id: 859,
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
    id: 860,
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
    id: 861,
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
    id: 862,
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
    id: 863,
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
    id: 864,
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
    id: 865,
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
    id: 866,
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
    id: 867,
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
    id: 868,
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
    id: 869,
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
    id: 870,
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
    id: 871,
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
    id: 872,
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
    id: 873,
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
    id: 874,
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
    id: 875,
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
    id: 876,
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
    id: 877,
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
    id: 878,
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
    id: 879,
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
    id: 880,
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
    id: 881,
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
    id: 882,
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
    id: 883,
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
    id: 884,
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
    id: 885,
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
    id: 886,
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
    id: 887,
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
    id: 888,
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
    id: 889,
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
    id: 890,
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
    id: 891,
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
    id: 892,
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
    id: 893,
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
    id: 894,
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
    id: 895,
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
    id: 896,
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
    id: 897,
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
    id: 898,
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
    id: 899,
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
    id: 900,
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
    id: 901,
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
    id: 902,
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
    id: 903,
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
    id: 904,
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
    id: 905,
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
    id: 906,
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
    id: 907,
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
    id: 908,
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
    id: 909,
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
    id: 910,
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
    id: 911,
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
    id: 912,
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
    id: 913,
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
    id: 914,
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
    id: 915,
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
    id: 916,
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
    id: 917,
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
    id: 918,
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
    id: 919,
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
    id: 920,
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
    id: 921,
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
    id: 922,
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
    id: 923,
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
    id: 924,
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
    id: 925,
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
    id: 926,
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
    id: 927,
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
    id: 928,
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
    id: 929,
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
    id: 930,
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
    id: 931,
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
    id: 932,
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
    id: 933,
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
    id: 934,
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
    id: 935,
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
    id: 936,
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
    id: 937,
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
    id: 938,
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
    id: 939,
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
    id: 940,
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
    id: 941,
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
    id: 942,
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
    id: 943,
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
    id: 944,
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
    id: 945,
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
    id: 946,
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
    id: 947,
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
    id: 948,
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
    id: 949,
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
    id: 950,
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
    id: 951,
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
    id: 952,
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
    id: 953,
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
    id: 954,
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
    id: 955,
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
    id: 956,
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
    id: 957,
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
    id: 958,
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
    id: 959,
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
    id: 960,
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
    id: 961,
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
    id: 962,
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
    id: 963,
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
    id: 964,
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
    id: 965,
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
    id: 966,
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
    id: 967,
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
    id: 968,
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
    id: 969,
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
    id: 970,
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
    id: 971,
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
    id: 972,
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
    id: 973,
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
    id: 974,
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
    id: 975,
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
    id: 976,
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
    id: 977,
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
    id: 978,
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
    id: 979,
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
    id: 980,
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
    id: 981,
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
    id: 982,
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
    id: 983,
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
    id: 984,
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
    id: 985,
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
    id: 986,
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
    id: 987,
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
    id: 988,
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
    id: 989,
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
    id: 990,
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
    id: 991,
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
    id: 992,
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
    id: 993,
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
    id: 994,
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
    id: 995,
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
    id: 996,
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
    id: 997,
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
    id: 998,
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
    id: 999,
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
    id: 1000,
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
    id: 1001,
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
    id: 1002,
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
    id: 1003,
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
    id: 1004,
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
    id: 1005,
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
    id: 1006,
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
    id: 1007,
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
    id: 1008,
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
    id: 1009,
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
    id: 1010,
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
    id: 1011,
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
    id: 1012,
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
    id: 1013,
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
    id: 1014,
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
    id: 1015,
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
    id: 1016,
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
