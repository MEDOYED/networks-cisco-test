export const dataBDiA = [
  {
    id: 1,
    question: "Co to są transakcje w systemach wykorzystujących bazy danych?",
    answers: [
      {
        option: "Transakcja w systemach bazodanowych to sekwencja jednej lub więcej operacji wykonywanych na bazie danych, które są traktowane jako pojedyncza, niepodzielna, logiczna jednostka pracy. Głównym celem stosowania transakcji jest zapewnienie, że system bazodanowy pozostanie w spójnym i przewidywalnym stanie, nawet w obliczu błędów sprzętowych, awarii systemu, przerw w zasilaniu czy równoległego dostępu wielu użytkowników do tych samych danych. Klasycznym przykładem ilustrującym potrzebę użycia transakcji jest przelew bankowy z jednego konta na drugie. Operacja ta składa się z co najmniej dwóch kroków: odjęcia kwoty z konta nadawcy oraz dodania tej samej kwoty do konta odbiorcy. Jeśli system uległby awarii po wykonaniu pierwszego kroku, ale przed drugim, pieniądze zniknęłyby z systemu, a baza danych znalazłaby się w stanie niespójnym. Dzięki mechanizmowi transakcji system gwarantuje, że albo obie operacje zakończą się pełnym sukcesem (tzw. operacja commit, zatwierdzająca zmiany), albo w przypadku jakiegokolwiek błędu na dowolnym etapie, cała transakcja zostanie wycofana do stanu początkowego (tzw. operacja rollback). Transakcje są kluczowe w nowoczesnych systemach informatycznych, takich jak systemy finansowe czy e-commerce, gdzie bezbłędne przetwarzanie danych jest wymogiem. Bez nich zarządzanie złożonymi danymi w środowisku o wysokiej współbieżności byłoby bardzo podatne na korupcję danych.",
        correct: true,
      },
    ],
  },
  {
    id: 2,
    question: "Jakie jest znaczenie liter w akronimie ACID?",
    answers: [
      {
        option: "Akronim ACID to zbiór czterech podstawowych właściwości gwarantujących niezawodne przetwarzanie transakcji w bazach danych. Atomicity (Atomowość) oznacza, że każda transakcja jest niepodzielną jednostką. Albo wszystkie operacje wchodzące w jej skład zostaną wykonane pomyślnie i zapisane, albo żadna z nich (wycofanie zmian). Nie ma żadnego stanu pośredniego. Consistency (Spójność) zapewnia, że transakcja zawsze przeprowadza bazę danych z jednego w pełni poprawnego stanu w drugi poprawny stan. Zmiany muszą spełniać wszystkie zdefiniowane reguły, ograniczenia oraz więzy integralności (np. klucze obce czy unikalność). Isolation (Izolacja) sprawia, że transakcje wykonywane równolegle przez różnych użytkowników nie wpływają na siebie przed ich zakończeniem. Rezultat równoczesnego wykonania transakcji musi być taki sam, jakby były one realizowane sekwencyjnie. Zapobiega to problemom takim jak odczytywanie niezatwierdzonych danych przez inne procesy. Durability (Trwałość) gwarantuje, że po pomyślnym zatwierdzeniu transakcji (commit), jej efekty stają się permanentne i nie zostaną utracone nawet w przypadku krytycznej awarii systemu, braku zasilania czy uszkodzenia aplikacji. Osiąga się to poprzez zapisywane odpowiednich dzienników na dysku.",
        correct: true,
      },
    ],
  },
  {
    id: 3,
    question: "Jakie znasz poziomy izolacji transakcji?",
    answers: [
      {
        option: "Standard SQL (ANSI/ISO) definiuje cztery podstawowe poziomy izolacji transakcji, które określają stopień, w jakim operacje jednej transakcji są ukryte przed innymi, równolegle wykonywanymi transakcjami. Najniższym poziomem jest READ UNCOMMITTED (Odczyt niezatwierdzony). Zapewnia on najsłabszą izolację, pozwalając transakcjom na odczyt danych, które zostały zmodyfikowane przez inne transakcje, ale nie zostały jeszcze zatwierdzone (commit). Kolejnym poziomem jest READ COMMITTED (Odczyt zatwierdzony), będący często domyślnym ustawieniem w wielu relacyjnych bazach danych (np. PostgreSQL, SQL Server). Gwarantuje on, że transakcja będzie odczytywać tylko te dane, które zostały już trwale zatwierdzone przez inne operacje. Wyższym poziomem jest REPEATABLE READ (Powtarzalny odczyt), który oprócz właściwości z poprzedniego poziomu zapewnia, że jeśli transakcja odczyta dany wiersz wielokrotnie, za każdym razem otrzyma ten sam wynik, nawet jeśli inna transakcja zmodyfikuje i zatwierdzi ten wiersz w międzyczasie. Najwyższym i najbardziej restrykcyjnym poziomem jest SERIALIZABLE (Pełna serializacja). Na tym poziomie system zarządzania bazą danych (RDBMS) wykonuje transakcje współbieżne w taki sposób, że ostateczny wynik ich działania jest dokładnie taki sam, jak gdyby były one wykonywane po kolei (sekwencyjnie), jedna po drugiej. Zapobiega to wszelkim niepożądanym zjawiskom współbieżności, ale zazwyczaj wiąże się z największymi kosztami wydajnościowymi i ryzykiem wystąpienia zakleszczeń (deadlocks).",
        correct: true,
      },
    ],
  },
  {
    id: 4,
    question: "Jakie niekorzystne zjawiska występują w systemach transakcyjnych przy poszczególnych poziomach izolacji?",
    answers: [
      {
        option: "W systemach relacyjnych baz danych, zależnie od poziomu izolacji, mogą wystąpić trzy główne niekorzystne zjawiska (anomalie) związane ze współbieżnością. Pierwszym jest brudny odczyt (Dirty Read). Ma miejsce, gdy transakcja odczytuje dane modyfikowane przez inną transakcję, która jeszcze nie została zatwierdzona. Jeśli ta druga transakcja zostanie wycofana, pierwsza będzie operować na danych, które nigdy nie istniały. Występuje to tylko na poziomie READ UNCOMMITTED. Drugą anomalią jest niepowtarzalny odczyt (Non-repeatable Read). Występuje, gdy w ramach jednej transakcji ten sam wiersz jest odczytywany dwukrotnie, ale w międzyczasie inna transakcja modyfikuje (UPDATE) lub usuwa ten wiersz i zatwierdza zmiany. W rezultacie dwa odczyty dają różne wyniki. Temu zjawisku zapobiega poziom REPEATABLE READ. Trzecim problemem jest odczyt widmo (Phantom Read). Zdarza się to, gdy transakcja wykonuje zapytanie zwracające zbiór wierszy spełniających dany warunek, a inna transakcja dodaje (INSERT) nowe wiersze spełniające ten warunek i zatwierdza je. Gdy pierwsza transakcja ponowi zapytanie, otrzyma inny zbiór wyników (pojawią się \"widma\"). Tylko poziom izolacji SERIALIZABLE całkowicie chroni przed odczytami widmo, gwarantując absolutną spójność.",
        correct: true,
      },
    ],
  },
  {
    id: 5,
    question: "Co się stanie, kiedy dwie jednoczesne transakcje SERIALIZABLE brudzą ten sam rekord w tabeli?",
    answers: [
      {
        option: "Kiedy dwie równoległe transakcje działające na poziomie SERIALIZABLE próbują zmodyfikować ten sam rekord w tabeli, RDBMS musi podjąć rygorystyczne kroki, aby zapewnić sekwencyjność operacji. Pierwsza z transakcji, która spróbuje zmienić rekord, nałoży na niego blokadę na wyłączność (exclusive lock). Druga transakcja, napotykając tę blokadę, w większości systemów wejdzie w stan oczekiwania, zawieszając działanie do momentu zatwierdzenia (commit) lub wycofania (rollback) pierwszej operacji. Jeśli pierwsza transakcja zostanie wycofana, druga bez przeszkód będzie mogła założyć własną blokadę i kontynuować pracę. Jednak jeśli pierwsza transakcja z sukcesem zatwierdzi swoje zmiany (zmieniając stan wiersza bazowego), system zorientuje się, że zatwierdzenie drugiej modyfikacji zaburzyłoby zasadę ścisłej serializacji i stworzyłoby konflikt zależności. W efekcie silnik bazy danych zazwyczaj wymusi natychmiastowe przerwanie drugiej, oczekującej transakcji, rzucając błąd np. \"serialization failure\" (brak możliwości zserializowania dostępu). To standardowe zachowanie ma na celu ochronę integralności danych. Wymaga ono, aby aplikacja zaimplementowała mechanizm ponawiania (retry). Aplikacja musi przechwycić wyjątek bazy danych i uruchomić drugą transakcję całkowicie od nowa na aktualnych danych.",
        correct: true,
      },
    ],
  },
  {
    id: 6,
    question: "Co się stanie, kiedy dwie jednoczesne transakcje READ COMMITTED brudzą ten sam rekord w tabeli?",
    answers: [
      {
        option: "Gdy dwie jednoczesne transakcje na poziomie READ COMMITTED próbują zmodyfikować ten sam rekord, mechanizm zarządzania współbieżnością działa mniej rygorystycznie niż przy SERIALIZABLE. Pierwsza transakcja, która próbuje zaktualizować wiersz, zakłada na nim blokadę zapisu (exclusive lock). Druga transakcja próbująca zmienić ten sam wiersz zostaje zablokowana i musi czekać na zakończenie (commit lub rollback) pierwszej transakcji. Różnica pojawia się, gdy pierwsza transakcja z sukcesem zatwierdzi swoje zmiany i zwolni blokadę. W tym momencie druga transakcja zostaje wybudzona. Zamiast zwracać błąd, silnik bazy danych (np. w PostgreSQL) ponownie weryfikuje warunki (klauzulę WHERE) dla tego rekordu, widząc już najnowsze, zatwierdzone przed chwilą dane. Jeśli po tej nowej ewaluacji wiersz wciąż spełnia kryteria zapytania, modyfikacja drugiej transakcji dochodzi do skutku, często bezpowrotnie nadpisując wyniki pracy tej pierwszej. Z punktu widzenia bazy danych transakcja zakończy się sukcesem bez rzucania wyjątków. Taki mechanizm gwarantuje dużą przepustowość i mniejszą liczbę wymuszonych powtórzeń, jednak niesie ze sobą istotne ryzyko błędu. Aplikacja na tym poziomie izolacji nie jest systemowo chroniona przed anomalią nazywaną utratą modyfikacji (Lost Update), co przy nieostrożnej implementacji może prowadzić do nadpisywania ważnych zmian logicznych wprowadzonych przez innych użytkowników.",
        correct: true,
      },
    ],
  },
  {
    id: 7,
    question: "Co się stanie, kiedy dwie jednoczesne transakcje SERIALIZABLE brudzą dwa różne rekordy w tabeli?",
    answers: [
      {
        option: "Jeśli dwie jednoczesne transakcje na poziomie izolacji SERIALIZABLE modyfikują dwa całkowicie różne i niezależne od siebie rekordy w tabeli, w większości standardowych przypadków ich wykonanie przebiegnie równolegle i bez żadnych problemów. Wynika to z faktu, że współczesne systemy bazodanowe domyślnie używają precyzyjnych blokad na poziomie pojedynczych wierszy (row-level locking). Dzięki temu operacje zapisu kierowane pod różne adresy fizyczne nie blokują się wzajemnie, pozwalając na szybkie zatwierdzenie obu modyfikacji bez wyrzucania jakichkolwiek błędów. Istnieje jednak pewien istotny wyjątek charakterystyczny dla poziomu SERIALIZABLE, związany ze zjawiskiem tzw. konfliktów predykatów (predicate locks) lub wypaczenia zapisu (Write Skew). Jeżeli transakcje te przed wykonaniem swojego zapisu bazują na wynikach odczytu szerokiego zakresu wierszy (np. liczą średnią, sprawdzają limity globalne), może dojść do konfliktu logicznego. Jeśli zatwierdzenie rekordu A przez pierwszą transakcję wpłynęłoby negatywnie na założenia biznesowe odczytane chwilę wcześniej przez drugą transakcję, a z kolei zapis rekordu B zaburzyłby warunki odczytane przez pierwszą transakcję, system zidentyfikuje to naruszenie. W takiej krzyżowej sytuacji baza danych zainterweniuje, wymuszając wycofanie jednej z transakcji z błędem \"serialization failure\", chroniąc w ten sposób absolutną, matematyczną spójność danych.",
        correct: true,
      },
    ],
  },
  {
    id: 8,
    question: "Co to jest optimistic locking?",
    answers: [
      {
        option: "Optymistyczne blokowanie (Optimistic Locking) to bardzo wydajna strategia kontroli współbieżności stosowana w aplikacjach. W przeciwieństwie do fizycznego blokowania pesymistycznego w bazie danych, które wstrzymuje innych użytkowników na czas trwania operacji, podejście optymistyczne zakłada, że kolizje zapisu zdarzają się bardzo rzadko. Nie używa się tu żadnych trwałych blokad odczytu. Mechanizm opiera się na kontroli wersji rekordów – każda tabela wymaga dodatkowej kolumny (np. liczbowego `version` lub `timestamp`). Przebieg operacji jest następujący: aplikacja odczytuje rekord z bazy, zapisując w pamięci jego obecny identyfikator wersji (np. 1). Następnie użytkownik na spokojnie modyfikuje dane w interfejsie. Podczas próby zatwierdzenia zmian aplikacja wysyła komendę UPDATE do bazy, w której klauzula WHERE bezwzględnie weryfikuje pierwotną wersję (`UPDATE ... SET val='X', version=2 WHERE id=1 AND version=1`). Jeżeli w międzyczasie inna transakcja zmodyfikowała już ten sam wiersz i podbiła jego wersję, powyższe zapytanie ostatecznie nie znajdzie dopasowania, aktualizując dokładnie 0 wierszy. Nowoczesne biblioteki ORM (np. Hibernate) potrafią to samodzielnie wykryć i rzucić odpowiedni wyjątek (często nazwany `OptimisticLockException`). Wyjątek ten natychmiast przerywa akcję, informując, że dane pobrane wcześniej uległy dezaktualizacji i całą logikę dla rekordu trzeba ponowić od nowa.",
        correct: true,
      },
    ],
  },
  {
    id: 9,
    question: "Jaką architekturę systemu zaproponować, kiedy elementami logiki biznesowej objętej gwarancjami transakcyjnymi (z możliwością restartów transakcji) są “uderzenia” w zewnętrzne end-pointy?",
    answers: [
      {
        option: "Osadzanie synchronicznych wywołań HTTP do zewnętrznych API wewnątrz aktywnej transakcji relacyjnej to szkodliwy antywzorzec. Połączenia sieciowe są z definicji nieprzewidywalne, co powoduje, że transakcja trzyma niezbędne blokady (locks) na tabelach przez nieokreślony, długi czas, zabijając całkowicie przepustowość aplikacji. Co gorsza, w przypadku awarii transakcji i konieczności jej restartu przez bazę danych, uderzenie do zewnętrznego endpointu zostałoby wykonane ponownie, dublując procesy biznesowe (np. podwójna płatność). Prawidłową architekturą jest rozdzielenie tych zadań poprzez asynchroniczne przesyłanie komunikatów, na przykład przy wykorzystaniu wzorca Transactional Outbox Pattern. W tym podejściu podczas głównej transakcji zapisywane są tylko modyfikacje encji, a chęć wykonania operacji w świecie zewnętrznym logowana jest jako obiekt w lokalnej tabeli typu \"Outbox\". W ten sposób integralność atomowa jest zachowana. Kiedy bezpieczna operacja bazodanowa dobiegnie końca, włącza się oddzielny i w pełni niezależny worker aplikacyjny. Ów proces działa w tle, odczytując niewysłane wiadomości i starając się przepchnąć je przez API. Jeżeli zapytanie HTTP zawiedzie, system w tle będzie je ponawiać bez żadnego ryzyka wpływu na główny serwer i bazę danych, z zachowaniem standardów spójności ostatecznej (Eventual Consistency).",
        correct: true,
      },
    ],
  },
  {
    id: 10,
    question: "Jakie kroki należy podjąć w kodzie programu, aby zadać zapytanie (query lub upsert/delete) do bazy danych na poziomie wybranego języka programowania (Java/C#, etc.)?",
    answers: [
      {
        option: "Wykonanie zapytania SQL w językach takich jak Java (JDBC) czy C# (ADO.NET) opiera się na ściśle określonym cyklu. Na początku aplikacja musi otworzyć kanał sieciowy z serwerem. Z uwagi na duży koszt, gotowy obiekt bezpiecznego połączenia najczęściej pobiera się prosto z utworzonej wcześniej puli połączeń aplikacji (Connection Pool). Kolejnym etapem jest zadeklarowanie przygotowywanego zapytania. Złotą regułą bezpieczeństwa w tym kroku jest bezwzględne stosowanie wstępnie skompilowanych obiektów zapytań parametryzowanych (jak interfejs `PreparedStatement`). Mechanizm ten bezbłędnie oddziela wstrzykiwane przez nas wartości od logiki poleceń bazy danych, stanowiąc najważniejszą tarczę przeciw wektorowi ataków SQL Injection. Następnie programista w kodzie podstawia wszystkie zmienne i wysyła instrukcję do silnika. Gdy poleceniem był czysty odczyt (SELECT), program wykorzystuje obiekt udostępniający wygodny interfejs iterowania po tablicy wyników. Z kolei, dla instrukcji mutujących, operujemy na liczbowej informacji zwrotnej o sumie zmienionych w tabelach rekordów. Zwieńczeniem opisywanego procesu i gwarancją zapobiegania awariom jest zawsze absolutne i natychmiastowe upewnienie się w poprawnym zamknięciu otwartych kanałów wejścia i obiektów. Wymóg ten z łatwością deleguje się wyższym blokom języka (takim jak elastyczne domknięcia `try-with-resources` w środowisku Java, czy bloki `using` w platformie .NET), co automatycznie zwraca obiekt do puli.",
        correct: true,
      },
    ],
  },
];
