export const dataJEE = [
  {
    id: 1,
    question: "Dependency inversion i dependency injection w wybranej technologii",
    answers: [
      {
        option:
          "Zasada odwrócenia zależności (Dependency Inversion Principle - DIP), będąca literą 'D' w akronimie SOLID, mówi, że moduły wysokopoziomowe nie powinny zależeć od modułów niskopoziomowych – obie grupy powinny zależeć od abstrakcji. Dodatkowo abstrakcje nie powinny zależeć od szczegółów, to szczegóły mają zależeć od abstrakcji. W praktyce oznacza to programowanie do interfejsów, a nie konkretnych implementacji. Wstrzykiwanie zależności (Dependency Injection - DI) to wzorzec projektowy, który jest najczęstszym sposobem realizacji zasady DIP. Zamiast tworzyć instancje wymaganych obiektów wewnątrz klasy (np. używając słowa kluczowego `new`), przekazujemy je z zewnątrz – najczęściej przez konstruktor, rzadziej przez settery czy odpowiednie właściwości. W ekosystemie Java, popularnym frameworkiem realizującym DI jest Spring (Spring Core). Kontener IoC (Inversion of Control) w Springu zarządza cyklem życia obiektów (nazywanych beanami) i automatycznie wstrzykuje wymagane zależności tam, gdzie są one zadeklarowane (np. za pomocą adnotacji `@Autowired` lub po prostu przez konstruktor w nowszych wersjach). Dzięki temu kod jest luźno powiązany (loosely coupled), znacznie łatwiejszy do testowania (możemy łatwo wstrzyknąć mocki interfejsów w testach jednostkowych) oraz bardziej elastyczny, ponieważ zmiana implementacji niskopoziomowej nie wymusza zmian w logice biznesowej.",
        correct: true,
      },
    ],
  },
  {
    id: 2,
    question: "Co to jest event-driven architecture?",
    answers: [
      {
        option:
          'Event-Driven Architecture (Architektura sterowana zdarzeniami) to wzorzec architektury oprogramowania, w którym głównym mechanizmem komunikacji między różnymi komponentami lub mikrousługami jest produkcja, wykrywanie, konsumpcja i reagowanie na zdarzenia (events). Zdarzenie to informacja o tym, że w systemie nastąpiła jakaś istotna zmiana stanu, np. "Złożono zamówienie". W architekturze tej wyróżniamy producentów, którzy generują zdarzenia i wysyłają je do brokera wiadomości (np. Apache Kafka, RabbitMQ), oraz konsumentów, którzy nasłuchują na konkretne typy zdarzeń. Kluczową zaletą tego podejścia jest odprzęgnięcie (decoupling) usług. Producent nie musi wiedzieć o konsumentach, nie wie ile ich jest ani co zrobią z informacją – po prostu ogłasza fakt dokonany. Ułatwia to skalowanie systemu oraz dodawanie nowych funkcjonalności bez modyfikacji istniejącego kodu (nowa usługa po prostu zaczyna nasłuchiwać na istniejące strumienie zdarzeń). Architektura ta jest idealna dla systemów asynchronicznych i rozproszonych, jednak niesie ze sobą wyzwania, takie jak trudność w śledzeniu całkowitego przepływu procesu biznesowego, konieczność obsługi opóźnień sieciowych oraz trudniejsze zarządzanie spójnością danych w systemie.',
        correct: true,
      },
    ],
  },
  {
    id: 3,
    question: "Co to jest event-sourcing?",
    answers: [
      {
        option:
          'Event Sourcing to zaawansowany wzorzec architektoniczny dotyczący sposobu utrwalania stanu aplikacji. W tradycyjnym podejściu baza danych przechowuje tylko aktualny stan encji – modyfikacja rekordu bezpowrotnie nadpisuje jego poprzednie wartości. W modelu Event Sourcing nie aktualizujemy stanu bezpośrednio. Zamiast tego zapisujemy wyłącznie sekwencję niezmiennych (immutable) zdarzeń domenowych, które opisują wszystko, co wydarzyło się w systemie w związku z daną encją. Dla konta bankowego nie przechowujemy kolumny z saldem, lecz rejestrujemy historię zdarzeń: "KontoUtworzone", "Wpłata(100)", "Wypłata(30)". Aby poznać obecny stan (saldo), system musi pobrać historię zdarzeń dla tego obiektu i odtworzyć ją po kolei od początku. Główne zalety tego rozwiązania to wbudowany, bezbłędny audyt logowy (wiemy nie tylko JAKI jest stan, ale dokładnie JAK do niego doszło), pełna możliwość analizy historycznej oraz łatwość odtwarzania systemu po awarii. Ponieważ zdarzenia są tylko dopisywane na końcu (strumień append-only), operacje zapisu są niezwykle szybkie. Wyzwaniem jest jednak optymalizacja zapytań odczytujących, dlatego ten wzorzec jest zazwyczaj stosowany w ścisłej współpracy z architekturą CQRS w celu budowania szybkich widoków.',
        correct: true,
      },
    ],
  },
  {
    id: 4,
    question: "Co to jest CQRS?",
    answers: [
      {
        option:
          "CQRS (Command Query Responsibility Segregation) to wzorzec architektoniczny, który postuluje ścisłe oddzielenie operacji modyfikujących stan systemu (Command) od operacji odczytujących dane (Query). W tradycyjnych systemach te same modele danych i relacje ORM są używane zarówno do skomplikowanych zapisów, jak i do prostych odczytów. CQRS rozdziela to na dwa logiczne (lub fizyczne) moduły. Część 'Command' zajmuje się wyłącznie przyjmowaniem poleceń od użytkownika, przeprowadzaniem złożonej walidacji reguł biznesowych oraz bezpieczną mutacją stanu bazy. Część 'Query' służy tylko do błyskawicznego serwowania danych w formie idealnie dopasowanej do potrzeb widoków aplikacji (np. płaskie DTO), bez obciążania logiki domenowej. W zaawansowanych implementacjach CQRS korzysta się z dwóch różnych baz danych. Zapisy trafiają do znormalizowanej bazy relacyjnej lub Event Store, a następnie w tle zmiany są replikowane do wyspecjalizowanej, denormalizowanej bazy odczytowej (np. zoptymalizowanej pod wyszukiwanie, jak Elasticsearch). Podejście to pozwala na niezależne skalowanie infrastruktury odczytu i zapisu oraz drastycznie zwiększa wydajność zapytań. Wymaga jednak od zespołu programistycznego zarządzania złożonością asynchronicznej synchronizacji i radzenia sobie ze zjawiskiem ostatecznej spójności (eventual consistency).",
        correct: true,
      },
    ],
  },
  {
    id: 5,
    question: "Co to są agregaty?",
    answers: [
      {
        option:
          'Agregaty to jeden z kluczowych wzorców w podejściu Domain-Driven Design (DDD). Stanowią one logiczne grupy powiązanych ze sobą obiektów domenowych (encji oraz obiektów wartości - Value Objects), które są traktowane jako pojedyncza, integralna jednostka w kontekście zmian stanu danych. Każdy agregat posiada zdefiniowany Korzeń Agregatu (Aggregate Root), który jest jedyną zewnętrzną "bramą" do całego klastra obiektów. Zewnętrzny świat nie może modyfikować obiektów podrzędnych bezpośrednio, może to zrobić tylko wywołując odpowiednie metody na obiekcie korzenia. Głównym zadaniem agregatu jest ochrona niezmienników (invariants), czyli wewnętrznych reguł biznesowych i spójności logicznej całego zbioru danych podczas każdej transakcji. Na przykład, jeśli mamy agregat "Zamówienie" zawierający listę "Pozycji Zamówienia", logiką biznesową może być zasada, że suma wartości pozycji nie może przekroczyć limitu kredytowego klienta. Modyfikując zawartość koszyka poprzez korzeń "Zamówienie", agregat może przeliczyć całość i ewentualnie zablokować niepoprawny stan zanim trafi on do bazy danych. Z architektonicznego punktu widzenia, agregaty wyznaczają twarde granice dla transakcji ACID – dobra praktyka w DDD nakazuje, aby jedna transakcja bazodanowa modyfikowała stan zawsze tylko jednego agregatu. Zapobiega to długim blokadom na tabelach i ułatwia późniejsze przejście na systemy rozproszone i mikroserwisy.',
        correct: true,
      },
    ],
  },
  {
    id: 6,
    question: "Dlaczego odddzielanie logiki biznesowej od bibliotek/frameworków jest korzystne?",
    answers: [
      {
        option:
          "Oddzielanie czystej logiki biznesowej (rdzenia aplikacji) od zewnętrznych bibliotek, infrastruktury oraz frameworków to fundamentalna zasada projektowania, propagowana m.in. przez Czystą Architekturę (Clean Architecture) i Architekturę Heksagonalną. Główną korzyścią z takiego rozwiązania jest skuteczna izolacja najcenniejszego fragmentu kodu, czyli zasad i reguł działania naszej domeny biznesowej, od szybko zmieniającego się i niestabilnego ekosystemu technologicznego. Biblioteki i frameworki regularnie ulegają przedawnieniu, zmieniają API lub wprowadzają łamiące kompatybilność aktualizacje. Gdy logika biznesowa przenika się z narzędziami zewnętrznymi (np. gdy encje dziedziczą po klasach frameworka webowego), próba jakiejkolwiek migracji staje się bardzo kosztowna. Odseparowana logika, zapisana w formie czystych obiektów języka (np. klasyczne POJO w środowisku Java lub proste klasy C#), zyskuje ogromną elastyczność i jest bez porównania łatwiejsza w testowaniu. Testy jednostkowe domenowe stają się błyskawiczne, bo nie wymagają podnoszenia ociężałego środowiska Springa, konfigurowania bazy danych czy emulacji sieci. Wszelkie narzędzia wejścia/wyjścia pełnią wtedy jedynie rolę wymiennych wtyczek adaptacyjnych, realizujących interfejsy zdefiniowane przez rdzeń biznesowy z wykorzystaniem zasady Inwersji Zależności.",
        correct: true,
      },
    ],
  },
  {
    id: 7,
    question: "Co to jest eventual consistency?",
    answers: [
      {
        option:
          'Eventual consistency (ostateczna spójność) to niezwykle ważny model spójności danych spotykany w nowoczesnych, rozproszonych systemach i architekturze mikroserwisowej. W przeciwieństwie do silnej spójności (Strong Consistency), znanej z tradycyjnych transakcji bazodanowych ACID (gdzie po operacji zapisu natychmiast każdy proces widzi te same aktualne dane), ostateczna spójność akceptuje chwilowe opóźnienia. Zasada ta gwarantuje jedynie tyle, że jeśli w systemie przestaną pojawiać się nowe zmiany, to w pewnym, bliżej nieokreślonym momencie w przyszłości "ostatecznie" wszystkie serwery oraz zdenormalizowane repliki zsynchronizują się do jednolitego stanu. Takie zjawisko to podstawa systemów asynchronicznych, na przykład CQRS. Zmiana w bazie głównej wysyła asynchroniczne zdarzenie, które w tle aktualizuje bazę odczytową. Przez ten krótki czas okna replikacji użytkownik na ekranie aplikacji może widzieć starsze, nieodświeżone informacje. Zgoda na model eventual consistency to wymóg narzucony przez tzw. twierdzenie CAP. Pozwala on na osiągnięcie maksymalnej możliwej przepustowości aplikacji, bezkonkurencyjnej dostępności usług (High Availability) oraz całkowitej odporności na chwilowe awarie w infrastrukturze. Narzuca natomiast wyższe skomplikowanie kodu po stronie frontendowej, który musi odpowiednio informować klienta o trwającym procesowaniu w tle.',
        correct: true,
      },
    ],
  },
  {
    id: 8,
    question:
      "Jakie elementy wybranej przez Ciebie technologii `enterprise` (JEE, .NET) służą do osiągania wysokiej jakości tworzonego systemu?",
    answers: [
      {
        option:
          "W nowoczesnym ekosystemie platformy .NET, uznawanym za jedno z czołowych rozwiązań klasy enterprise, wbudowano szereg zaawansowanych mechanizmów podnoszących niezawodność i jakość tworzonego oprogramowania. Fundamentem jest obecny domyślnie, wbudowany kontener wstrzykiwania zależności (Dependency Injection), wymuszający od początku projektowanie luźno powiązanego (loosely coupled) i gotowego do bezproblemowego testowania jednostkowego kodu opartego na abstrakcjach. Do bezpiecznej orkiestracji strukturami baz danych .NET oferuje potężny Entity Framework Core, zapewniający nie tylko przejrzyste mapowanie obiektowo-relacyjne (ORM), ale także wbudowaną i automatyczną ochronę przez atakami wstrzykiwania zapytań SQL. Jakość usług komunikacyjnych w środowiskach mikroserwisów podbijają natywne mechanizmy integracji wysokowydajnych protokołów jak gRPC oraz rozbudowany moduł HttpClientFactory optymalizujący i zabezpieczający połączenia sieciowe. Aby umożliwić dogłębne monitorowanie w produkcji, środowisko dostarcza fenomenalne narzędzia do obserwowalności (Observability) – pełną, natywną zgodność z potężnym standardem OpenTelemetry, potężne logowanie strukturalne oraz system metryk wydajnościowych dostępny prosto z procesów serwera webowego Kestrel. Uzupełnieniem są bezbłędne mechanizmy wczytywania bezpiecznej konfiguracji oraz rygorystyczny kompilator ścisłego typowania, wychwytujący usterki.",
        correct: true,
      },
    ],
  },
];
