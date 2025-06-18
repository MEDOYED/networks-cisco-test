const dataJiPP = [
  {
    id: 1,
    question: "Co to jest zmienna?",
    answers: [
      {
        option:
          "Zmienna to po prostu miejsce w pamięci, gdzie można przechowywać jakąś wartość, np. liczbę, tekst albo inną informację. Nadajemy jej nazwę, żeby potem móc łatwo się do tej wartości odwołać w programie.",
        correct: true,
      },
      {
        option:
          "Zmienna to nazwana wartość w programie. \n \n Można ją odczytać lub zmienić. \n \n Przykład: let x = 10.",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "Co to jest typ danych?",
    answers: [
      {
        option:
          "Typ danych to informacja, jakiego rodzaju wartość może być przechowywana w danej zmiennej. Mówiąc prosto — typ danych określa, co można w tej zmiennej zapisać i jak komputer ma to zrozumieć. \n \n Typ danych jest ważny, bo dzięki niemu program „wie”, jak się obchodzić z daną wartością — np. czy może ją dodawać, czy porównywać, czy wypisywać jako tekst. \n \n Jeśli typ się nie zgadza (np. próbujemy dodać tekst do liczby), to najczęściej pojawi się błąd — dlatego trzeba uważać i dobrze określać typ danych przy tworzeniu zmiennych",
        correct: true,
      },
      {
        option:
          "Typ danych to informacja, jaki rodzaj wartości przechowuje zmienna. \n \n Przykłady to number, string, boolean, array. \n \n Typ danych pomaga komputerowi zrozumieć, co można zrobić z daną wartością.",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: "Jakie znasz proste typy danych w języku Java lub C#?",
    answers: [
      {
        option:
          "W języku Java i C# są proste typy danych, które nazywamy typami podstawowymi (prymitywnymi).\n \nW skrócie: to najprostsze dane jak liczby, znaki i wartości logiczne.\n \nW Java:\n- int – liczba całkowita\n- double – liczba zmiennoprzecinkowa\n- boolean – prawda lub fałsz\n- char – pojedynczy znak\n- byte, short, long, float – inne wersje liczb\n \nW C# są podobne:\n- int\n- double\n- bool\n- char\n- byte, short, long, float\n \nTe typy są szybkie i używane bardzo często w prostych obliczeniach i zmiennych.",
        correct: true,
      },
      {
        option:
          "Proste typy danych w Java lub C# to int, float, char, bool, double. \n \n Służą do przechowywania liczb, znaków i wartości logicznych.",
        correct: false,
      },
    ],
  },
  {
    id: 4,
    question: "Czy pomiędzy typami prostymi istnieje relacja “jest rodzajem”?",
    answers: [
      {
        option:
          'Nie, pomiędzy typami prostymi w Java i C# nie ma relacji "jest rodzajem" (czyli dziedziczenia).\n \nW skrócie: typy proste nie są klasami i nie tworzą hierarchii.\n \nNa przykład: `int` nie jest rodzajem `double`, ani `boolean` nie jest rodzajem `int`.\n \nKażdy typ prosty jest oddzielny i ma swoje miejsce w pamięci.\nNie można stworzyć funkcji, która przyjmie ogólnie "dowolny typ prosty" – trzeba podać konkretny.\n \nDopiero klasy (czyli typy złożone) mogą mieć taką relację.\nTypy proste są bardziej jak niezależne bloczki, bez wspólnego przodka.',
        correct: true,
      },
      {
        option:
          "Nie, między typami prostymi nie ma relacji 'jest rodzajem'. \n \n Każdy z nich jest oddzielnym typem, np. int nie jest rodzajem float. \n \n Typy proste nie tworzą hierarchii klas jak obiekty.",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question: "Co to jest polimorfizm?",
    answers: [
      {
        option:
          "Polimorfizm to cecha programowania obiektowego, która pozwala używać jednej nazwy do różnych zachowań.\n \nW skrócie: ta sama funkcja lub metoda może działać inaczej, w zależności od typu danych.\n \nPrzykład w Javie:\nMożemy mieć metodę `rysuj()`, która działa inaczej dla klasy `Koło`, a inaczej dla `Kwadrat`.\n \nPrzykład:\nclass Ksztalt { void rysuj() { ... } }\nclass Kolo extends Ksztalt { void rysuj() { ... } }\nclass Kwadrat extends Ksztalt { void rysuj() { ... } }\n \nTeraz możemy napisać:\nKsztalt x = new Kolo();\nx.rysuj(); // wywoła wersję z klasy Kolo\n \nDzięki polimorfizmowi możemy pisać bardziej elastyczny i uniwersalny kod.",
        correct: true,
      },
      {
        option:
          "Polimorfizm to możliwość używania jednej funkcji lub metody dla różnych typów danych. \n \n Przykład: jedna funkcja działa na liczbach i tekstach. \n \n Ułatwia pisanie uniwersalnego i elastycznego kodu.",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    question: "Jakie znasz rodzaje polimorfizmu?",
    answers: [
      {
        option:
          "Znam kilka podstawowych rodzajów polimorfizmu w programowaniu.\n \nW skrócie: polimorfizm to różne zachowania tej samej funkcji w różnych sytuacjach.\n \nRodzaje:\n1. Polimorfizm ad hoc – funkcja działa inaczej w zależności od typu argumentów. Przykład: przeciążanie metod (overloading).\n \n2. Polimorfizm parametryczny – jedna funkcja działa z różnymi typami, np. z listą liczb i z listą tekstów. Przykład: szablony (generics) w Javie i C#.\n \n3. Polimorfizm podtypów – funkcja działa inaczej, gdy obiekt pochodzi z innej klasy (dziedziczenie). Przykład: metoda `rysuj()` działa inaczej dla `Koło` i `Kwadrat`.\n \n4. Polimorfizm inkluzyjny – często to inna nazwa dla polimorfizmu podtypów, czyli użycie typu ogólnego, np. `Ksztalt`, który może być `Kolo` albo `Kwadrat`.\n \nTe rodzaje pomagają pisać kod bardziej uniwersalny i elastyczny.",
        correct: true,
      },
      {
        // improve?
        option:
          "Są dwa główne rodzaje polimorfizmu: statyczny i dynamiczny. \n \n Statyczny to np. przeciążanie metod (overloading). \n \n Dynamiczny to np. nadpisywanie metod (overriding) w dziedziczeniu.",
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question: "Czy przeciążanie nazw (overloading) jest odmianą polimorfizmu?",
    answers: [
      {
        option:
          "Tak, przeciążanie nazw (overloading) jest odmianą polimorfizmu – dokładnie polimorfizmu ad hoc.\n \nW skrócie: przeciążanie = kilka funkcji o tej samej nazwie, ale z różnymi argumentami.\n \nNa przykład w Javie:\nvoid pokaz(String tekst) { ... }\nvoid pokaz(int liczba) { ... }\n \nObie metody nazywają się tak samo, ale działają na innych danych.\nKompilator wybiera odpowiednią wersję w zależności od typu argumentu.\n \nTo jest polimorfizm, bo ta sama nazwa może oznaczać różne rzeczy w zależności od sytuacji.\n \nDzięki temu kod jest bardziej przejrzysty i nie trzeba wymyślać wielu różnych nazw.",
        correct: true,
      },
      {
        option:
          "Tak, overloading to odmiana polimorfizmu statycznego. \n \n Pozwala tworzyć wiele funkcji o tej samej nazwie, ale z różnymi argumentami. \n \n Kompilator wybiera odpowiednią wersję na podstawie typu danych.",
        correct: false,
      },
    ],
  },
  {
    id: 8,
    question:
      "Czy niejawna konwersja (type coercion) jest odmianą polimorfizmu?",
    answers: [
      {
        option:
          "Niejawna konwersja (czyli type coercion) nie jest prawdziwą odmianą polimorfizmu, ale czasem wygląda podobnie.\n \nW skrócie: to sytuacja, gdy kompilator automatycznie zmienia typ danych, żeby pasował do operacji.\n \nNa przykład w Javie:\nint x = 5;\ndouble y = x; // tutaj int jest zamieniany na double\n \nTo nie jest polimorfizm, bo nie wybieramy różnych wersji funkcji – tylko zmieniamy typ, żeby jedna wersja mogła działać.\n \nPolimorfizm polega na tym, że mamy jedną nazwę, ale różne wersje funkcji dla różnych typów.\n \nType coercion to tylko pomoc od kompilatora, żeby wszystko pasowało.\n \nDlatego mówi się, że to podobne do polimorfizmu, ale technicznie to nie jest jego rodzaj.",
        correct: true,
      },
      {
        option:
          "Nie, type coercion to nie jest polimorfizm. \n \n To automatyczna zmiana typu, np. z int na float. \n \n Polimorfizm dotyczy działania jednej funkcji na różnych typach, a nie zmiany typu.",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question: "Na czym polega polimorfizm inkluzyjny?",
    answers: [
      {
        option:
          "Polimorfizm inkluzyjny polega na tym, że można używać obiektu podklasy tam, gdzie oczekiwany jest obiekt nadklasy.\n \nW skrócie: obiekt dziecka może być użyty tam, gdzie jest wymagany obiekt rodzica.\n \nNa przykład w Javie:\nclass Zwierze { void dajGlos() { ... } }\nclass Pies extends Zwierze { void dajGlos() { ... } }\n \nTeraz można napisać:\nZwierze z = new Pies();\nz.dajGlos(); // wywoła wersję z klasy Pies\n \nDzięki temu można pisać kod bardziej ogólny – pracujący na typie `Zwierze`, ale działający poprawnie dla różnych zwierząt.\n \nTo działa dzięki dziedziczeniu i nadpisywaniu metod (override).",
        correct: true,
      },
      {
        option:
          "Polimorfizm inkluzyjny to używanie wspólnego interfejsu lub klasy bazowej dla różnych typów. \n \n Obiekty różnych klas mogą być traktowane jak obiekty jednej wspólnej klasy. \n \n Przykład: klasa Animal i jej podklasy Dog, Cat — wszystkie mogą używać metody speak().",
        correct: false,
      },
    ],
  },
  {
    id: 10,
    question: "Co to jest polimorfizm ad-hoc?",
    answers: [
      {
        option:
          "Polimorfizm ad-hoc to sytuacja, gdy mamy kilka wersji tej samej funkcji, ale dla różnych typów danych.\n \nW skrócie: ta sama nazwa funkcji, ale działa inaczej w zależności od typu argumentów.\n \nNajczęściej dzieje się to przez przeciążanie metod (overloading).\n \nPrzykład w Javie:\nvoid wyswietl(String tekst) { ... }\nvoid wyswietl(int liczba) { ... }\n \nTutaj obie metody mają tę samą nazwę, ale inne typy argumentów.\nKompilator wybiera odpowiednią wersję, gdy wywołujemy funkcję.\n \nTo jest polimorfizm ad-hoc, bo działa tylko dla konkretnych przypadków i nie ma ogólnej reguły jak przy polimorfizmie parametrycznym.",
        correct: true,
      },
      {
        option:
          "Polimorfizm ad-hoc to możliwość tworzenia funkcji o tej samej nazwie, ale działających inaczej dla różnych typów. \n \n Przykład to overloading, gdzie funkcje różnią się liczbą lub typem argumentów. \n \n Kompilator wybiera właściwą wersję funkcji podczas kompilacji.",
        correct: false,
      },
    ],
  },
  {
    id: 11,
    question: "Co to jest wczesne i późne wiązanie?",
    answers: [
      {
        option:
          "Wiązanie to moment, w którym program decyduje, którą funkcję wywołać.\n \nWczesne wiązanie (early binding) oznacza, że decyzja jest podejmowana już w czasie kompilacji.\nPrzykład: przeciążanie metod – kompilator wybiera wersję na podstawie typu argumentów.\n \nPóźne wiązanie (late binding) oznacza, że decyzja jest podejmowana dopiero w czasie działania programu.\nPrzykład: wywołanie metody w klasie dziedziczącej – program sprawdza typ obiektu w czasie działania.\n \nW skrócie:\n- wczesne wiązanie = szybciej, ale mniej elastyczne\n- późne wiązanie = wolniej, ale bardziej elastyczne\n \nPolimorfizm dziedziczenia działa właśnie dzięki późnemu wiązaniu.",
        correct: true,
      },
      {
        option:
          "Wczesne wiązanie (early binding) to przypisanie wywołania funkcji do konkretnej wersji w czasie kompilacji. \n \n Późne wiązanie (late binding) robi to dopiero w czasie działania programu. \n \n Wczesne wiązanie działa np. przy overloading, a późne przy overriding.",
        correct: false,
      },
    ],
  },
  {
    id: 12,
    question:
      "Odmianą jakiego polimorfizmu są typy generyczne w języku Java/C#?",
    answers: [
      {
        option:
          "Typy generyczne w języku Java i C# są odmianą polimorfizmu parametrycznego.\n \nW skrócie: jedna funkcja albo klasa działa z różnymi typami danych, bez potrzeby pisania wielu wersji.\n \nPrzykład w Javie:\nclass Pudełko<T> {\n  T zawartosc;\n}\n \nMożna teraz użyć:\nPudełko<String> p1 = new Pudełko<>();\nPudełko<Integer> p2 = new Pudełko<>();\n \nKod klasy `Pudełko` jest jeden, ale działa dla różnych typów dzięki generykom.\n \nTo właśnie jest polimorfizm parametryczny – jeden ogólny kod, który działa z różnymi typami.",
        correct: true,
      },
      {
        option:
          "Typy generyczne to odmiana polimorfizmu parametrycznego. \n \n Pozwalają tworzyć funkcje i klasy działające na różnych typach bez powielania kodu. \n \n Przykład: List<T> w Java lub C# działa dla int, string i innych typów.",
        correct: false,
      },
    ],
  },
  {
    id: 13,
    question: "Co to jest zmienna typowa (type variable)?",
    answers: [
      {
        option:
          "Zmienna typowa to symbol używany w generykach, który oznacza dowolny typ danych.\n \nW skrócie: zamiast konkretnego typu, używamy zmiennej, np. `T`, która zostanie zastąpiona prawdziwym typem przy użyciu klasy lub funkcji.\n \nPrzykład w Javie:\nclass Pudełko<T> {\n  T zawartosc;\n}\n \nTutaj `T` to zmienna typowa. Gdy tworzymy obiekt, możemy wpisać konkretny typ:\nPudełko<String> p1 = new Pudełko<>();\n \nTeraz `T` to `String`.\n \nDzięki zmiennym typowym możemy pisać kod, który działa z różnymi typami, ale nadal jest bezpieczny i sprawdzany przez kompilator.",
        correct: true,
      },
      {
        option:
          "Zmienna typowa to symbol, który reprezentuje dowolny typ w kodzie generycznym. \n \n W Java lub C# zwykle zapisuje się ją jako T, U albo K. \n \n Pozwala pisać uniwersalne funkcje i klasy bez określania konkretnego typu na początku.",
        correct: false,
      },
    ],
  },
  {
    id: 14,
    question: "Co to jest klasa?",
    answers: [
      {
        option:
          "Klasa to szablon, według którego tworzy się obiekty w programowaniu obiektowym.\n \nW skrócie: klasa = przepis na obiekt.\n \nW klasie zapisujemy dane (czyli pola) i zachowanie (czyli metody).\n \nPrzykład w Javie:\nclass Samochod {\n  String marka;\n  void jedz() { ... }\n}\n \nPotem możemy stworzyć obiekt:\nSamochod s = new Samochod();\n \nKlasa sama w sobie nic nie robi – trzeba utworzyć obiekt, żeby z niej korzystać.\n \nDzięki klasom można łączyć dane i funkcje w jedną całość, co ułatwia pisanie większych programów.",
        correct: true,
      },
      {
        option:
          "Klasa to szablon, według którego tworzy się obiekty. \n \n Określa, jakie dane (pola) i działania (metody) ma mieć obiekt. \n \n Przykład: klasa Samochód może mieć pole kolor i metodę jedź().",
        correct: false,
      },
    ],
  },
  {
    id: 15,
    question: "Co to jest interfejs?",
    answers: [
      {
        option:
          "Interfejs to zbiór metod, które klasa musi zaimplementować, jeśli chce z niego korzystać.\n \nW skrócie: interfejs = tylko nazwy metod, bez ich zawartości.\n \nW Javie zapisujemy to tak:\ninterface Drukowalny {\n  void drukuj();\n}\n \nA potem klasa może go użyć:\nclass Dokument implements Drukowalny {\n  public void drukuj() { ... }\n}\n \nInterfejsy pozwalają tworzyć kod, który działa na różne sposoby, ale zawsze z tym samym zestawem metod.\n \nTo przydatne, gdy chcemy mieć wspólne zachowanie dla różnych klas, ale bez dziedziczenia całych klas.",
        correct: true,
      },
      {
        option:
          "Interfejs to zbiór metod bez ich implementacji. \n \n Klasa, która go używa, musi te metody zdefiniować. \n \n Interfejsy pomagają tworzyć wspólne zachowania dla różnych klas.",
        correct: false,
      },
    ],
  },
  {
    id: 16,
    question: "Co to jest this?",
    answers: [
      {
        option:
          "Słowo kluczowe `this` oznacza bieżący obiekt – ten, na którym aktualnie działa metoda.\n \nW skrócie: `this` = odwołanie do samego siebie (czyli do obiektu, w którym jesteśmy).\n \nPrzykład w Javie:\nclass Osoba {\n  String imie;\n  void ustawImie(String imie) {\n    this.imie = imie;\n  }\n}\n \nTutaj `this.imie` oznacza pole obiektu, a `imie` to argument metody.\nBez `this` kompilator nie wiedziałby, o które `imie` chodzi.\n \n`this` przydaje się też do przekazywania obiektu do innej metody albo do łańcuchowego wywoływania metod.",
        correct: true,
      },
      {
        option:
          "this to specjalne słowo, które wskazuje na bieżący obiekt. \n \n Używa się go, gdy chcemy odwołać się do pola lub metody obiektu wewnątrz klasy. \n \n Pomaga uniknąć nieporozumień, np. przy takich samych nazwach zmiennych.",
        correct: false,
      },
    ],
  },
  {
    id: 17,
    question: "Jakie są cechy programowania obiektowego?",
    answers: [
      {
        option:
          "Programowanie obiektowe ma kilka głównych cech, które pomagają organizować kod.\n \nW skrócie: kod dzieli się na obiekty, które mają dane i metody.\n \nGłówne cechy to:\n1. Abstrakcja – ukrywamy szczegóły, pokazujemy tylko to, co potrzebne.\n2. Enkapsulacja – dane i metody są zamknięte w klasie, dostęp do nich jest kontrolowany.\n3. Dziedziczenie – jedna klasa może dziedziczyć cechy innej klasy.\n4. Polimorfizm – ta sama metoda może działać inaczej w różnych klasach.\n \nDzięki tym cechom program jest czytelniejszy, łatwiejszy do rozbudowy i mniej błędów się pojawia.",
        correct: true,
      },
      {
        option:
          "Główne cechy programowania obiektowego to: \n \n 1. Abstrakcja – ukrywanie szczegółów działania. \n \n 2. Enkapsulacja – łączenie danych i metod w jednej klasie. \n \n 3. Dziedziczenie – tworzenie nowych klas na podstawie innych. \n \n 4. Polimorfizm – jedna metoda działa dla różnych typów.",
        correct: false,
      },
    ],
  },
  {
    id: 18,
    question: "Co to jest obiekt?",
    answers: [
      {
        option:
          "Obiekt to konkretny egzemplarz klasy, czyli coś, co tworzymy na podstawie szablonu (klasy).\n \nW skrócie: klasa = przepis, obiekt = gotowa rzecz.\n \nObiekt ma swoje dane (pola) i może wykonywać działania (metody).\n \nPrzykład w Javie:\nclass Samochod {\n  String marka;\n  void jedz() { ... }\n}\n \nTeraz tworzymy obiekt:\nSamochod s = new Samochod();\n \nObiekt `s` ma już swoją markę i może wywołać metodę `jedz()`.\n \nW programowaniu obiektowym wszystko kręci się wokół obiektów – one przechowują dane i wykonują operacje.",
        correct: true,
      },
      {
        option:
          "Obiekt to konkretny egzemplarz klasy. \n \n Ma własne dane (pola) i może wykonywać działania (metody). \n \n Przykład: jeśli klasa to Samochód, to obiekt to  czerwony samochód.",
        correct: false,
      },
    ],
  },
  {
    id: 19,
    question: "Co to jest konstruktor?",
    answers: [
      {
        option:
          'Konstruktor to specjalna metoda w klasie, która uruchamia się automatycznie, gdy tworzymy nowy obiekt.\n \nW skrócie: konstruktor = metoda do tworzenia obiektów.\n \nMa taką samą nazwę jak klasa i nie ma typu zwracanego (nawet void).\n \nPrzykład w Javie:\nclass Osoba {\n  String imie;\n  Osoba(String imie) {\n    this.imie = imie;\n  }\n}\n \nTeraz tworzymy obiekt:\nOsoba o = new Osoba("Jan");\n \nKonstruktor ustawia imię osoby na "Jan".\n \nKonstruktor może mieć argumenty albo być pusty (domyślny).\nSłuży do przygotowania obiektu do użycia.',
        correct: true,
      },
      {
        option:
          "Konstruktor to specjalna metoda, która tworzy nowy obiekt. \n \n Ustawia początkowe wartości pól. \n \n Ma taką samą nazwę jak klasa i nie zwraca żadnego typu.",
        correct: false,
      },
    ],
  },
  {
    id: 20,
    question: "Co to jest metoda?",
    answers: [
      {
        option:
          "Metoda to funkcja, która należy do klasy i działa na obiektach tej klasy.\n \nW skrócie: metoda = działanie obiektu.\n \nMetoda może coś zwracać, przyjmować argumenty albo tylko wykonywać akcję.\n \nPrzykład w Javie:\nclass Kalkulator {\n  int dodaj(int a, int b) {\n    return a + b;\n  }\n}\n \nTeraz tworzymy obiekt i wywołujemy metodę:\nKalkulator k = new Kalkulator();\nk.dodaj(2, 3); // wynik: 5\n \nMetody pozwalają obiektom wykonywać różne operacje na swoich danych albo na danych z zewnątrz.",
        correct: true,
      },
      {
        option:
          "Metoda to funkcja zdefiniowana wewnątrz klasy. \n \n Może działać na danych obiektu i wykonywać różne operacje. \n \n Przykład: metoda start() w klasie Samochód.",
        correct: false,
      },
    ],
  },
  {
    id: 21,
    question: "Co to jest hermetyzacja?",
    answers: [
      {
        option:
          "Hermetyzacja (enkapsulacja) to ukrywanie szczegółów działania klasy przed użytkownikiem.\n \nW skrócie: obiekt sam pilnuje swoich danych i nie pozwala na bezpośredni dostęp z zewnątrz.\n \nRobi się to za pomocą modyfikatorów dostępu, np. `private`, `public`.\n \nPrzykład w Javie:\nclass KontoBankowe {\n  private double saldo;\n  public void wplata(double kwota) { saldo += kwota; }\n  public double pokazSaldo() { return saldo; }\n}\n \nTutaj `saldo` jest prywatne – nie można go zmienić bezpośrednio.\nMożna tylko używać metod, które klasa udostępnia.\n \nHermetyzacja pomaga chronić dane i zapobiegać błędom.",
        correct: true,
      },
      {
        option:
          "Hermetyzacja (enkapsulacja) to ukrywanie danych obiektu przed światem zewnętrznym. \n \n Dostęp do danych odbywa się przez metody, np. gettery i settery. \n \n Chroni to dane przed przypadkową zmianą i ułatwia kontrolę nad kodem.",
        correct: false,
      },
    ],
  },
];

export default dataJiPP;
