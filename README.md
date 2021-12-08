> ⭐ ***README** to coś więcej niż opis. Poprzez nie **pokazujesz swoje mocne strony** – swoją dokładność, sposób myślenia i podejście do rozwiązywania problemów. Niech Twoje README pokaże, że masz **świetne predyspozycje do rozwoju!***
> 
> 🎁 *Zacznij od razu. Skorzystaj z **[szablonu README i wskazówek](https://github.com/devmentor-pl/readme-template)**.* 

&nbsp;


# Headless CMS

[Headless CMS](https://www.unity.pl/blog/co-warto-wiedziec-o-headless-cms/) to narzędzie, które pozwala tworzyć zawartość strony bez potrzeby budowania dedykowanego panelu administracyjnego. 

Przy pomocy odpowiedniego [UI](https://en.wikipedia.org/wiki/User_interface_design) możesz „wyklikać” potrzebne pola, które stworzą strukturę dla zawartości strony.

Treści i zasoby uzupełnia się przez wygodny formularz (możesz to robić Ty, klient czy pracownik), a następnie pobiera przez API. 

Headless CMS-y są bardzo wygodne dla programistów front-end, którzy nie chcą tracić czasu na rozwiązania back-endowe.

## Prismic

Twoim zadaniem będzie wykorzystać headless CMS – [Prismic](https://prismic.io/).

## API

Utwórz blog, którego zawartość będzie pobierana przez [API Prismica](https://prismic.io/docs/technologies/introduction-to-the-content-query-api).

Dokumentacja zawiera opis narzędzi przeznaczonych dla danej technologii, np. [JavaScriptu](https://prismic.io/docs/technologies/integrating-with-an-existing-project-javascript), a nawet [Reacta](https://prismic.io/docs/technologies/start-a-prismic-project-from-scratch-with-reactjs).

Udostępnia również [przydatne narzędzie](https://prismic.io/docs/technologies/the-rest-api-browser) do testowania zapytań pod adresem: `[nazwa-przestrzeni].prismic.io/api`. 

## Podstawowe założenia

Blog powinien posiadać wpisy, które zawierają co najmniej:
- tytuł
- wstęp
- zawartość
- zdjęcie
- [slug/alias](https://webwavecms.com/blog/slug)
- kategorie.

> **Podpowiedź:** Najlepiej będzie, jeśli utworzysz w [panelu](https://prismic.io/dashboard) dwa `Custom Type` określane mianem `Repeatable Type`, tj. `post`oraz `category`, i powiążesz je między sobą przy pomocy `Content relationship`. Możesz też wykorzystać `Group`, jeśli do jednego wpisu będziesz chciał przyporządkować kilka kategorii. 

### React Router DOM

Największy nacisk w tym projekcie powinieneś położyć na odpowiednie przygotowanie adresów URL – tak aby były one dobrze napisane pod względem UX.

Może warto zrobić listę kategorii, które pozwolą użytkownikowi czytać tylko interesujące go materiały.

Może warto również dodać do adresu URL datę publikacji wpisu lub przynajmniej rok i miesiąc – aby móc wyświetlać artykuły z danego przedziału czasowego.

Na przykład `/2020/11/` wyświetli wszystkie artykuły opublikowane w listopadzie 2020 r.

Pamiętaj też o odpowiedniej **paginacji**. Podziel wyświetlanie zawartości na części, gdzie na jednej podstronie widać maksymalnie 6 wpisów.

### Przykłady

W dokumentacji Prismica znajdziesz [przykłady implementacji dla Reacta](https://prismic.io/docs/technologies/example-projects-reactjs), np. [prosty blog](https://react-blog-demo.netlify.app/) czy [blog z kilkoma podstronami](https://react-website-demo.netlify.app/).

Proponuję zapoznać się z nimi, zanim przejdziesz do własnej implementacji. 

W przykładach znajdziesz również wykorzystanie przydatnego narzędzia [React Helmet](https://www.npmjs.com/package/react-helmet), które pozwala w wygodny sposób zarządzać elementami zapisanym w `<head>`, np. `<title>`.


&nbsp;

> ⭐ ***README** to coś więcej niż opis. Poprzez nie **pokazujesz swoje mocne strony** – swoją dokładność, sposób myślenia i podejście do rozwiązywania problemów. Niech Twoje README pokaże, że masz **świetne predyspozycje do rozwoju!***
> 
> 🎁 *Zacznij od razu. Skorzystaj z **[szablonu README i wskazówek](https://github.com/devmentor-pl/readme-template)**.* 
