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
        option: "",
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
        option: "",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: "",
    answers: [
      {
        option: "",
        correct: true,
      },
      {
        option: "",
        correct: false,
      },
    ],
  },
];

export default dataProgFunc;
