const dataPiKSA = [
  {
    id: 1,
    question: "Co to jest REST?",
    answers: [
      {
        option:
          "REST to taki sposób budowania API, który pozwala klientowi (na przykład przeglądarce albo aplikacji) komunikować się z serwerem przez internet. Wykorzystuje się do tego normalne metody HTTP, takie jak GET, żeby coś pobrać, POST, żeby coś dodać, PUT, żeby zaktualizować i DELETE, żeby coś usunąć. W REST wszystko opiera się na zasobach, które mają swoje adresy URL, na przykład użytkownik mógłby być pod adresem api/klienci/5. Ważne jest też to, że każde żądanie jest niezależne – serwer nie zapamiętuje, co działo się wcześniej, czyli nie przechowuje stanu klienta. Klient musi za każdym razem wysłać wszystko, co potrzebne. Zazwyczaj dane są przesyłane w formacie JSON, bo jest lekki i łatwy do ogarnięcia. REST jest popularny, bo nie jest zbyt skomplikowany, dobrze działa z HTTP i można go łatwo użyć zarówno w frontendzie, jak i backendzie.",
        correct: true,
      },
      {
        option:
          "REST to styl projektowania API, który używa protokołu HTTP. \n \n Działa na zasadzie żądań i odpowiedzi między klientem a serwerem. \n \n Każdy zasób (np. użytkownik) ma swój unikalny adres URL. \n \n Używa metod HTTP jak GET, POST, PUT, DELETE do pracy z danymi. \n \n REST jest prosty, czytelny i często używany w aplikacjach webowych.",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question:
      "Jakie są najważniejsze metody HTTP wykorzystywane w REST i jak się je stosuje?",
    answers: [
      {
        option:
          "W REST najczęściej używa się czterech podstawowych metod HTTP i każda z nich służy do czegoś innego: \n \n GET – służy do pobierania danych z serwera. Na przykład jak chcę pobrać listę użytkowników, to robię GET na /users. Ta metoda nie zmienia niczego na serwerze – tylko czyta dane. \n \n POST – używa się jej, żeby coś dodać. Na przykład, jeśli chcę dodać nowego użytkownika, to robię POST na /users, a w ciele żądania (body) wysyłam dane tego użytkownika, np. imię, email itd. \n \n PUT – służy do aktualizacji całego zasobu. Czyli jeśli mam użytkownika o ID 5 i chcę go zaktualizować, to robię PUT na /users/5 i podaję wszystkie dane, nawet jeśli niektóre się nie zmieniają. \n \n DELETE – jak sama nazwa mówi, służy do usuwania. Czyli jak chcę usunąć użytkownika o ID 5, to robię DELETE na /users/5. \n \n Te metody są intuicyjne, bo po prostu opisują, co chcemy zrobić z danymi. REST wykorzystuje właśnie taką „czytelną” strukturę – jak widzisz endpoint i metodę, to od razu wiesz, co się dzieje.",
        correct: true,
      },
      {
        option:
          "Najważniejsze metody HTTP w REST to: GET, POST, PUT i DELETE. \n \n GET służy do pobierania danych, np. lista użytkowników. \n \n POST dodaje nowe dane, np. tworzy nowego użytkownika. \n \n PUT aktualizuje istniejące dane, np. zmienia dane użytkownika. \n \n DELETE usuwa dane, np. kasuje użytkownika. \n \n Każda metoda ma swoje konkretne zastosowanie i pomaga w pracy z zasobami.",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question:
      "Jakiego API można używać w Twojej ulubionej technologii (JEE, Spring, .NET) do przetwarzania JSONa - opisz jego cechy?",
    answers: [
      {
        option:
          "W Springu do przetwarzania JSON-a najczęściej używa się biblioteki Jackson, która jest zintegrowana z Spring Bootem domyślnie. Nie trzeba jej nawet dodawać ręcznie – po prostu działa od razu po instalacji Spring Boota. Jackson pozwala bardzo łatwo konwertować dane JSON na obiekty Javy (czyli tzw. deserializacja) i odwrotnie – obiekty Javy na JSON (serializacja). Wystarczy stworzyć zwykłą klasę z polami, np. User z name, email, i Spring sam dopasuje dane z JSON-a do tych pól. \n \n Najfajniejsze cechy Jacksona: \n \n Działa automatycznie z adnotacjami Springa, np. @RequestBody i @ResponseBody – JSON trafia prosto do obiektów lub wychodzi z nich. \n \n Obsługuje różne formaty, typy danych, nawet zagnieżdżone obiekty i listy. \n \n Można go konfigurować, np. ignorować nieznane pola, zmieniać format dat, itp. \n \n To działa bardzo płynnie – piszemy metody w kontrolerze, a Spring z Jacksonem robi całą robotę z JSON-em za nas. Nie trzeba ręcznie nic parsować ani tworzyć specjalnych parserów.",
        correct: true,
      },
      {
        option:
          "W TypeScript (Node.js) do pracy z JSON-em można używać Express i jego funkcji do przetwarzania danych. \n \n Express automatycznie parsuje JSON w żądaniach, jeśli użyjemy middleware jak express.json(). \n \n JSON.parse() zamienia tekst w obiekt JS, a JSON.stringify() robi odwrotnie. \n \n Dzięki tym funkcjom można łatwo przyjmować i wysyłać dane w formacie JSON. \n \n Express i JSON są lekkie, szybkie i proste w użyciu.",
        correct: false,
      },
    ],
  },
  {
    id: 4,
    question:
      "Co to jest dependency injection i jak się je realizuje/stosuje w Twojej ulubionej technologii?",
    answers: [
      {
        option:
          "Dependency injection to po prostu taki sposób, żeby nie tworzyć obiektów samemu w klasie, tylko żeby robił to za nas Spring. Zamiast pisać new, mówimy Springowi: „Hej, potrzebuję tego obiektu – daj mi go”. I Spring sam go tworzy i wstrzykuje tam, gdzie trzeba. \n \n W Springu robi się to bardzo łatwo – wystarczy dodać adnotację @Component do klasy, żeby Spring wiedział, że ma ją zarządzać. A potem tam, gdzie chcemy jej używać, piszemy @Autowired, i gotowe – Spring sam wszystko podstawi.",
        correct: true,
      },
      {
        option:
          "Dependency injection to sposób przekazywania zależności do klas lub funkcji zamiast tworzenia ich wewnątrz. \n \n W Express.js można to robić ręcznie, np. przekazując serwis do routera jako argument. \n \n Dzięki temu kod jest bardziej czytelny i łatwiejszy do testowania. \n \n Nie trzeba używać specjalnych bibliotek, wystarczy dobra struktura plików i funkcji. \n \n To prosty i elastyczny sposób zarządzania zależnościami w aplikacji.",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question:
      "HTTP jest protokołem bezstanowym. W jaki sposób można realizować utrzymanie stanu komunikacji pomiędzy klientem a serwerem w oprogramowaniu korzystającym z tego protokołu?",
    answers: [
      {
        option:
          "HTTP rzeczywiście jest bezstanowy, co oznacza, że każde żądanie od klienta do serwera jest traktowane osobno, bez pamiętania, co było wcześniej. Ale w prawdziwych aplikacjach często trzeba jakoś utrzymać stan, np. żeby użytkownik był zalogowany. \n \n  Są na to różne sposoby: \n \n Ciasteczka (cookies) – serwer może wysłać ciasteczko do przeglądarki, a ta będzie je potem automatycznie dodawać do każdego kolejnego żądania. Dzięki temu serwer „rozpoznaje” użytkownika.\n \n  Sesje (sessions) – po stronie serwera tworzy się specjalny identyfikator sesji (np. JSESSIONID), który jest zapisywany w ciasteczku. Potem serwer może przechowywać informacje o użytkowniku w tej sesji.\n \n  Tokeny (np. JWT) – po zalogowaniu użytkownik dostaje token (czyli zakodowany ciąg znaków), który musi dołączać do każdego żądania (zazwyczaj w nagłówku Authorization). Serwer może go odczytać i sprawdzić, kto to jest.\n \n  LocalStorage/SessionStorage (po stronie klienta) – frontend może sam przechowywać dane w przeglądarce i dodawać je do każdego żądania (np. token).\n \n  Podsumowując – chociaż HTTP nie zapamiętuje stanu, to my możemy go „symulować” za pomocą cookies, sesji albo tokenów. Dzięki temu użytkownik nie musi logować się przy każdej akcji, tylko działa jakby miał „ciągłą” sesję.",
        correct: true,
      },
      {
        option:
          "HTTP jest bezstanowy, co oznacza, że każde żądanie jest niezależne. \n \n Aby utrzymać stan, używa się mechanizmów takich jak cookies, sessions lub tokeny (np. JWT). \n \n Cookies i sesje zapisują dane użytkownika po stronie serwera lub przeglądarki. \n \n Tokeny jak JWT są przesyłane z każdym żądaniem i pozwalają rozpoznać użytkownika. \n \n Dzięki temu serwer wie, kto wysyła żądanie i może zachować kontekst.",
        correct: false,
      },
    ],
  },
];

export default dataPiKSA;
