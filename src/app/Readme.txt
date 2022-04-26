Ho effettuato una chiamata GET importando i relativi Service e tramite il meccanismo della Dependency injection e al service creato da me,
mi sono fatto restituire un oggetto Observable contente le GIF di tendenza e rilevanti, successivamengte tramite un debug ho visto che la
risposta contentente i dati erano un json con array annidati, quindi ho passato una proprietà d'appoggio per prendere i dati e tramite la
dot notation sono entrato nell'array che successivamente grazie alla direttiva strutturale *ngFor ho creato dei contenitori per quanti dati
erano contenuti. 

Successivamente, ho effettuato un'altra chiamata con il metodo GET per recuperare i dati tramite un input, a secondo del nome che l'utente
digita e poi clicca il bottone cerca, sarà in grado di visualizzare le immagini inerenti al testo digitato. Sono riuscito a ricavare il testo
digitato dall'utente tramite la template reference variable, anche in questo caso mi sono fatto restituire un'oggetto Observable.

Quando si parla di request Get/Post o di altri metodi, i services sono di fondamentale importanza perchè permette agli altri componenti
di utilizzare i suoi metodi, così abbiamo anche dal punto di vista visivo più manutenzione del codice. Ricordiamoci sempre di importare i
service HttpClient, HttpParams e Observable. Inoltre nel registro della nostra applicazione Angular (app.module.ts) dobbiamo importare 
HttpClientModule e FormsModule.

In questo progetto ho anche sfruttato il routing di Angular, esso è specializzato per le Single page application, nell'app-routing.module.ts
ho inserito tutte le rotte relative ai component che ho creato, per far funzionare il routing di Angular bisogna anche mettere il tag 
<router-outlet> </router-outlet> che sarà la zona dove verranno iniettati i component.. in sintesi il template HTML, ho anche inserito il
path per le rotte non permesse.

Ho utilizzato il sistema a griglie GRID per mostrare le GIF e non FLEXBOX perchè con grid posso agire sia sulle colonne che sulle righe,
in generale ho utilizzato sia Grid che Flexbox.

Ho utilizzato il preprocessore SASS perchè al tradizionale vanilla css è molto più pulito a livello visivo, personalmente utilizzo i 
file partials per avere un ordine più ampio e manutenzione codice più alta.


Comandi Angular usati;

1) ng new nomeApplicazione //nuova app Angular
2) ng g component nomeComponente //creazione nuovo Componente
3) ng g service services/nomeService //creazione nuovo Service
4) ng serve --open // apro l'app in un server in modo da vederla visivamente