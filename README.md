# Headless CMS

[Headless CMS](https://www.unity.pl/blog/co-warto-wiedziec-o-headless-cms/) to narzędzie, które pozwala Ci tworzyć zawartość strony bez potrzeby budowania dedykowanego panelu administracyjnego. 

Przy pomocy odpowiedniego [UI](https://en.wikipedia.org/wiki/User_interface_design) możesz "wyklikać" odpowiednie pola, które tworzą strukturę dla zawartości strony. 

Następnie wypełnione dane (przez Ciebie, klienta lub pracownika) przy pomocy wygodnego formularza można pobrać korzystając z API. 

Tego typu rozwiązania są bardzo wygodne dla programistów Frontend, którzy nie chcą tracić czasu na rozwiązania Backendowe.

## Prismic

Dlatego tym razem Twoim zadaniem będzie skorzystać z [prismic](https://prismic.io/), który należy do grupy opisywanych wyżej narzędzi.

## API

Przy jego pomocy utworzysz blog, którego zawartość będzie pobierana z [dostępnego API](https://prismic.io/docs/technologies/introduction-to-the-content-query-api).

Dokomentacja zawiera również opis narzędzi dedykowanych pod dana technologię tj. [JavaScript](https://prismic.io/docs/technologies/integrating-with-an-existing-project-javascript), a nawet [React](https://prismic.io/docs/technologies/start-a-prismic-project-from-scratch-with-reactjs).

Udostępnia również [przydatne narzędzie](https://prismic.io/docs/technologies/the-rest-api-browser) do testowania zapytań pod adresem: `[nazwa-przestrzeni].prismic.io/api`. 

## Podstawowe założenia

Blog powinień posiadać wpisy, które zawierają conajmniej:
- tytuł
- wstęp
- zawartość
- zdjęcie
- [slug/alias](https://webwavecms.com/blog/slug)
- kategorie

> **Podpowiedź:** Najlepiej będzie jak utworzysz w [panelu](https://prismic.io/dashboard) dwa `Custom Type` określane mianem `Repeatable Type` tj. `post`oraz `category` i powiążesz je między sobą przy pomocy `Content relationship`. Możesz też wykorzystać `Group` jeśli będzisz chciał przypisać kilka kategorii do wpisu. 

### React Router DOM

Największy nacisk w tym projekcie powinieneś utrzymać na dpowiednie przygotowanie adresów URL, tak aby były one możliwie dobrze napisane pod względem UX.

Może warto zrobić listę kategorii, które pozwolą użytkownikowi czytać tylko interesujące materiały.

Może warto dodać do adresu URL datę w jakim został opublikowany lub przynajmniej rok i miesiąc, aby grupować wyświetlanie artykułów z odpowiedniego przedziału czasowego.

Np. `/2020/11/` wyświetli wszystkie artykuły opublikowane w listopadzie 2020 r.

Pamiętaj też o odpowiedniej paginacji. Podziel wyświetlanie zawartości na cześci, gdzie na jednej podstronie widać maksymalnie 6 wpisów.

#### Przykłady

[Na stronach *prismic*](https://user-guides.prismic.io/en/collections/22783-examples#react-js-samples) znajdziesz przykłady implementacji dla React np. [prosty blog](https://user-guides.prismic.io/en/articles/2685559-sample-blog-with-api-based-cms-in-reactjs) czy [blog z kilkoma podstronami](https://user-guides.prismic.io/en/articles/2731304-sample-multi-page-site-with-navigation-in-reactjs).

Proponuję zapoznać się z nimi zanim przejdziesz do własnej implementacji. 

W przykładach znajdziesz również wykorzystanie przydatnego narzędzia jakim jest [React Helmet](https://www.npmjs.com/package/react-helmet), który pozwala w wygodny sposób zarządzać elementami zapisanym w `<head>` np. `<title>`.













