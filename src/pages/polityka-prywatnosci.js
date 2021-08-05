import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./../components/layout.css"

import { Helmet } from "react-helmet"



const IndexPage = () => (
    <Layout>
    <SEO title="Zielone Technologie - Polityka Prywatności" />
    <Helmet>
        <meta name="robots" content="noindex" />
    </Helmet>
    <div className="container" style={{paddingTop:'100px', maxWidth: '800px'}}>
        <div className="page-content privary-policy-content privary-policy-legal-content">

            <h2 className="page-title">Polityka prywatności</h2>
            <p>Aplikacja gromadzi pewne dane osobowe od swoich użytkowników. </p>               
            <hr/>
            <div className="contact-data">
                <h4>Administrator i właściciel danych</h4>
                <span className="company-name">Zielone Technologie</span>
                <br/>                
                <span className="company-email">zielonetechnologie.zg@gmail.com</span>
                <br/>                
                <span className="company-address">ul. Dworcowa 6 65-019 Zielona Góra</span>            
            </div>
            <hr/>

            <div className="main-blocks">
                <div className="main-block">
                    <h4>Czas retencji</h4>
                    <p className="main-block-content">Dane są przechowywane przez okres niezbędny do świadczenia usługi żądanej przez Użytkownika, lub też przez okres określony przez cele opisane w niniejszym dokumencie. Użytkownik może zawsze poprosić Administratora Danych o zawieszenie lub usunięcie danych.</p>
                </div>
                <div className="main-block">
                    <h4>Zbierane typy danych</h4>
                    <p className="main-block-content">Wśród typów danych osobowych, które zbiera ta aplikacja, samodzielnie lub za pośrednictwem osób trzecich, są: Cookie, Dane o wykorzystaniu, Email, Imię, Numer telefonu<br/>
                        Inne zgromadzone Dane Osobowe mogą być opisane w innych sekcjach niniejszej polityki prywatności lub kontekstowo, za pomocą dedykowanego tekstu wyświetlanego przy gromadzeniu danych.
                        Dane osobowe mogą być swobodnie dostarczane przez Użytkownika albo automatycznie zbierane podczas korzystania z tej Aplikacji. <br/>
                        Jakiekolwiek korzystanie z plików plików cookie - lub innych narzędzi monitorowania - przez tę Aplikację lub przez właścicieli usług stron trzecich wykorzystywanych przez tę Aplikację, o ile nie zaznaczono inaczej, służy do identyfikacji Użytkowników i zapamiętywania ich preferencji, wyłącznie w celu świadczenia usług wymaganych przez Użytkownika.
                        Nie udostępnienie niektórych danych osobowych może Aplikacji świadczenie usług. <br/>
                        Użytkownik ponosi odpowiedzialność za Dane Osobowe stron trzecich publikowane lub udostępniane przez tę Aplikację i deklaruje prawo do komunikowania się z nimi lub nadawania do nich, zwalniając Administratora Danych z wszelkiej odpowiedzialności.
                    </p>
                </div>
                <div className="main-block">
                    <h4>Miejsce</h4>
                    <p className="main-block-content">Dane są przetwarzane w biurach Administratora Danych i w innych miejscach, w których znajdują się związane z przetwarzaniem strony. Aby uzyskać więcej informacji, należy skontaktować się z Administratorem Danych.</p>
                </div>
                <div className="main-block">
                    <h4>Metody przetwarzania</h4>
                    <p className="main-block-content">Administrator Danych przetwarza Dane Użytkowników w sposób prawidłowy i podejmuje odpowiednie środki bezpieczeństwa w celu ochrony przed nieuprawnionym dostępem, ujawnieniem, modyfikacją lub nieuprawnionym zniszczeniem danych. <br/>
                        Przetwarzanie danych odbywa się za pomocą komputerów i/lub narzędzi IT, zgodnie z procedurami organizacyjnymi i sposobami ściśle związanymi ze wskazanymi celami. Poza Administratorem Danych, w niektórych przypadkach, dane mogą być dostępne dla określonych typów osób odpowiedzialnych za działania serwisu (administrację, sprzedaż, marketing, system prawny, administrację systemu) lub podmiotów zewnętrznych (takich jak dostawcy usług technicznych, listonosze, dostawcy hostingu, firmy informatyczne, agencje komunikacyjne) mianowanych, w razie potrzeby, Procesorami Danych przez Właściciela. Aktualny wykaz tych stron można uzyskać od Administratora Danych w każdej chwili.
                    </p>
                </div>
                <div className="main-block">
                    <h4>Wykorzystanie zgromadzonych danych</h4>
                    <p className="main-block-content">Dane dotyczące Użytkownika są zbierane w celu umożliwienia Aplikacji świadczenia usług, jak również do następujących celów: 
                        Analityka, Kontakt z Użytkownikiem. <br/>  
                        Dane Osobowe wykorzystywane do każdego celu są opisane w poszczególnych sekcjach niniejszego dokumentu.</p>
                    </div>
                </div>
            <hr/>

                <div className="categories accordion" id="services-accordion">
                    <h4>Informacje dotyczące przetwarzania danych osobowych</h4>
                    <p>Dane osobowe zebrane w następujących celach dla następujących usług:</p><br/><br/>
                    <div className="services accordion-group">
                        <div className="accordion-heading">
                              <h4>
                                  <i className="fa fa-bar-chart-o"></i>
                                  Analityka
                              </h4>
                        </div>


                        <div id="collapse9" className="accordion-body collapse">
                            <div className="accordion-inner">
                                <p className="category-desc">Usługi zawarte w tej sekcji umożliwiają Właścicielowi monitorowanie i analizowanie ruchu w sieci. Mogą być też używane do śledzenia zachowania Użytkownika.</p>                                                                                                                                                
                                <h5>
                                    <i className="fa fa-google-plus-square"></i>
                                    Google Analytics
                                </h5>
                                <p className="service-desc">Google Analytics to usługa analizy sieci internetowej firmy Google Inc. ("Google"). Google wykorzystuje dane zebrane w celu śledzenia i zbadania wykorzystania tej Aplikacji, do przygotowania sprawozdań na temat jej działań i do dzielenia się nimi z innymi usługami Google. 
                                    Firma Google może wykorzystywać zebrane Dane do kontekstualizacji i personalizacji ogłoszeń z własnej sieci reklamowej.</p>                                      
                                <p className="service-provider">Dostawca: Google</p>
                                <p className="service-purpose">Cel: Analityka</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                                <p className="service-data">Dane osobowe: Cookie, Dane o wykorzystaniu</p>                                        
                                <p className="service-place">
                                    Miejsce przetwarzania danych: USA
                                    <a className="pp-link" target="_blank" href="http://www.google.com/intl/en/policies/privacy/">Polityka Prywatności</a>
                                    <a className="external-link" target="_blank" href="http://tools.google.com/dlpage/gaoptout?hl=en">Strona</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="services accordion-group">
                        <div className="accordion-heading">
                              <h4>
                                  <i className="fa fa-envelope"></i>
                                  Kontakt z Użytkownikiem
                              </h4>
                        </div>
                        <div id="collapse4" className="accordion-body collapse">
                            <div className="accordion-inner">
                                <p className="category-desc">Kontakt z Użytkownikiem</p>
                                <h5>
                                    <i className="fa fa-globe"></i>
                                     Formularz kontaktowy
                                </h5>
                                <p className="service-desc">Poprzez wypełnienie formularza kontaktowego swoimi Danymi Użytkownicy upoważniają niniejszą Aplikację do używania tych danych do odpowiedzi na wnioski o informacje, wyceny lub innego rodzaju żądania wskazane na nagłówku formularza.</p>
                                <p className="service-provider">Dostawca: Ta Aplikacja</p>
                                <p className="service-purpose">Cel: Kontakt z Użytkownikiem</p>
                                <p className="service-data">Dane osobowe: Email, Imię, Numer telefonu</p>
                            </div>
                        </div>
                    </div>
                </div>

        <hr/>

                <div className="add-blocks">
                    <h4>Dane dodatkowe na temat zbierania i przetwarzania danych</h4>
                    <div className="add-block">
                        <h5>Działania prawne</h5>
                        <p className="add-block-desc">Dane Osobowe Użytkownika mogą być wykorzystywane do celów prawnych przez Administratora Danych, w sądzie lub w działaniach prowadzących do możliwych działań prawnych wynikających z niewłaściwego stosowania tej Aplikacji lub związanych z nią usług. 
                        <br/>
                            Użytkownik powinien być świadomy faktu, że Administrator Danych może być zobowiązany do ujawnienia Danych Osobowych na żądanie władz.</p>
                    </div>
                    <div className="add-block">
                        <h5>Dodatkowe informacje o Danych Osobowych Użytkownika</h5>
                        <p className="add-block-desc">Oprócz informacji zawartych w niniejszej polityce prywatności, ta Aplikacja może zapewnić Użytkownikowi dodatkowe i kontekstowe informacje dotyczących określonych usług lub gromadzenia i przetwarzania Danych Osobowych na żądanie.</p>
                    </div>
                    <div className="add-block">
                        <h5>Logi Systemowe i Konserwacja</h5>
                        <p className="add-block-desc">Do celów eksploatacji i konserwacji, ta aplikacja i wszelkie usługi przez stron trzecich mogą gromadzić pliki stanowiące zapis interakcji z tą Aplikacją (logi systemowe) lub użyć do tego celu innych Danych Osobowe (takich jak adres IP).</p>
                    </div>
                        <div className="add-block">
                        <h5>Informacje nie zawarte w niniejszej polityce</h5>
                        <p className="add-block-desc">Więcej szczegółów dotyczących gromadzenia lub przetwarzania Danych Osobowych można uzyskać od Administratora Danych w dowolnym momencie. Informacje kontaktowe znaleźć można na początku niniejszego dokumentu.</p>
                    </div>
                        <div className="add-block">
                        <h5>Prawa użytkowników</h5>
                        <p className="add-block-desc">Użytkownicy mają prawo w dowolnym momencie dowiedzieć się, czy ich Dane Osobowe były przechowywane i skonsultować się z Administratorem Danych, aby dowiedzieć się o ich zawartości i pochodzeniu w celu sprawdzenia ich dokładności lub żądania ich uzupełnienia, anulowania, aktualizacji lub poprawy, lub do ich przekształcenia do postaci anonimowej lub do zablokowania wszelkich danych przechowywanych z naruszeniem prawa, a także do sprzeciwienia się ich wykorzystaniu z wszelkich uzasadnionych powodów. Wnioski należy przesyłać do Administratora Danych, korzystając z informacji kontaktowych podanych powyżej. 
                        <br/>
                        Ta Aplikacja nie obsługuje żądań "Do Not Track". 
                        <br/>
                        Aby określić, czy którekolwiek z usług stron trzecich obsługuje żądania "Do Not Track", należy przeczytać ich polityki prywatności.</p>
                    </div>
                    <div className="add-block">
                        <h5>Zmiany niniejszej polityki prywatności</h5>
                        <p className="add-block-desc">Administrator Danych zastrzega sobie prawo do wprowadzania zmian w niniejszej polityce prywatności w dowolnym momencie przez powiadomienie swoich Użytkowników na tej stronie. Zaleca się, aby sprawdzać tę stronę często, zwracając uwagę na datę ostatniej modyfikacji wymienioną na dole. Jeśli Użytkownik sprzeciwia się dowolnej ze zmian w polityce, Użytkownik musi zaprzestać korzystania z tej Aplikacji i może zażądać, aby Administrator Danych usunął Dane Osobowe. Jeśli nie zaznaczono inaczej, aktualna w danym momencie polityka prywatności ma zastosowanie do wszystkich Danych Osobowych Użytkowników, jakie posiada Administrator Danych.</p>
                    </div>
                        <div className="add-block">
                        <h5>Informacje na temat niniejszej polityki prywatności</h5>
                        <p className="add-block-desc">Administrator danych jest odpowiedzialny za niniejszą politykę prywatności, przygotowaną począwszy od modułów dostarczonych przez firmę GuideMe24 i hostowanych na serwerach firmy GuideMe24.</p>
                    </div>
                </div>
            <hr/>



            <div className="def-blocks accordion" id="accordion-def-legal">
                <div className="accordion-group">
                    <div className="accordion-heading">
                          <h4>Definicje i odniesienia prawne</h4>
                    </div>
                    <div id="collapseDefLegal" className="accordion-body in" >
                       <div className="accordion-inner">
                            <div className="def-block">
                                <h5>Dane Osobowe (lub Dane)</h5>
                                <p className="def-block-desc">Wszelkie informacje dotyczące osoby fizycznej, osoby prawnej, instytucji lub stowarzyszenia, które są lub mogą być zidentyfikowane, nawet pośrednio, poprzez odniesienie do wszelkich innych informacji, w tym osobistego numeru identyfikacyjnego.</p>
                            </div>
                            <div className="def-block">
                                <h5>Dane o wykorzystaniu</h5>
                                <p className="def-block-desc">Informacje zbierane automatycznie z tej Aplikacji (lub usług osób trzecich wykorzystywanych w tej Aplikacji), które mogą obejmować: adresy IP lub nazwy domen komputerów wykorzystywanych przez Użytkowników, którzy korzystają z tej Aplikacji, adresy URI (Uniform Resource Identifier), czas żądań, metody wykorzystywane do wysłania żądania do serwera, rozmiar pliku otrzymanego w odpowiedzi, kod numeryczny wskazujący stan odpowiedzi serwera (sukces, błąd itp.), kraj pochodzenia, cechy przeglądarki i systemu operacyjnego wykorzystywanego przez Użytkownika, różne dane dotyczące wizyty (np. czas spędzony na każdej stronie aplikacji) i szczegóły na temat ścieżki, którą Użytkownik przebył w Aplikacji, ze szczególnym odniesieniem do sekwencji stron, które odwiedził oraz inne parametry dotyczące systemu operacyjnego urządzenia i/lub środowiska IT użytkownika.</p>
                            </div>
                            <div className="def-block">
                                <h5>Użytkownik</h5>
                                <p className="def-block-desc">Osoba korzystająca z tej aplikacji, która musi pokrywać się z lub mieć zezwolenie Podmiotu Danych, którego dotyczą Dane Osobowe.</p>
                            </div>
                            <div className="def-block">
                                <h5>Podmiot Danych</h5>
                                <p className="def-block-desc">Osoba prawna lub fizyczna, której dotyczą Dane Osobowe.</p>
                            </div>
                            <div className="def-block">
                                <h5>Procesor Danych (lub Nadzorca Danych)</h5>
                                <p className="def-block-desc">Osoba fizyczna, osoba prawna, administracja publiczna lub inny organ, stowarzyszenie bądź organizacja upoważniona przez Administratora Danych, aby przetwarzać Dane Osobowe zgodnie z niniejszą polityką prywatności.</p>
                            </div>
                            <div className="def-block">
                                <h5>Administrator Danych (lub Właściciel)</h5>
                                <p className="def-block-desc">Osoba fizyczna, osoba prawna, administracja publicznej lub inny organ, stowarzyszenie bądź organizacja z prawem, również wspólnie z innym Administratorem Danych, do podejmowania decyzji dotyczących celów i metod przetwarzania Danych Osobowych oraz środki stosowane, w tym środki bezpieczeństwa dotyczące funkcjonowania i korzystania z aplikacji. Administrator Danych jest właścicielem tej aplikacji, chyba, że wskazano inaczej.</p>
                            </div>
                            <div className="def-block">
                                <h5>Ta Aplikacja</h5>
                                <p className="def-block-desc">Narzędzie sprzętowe lub programowe, za pomocą którego Dane Osobowe Użytkownika są zbierane.</p>
                            </div>
                            <div className="def-block">
                                <h5>Cookie</h5>
                                <p className="def-block-desc">Mały fragment danych przechowywany w urządzeniu Użytkownika.</p>
                            </div>
                            <div className="def-block">
                                <h5>Informacje prawne</h5>
                                <p className="def-block-desc">Informacja dla użytkowników w Europie: Niniejsza polityka prywatności została przygotowane w celu wypełnienia zobowiązań wynikających z Art. 10 Dyrektywy WE nr 95/46/WE, oraz zgodnie z przepisami dyrektywy 2002/58/WE, zmienionej dyrektywą 2009/136/WE, na temat plików cookie.
                                Niniejsza polityka prywatności odnosi się wyłącznie do tej Aplikacji.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
    </div>
    </div>
    </Layout>
)
export default IndexPage