import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function Cookie() {
	const cookie = useRef(null);

	useEffect(function () {
		const policy = cookie.current;

		gsap.fromTo(
			policy.children,
			{
				y: '+=100',
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				duration: 0.5,
				stagger: 0.2,
				scrollTrigger: {
					trigger: policy,
					start: 'top bottom',
					end: 'bottom 90%',
					scrub: true,
				},
			}
		);
	}, []);

	return (
		<div className='container cookie' ref={cookie}>
			<h2>Polityka Prywatności</h2>
			<p>Ostatnia aktualizacja: January 29, 2024</p>
			<p>
				Niniejsza Polityka prywatności opisuje nasze zasady i procedury
				dotyczące zbieranie, wykorzystywanie i ujawnianie Twoich danych podczas
				korzystania z Serwisu i informuje Cię o Twoich prawach do prywatności
				oraz o tym, jak chroni je prawo.
			</p>
			<p>
				Używamy Twoich danych osobowych w celu świadczenia i ulepszania Usługi.
				Używając Serwisu, wyrażasz zgodę na gromadzenie i wykorzystywanie
				informacji w zgodnie z niniejszą Polityką Prywatności..
			</p>
			<h2>Interpretacja i definicje</h2>
			<h3>Interpretacja</h3>
			<p>
				Słowa, których pierwsza litera jest pisana wielką literą, mają znaczenie
				zdefiniowane w następujących warunkach. Poniższe definicje mają to samo
				znaczenie niezależnie od tego, czy występują w liczbie pojedynczej, czy
				w liczbie mnogiej.
			</p>
			<h3>Definicje</h3>
			<p>Na potrzeby niniejszej Polityki prywatności:</p>
			<ul>
				<li>
					<p>
						<strong>Konto</strong> jeśłi istnieje oznacza unikalne konto
						utworzone dla Ciebie w celu uzyskania dostępu do naszej Usługi lub
						jej części.
					</p>
				</li>
				<li>
					<p>
						<strong>Filia</strong> oznacza podmiot, który kontroluje, jest
						kontrolowany przez stronę lub znajduje się pod wspólną kontrolą ze
						stroną, gdzie „kontrola” oznacza posiadanie 50% lub więcej udziałów,
						udziały w kapitale zakładowym lub inne papiery wartościowe
						uprawniające do głosowania w wyborach lub inny organ zarządzający.
					</p>
				</li>
				<li>
					<p>
						<strong>Firma</strong> (określane jako &quot;Firma&quot;,
						&quot;My&quot;, &quot;Nas&quot; lub &quot;Nasz&quot; w niniejszych
						warunkach) odnosi sie do Kodik.
					</p>
				</li>
				<li>
					<p>
						<strong>Pliki cookie</strong> to małe pliki umieszczane na Twoim
						komputerze, urządzeniu mobilnym lub innym urządzeniu za
						pośrednictwem strony internetowej zawierającej szczegóły historii
						przeglądania tej witryny spośród wielu
					</p>
				</li>
				<li>
					<p>
						<strong>Kraj</strong> odnosi się do: Polski
					</p>
				</li>
				<li>
					<p>
						<strong>Urządzenie</strong> oznacza dowolne urządzenie, które może
						uzyskać dostęp do Usługi jak komputer, telefon komórkowy lub tablet
						cyfrowy.
					</p>
				</li>
				<li>
					<p>
						<strong>Dane Osobiste</strong> to jakakolwiek informacja odnosząca
						się do zidentyfikowana lub możliwa do zidentyfikowania osoba
						fizyczna.
					</p>
				</li>
				<li>
					<p>
						<strong>Serwis</strong> odnosi się do strony Internetowej.
					</p>
				</li>
				<li>
					<p>
						<strong>Dostawca usługi</strong>
						oznacza każdą osobę fizyczną lub prawną która przetwarza dane w
						imieniu Spółki. Odnosi się do firm zewnętrznych lub osób
						zatrudnionych przez Spółkę by ułatwiać świadczenie Usługi, Usługę w
						imieniu Spółki, w celu świadczenia usług związanych z Usługą lub
						pomocy Spółki w zakresie analizy sposobu korzystania z Usługi.
					</p>
				</li>
				<li>
					<p>
						<strong>Dane dotyczące urzytkowania</strong> odnosi się do danych
						zbieranych automatycznie, wygenerowanych w wyniku korzystania z
						Usługi lub z samą infrastrukturą (na przykład czas podczas trwania
						wizyty na stronie).
					</p>
				</li>
				<li>
					<p>
						<strong>Strona</strong> odnosi się do Kodik, dostępna{' '}
						<a href='kodik.io' rel='external nofollow noopener' target='_blank'>
							kodik.io
						</a>
					</p>
				</li>
				<li>
					<p>
						<strong>Ty</strong> oznacza osobę uzyskującą Serwisu, czyli firma
						lub inna osoba prawna, w imieniu której działa dana osoba uzyskuje
						dostęp do Usługi lub korzysta z niej, stosownie do przypadku.
					</p>
				</li>
			</ul>
			<h2>Gromadzenie i wykorzystywanie Twoich danych osobowych</h2>
			<h3>Rodzaje gromadzonych danych</h3>
			<h4>Dane osobiste</h4>
			<p>
				Podczas korzystania z naszej Usługi możemy poprosić Cię o podanie nam
				niektórych danych osobowych, które można wykorzystać do kontaktu lub
				zidentyfikowaania Twojej osoby. Dane osobowe mogą obejmować, są
				ograniczone do:
			</p>
			<ul>
				<li>Dane dotyczące użytkowania</li>
			</ul>
			<h4>Dane dotyczące użytkowania</h4>
			<p>
				Dane o użytkowaniu są zbierane automatycznie podczas korzystania z
				Usługi.
			</p>
			<p>
				Dane dotyczące użytkowania mogą obejmować takie informacje jak Adres
				Twojego Urządzenia (np. adres IP), typ przeglądarki, wersję
				przeglądarki, strony naszego Serwisu, które odwiedzasz, czas i data
				Twojej wizyty, czas spędzony na stronie, unikalne identyfikatory
				urządzeń i inne dane diagnostyczne.
			</p>
			<p>
				Kiedy uzyskujesz dostęp do Usługi za pomocą urządzenia mobilnego, możemy
				automatycznie zbierają pewne informacje, w tym między innymi rodzaj
				urządzenia mobilnego z którego korzystasz, unikalny identyfikator
				Twojego urządzenia mobilnego, Adres IP Twojego urządzenia mobilnego,
				Twój mobilny system operacyjny, typ mobilnej przeglądarki internetowej z
				której korzystasz, i inne dane diagnostyczne.
			</p>
			<p>
				Możemy również zbierać informacje, które Twoja przeglądarka wysyła za
				każdym razem, gdy Ty odwiedzasz naszą Usługę lub gdy uzyskujesz dostęp
				do Usługi za pomocą telefonu komórkowego urządzenie.
			</p>
			<h4>Technologie śledzenia i pliki cookie</h4>
			<p>
				Do śledzenia aktywności używamy plików cookie i podobnych technologii
				śledzenia w naszym Serwisie, które przechowują określone informacje.
				Stosowane technologie śledzenia to sygnały nawigacyjne, znaczniki i
				skrypty służące do gromadzenia i śledzenia informacji mające na celu
				ulepszać i analizować nasze usługi. Technologie, które wykorzystujemy
				mogą obejmować:
			</p>
			<ul>
				<li>
					<strong>Pliki cookie lub pliki cookie przeglądarki.</strong> Ciastko
					to mały plik umieszczany na Twoim urządzeniu. Możesz poinstruować
					swoją przeglądarkę aby odrzucić wszystkie pliki cookie lub wskazać,
					kiedy plik cookie jest wysyłany. Jeżeli jednak nie zaakceptujesz
					plików cookie, korzystanie z niektórych części naszego Serwisu może
					nie być możliwe.
				</li>
				<li>
					<strong>Sygnały nawigacyjne w sieci Web.</strong> Niektóre sekcje
					naszych Usług i nasze e-maile mogą zawierać małe pliki elektroniczne
					zwane sygnalizatory WWW (nazywane również przezroczystymi gifami,
					znacznikami pikselowymi i jednopikselowe gify), które pozwalają Firmie
					na przykład liczyć użytkowników, którzy odwiedzili te strony lub
					otworzyli wiadomość e-mail dla statystyki stron internetowych (na
					przykład rejestrowanie popularności a określonej sekcji i sprawdzenie
					integralności systemu i serwera).
				</li>
			</ul>
			<p>
				Pliki cookie mogą być „trwałe” lub „Sesyjne”. Trwałe pliki cookie
				pozostają na Twoim komputerze osobistym lub urządzeniu mobilnym gdy
				przejdziesz w tryb offline, natomiast sesyjne pliki cookie zostaną
				usunięte natychmiast po tym, jak Ty zamkniesz przeglądarkę internetową.
			</p>
			<p>
				Używamy zarówno sesyjnych, jak i trwałych plików cookie do określonych
				celów poniżej:
			</p>
			<ul>
				<li>
					<p>
						<strong>Niezbędne pliki cookie</strong>
					</p>
					<p>Sesyjny plik cookie</p>
					<p>Administrowany przez: Nas</p>
					<p>
						Cel: Te pliki cookie są niezbędne do świadczenia usług dostępnych za
						pośrednictwem Serwisu i umożliwienie Państwu korzystania z
						niektórych jego elementów. Pomagają uwierzytelniać użytkowników i
						zapobiegać nielegalnemu użyciu kont użytkowników. Bez tych plików
						cookie usługi nie mogą zostać dostarczone, używamy tych plików
						cookie wyłącznie w celu świadczenia usług.
					</p>
				</li>
				<li>
					<p>
						<strong>
							Polityka plików cookie / Powiadomienie Akceptacja plików cookie
						</strong>
					</p>
					<p>Typ: trwałe pliki cookie</p>
					<p>Administrowany przez: Nas</p>
					<p>
						Cel: Te pliki cookie identyfikują, czy użytkownicy zgodzili się na
						użycie pliki cookies w Serwisie.
					</p>
				</li>
				<li>
					<p>
						<strong>Funkcjonalne pliki cookie</strong>
					</p>
					<p>Typ: trwałe pliki cookie</p>
					<p>Administrowany przez: Nas</p>
					<p>
						Cel: Te pliki cookie pozwalają nam zapamiętać wybory, których
						dokonujesz, kiedy Korzystasz z Serwisu, np. zapamiętujesz swoje dane
						do logowania lub preferencje językowe.
					</p>
				</li>
			</ul>
			<p>
				Aby uzyskać więcej informacji na temat używanych przez nas plików cookie
				i wyborów dotyczących plików cookie, prosimy zapoznać się z naszą
				Polityką dotyczącą plików cookie lub sekcją dotyczącą plików cookie w
				naszej witrynie Polityka prywatności.
			</p>
			<h3>Wykorzystanie Twoich danych osobowych</h3>
			<p>Spółka może wykorzystywać Dane Osobowe w następujących celach:</p>
			<ul>
				<li>
					<p>
						<strong>Aby świadczyć i utrzymywać naszą Usługę</strong>, w tym
						monitorować korzystanie z naszej Usługi.
					</p>
				</li>
				<li>
					<p>
						<strong>Aby zarządzać Twoim kontem:</strong> jako użytkownik
						Serwisu. Dane osobowe, które podajesz mogą zapewnić Ci dostęp do
						różnych funkcjonalności Usługi.
					</p>
				</li>
				<li>
					<p>
						<strong>W celu wykonania umowy:</strong> Rozwój, dotrzymanie i
						wykonanie umowy kupna-sprzedaży produktów, przedmiotów lub usług,
						które zakupiłeś lub jakichkolwiek innych umowę z Nami za
						pośrednictwem Usługi.
					</p>
				</li>
				<li>
					<p>
						<strong>Do kontaktu z Tobą:</strong>
						Aby skontaktować się z Tobą drogą e-mailową, telefoniczną, SMS-ową
						lub inną formą komunikacji elektronicznej komunikację, taką jak push
						aplikacji mobilnej powiadomienia dotyczące aktualizacji lub
						komunikaty informacyjne związanych z funkcjonalnościami, produktami
						lub zakontraktowanymi usługami, w tym aktualizacje zabezpieczeń,
						jeśli jest to konieczne lub uzasadnione jest ich wdrożenie.
					</p>
				</li>
				<li>
					<p>
						<strong>Aby zapewnić Ci</strong> informację z aktualnościami,
						ofertami specjalnymi i ogólne informacje o innych towarach, usługach
						i wydarzeniach, które udostępniamy.
					</p>
				</li>
				<li>
					<p>
						<strong>By odpowiadać na Twoje zapytania:</strong> Aby odpowiadać i
						zarządzać Twoimi zapytaniami.
					</p>
				</li>
				<li>
					<p>
						<strong>Do transferów biznesowych:</strong> Możemy wykorzystać Twoje
						informacje potrzebne do oceny lub przeprowadzenia fuzji, zbycia,
						restrukturyzacji, reorganizacji, rozwiązania lub innej sprzedaży,
						przeniesienia części lub całości naszych aktywów, niezależnie od
						tego, czy będziemy kontynuować działalność, czy też w ramach
						upadłości, likwidacji lub podobnego postępowania, w którym Dane
						osobowe przechowywane przez nas na temat użytkowników naszych Usług
						znajdują się wśród aktywów przeniesiony.
					</p>
				</li>
				<li>
					<p>
						<strong>Do innych celów:</strong>
						Możemy wykorzystywać Twoje dane do innych celów, takie jak analiza
						danych, identyfikacja trendów użytkowania, określania skuteczności
						naszych akcji promocyjnych oraz do oceny naszych Usług.
					</p>
				</li>
			</ul>
			<p>Możemy udostępniać Twoje dane osobowe w następujących sytuacjach:</p>
			<ul>
				<li>
					<strong>Dostawcom usług:</strong> Możemy udostępnić Twoje dane osobowe
					informacje Usługodawcom w celu monitorowania i analizowania naszych
					Serwisów.
				</li>
				<li>
					<strong>Do transferów biznesowych:</strong> Możemy udostępniać lub
					przekazywać Twoje dane dane osobowe w związku z negocjacjami lub w
					trakcie negocjacji, fuzji, sprzedaży aktywów Spółki, finansowania lub
					przejęcia całości lub część naszej działalności innej firmie.
				</li>
				<li>
					<strong>Z partnerami:</strong> Możemy udostępniać Twoje dane naszym
					podmiotom stowarzyszonym, w takim przypadku będziemy wymagać od tych
					podmiotów stowarzyszonych honorowania niniejszą Politykę prywatności.
					Do podmiotów stowarzyszonych zalicza się naszą spółkę-matkę i dowolne
					inne inne spółki zależne, partnerzy joint venture lub inne firmy,
					które są pod naszą kontrolą.
				</li>
				<li>
					<strong>Z partnerami biznesowymi:</strong> Możemy udostępniać Twoje
					informacje z naszymi partnerami biznesowymi w celu zaoferowania
					Państwu określonych produktów, usług lub promocji.
				</li>
				<li>
					<strong>Za Twoją zgodą</strong>: Możemy ujawnić Twoje dane osobowe i
					informacje o Tobie w innym celu za Twoją zgodą.
				</li>
			</ul>
			<h3>Przechowywanie Twoich danych osobowych</h3>
			<p>
				Firma będzie przechowywać Twoje dane osobowe tylko tak długo, jak długo
				są niezbędne do celów określonych w niniejszej Polityce Prywatności.
				Będziemy przechowywać i wykorzystywać Twoje Dane Osobowe w zakresie
				niezbędnym do przestrzegania naszych zobowiązań prawnych (na przykład,
				jeśli jesteśmy zobowiązani do przechowywania Twoich danych w celu
				zapewnienia zgodności z obowiązującymi przepisami).
			</p>
			<p>
				Firma będzie również przechowywać Dane o użytkowaniu do celów analizy
				wewnętrznej. Dane dotyczące użytkowania są zazwyczaj przechowywane przez
				krótszy okres czasu, z wyjątkiem: gdy dane te są wykorzystywane do
				wzmocnienia bezpieczeństwa lub poprawy funkcjonalności Naszego Serwisu
				lub jesteśmy prawnie zobowiązani do ich zachowania.
			</p>
			<h3>Przeniesienie Twoich danych osobowych</h3>
			<p>
				Twoje dane, w tym Dane Osobowe, są przetwarzane w biurach operacyjnych
				Spółki oraz we wszystkich innych miejscach, gdzie znajdują się strony
				zaangażowane w przetwarzanie. Oznacza to, że te informacje mogą być
				przesyłane do komputerów i przechowywane na nich. Mogą być zlokalizowane
				poza Twoim krajem lub pod inną jurysdykcją prawną, w której przepisy
				dotyczące ochrony danych mogą różnić się od przepisów obowiązujących w
				Twoim kraju.
			</p>
			<p>
				Twoja zgoda na niniejszą Politykę prywatności, oznacza Twoją zgodę na
				ten transfer.
			</p>
			<p>
				Firma podejmie wszelkie niezbędne kroki, aby zapewnić, że Twoje dane są
				traktowane bezpiecznie i zgodnie z niniejszą Polityką prywatności oraz
				żadne przekazanie Twoich danych osobowych nie będzie miało miejsca.
			</p>
			<h3>Usuń swoje dane osobowe</h3>
			<p>
				Masz prawo usunąć lub poprosić o pomoc w usunięciu Danych osobowych,
				których zebraliśmy na Twój temat.
			</p>
			<p>
				Możesz aktualizować, zmieniać lub usuwać swoje dane przypisane do
				Twojego konta w dowolnym momencie, jeśli je posiadasz. Możesz
				skontaktować się z nami, aby poprosić o dostęp do danych osobowych, ich
				poprawienie lub usunięcie.
			</p>
			<p>
				Należy jednak pamiętać, że być może będziemy musieli zachować pewne
				informacje gdy mamy do tego prawny obowiązek lub podstawę prawną.
			</p>
			<h3>Ujawnienie Twoich danych osobowych</h3>
			<h4>Transakcje biznesowe</h4>
			<p>
				Jeśli Spółka jest zaangażowana w fuzję, przejęcie lub sprzedaż aktywów,
				Twoje Dane Osobowe mogą być przekazywane. Powiadomimy Cię o tym. Dane
				Osobowe przekazywane podlegają innej Polityce Prywatności.
			</p>
			<h4>Egzekucja prawa</h4>
			<p>
				W pewnych okolicznościach Spółka może być zobowiązana do ujawnienia
				Twoich danych osobowych, jeśli jest to wymagane przez prawo lub w
				odpowiedzi na ważne wnioski organów publicznych (np. sądu lub agencji
				rządowej).
			</p>
			<h4>Inne wymagania prawne</h4>
			<p>
				Spółka może ujawnić Twoje Dane Osobowe w dobrej wierze że takie
				działanie jest konieczne, aby:
			</p>
			<ul>
				<li>Wypełnij obowiązek prawny</li>
				<li>Chronić i bronić praw lub własności Spółki</li>
				<li>Zapobiegaj potencjalnym nadużyciom w związku z Pracą</li>
				<li>
					Chronić bezpieczeństwo osobiste Użytkowników Serwisu lub społeczeństwa
				</li>
				<li>Chronić przed odpowiedzialnością prawną</li>
			</ul>
			<h3>Bezpieczeństwo Twoich danych osobowych</h3>
			<p>
				Bezpieczeństwo Twoich danych osobowych jest dla nas ważne, ich
				przechowywanie jest w 100% bezpieczne. Chociaż staramy się używać
				akceptowalnych komercyjnie środków ochrony Twoich Danych Osobowych, nie
				możemy zagwarantować ich bezwzględnego bezpieczeństwa.
			</p>
			<h2>Linki do innych stron internetowych</h2>
			<p>
				Nasz Serwis może zawierać łącza do innych stron internetowych, które nie
				są obsługiwane przez Nas. Jeśli klikniesz na link strony trzeciej,
				zostaniesz do niego przekierowany. Zdecydowanie zalecamy zapoznanie się
				z Polityką Prywatności każdej odwiedzanej witryny.
			</p>
			<p>
				Nie mamy kontroli i nie ponosimy odpowiedzialności za treść, polityki
				prywatności lub praktyki witryn lub usług stron trzecich.
			</p>
			<h2>Zmiany w niniejszej Polityce Prywatności</h2>
			<p>
				Od czasu do czasu możemy aktualizować naszą Politykę prywatności.
				Powiadomimy Cię o wszelkich zmianach, zamieszczając nową Politykę
				prywatności na tej stronie.
			</p>
			<p>
				Poinformujemy Cię o tym za pośrednictwem poczty elektronicznej i/lub
				widocznego powiadomienia w naszym Serwisie, zanim zmiana zacznie
				obowiązywać.
			</p>
			<p>
				Zaleca się okresowe przeglądanie niniejszej Polityki prywatności pod
				kątem wszelkich zmiany. Zmiany w niniejszej Polityce Prywatności
				obowiązują wtedy, gdy zostaną wprowadzone zamieszczone na tej stronie.
			</p>
			<h2>Skontaktuj się z nami</h2>
			<p>
				Jeśli masz jakiekolwiek pytania dotyczące niniejszej Polityki
				prywatności, możesz się z nami skontaktować:
			</p>
			<ul>
				<li>Przez email: hello@kodik.io</li>
			</ul>
			<Link to='/' className='cookie-link'>
				<span>Wróć </span> <FiArrowUpRight />
			</Link>
		</div>
	);
}

export default Cookie;
