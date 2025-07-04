const dataProgFunc = [
  {
    id: 1,
    question: "Co to jest programowanie funkcyjne?",
    answers: [
      {
        option:
          "Programowanie funkcyjne to taki styl pisania kodu, w którym wszystko kręci się wokół funkcji. Ale nie takich zwykłych jak w klasach, tylko bardziej „matematycznych” – czyli funkcja dostaje dane, coś z nimi robi i zwraca wynik, nie zmieniając niczego „na zewnątrz”.  \n \n W programowaniu funkcyjnym ważne jest, żeby:  \n \n - nie używać zmiennych, które można zmienić (czyli wszystko ma być „stałe” – jak coś raz ustawisz, to już się nie zmienia),  \n \n  - nie modyfikować stanu programu (czyli żadnych this.count++),  \n \n  - funkcje były czyste – czyli że ta sama funkcja z tymi samymi danymi zawsze daje ten sam wynik i nic po drodze nie psuje.",
        correct: true,
      },
      {
        option:
          "Programowanie funkcyjne to styl pisania kodu, gdzie używa się głównie funkcji. \n \n Funkcje są czyste, czyli nie zmieniają danych i nie mają efektów ubocznych. \n \n Zamiast pętli używa się funkcji jak map, filter i reduce. \n \n Często nie używa się zmiennych, tylko przekazuje dane dalej. \n \n Kod jest bardziej przewidywalny i łatwiejszy do testowania.",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "Co to jest rekurencja?",
    answers: [
      {
        option:
          "Rekurencja to taki sposób pisania funkcji, gdzie funkcja wywołuje sama siebie. Czyli funkcja w swoim wnętrzu mówi: „żeby rozwiązać problem, zrobię to samo jeszcze raz, ale na mniejszym kawałku”. \n \n Najprostszy przykład to obliczanie silni, czyli 5! = 5 × 4 × 3 × 2 × 1. Można to zapisać rekurencyjnie tak, że: \n \n jeśli liczba to 1, to zwróć 1 (to się nazywa warunek zakończenia), \n \n a jeśli większa, to zwróć n × silnia(n-1). \n \n Funkcja wtedy wywołuje się z coraz mniejszymi liczbami, aż dojdzie do 1 – i wtedy wszystko się „odpakowuje” i zwraca wynik. \n \n Rekurencja jest przydatna, gdy problem da się podzielić na takie same mniejsze problemy, jak np.: \n \n silnia, \n \n ciąg Fibonacciego, \n \n przechodzenie przez drzewo albo foldery, \n \n sortowanie (np. quicksort, mergesort). \n \n Trzeba tylko uważać, żeby zawsze był warunek stopu, bo inaczej funkcja będzie się wywoływać w nieskończoność i zawiesi program.",
        correct: true,
      },
      {
        option:
          "Rekurencja to technika, gdzie funkcja wywołuje samą siebie. \n \n Używa się jej do rozwiązywania problemów, które można podzielić na mniejsze części. \n \n Ważne jest, żeby funkcja miała warunek końcowy, inaczej będzie działać w nieskończoność. \n \n Przykład to obliczanie silni lub ciągu Fibonacciego. \n \n Recursion mostly is just a fancy form of iterations.",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: "Jaki proces obliczeniowy nazywamy iteracyjnym?",
    answers: [
      {
        option:
          "Proces obliczeniowy nazywamy iteracyjnym, gdy polega na wielokrotnym powtarzaniu tych samych kroków, aż do uzyskania wyniku, który nas zadowala (czyli np. zbliżymy się do rozwiązania z odpowiednią dokładnością). \n \n W skrócie: \n Iteracyjny = powtarzamy coś kilka razy → wynik staje się coraz lepszy. \n \n Na przykład w metodzie bisekcji albo Newtona, nie da się od razu podać dokładnego rozwiązania. Dlatego liczymy krok po kroku (iteracje), aż osiągniemy odpowiedni wynik. \n \n Takie podejście jest potrzebne, gdy nie da się policzyć wyniku w jednym kroku, albo jest to za trudne.",
        correct: true,
      },
      {
        option:
          "Proces iteracyjny to taki, który powtarza się wiele razy w pętli. \n \n W każdej iteracji wykonuje się te same kroki aż do spełnienia warunku. \n \n Przykładem jest pętla for lub while. \n \n Iteracja jest często używana do przetwarzania danych, np. w tablicach. \n \n Jest prostsza od rekurencji i bardziej wydajna w wielu przypadkach.",
        correct: false,
      },
    ],
  },
  {
    id: 4,
    question: "Jaki proces obliczeniowy nazywamy rekurencyjnym?",
    answers: [
      {
        option:
          "Proces obliczeniowy nazywamy rekurencyjnym, gdy funkcja wywołuje samą siebie, żeby rozwiązać mniejsze wersje tego samego problemu.\n \n W skrócie:\n \n Rekurencja = funkcja w środku wywołuje siebie z innymi danymi.\n \n Na przykład: żeby policzyć silnię liczby 5 (czyli 5!), robimy to tak: \n 5! = 5 * 4!, a 4! = 4 * 3!, i tak dalej… aż do 1! = 1.\nCzyli każda funkcja czeka na wynik z mniejszego przypadku.\n \n Rekurencja działa dobrze, gdy problem można łatwo podzielić na mniejsze części, które są do siebie podobne. Ważne tylko, żeby był tzw. warunek końcowy, który zatrzyma wywoływania.",
        correct: true,
      },
      {
        option:
          "Proces rekurencyjny to taki, w którym funkcja wywołuje samą siebie. \n \n Problem jest dzielony na mniejsze części, aż do osiągnięcia warunku końcowego. \n \n Każde wywołanie funkcji rozwiązuje część problemu. \n \n Przykład to obliczanie silni lub sumy liczb. \n \n Rekurencja jest przydatna w zadaniach z powtarzającą się strukturą.",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question:
      "Czym się różni rekurencja w sensie definicji procedury (w zapisie) od rekurencji w sensie procesowym?",
    answers: [
      {
        option:
          "Rekurencja w definicji to sposób pisania funkcji, w którym funkcja odwołuje się do samej siebie.\n \nNa przykład: f(n) = n * f(n-1)\nTutaj widać, że funkcja jest zdefiniowana rekurencyjnie.\n \nRekurencja w procesie to sposób działania programu, gdy funkcja wywołuje samą siebie i tworzy nowe kroki, aż osiągnie warunek końcowy.\nPotem wynik jest składany z powrotem.\n \nW skrócie:\n- Rekurencja w definicji = jak zapisano funkcję\n- Rekurencja w procesie = jak działa algorytm w czasie wykonywania\n \nPrzykład: silnia 5!\n5! = 5 * 4!, 4! = 4 * 3!, ..., aż do 1! = 1\nFunkcja rozwiązuje mniejsze wersje problemu i wraca z odpowiedzią krok po kroku.",
        correct: true,
      },
      {
        option:
          "Rekurencja w sensie definicji to sposób, w jaki funkcja jest zapisana — wywołuje samą siebie. \n \n Pokazuje, jak wygląda kod i jak dzieli problem na mniejsze części. \n \n Rekurencja procesowa to to, co dzieje się podczas działania programu. \n \n Proces tworzy stos wywołań i zapisuje stan każdej funkcji. \n \n Definicja to zapis, a proces to sposób działania programu w czasie.",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    question:
      "Czy każda procedura rekurencyjnie zdefiniowana jest jednocześnie realizacją rekurencyjnego procesu obliczeniowego? Od czego to zależy?",
    answers: [
      {
        option:
          "Nie każda procedura, która wygląda jak rekurencja w zapisie, jest naprawdę rekurencyjna w działaniu.\n \nMożna mieć funkcję zapisaną rekurencyjnie, ale komputer przekształca ją tak, żeby działała iteracyjnie.\nTo zależy od tego, jak działa interpreter albo kompilator.\n \nNa przykład niektóre języki programowania automatycznie zamieniają prostą rekurencję ogonową na pętlę, więc proces nie jest już rekurencyjny.\n \nCzyli:\n- definicja rekurencyjna ≠ zawsze proces rekurencyjny\n \nTo zależy od: języka programowania, optymalizacji kompilatora i tego, jak dokładnie napiszemy funkcję.\n \nPodsumowując: trzeba patrzeć nie tylko na zapis, ale też na to, co faktycznie robi program w czasie działania.",
        correct: true,
      },
      {
        option:
          "Nie każda procedura rekurencyjna tworzy rekurencyjny proces. \n \n To zależy od tego, jak działa interpreter lub compiler. \n \n Czasem rekurencja w zapisie może być przekształcona na iterację w czasie działania. \n \n Przykład to rekurencja ogonowa, która może być zoptymalizowana. \n \n Więc wszystko zależy od tego, jak działa system wykonujący kod.",
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question: "Co to jest optymalizacja rekurencji krańcowej?",
    answers: [
      {
        option:
          "Optymalizacja rekurencji krańcowej (czyli ogonowej) to technika, w której komputer zamienia rekurencję na zwykłą pętlę.\n \nDzięki temu program działa szybciej i nie zużywa tyle pamięci, bo nie tworzy nowych wywołań funkcji na stosie.\n \nRekurencja krańcowa to taka, gdzie wywołanie funkcji rekurencyjnej jest ostatnią operacją w funkcji.\n \nNa przykład:\nfunction silnia(n, wynik = 1) {\n  if (n == 0) return wynik;\n  return silnia(n - 1, n * wynik);\n}\n \nTutaj ostatnie co robi funkcja to wywołuje samą siebie – to jest rekurencja krańcowa.\n \nNie wszystkie języki programowania wspierają optymalizację tego typu, ale tam gdzie działa, to jest bardzo przydatne.",
        correct: true,
      },
      {
        option:
          "Optymalizacja rekurencji krańcowej to zamiana rekurencji na iterację przez kompilator. \n \n Działa tylko wtedy, gdy wywołanie funkcji jest ostatnią operacją. \n \n Dzięki temu nie tworzy się nowego wpisu na stosie. \n \n Program zużywa mniej pamięci i działa szybciej. \n \n Nie wszystkie języki wspierają tę optymalizację.",
        correct: false,
      },
    ],
  },
  {
    id: 8,
    question:
      "W jaki sposób realizowana jest optymalizacja rekurencji krańcowej w Clojure?",
    answers: [
      {
        option:
          "W Clojure optymalizacja rekurencji krańcowej nie działa automatycznie jak w niektórych językach.\n \nZamiast tego, trzeba używać specjalnego słowa kluczowego `recur`.\n \n`recur` pozwala wykonać rekurencję bez tworzenia nowej ramki na stosie – czyli działa jak pętla.\nAle `recur` można używać tylko w ostatniej operacji funkcji albo w pętli `loop`.\n \nPrzykład:\n(loop [n 5 wynik 1]\n  (if (zero? n)\n    wynik\n    (recur (dec n) (* n wynik))))\n \nTutaj `recur` robi to samo, co rekurencja, ale działa bezpieczniej i szybciej.\n \nCzyli: w Clojure optymalizacja rekurencji krańcowej jest możliwa, ale tylko z użyciem `recur` albo `loop`.",
        correct: true,
      },
      {
        option:
          "W Clojure optymalizacja rekurencji krańcowej jest robiona za pomocą specjalnego słowa kluczowego recur. \n \n Funkcja nie wywołuje siebie normalnie, tylko używa recur jako ostatniego kroku. \n \n Dzięki temu Clojure zamienia rekurencję na pętlę i nie tworzy nowych wywołań. \n \n recur działa tylko w ostatnim wyrażeniu funkcji lub pętli loop. \n \n To bezpieczny i wydajny sposób na rekurencję w Clojure.",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question: "Działanie operatora map",
    answers: [
      {
        option:
          "Operator `map` w Clojure (i wielu innych językach) służy do przetwarzania każdej wartości w kolekcji.\n \nDziała tak, że bierze funkcję i listę, i zwraca nową listę z wynikami działania tej funkcji na każdym elemencie.\n \nW skrócie: `map` = zastosuj funkcję do każdego elementu.\n \nPrzykład:\n(map inc [1 2 3 4])\n→ wynik: (2 3 4 5)\n \nTutaj `inc` to funkcja, która zwiększa liczbę o 1, a `[1 2 3 4]` to lista.\n \n`map` nie zmienia oryginalnej listy – zwraca nową.\nTo bardzo przydatne w programowaniu funkcyjnym, gdzie nie zmieniamy danych, tylko tworzymy nowe.",
        correct: true,
      },
      {
        option:
          "Operator map służy do przekształcania elementów in arrays. \n \n Działa tak, że bierze każdy element, wykonuje na nim funkcję i zwraca nowy array. \n \n map nie zmienia oryginalnych danych, tylko tworzy nową wersję. \n \n Używa się go np. do zwiększenia każdej liczby w tablicy o 1. \n \n map to bardzo typowe narzędzie w functional programming.",
        correct: false,
      },
    ],
  },
  {
    id: 10,
    question: "Działanie operatora reduce",
    answers: [
      {
        option:
          "Operator `reduce` w Clojure służy do zredukowania listy do jednej wartości.\n \nDziała tak, że bierze funkcję, wartość początkową i listę, a potem łączy wszystkie elementy w jeden wynik.\n \nW skrócie: `reduce` = połącz wszystkie elementy w jeden wynik według jakiejś funkcji.\n \nPrzykład:\n(reduce + 0 [1 2 3 4])\n→ wynik: 10\n \nTutaj `+` to funkcja dodawania, `0` to wartość początkowa, a `[1 2 3 4]` to lista.\n \n`reduce` najpierw robi 0 + 1, potem +2, potem +3, potem +4.\n \nMożna używać `reduce` też do mnożenia, łączenia tekstów i wielu innych rzeczy.",
        correct: true,
      },
      {
        option:
          "Operator reduce służy do sprowadzenia całej kolekcji do jednej wartości. \n \n Działa tak, że bierze dwa elementy (albo accumulator i element) i wykonuje na nich funkcję. \n \n Wynik tej funkcji jest używany w kolejnym kroku z następnym elementem. \n \n Przykład to sumowanie liczb w array — reduce zwraca jedną liczbę. \n \n reduce jest przydatny, gdy trzeba coś policzyć lub połączyć dane.",
        correct: false,
      },
    ],
  },
  {
    id: 11,
    question: "Co to są s-wyrażenia (s-expressions) w Lispie (np. w Clojure)?",
    answers: [
      {
        option:
          "S-wyrażenia (ang. s-expressions) to podstawowy sposób zapisu kodu i danych w Lispie i Clojure.\n \nWyglądają jak nawiasy z listą rzeczy w środku.\n \nW skrócie: s-wyrażenie = lista elementów w nawiasach.\n \nPrzykład:\n(+ 1 2 3)\nTutaj `+` to funkcja, a `1 2 3` to argumenty.\n \nS-wyrażenia są czytane tak samo przez program jako dane i jako kod – to znaczy, że kod to też dane.\nTo pozwala łatwo manipulować kodem jak zwykłą listą.\n \nW Clojure cały kod piszemy jako s-wyrażenia – nawet instrukcje, funkcje i definicje.\n \nTo wygląda dziwnie na początku, ale daje dużą moc w programowaniu funkcyjnym.",
        correct: true,
      },
      {
        option:
          "s-expressions to sposób zapisu kodu w Lispie, np. w Clojure. \n \n Każdy fragment kodu to lista w nawiasach, np. (+ 1 2). \n \n Pierwszy element to funkcja, a kolejne to argumenty. \n \n Dzięki temu kod jest bardzo prosty i czytelny dla interpretera. \n \n W Lispie kod i dane wyglądają tak samo — wszystko to s-expressions.",
        correct: false,
      },
    ],
  },
  {
    id: 12,
    question: "Co to są lambda-wyrażenia?",
    answers: [
      {
        option:
          "Lambda-wyrażenia to sposób tworzenia funkcji anonimowych, czyli takich, które nie mają nazwy.\n \nW Clojure piszemy je za pomocą `fn` albo skrótu `#()`.\n \nW skrócie: lambda = funkcja bez nazwy, której używamy tylko w jednym miejscu.\n \nPrzykład:\n(map (fn [x] (* x 2)) [1 2 3])\n→ wynik: (2 4 6)\n \nLub krócej:\n(map #(* % 2) [1 2 3])\n \nTutaj `fn [x] (* x 2)` to lambda, która mnoży każdy element razy 2.\n \nLambda-wyrażenia są przydatne, gdy nie chcemy pisać osobnej funkcji – tylko szybko przekazać logikę do innej funkcji, np. do `map`, `filter`, `reduce`.",
        correct: true,
      },
      {
        option:
          "Lambda-wyrażenia to funkcje anonimowe, czyli takie, które nie mają nazwy. \n \n Używa się ich tam, gdzie nie trzeba tworzyć pełnej funkcji. \n \n Najczęściej są przekazywane jako argumenty do innych funkcji, np. do map albo filter. \n \n W JavaScript wyglądają tak: (x) => x + 1. \n \n Lambda to prosty sposób na krótką logikę bez pisania dodatkowego kodu.",
        correct: false,
      },
    ],
  },
  {
    id: 13,
    question:
      "Czym się różni wyrażenie (print x) od (print (quote x)) w Clojure?",
    answers: [
      {
        option:
          "Różnica między `(print x)` a `(print (quote x))` polega na tym, co tak naprawdę jest drukowane.\n \n`(print x)` oznacza: wydrukuj wartość zmiennej `x`.\nJeśli `x` = 5, to wynik to: 5\n \n`(print (quote x))` oznacza: wydrukuj sam symbol `x`, a nie jego wartość.\nCzyli wynik to: x\n \n`quote` mówi Clojure: nie oceniaj tego, co jest w środku – traktuj to jako dane.\n \nW skrócie:\n- `(print x)` → drukuje wartość zmiennej\n- `(print (quote x))` → drukuje nazwę zmiennej (jako tekst)\n \nTo ważne, gdy chcemy pracować na kodzie jak na danych, np. przy makrach.",
        correct: true,
      },
      {
        option:
          "(print x) próbuje wypisać wartość zmiennej x. \n \n Jeśli x ma wartość, to zostanie ona pokazana. \n \n (print (quote x)) wypisze dosłownie symbol x, a nie jego wartość. \n \n quote mówi interpreterowi, żeby nie wykonywał x jako zmiennej. \n \n To różnica między użyciem wartości a pokazaniem samego symbolu.",
        correct: false,
      },
    ],
  },
  {
    id: 14,
    question: "Co to są procedury wyższego rzędu (higher-order procedures)?",
    answers: [
      {
        option:
          "Procedury wyższego rzędu to takie funkcje, które przyjmują inne funkcje jako argumenty albo zwracają funkcje jako wynik.\n \nW Clojure (i innych językach funkcyjnych) to bardzo popularne.\n \nW skrócie: procedura wyższego rzędu = funkcja, która działa na innych funkcjach.\n \nPrzykład:\n(map inc [1 2 3])\nTutaj `map` to procedura wyższego rzędu, bo przyjmuje `inc` (funkcję zwiększającą liczbę) jako argument.\n \nInny przykład:\n(defn dodaj-n [n]\n  (fn [x] (+ x n)))\nTutaj funkcja `dodaj-n` zwraca nową funkcję.\n \nTakie procedury są bardzo przydatne, bo pozwalają pisać kod bardziej elastyczny i krótki.",
        correct: true,
      },
      {
        option:
          "Procedury wyższego rzędu to funkcje, które przyjmują inne funkcje jako argumenty lub je zwracają. \n \n Umożliwiają tworzenie bardziej elastycznego i krótkiego kodu. \n \n Przykład to map, który bierze funkcję i stosuje ją do każdego elementu array. \n \n Inny przykład to funkcja, która zwraca inną funkcję z logiką w środku. \n \n Higher-order functions są podstawą functional programming.",
        correct: false,
      },
    ],
  },
  {
    id: 15,
    question:
      "Co to znaczy, że pewna konstrukcja języka programowania jest first-class w tym języku?",
    answers: [
      {
        option:
          "Jeśli coś w języku programowania jest 'first-class', to znaczy, że można tego używać tak samo jak innych zwykłych wartości.\n \nW skrócie: 'first-class' = można to przypisać do zmiennej, przekazać do funkcji i zwrócić z funkcji.\n \nW Clojure funkcje są 'first-class', bo:\n- można je przypisywać do zmiennych\n- można je przekazywać jako argumenty\n- można je zwracać z innych funkcji\n \nPrzykład:\n(def f +)\n(f 2 3) ; wynik: 5\n \nTo pokazuje, że funkcje w Clojure są jak liczby albo tekst – można z nimi robić wszystko.\n \nDzięki temu programowanie funkcyjne jest możliwe i bardzo elastyczne.",
        correct: true,
      },
      {
        option:
          "Jeśli coś jest first-class w języku, to znaczy, że można to używać jak zwykłą wartość. \n \n Można to przypisać do zmiennej, przekazać jako argument lub zwrócić z funkcji. \n \n W wielu językach funkcje są first-class — traktuje się je jak dane. \n \n Dzięki temu można pisać bardziej elastyczny i dynamiczny kod. \n \n To ważne w językach wspierających functional programming.",
        correct: false,
      },
    ],
  },
  {
    id: 16,
    question: "W jaki sposób w Clojure definiuje się procedury?",
    answers: [
      {
        option:
          "W Clojure procedury (czyli funkcje) definiuje się za pomocą słowa `defn`.\n \nW skrócie: `defn` = definicja nowej funkcji z nazwą.\n \nPodstawowy zapis wygląda tak:\n(defn nazwa-funkcji [argumenty]\n  ciało-funkcji)\n \nPrzykład:\n(defn dodaj [a b]\n  (+ a b))\n \nTeraz można wywołać funkcję tak:\n(dodaj 2 3) ; wynik: 5\n \nMożna też tworzyć funkcje bez nazwy (lambda) za pomocą `fn` albo `#()`, ale `defn` to główny sposób na tworzenie nazwanych procedur.",
        correct: true,
      },
      {
        option:
          "W Clojure procedury definiuje się za pomocą defn. \n \n Najpierw podaje się nazwę funkcji, potem listę argumentów i ciało funkcji. \n \n Przykład: (defn dodaj [a b] (+ a b)). \n \n Można też dodać dokumentację albo kilka wersji funkcji z różną liczbą argumentów. \n \n Funkcje w Clojure są zwykłymi wartościami — można je przekazywać dalej.",
        correct: false,
      },
    ],
  },
  {
    id: 17,
    question:
      "Przykład procedury w Clojure lub Javie, która nie jest realizacją funkcji w sensie matematycznym",
    answers: [
      {
        option:
          "Przykład procedury, która nie jest funkcją matematyczną, to np. taka, która coś drukuje na ekranie.\n \nW Clojure:\n(defn pokaz [x]\n  (println x))\n \nW Javie:\nvoid pokaz(String x) {\n  System.out.println(x);\n}\n \nTe procedury nie zwracają wartości, tylko mają efekt uboczny – czyli coś robią (np. drukują tekst), ale nie dają konkretnego wyniku.\n \nW matematyce funkcja zawsze musi zwracać wynik i nie może mieć efektów ubocznych.\n \nDlatego `println` albo `System.out.println` nie są funkcjami w sensie matematycznym.",
        correct: true,
      },
      {
        option:
          "Przykład w Clojure: (defn drukuj [x] (println x)). \n \n Ta procedura nie jest funkcją w sensie matematycznym, bo ma efekt uboczny — wypisuje tekst. \n \n W Javie podobnie: void print(int x) { System.out.println(x); }. \n \n Taka funkcja nic nie zwraca i zmienia stan systemu (np. konsolę). \n \n W matematyce funkcja zawsze zwraca wartość i nie ma efektów ubocznych.",
        correct: false,
      },
    ],
  },
  {
    id: 18,
    question:
      "Czy w programowaniu funkcyjnym dopuszczone jest stosowanie zmiennych (uzasadnij)?",
    answers: [
      {
        option:
          "W programowaniu funkcyjnym zmienne są dopuszczone, ale działają inaczej niż w programowaniu imperatywnym.\n \nW skrócie: można mieć zmienne, ale one są **niemodyfikowalne** – czyli raz nadana wartość nie zmienia się.\n \nW Clojure zamiast zwykłych zmiennych używa się np. `let`, który tworzy lokalną stałą wartość.\n \nPrzykład:\n(let [x 5]\n  (+ x 2)) ; wynik: 7\n \nTutaj `x` to zmienna, ale nie można jej zmienić – działa jak stała.\n \nProgramowanie funkcyjne skupia się na braku efektów ubocznych, więc zmienne, które się zmieniają, nie są zalecane.\n \nPodsumowując: zmienne są, ale **niezmienne** – to pomaga w przewidywalnym działaniu programu.",
        correct: true,
      },
      {
        option:
          "W programowaniu funkcyjnym unika się zmiennych, ale nie są całkiem zakazane. \n \n Zamiast zmiennych używa się wartości, które się nie zmieniają (immutable). \n \n Dzięki temu kod jest prostszy, łatwiejszy do testowania i bezpieczniejszy. \n \n Jeśli już trzeba użyć zmiennych, to robi się to lokalnie i ostrożnie. \n \n Główna zasada to: nie zmieniaj danych, tylko twórz nowe wersje.",
        correct: false,
      },
    ],
  },
  {
    id: 19,
    question: "Co to są zmienne stanu (state variables)?",
    answers: [
      {
        option:
          "Zmienne stanu to takie zmienne, które przechowują aktualny stan programu i mogą się zmieniać w czasie działania.\n \nW skrócie: zmienna stanu = zmienna, która zapamiętuje coś, co może się zmieniać.\n \nNa przykład licznik kliknięć w aplikacji – jego wartość zmienia się za każdym razem, gdy klikniesz.\n \nW programowaniu imperatywnym zmienne stanu są bardzo częste.\nW programowaniu funkcyjnym raczej się ich unika, bo powodują efekty uboczne.\n \nW Clojure, jeśli potrzebujemy zmiennych stanu, używamy specjalnych struktur jak `atom`, `ref`, `agent` albo `volatile!`.\n \nDzięki temu mamy kontrolę nad zmianami i wszystko jest bardziej bezpieczne.",
        correct: true,
      },
      {
        option:
          "Zmienne stanu to takie, które przechowują aktualny stan programu. \n \n Mogą się zmieniać w czasie działania programu. \n \n Przykład to licznik w pętli albo flaga zalogowania użytkownika. \n \n W programowaniu funkcyjnym unika się takich zmiennych, bo są trudne do kontrolowania. \n \n Ale w innych stylach programowania są często używane do zarządzania logiką.",
        correct: false,
      },
    ],
  },
  {
    id: 20,
    question:
      "Czym są niezmienne (persistent) struktury danych w Clojure (podaj przykłady)?",
    answers: [
      {
        option:
          'Niezmienne (persistent) struktury danych w Clojure to takie, których nie da się zmienić po utworzeniu. \n \nW skrócie: jeśli zmieniamy strukturę, to tak naprawdę powstaje nowa wersja, a stara zostaje bez zmian.\n \nTo działa dzięki sprytnemu mechanizmowi dzielenia części danych między starą a nową wersją, więc nie jest wolne.\n \nPrzykłady:\n- wektor: [1 2 3]\n- lista: \'(a b c)\n- mapa: {:imie "Jan" :wiek 20}\n- zbiór: #{1 2 3}\n \nKażda z tych struktur jest niezmienna – jak coś dodajesz albo zmieniasz, to dostajesz nową strukturę, a stara zostaje taka sama.\n \nTo pasuje do programowania funkcyjnego, gdzie unikamy efektów ubocznych.',
        correct: true,
      },
      {
        option:
          "Niezmienne (persistent) struktury danych w Clojure to takie, których nie da się zmienić. \n \n Gdy dodajesz element, tworzona jest nowa wersja, a stara zostaje bez zmian. \n \n Przykłady to vector, list, map i set. \n \n Dzięki nim kod jest bezpieczniejszy i łatwiejszy do testowania. \n \n Clojure optymalizuje te struktury, więc są szybkie mimo tworzenia nowych wersji.",
        correct: false,
      },
    ],
  },
];

export default dataProgFunc;
